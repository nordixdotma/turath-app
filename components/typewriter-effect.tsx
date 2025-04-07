"use client"

import { useState, useEffect, useCallback } from "react"
import { useLanguage } from "@/hooks/use-language"

interface TypewriterProps {
  words: string[]
  loop?: boolean
  typeSpeed?: number
  deleteSpeed?: number
  delaySpeed?: number
}

interface CursorProps {
  cursorStyle?: string
  cursorColor?: string
}

export const useTypewriter = ({
  words = ["Hello World!", "This is", "Typewriter Effect"],
  loop = true,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
}: TypewriterProps): [string] => {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isTyping, setIsTyping] = useState(true)
  const { language } = useLanguage()

  // Adjust typing direction based on language
  const isRTL = language === "ar"

  const handleTyping = useCallback(() => {
    const currentWord = words[wordIndex]
    const shouldDelete = isDeleting

    setText((prev) => {
      if (shouldDelete) {
        return currentWord.substring(0, prev.length - 1)
      } else {
        return currentWord.substring(0, prev.length + 1)
      }
    })

    // Handle deletion/typing logic
    if (!shouldDelete && text === currentWord) {
      // End of word, prepare for deletion after delay
      setTimeout(() => {
        setIsDeleting(true)
        setIsTyping(true)
      }, delaySpeed)
      setIsTyping(false)
    } else if (shouldDelete && text === "") {
      // Finished deleting, move to next word
      setIsDeleting(false)
      setIsTyping(true)
      setWordIndex((prev) => {
        if (loop) {
          return (prev + 1) % words.length
        }
        // If no loop and we're at the last word, just stop
        return prev < words.length - 1 ? prev + 1 : prev
      })
    }
  }, [text, isDeleting, wordIndex, words, loop, delaySpeed])

  useEffect(() => {
    if (!isTyping) return

    const timer = setTimeout(
      () => {
        handleTyping()
      },
      isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(timer)
  }, [handleTyping, isDeleting, isTyping, deleteSpeed, typeSpeed])

  return [text]
}

export const Cursor = ({ cursorStyle = "|", cursorColor = "currentColor" }: CursorProps) => {
  const [visible, setVisible] = useState(true)
  const { language } = useLanguage()

  // Adjust cursor position based on language
  const isRTL = language === "ar"

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      style={{
        color: cursorColor,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.1s",
        fontWeight: "bold",
        marginLeft: isRTL ? "0" : "2px",
        marginRight: isRTL ? "2px" : "0",
      }}
    >
      {cursorStyle}
    </span>
  )
}


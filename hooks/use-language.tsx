"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { translations } from "@/lib/translations"

type Language = "en" | "fr" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: string
}

// Create context with default values to prevent the "must be used within Provider" error
const defaultContextValue: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
  dir: "ltr",
}

const LanguageContext = createContext<LanguageContextType>(defaultContextValue)

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    // Add a safety check to prevent accessing undefined properties
    return translations[language]?.[key] || translations.en?.[key] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  const value = {
    language,
    setLanguage,
    t,
    dir,
  }

  return (
    <LanguageContext.Provider value={value}>
      <div
        dir={dir}
        className={`${language === "ar" ? "font-arabic" : ""} transition-all duration-300 w-full`}
        style={{
          colorScheme: language === "ar" ? "light" : undefined,
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export default LanguageProvider


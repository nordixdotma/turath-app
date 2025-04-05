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

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    // Add a safety check to prevent accessing undefined properties
    return translations[language]?.[key] || translations.en?.[key] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      <div
        dir={dir}
        className={`${language === "ar" ? "font-arabic" : ""} transition-all duration-300`}
        style={{
          colorScheme: language === "ar" ? "light" : undefined,
        }}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  )
}


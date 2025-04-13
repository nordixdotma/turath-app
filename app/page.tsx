"use client"

import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"

// Lazy load non-critical sections
const BoardSection = dynamic(() => import("@/components/board-section"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
})
const HistoricalPlacesSection = dynamic(() => import("@/components/historical-places-section"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
})
const LocationSection = dynamic(() => import("@/components/location-section"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
})
const PartnersSection = dynamic(() => import("@/components/partners-section"), {
  loading: () => <div className="h-96 flex items-center justify-center">Loading...</div>,
})

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <HistoricalPlacesSection />
      <LocationSection />
      <BoardSection />
      <PartnersSection />
    </div>
  )
}

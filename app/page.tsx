"use client"

import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import BoardSection from "@/components/board-section"
import HistoricalPlacesSection from "@/components/historical-places-section"
import LocationSection from "@/components/location-section"
import PartnersSection from "@/components/partners-section"

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


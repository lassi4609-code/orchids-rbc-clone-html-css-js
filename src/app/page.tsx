"use client";

import Header from "@/components/sections/header";
import HeroSlider from "@/components/sections/hero-slider";
import MeetPlayers from "@/components/sections/meet-players";
import AboutUs from "@/components/sections/about-us";
import JourneyInfographic from "@/components/sections/journey-infographic";
import EventHighlights from "@/components/sections/event-highlights";
import LeagueAdvantages from "@/components/sections/league-advantages";
import ImageGallery from "@/components/sections/image-gallery";
import VideoGallery from "@/components/sections/video-gallery";
import SponsorsSection from "@/components/sections/sponsors";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSlider />
      <MeetPlayers />
      <AboutUs />
      <JourneyInfographic />
      <EventHighlights />
      <LeagueAdvantages />
      <ImageGallery />
      <VideoGallery />
      <SponsorsSection />
      <Footer />
    </main>
  );
}

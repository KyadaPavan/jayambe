"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { BridgingText } from "@/components/about/BridgingText";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutProblem } from "@/components/about/AboutProblem";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutFacts } from "@/components/about/AboutFacts";
import { AboutCTA } from "@/components/about/AboutCTA";

export default function AboutUs() {
  return (
    <main className="w-full bg-[var(--color-cream)] selection:bg-[var(--color-amber)] selection:text-white">
      <AboutHero />
      <AboutStory />
      <BridgingText text="CONSISTENT QUALITY" direction={1} />
      <AboutProblem />
      <AboutValues />
      <BridgingText text="STRENGTH IN EVERY LAYER" direction={-1} />
      <AboutLeadership />
      <AboutFacts />
      <AboutCTA />
    </main>
  );
}

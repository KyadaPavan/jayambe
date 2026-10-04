"use client";

import { Hero } from "@/components/home/Hero";
import { ScrollingText } from "@/components/home/ScrollingText";
import { QuickIntro } from "@/components/home/QuickIntro";
import { FourPromises } from "@/components/home/FourPromises";
import { Applications } from "@/components/home/Applications";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { OrderingSteps } from "@/components/home/OrderingSteps";
import { motion } from "framer-motion";
import { DealerCTA } from "@/components/home/DealerCTA";

export default function Home() {
  return (
    <div className="flex flex-col bg-[var(--color-cream)]">
      <Hero />
      <ScrollingText />
      <QuickIntro />
      <FourPromises />
      <Applications />
      <WhoWeServe />
      <OrderingSteps />
      <DealerCTA />
    </div>
  );
}

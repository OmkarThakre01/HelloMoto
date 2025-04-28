"use client";

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Grid />
    </main>
  );
}

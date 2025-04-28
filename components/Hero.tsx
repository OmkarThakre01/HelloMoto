"use client";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/moving-border";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased">
      {/* Background Effect */}
      <Spotlight
        className="absolute -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
            <TextGenerateEffect words="Crafting Digital Experiences" />
          </h1>
          
          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            Transforming ideas into exceptional digital solutions. We build innovative
            products that drive growth and create lasting impact.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              borderRadius="1.75rem"
              className="bg-white text-black hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/Button";
import { TbHandClick } from "react-icons/tb";
import { BackgroundBeamsWithCollision } from "./ui/BackgroundBeamsWithCollision";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased lg:top-[10px] sm:top-[-100px] md:top-[-100px] ">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeamsWithCollision className="h-full w-full">
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-4 lg:px-4">
            <div className="max-w-7xl mx-auto text-center space-y-4 md:space-y-4">
              
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-4 lg:px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4 md:space-y-4">
          
          {/* Main Heading */}
          <h1 className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
            className="text-center text-white text-5xl md:text-5xl lg:text-6xl"
            words="Transforming ideas into stunning digital experiences" />
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Hi, I'm Omkar.<br />
            Web & React Native Developer | UI/UX Designer
          </p>

          {/* CTA Button */}
          <div className="pt-4 md:pt-6">
            <a href="#about" aria-label="View my work">
              <Button
                title="View My Work"
                icon={<TbHandClick className="mr-2" size={20} />}
                position="left"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

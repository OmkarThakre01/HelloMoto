import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/Button";
import { TbHandClick } from "react-icons/tb";
import { Navbar } from "@/components/Navbar";

const Hero: React.FC = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
      <Navbar/>
      </div>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-[#AFDDFF]" />
      </div>
      <div>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw] fill-[#d6ffaf]" />
      </div>
      <div>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] fill-[#afffd3]" />
      </div>

      {/* Dotted background with lower opacity */}
      <div className="absolute flex h-[50rem] bg-black left-0 top-0 w-full items-center justify-center">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(rgba(175,255,211,0.2)_1.8px,transparent_0px)]"
          )}
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-white text-5xl md:text-5xl lg:text-6xl"
            words="Transforming ideas into stunning digital experiences"
          />
          <p className="text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-center">
            Hi, I'm Omkar. I'm a Web, React Native Developer and UI/UX Designer.
          </p>
          <a href="#about">
            <Button
              title="View My Work"
              icon={<TbHandClick size={24} />}
              position="left"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

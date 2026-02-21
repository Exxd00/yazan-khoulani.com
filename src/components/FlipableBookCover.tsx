"use client";

import { useState } from "react";
import Image from "next/image";

export default function FlipableBookCover() {
  const [showBack, setShowBack] = useState(false);

  const frontCover = "https://ugc.same-assets.com/lTptJvPdnyGqNZCuBQ63Au3r8hu_7tDA.jpeg";
  const backCover = "https://ugc.same-assets.com/xKEZdutj5NoVgUp0GYV4dTt7fBA-HgNV.jpeg";

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-revolution-green/10 dark:bg-revolution-green/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
      <div className="relative bg-gradient-to-br from-revolution-green/5 to-revolution-red/5 dark:from-revolution-green/10 dark:to-revolution-red/10 p-4 md:p-8 rounded-2xl shadow-2xl hover-lift">
        <div
          className="relative w-64 md:w-80 h-auto aspect-[3/4.5] rounded-lg shadow-xl overflow-hidden glow cursor-pointer perspective-1000"
          onClick={() => setShowBack(!showBack)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
              showBack ? "rotate-y-180" : ""
            }`}
          >
            {/* Front Cover */}
            <div className="absolute inset-0 backface-hidden">
              <Image
                src={frontCover}
                alt="غلاف رواية في حبّك ثار الوطن - الوجه الأمامي"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 256px, 320px"
                unoptimized
              />
            </div>
            {/* Back Cover */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <Image
                src={backCover}
                alt="غلاف رواية في حبّك ثار الوطن - الوجه الخلفي"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
                unoptimized
              />
            </div>
          </div>
          {/* Click hint */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            اضغط للتبديل
          </div>
        </div>
      </div>
      {/* Floating decoration */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-revolution-red/20 rounded-full animate-float" />
      <div
        className="absolute -bottom-6 -left-6 w-12 h-12 bg-revolution-green/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 -right-8 w-6 h-6 bg-revolution-green/30 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      />
    </div>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import { ZoneData, ZONE_TABLE } from "@/lib/zones";
import { useLocale, uiStrings } from "@/lib/i18n";

type JourneyMapProps = {
  currentZone: ZoneData;
};

export default function JourneyMap({ currentZone }: JourneyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeNodeRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const t = uiStrings[locale];

  useEffect(() => {
    // Scroll to the active node automatically so it's centered on mobile
    if (containerRef.current && activeNodeRef.current) {
      const container = containerRef.current;
      const activeNode = activeNodeRef.current;
      
      const scrollLeft =
        activeNode.offsetLeft -
        container.offsetWidth / 2 +
        activeNode.offsetWidth / 2;
        
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [currentZone.zone]);

  return (
    <div className="animate-fade-in-up animate-delay-200 glass-card p-6 relative overflow-hidden">
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
        {t.journeyMap}
      </p>

      {/* 
        Scrollable container for mobile. 
        Hide scrollbar using CSS classes (custom scrollbar hiding can be added if needed, 
        but standard overflow-x-auto works)
      */}
      <div 
        ref={containerRef}
        className="w-full overflow-x-auto pb-4 pt-2 -mx-2 px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex items-center min-w-max relative px-4">
          
          {/* Background Line Connector */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-0.5 bg-white/10 z-0" />

          {ZONE_TABLE.map((zone, index) => {
            const isActive = zone.zone === currentZone.zone;
            const isPassed = index < ZONE_TABLE.findIndex(z => z.zone === currentZone.zone);

            return (
              <div 
                key={zone.zone} 
                className="relative z-10 flex flex-col items-center justify-center w-16 group"
                ref={isActive ? activeNodeRef : null}
              >
                {/* Node Circle */}
                <div 
                  className={`
                    w-4 h-4 rounded-full border-2 transition-all duration-500 mb-2
                    ${isActive ? "scale-150 shadow-[0_0_15px_rgba(255,255,255,0.5)] bg-current" : "bg-slate-900"}
                  `}
                  style={{ 
                    borderColor: isActive ? zone.hexColor : (isPassed ? zone.hexColor + "80" : "#334155"),
                    color: isActive ? zone.hexColor : undefined,
                    opacity: isActive ? 1 : (isPassed ? 0.7 : 0.4)
                  }}
                />
                
                {/* Score Number inside Node if Active */}
                {isActive && (
                  <div className="absolute top-[3px] text-[8px] font-black text-black z-20 pointer-events-none">
                  </div>
                )}

                {/* Zone Label */}
                <p 
                  className={`
                    text-[10px] font-bold uppercase tracking-wider text-center transition-all duration-500
                    ${isActive ? "opacity-100" : "opacity-30"}
                  `}
                  style={{ color: isActive ? zone.hexColor : "#94a3b8" }}
                >
                  {zone.zone}
                </p>
                
                {/* Score Range label (Optional, maybe too crowded) */}
                {isActive && (
                  <p className="text-[8px] text-white/50 mt-1 absolute -bottom-4 w-20 text-center">
                    {zone.minScore}-{zone.maxScore}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </div>
  );
}

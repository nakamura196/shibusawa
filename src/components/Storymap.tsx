"use client";

import { useEffect, useRef, useCallback } from "react";
import Script from "next/script";

interface storymapProps {
  date: string;
}

export default function Storymap({ date }: storymapProps) {
  const storymapRef = useRef<InstanceType<
    typeof window.KLStoryMap.StoryMap
  > | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const initializestorymap = useCallback(() => {
    if (window.KLStoryMap) {
      const storymap_data = `/data/storymap/date/${date}.json`;
      const storymap_options = {
        language: "ja",
        timenav_position: "bottom",
      };

      // 古いタイムライン要素がある場合は削除
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // containerRef内をクリア
        const newstorymapElement = document.createElement("div");
        newstorymapElement.id = "storymap-embed";
        newstorymapElement.style.width = "100%";
        newstorymapElement.style.height = "70vh";
        containerRef.current.appendChild(newstorymapElement);
      }

      // 新しいタイムラインを生成し、参照を保存
      storymapRef.current = new window.KLStoryMap.StoryMap(
        "storymap-embed",
        storymap_data,
        storymap_options
      );
    }
  }, [date]);

  useEffect(() => {
    initializestorymap();
  }, [initializestorymap]);

  return (
    <div>
      <Script
        src="https://cdn.knightlab.com/libs/storymapjs/latest/js/storymap-min.js"
        strategy="afterInteractive"
        onLoad={initializestorymap}
      />
      <link
        rel="stylesheet"
        href="https://cdn.knightlab.com/libs/storymapjs/latest/css/storymap.css"
      />
      <div ref={containerRef}></div>
    </div>
  );
}

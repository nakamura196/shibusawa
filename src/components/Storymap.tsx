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

  const initializeStorymap = useCallback(() => {
    if (window.KLStoryMap) {
      const storymap_data = `/data/storymap/date/${date}.json`;
      const storymap_options = {
        language: "ja",
        timenav_position: "bottom",
      };

      // 古いタイムライン要素がある場合は削除
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // containerRef内をクリア
        const newStorymapElement = document.createElement("div");
        newStorymapElement.id = "storymap-embed";
        newStorymapElement.style.width = "100%";
        newStorymapElement.style.height = "70vh";
        containerRef.current.appendChild(newStorymapElement);
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
    initializeStorymap();
  }, [initializeStorymap]);

  return (
    <div>
      <Script
        src="https://cdn.knightlab.com/libs/storymapjs/latest/js/storymap-min.js"
        strategy="afterInteractive"
        onLoad={initializeStorymap}
      />
      <link
        rel="stylesheet"
        href="https://cdn.knightlab.com/libs/storymapjs/latest/css/storymap.css"
      />
      <div ref={containerRef}></div>
    </div>
  );
}

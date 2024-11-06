"use client";

import { useEffect, useRef, useCallback } from "react";
import Script from "next/script";

interface TimelineProps {
  year: string;
}

export default function Timeline({ year }: TimelineProps) {
  const timelineRef = useRef<InstanceType<typeof window.TL.Timeline> | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const initializeTimeline = useCallback(() => {
    if (window.TL) {
      const timeline_data = `/data/timeline/year/${year}.json`;
      const timeline_options = {
        language: "ja",
        timenav_position: "bottom",
      };

      // 古いタイムライン要素がある場合は削除
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // containerRef内をクリア
        const newTimelineElement = document.createElement("div");
        newTimelineElement.id = "timeline-embed";
        newTimelineElement.style.width = "100%";
        newTimelineElement.style.height = "80vh";
        containerRef.current.appendChild(newTimelineElement);
      }

      // 新しいタイムラインを生成し、参照を保存
      timelineRef.current = new window.TL.Timeline(
        "timeline-embed",
        timeline_data,
        timeline_options
      );
    }
  }, [year]);

  useEffect(() => {
    initializeTimeline();
  }, [initializeTimeline]);

  return (
    <div>
      <Script
        src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"
        strategy="afterInteractive"
        onLoad={initializeTimeline}
      />
      <link
        rel="stylesheet"
        href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css"
      />
      <div ref={containerRef}></div>
    </div>
  );
}

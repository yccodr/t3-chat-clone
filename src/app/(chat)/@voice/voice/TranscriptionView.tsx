import useCombinedTranscriptions from "@/lib/hooks/use-combined-transcriptions";
import * as React from "react";

export default function TranscriptionView() {
  const combinedTranscriptions = useCombinedTranscriptions();
  const containerRef = React.useRef<HTMLDivElement>(null);

  // scroll to bottom when new transcription is added
  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [combinedTranscriptions]);

  return (
    <div className="relative h-[200px] w-[512px] max-w-[90vw] mx-auto bg-transparent">
      {/* Fade-out gradient mask */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/30 to-transparent z-10 pointer-events-none" />

      {/* Scrollable content */}
      <div
        ref={containerRef}
        className="h-full flex flex-col gap-2 overflow-y-auto px-4 py-8"
      >
        {combinedTranscriptions.map((segment) => (
          <div
            id={segment.id}
            key={segment.id}
            className={
              segment.role === "assistant"
                ? "p-2 self-start fit-content"
                : "bg-primary text-white rounded-md p-2 self-end fit-content"
            }
          >
            {segment.text}
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: () => void;
};

export default function VideoAdModal({ isOpen, onClose, onComplete }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {}); // autoplay fallback
    }
  }, [isOpen]);

  const handleEnded = () => {
    onClose();
    onComplete?.();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center px-4">
      <div className="relative w-full max-w-lg bg-black rounded-xl overflow-hidden shadow-2xl">
        {/* <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 z-10"
        >
          ✕
        </button> */}

        <video
          ref={videoRef}
          controls
          onEnded={handleEnded}
          className="w-full h-auto"
        >
          <source src="/sample-ad.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

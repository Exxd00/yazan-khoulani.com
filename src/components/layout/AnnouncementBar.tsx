"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dismissed = localStorage.getItem("announcement-dismissed");
    if (dismissed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("announcement-dismissed", "true");
  };

  if (!mounted || !isVisible) return null;

  return (
    <div className="bg-revolution-green text-white py-3 px-4 relative">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <p className="text-sm font-medium">
          متوفر الآن — اختر الشحن: أوروبا أو الدول العربية
        </p>
        <div className="flex gap-2">
          <Link
            href="/where-to-buy#europe"
            className="bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded text-xs font-bold transition-colors"
          >
            أوروبا
          </Link>
          <Link
            href="/where-to-buy#arab"
            className="bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded text-xs font-bold transition-colors"
          >
            الدول العربية
          </Link>
        </div>
      </div>
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="إغلاق"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}

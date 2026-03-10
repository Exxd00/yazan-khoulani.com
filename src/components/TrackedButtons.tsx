"use client";

import { Button } from "@/components/ui/button";
import { trackPurchaseClick, trackSocialClick } from "@/lib/analytics";
import { useCallback } from "react";

interface PurchaseButtonProps {
  region: "europe" | "arab";
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TrackedPurchaseButton({
  region,
  href,
  children,
  className,
}: PurchaseButtonProps) {
  const handleClick = useCallback(() => {
    // Track the click but don't prevent default - let the anchor work naturally
    try {
      trackPurchaseClick(region);
    } catch (err) {
      console.error("Tracking error:", err);
    }
  }, [region]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label={`فتح رابط الشراء - ${region === "europe" ? "أوروبا" : "الدول العربية"}`}
    >
      {children}
    </a>
  );
}

interface SocialButtonProps {
  platform: "facebook" | "instagram";
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TrackedSocialButton({
  platform,
  href,
  children,
  className,
}: SocialButtonProps) {
  const handleClick = useCallback(() => {
    // Track the click but don't prevent default - let the anchor work naturally
    try {
      trackSocialClick(platform);
    } catch (err) {
      console.error("Tracking error:", err);
    }
  }, [platform]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}

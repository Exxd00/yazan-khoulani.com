"use client";

import { Button } from "@/components/ui/button";
import { trackPurchaseClick, trackSocialClick } from "@/lib/analytics";

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
  const handleClick = () => {
    trackPurchaseClick(region);
    // Open link in new tab
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      type="button"
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
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
  const handleClick = () => {
    trackSocialClick(platform);
  };

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

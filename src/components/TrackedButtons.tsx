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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackPurchaseClick(region);
    // Allow the link to open naturally
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{ display: 'inline-block' }}
    >
      <Button type="button" className={className}>{children}</Button>
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

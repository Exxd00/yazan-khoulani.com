// Google Analytics Event Tracking

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

type EventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
};

export const trackEvent = (
  eventName: string,
  params?: EventParams
): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

// Purchase Events
export const trackPurchaseClick = (region: "europe" | "arab") => {
  trackEvent("purchase_click", {
    event_category: "ecommerce",
    event_label: region,
    region: region,
    currency: region === "europe" ? "EUR" : "EGP",
  });
};

// Social Events
export const trackSocialClick = (platform: "facebook" | "instagram") => {
  trackEvent("social_click", {
    event_category: "social",
    event_label: platform,
    platform: platform,
  });
};

// Modal Events
export const trackModalOpen = (modalType: "excerpt" | "quotes") => {
  trackEvent("modal_open", {
    event_category: "engagement",
    event_label: modalType,
    modal_type: modalType,
  });
};

// Share Event
export const trackShareClick = (method?: string) => {
  trackEvent("share_click", {
    event_category: "engagement",
    event_label: method || "native",
    method: method || "native",
  });
};

// Page View (for custom tracking)
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

// Scroll Depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent("scroll_depth", {
    event_category: "engagement",
    event_label: `${percentage}%`,
    value: percentage,
  });
};

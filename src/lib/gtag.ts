// lib/gtag.ts

export const GA_MEASUREMENT_ID = "G-DT04PBHP85";

// Track a page view
export const pageview = (url: string) => {
  if (typeof window === "undefined") return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window === "undefined") return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

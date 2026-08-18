"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const body = document.body;
    const previousOverflow = body.style.overflow;

    if (isVisible) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = previousOverflow;
    }

    if (!isVisible) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 1600);

    return () => {
      window.clearTimeout(timer);
      body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  return (
    <div
      className={`loader-shell ${isVisible ? "loader-shell-visible" : "loader-shell-hidden"}`}
      aria-live="polite"
      aria-busy={isVisible}
    >
      <div className="loader-content">
        <img
          src="/logo-nav.jpeg"
          alt="Leong Seng Auto Co. Sdn. Bhd."
          className="loader-logo"
        />
        <div className="loader-bar" aria-hidden="true" />
      </div>
    </div>
  );
}

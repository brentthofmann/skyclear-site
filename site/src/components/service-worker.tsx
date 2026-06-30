"use client";

import { useEffect } from "react";

// Registers the service worker for instant repeat loads — production only, so
// it never interferes with local dev (HMR) or serves stale assets while building.
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") return;
    const onLoad = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return null;
}

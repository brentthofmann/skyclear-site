// Skyclear service worker — makes the site feel "baked in": precaches the shell
// + hero image on install, serves repeat visits instantly (stale-while-revalidate
// for the page, cache-first for immutable assets), and refreshes in the
// background. Production only (registration skips localhost). Bump CACHE to ship.
const CACHE = "skyclear-v2";
const PRECACHE = ["/", "/images/home-night-red.webp", "/images/og.jpg", "/icon.svg"];
const IMMUTABLE = /\/(?:images|_next\/static)\//;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((c) => c.addAll(PRECACHE).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || req.headers.has("range")) return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Page navigations: serve cached instantly, revalidate in the background.
  if (req.mode === "navigate") {
    event.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        const network = fetch(req)
          .then((res) => {
            if (res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // Immutable assets (images, hashed JS/CSS): cache-first.
  if (IMMUTABLE.test(url.pathname)) {
    event.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) cache.put(req, res.clone());
        return res;
      })
    );
  }
});

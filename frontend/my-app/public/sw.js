const CACHE_NAME = "offline-cache-v1";

const FILES_CACHE = [
  "/offline.html",
  "/offline.css",
  "/images/logo-text.png",
  "/fonts/vazir/Vazirmatn-Regular.woff2",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_CACHE))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((cacheName) => {
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== "GET") return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match("/offline.html"))
    );
    return;
  }

  if (FILES_CACHE.includes(url.pathname)) {
    event.respondWith(
      caches.match(request).then((res) => res || fetch(request))
    );
    return;
  }
});

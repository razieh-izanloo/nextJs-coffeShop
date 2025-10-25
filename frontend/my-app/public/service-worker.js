const CACHE_NAME = "offline-cache-v1";
const OFFLINE_URL = "/offline.htm";

//when install service worker, cached 'offline page ,...'
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        cache.addAll([OFFLINE_URL, "/offline.css", "/images/logo-text.png"])
      )
  );
  self.skipWaiting();
});

// request intercept
// self.addEventListener("fetch", (event) => {
//   if (event.request.mode === "navigate") {
//     event.respondWith(
//       fetch(event.request).catch(() => caches.match(OFFLINE_URL))
//     );
//   }
// });

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches
          .match(event.request)
          .then((response) => response || caches.match(OFFLINE_URL))
      )
    );
  }
});

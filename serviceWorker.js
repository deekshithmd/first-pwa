const staticFruits = "fruits-sitee-v1";

const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/script.js",
  "/images/apple.jpg",
  "/images/pinapple.jpg",
  "/images/kiwi.jpg",
  "/images/mango.jpg",
  "/images/strawberry.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticFruits).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

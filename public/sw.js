self.addEventListener("install", (event) => {
    console.log("Service Worker: Installed");
    event.waitUntil(
        caches.open("my-cache").then((cache) => {
            console.log("Caching files...");
            return cache.addAll([
                "/", // Home page
                "/favicon.ico",
                "/manifest.json",
                "/Logo.svg",
                "/icon-192x192.png",
                "/icon-512x512.png",
                "icon-384x384.png",
                "/icon-256x256.png",
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);
    console.log(url.pathname);
    // Handle _next/static file
    event.respondWith(
        caches.open("my-cache").then((cache) => {
            return cache.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request).then((networkResponse) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );
    return; // Exit to avoid running the default handler
    // Default caching strategy for other files
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

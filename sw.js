const scope = new URL(self.registration.scope);
const cachePrefix = `bharatiya-darshana:${scope.pathname}:`;
const cacheName = `${cachePrefix}ad9967d768e5`;
const home = new URL('index.html', scope).href;
const assets = new Set([
  "index.html",
  "tailwind-3bf18bae4f5c.css",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png"
].map(path => new URL(path, scope).href));

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll([...assets].map(url => new Request(url, { cache: 'reload' })));
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter(name => name.startsWith(cachePrefix) && name !== cacheName)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== scope.origin) return;

  const isHome = url.pathname === scope.pathname ||
    url.pathname === new URL(home).pathname;
  if (request.mode === 'navigate' && isHome) {
    event.respondWith(fetch(request).catch(async () => {
      const cache = await caches.open(cacheName);
      return (await cache.match(home)) || Response.error();
    }));
    return;
  }

  if (assets.has(url.href)) {
    event.respondWith((async () => {
      const cache = await caches.open(cacheName);
      return (await cache.match(request)) || fetch(request);
    })());
  }
});

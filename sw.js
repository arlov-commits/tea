/* Offline support. Bump VERSION whenever index.html or the icons change,
   so installed copies pick up the new files. */
var VERSION = "v8";
var CORE = "tea-core-" + VERSION;
var FONTS = "tea-fonts";
var FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png"
];
var FONT_HOST = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CORE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CORE && k !== FONTS; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* The page sends the font URLs it loaded before this worker was in control. */
self.addEventListener("message", function (e) {
  if (!e.data || e.data.type !== "cache-fonts") return;
  var urls = (e.data.urls || []).filter(function (u) { return FONT_HOST.test(u); });
  e.waitUntil(caches.open(FONTS).then(function (c) {
    return Promise.all(urls.map(function (u) {
      return c.match(u).then(function (hit) {
        if (hit) return;
        return fetch(u, { mode: "cors" }).then(function (r) { if (r.ok) return c.put(u, r); }).catch(function () {});
      });
    }));
  }));
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);

  /* Google Fonts: files never change at a given URL, so cache first. */
  if (FONT_HOST.test(req.url)) {
    e.respondWith(caches.open(FONTS).then(function (c) {
      return c.match(req.url).then(function (hit) {
        return hit || fetch(req.url, { mode: "cors" }).then(function (r) {
          if (r.ok) c.put(req.url, r.clone());
          return r;
        });
      });
    }));
    return;
  }

  if (url.origin !== location.origin) return;

  /* The page: network first so edits show up right away, cached copy when offline. */
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(function (r) {
      if (r.ok) { var copy = r.clone(); caches.open(CORE).then(function (c) { c.put("index.html", copy); }); }
      return r;
    }).catch(function () {
      return caches.match("index.html", { cacheName: CORE });
    }));
    return;
  }

  /* Everything else on this site: cache first, fall back to the network. */
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(function (hit) {
    return hit || fetch(req);
  }));
});

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-52355c16eaf9fc6d3123.js"
  },
  {
    "url": "app.ed445d4b1a269765be3b.css"
  },
  {
    "url": "app-f6ea99458d25eb7a547b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d903cd595fd4f9a56b80.js"
  },
  {
    "url": "index.html",
    "revision": "137704b58825702e841017d8180653ed"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c7f5e39d373a190d91d519d26deb41b3"
  },
  {
    "url": "0.8b60105759d04fec3703.css"
  },
  {
    "url": "component---src-pages-index-js.7362e01c8f031c44f7aa.css"
  },
  {
    "url": "0-16f80391646c633707d9.js"
  },
  {
    "url": "component---src-pages-index-js-d46520b0baef2f8e5175.js"
  },
  {
    "url": "static/d/780/path---index-6a9-Xr0QGkLuNyULWRRKC6bOeIeXmI.json",
    "revision": "d02e8a49020f6fa1f187dc96d4a52667"
  },
  {
    "url": "component---src-pages-404-js-f704ab32952a517f9ac4.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "cbdb68cc5f5c38c39545b03852574940"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});
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
    "url": "webpack-runtime-d799e37e23c2ad79dd4e.js"
  },
  {
    "url": "app.ed445d4b1a269765be3b.css"
  },
  {
    "url": "app-3e57ae517acca2bd2457.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d903cd595fd4f9a56b80.js"
  },
  {
    "url": "index.html",
    "revision": "99155b05a84d890d79ef71cb779a8a83"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6937e994a2342ffee4fa6d71dc04e966"
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
    "url": "component---src-pages-index-js-d4e3880565a7b33f3d31.js"
  },
  {
    "url": "static/d/894/path---index-6a9-GizLTUd4HseIDgXXsets6hK840.json",
    "revision": "1b73b414c908e343471a05d04ea9bebd"
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
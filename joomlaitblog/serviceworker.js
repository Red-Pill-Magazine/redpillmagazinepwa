// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
self.addEventListener('install', e => {
  console.log('Installazione WorkService in corso');
    let timeStamp = Date.now();
    e.waitUntil(
    caches.open('asset').then(cache => {
       return cache.addAll([
    '/index.php',
    '/pagina1.html',
    '/pagina2.html',
    '/risorsa1.html',
    '/risorsa2.html'
  ])
 .then(() => self.skipWaiting());
    })
   )
});
self.addEventListener('activate', event => {
    console.log('Attivazione Service Worker della PWA in corso');
    event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
   event.respondWith(
    caches.match(event.request).then(response => {
     return response || fetch(event.request);
     })
  );
});

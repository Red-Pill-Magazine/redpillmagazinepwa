
var cacheName = 'pwa-nomesito';
var filesToCache = [
'/',
https://www.redpillmagazine.it/
https://www.redpillmagazine.it/index.php
https://www.redpillmagazine.it/index.php/sommario
https://www.redpillmagazine.it/index.php/appuntamenti-video
https://www.redpillmagazine.it/index.php/component/digicom/register
https://www.redpillmagazine.it/index.php/component/users/?view=remind&Itemid=101
https://www.redpillmagazine.it/index.php/component/users/?view=reset&Itemid=101
https://www.redpillmagazine.it/index.php/2-uncategorised
https://www.redpillmagazine.it/index.php?start=1
https://www.redpillmagazine.it/index.php?showall=1
https://www.redpillmagazine.it/index.php/il-vostro-numero-di-red-pill/digicom-cart
https://www.redpillmagazine.it/index.php/sommario/item/17-1984-se-solo-orwell-avesse-potuto-sapere
https://www.redpillmagazine.it/index.php/sommario/itemlist/user/47-administrator
https://www.redpillmagazine.it/index.php/sommario/item/16-joomla-10-falsi-miti-da-sfatare
https://www.redpillmagazine.it/index.php/sommario/item/15-incidenti-alle-basi-di-lancio-icbm
https://www.redpillmagazine.it/index.php/sommario/item/14-il-giorno-che-sfiorammo-l-apocalisse
https://www.redpillmagazine.it/index.php/sommario/item/13-il-biglietto-da-visita
https://www.redpillmagazine.it/index.php/sommario/item/12-adobe-photoshop
https://www.redpillmagazine.it/index.php/sommario/item/11-storia-di-internet-dalle-reti-pedonali-al-world-wide-web
https://www.redpillmagazine.it/index.php/sommario/item/10-steve-wozniak
https://www.redpillmagazine.it/index.php/sommario/item/9-atari
https://www.redpillmagazine.it/index.php/sommario/item/8-foto-del-mese
https://www.redpillmagazine.it/index.php/sommario/item/7-editoriale
https://www.redpillmagazine.it/index.php/appuntamenti-video/2-uncategorised
https://www.redpillmagazine.it/index.php/sommario/itemlist/user/47-administrator?start=0
]; 
/* Avvia il Service Worker e Memorizza il contenuto nella cache */
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open(cacheName).then(function(cache) {
return cache.addAll(filesToCache);
})
);
}); 

/* Serve i Contenuti Memorizzati quando sei Offline */
self.addEventListener('fetch', function(e) {
e.respondWith(
caches.match(e.request).then(function(response) {
return response || fetch(e.request);
})
);
});

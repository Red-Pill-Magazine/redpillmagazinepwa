//inserire nel footer (prima della chiusura del </body>) lo script che abbiamo preparato
<script async>
window.onload = () => {
'use strict'; 
if ('serviceWorker' in navigator) {
navigator.serviceWorker
.register('./service-worker.js');
}
}
</script>

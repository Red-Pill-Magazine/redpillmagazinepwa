
<script async>window.onload = () => {
 'use strict'; 
 if ('serviceWorker' in navigator) {
   navigator.serviceWorker
    .register('./service-worker.js');
  }
}
</script>
//inserire questo codice alla fine del tag <body></body>

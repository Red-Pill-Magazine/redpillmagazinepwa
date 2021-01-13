if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registrato con successo con scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('Registrazione di ServiceWorker fallita: ', err);
    });
  });
}

# redpillmagazinepwa

I SEGUENTI LINK RIMANDANO AD ALTRETTANTI TUTORIAL SU COME CREARE UNA PWA PARTENDO DAL NOSTRO SITO JOOMLA

https://www.joomla.it/blog/8929-trasformiamo-il-nostro-sito-joomla-in-una-progressive-web-application.html

https://www.pixed.it/pixed-blog/joomla/118-come-trasformare-il-proprio-sito-joomla-in-una-pwa-progressive-web-app.html

https://it.semrush.com/blog/cose-una-pwa-progressive-web-app/

Nel file manifest.json abbiamo i seguenti parametri che spieghiamo:

name: Inseriamo il nome completo del sito
short-name: Inseriamo un nome breve del sito, (non deve superare i 12 caratteri)
icons: inseriamo il percorso alle icone, minimo due da 192x192 e 512x512
start_url: Inseriamo la pagina iniziale che si aprirà quando si lancia l'applicazione, (non deve essere necessariamente la home del sito)
display: Si possono inserire varie opzioni come:
standalone: Apre l'app Web per sembrare un'app nativa autonoma. L'app viene eseguita in una finestra separata, separata dal browser, e nasconde gli elementi dell'interfaccia utente del browser standard come la barra degli indirizzi, ecc.
fullscreen: Apre l'applicazione Web senza alcuna interfaccia utente del browser e occupa l'intera area di visualizzazione disponibile.
minimal-ui: Non supportato da Chrome
Questa modalità è simile a schermo intero, ma fornisce all'utente alcuni mezzi per accedere a un insieme minimo di elementi dell'interfaccia utente per il controllo della navigazione (ad esempio, indietro, avanti, ricarica, ecc.).
browser: Un'esperienza browser standard.
lang: Inseriamo la lingua principale del sito
background_color: Quì impostiamo il colore di sfondo della splash screen della app
theme_color:  Dovrebbe corrispondere al colore del tema meta specificato nel titolo del documento.
orientation: quì impostiamo l'orientamento verticale od orizzontale (landscape) della app.
scope:

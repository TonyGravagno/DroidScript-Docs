# Documentazione
## Indice

- [Documentazione](#documentazione)
  - [Indice](#indice)
  - [Documentazione Ufficiale di DroidScript](#documentazione-ufficiale-di-droidscript)
  - [Struttura](#struttura)
  - [Per i Collaboratori](#per-i-collaboratori)
    - [Forka il repository DroidScript](#forka-il-repository-droidscript)
    - [Apporta Modifiche](#apporta-modifiche)
    - [Esegui il Commit delle Modifiche](#esegui-il-commit-delle-modifiche)
    - [Crea una Pull Request](#crea-una-pull-request)
    - [Controlla la tua Pull Request](#controlla-la-tua-pull-request)

## Documentazione Ufficiale di DroidScript

Anteprima disponibile su https://droidscript.github.io/Docs

Iframe a dimensione mobile per browser desktop: https://droidscript.github.io/Docs/docs

Applicazione DocsPreview per scaricare la documentazione più recente: https://github.com/SymDSTools/DocsPreview

Altri strumenti DS [qui](https://github.com/SymDSTools)

## Struttura

- **docs:** La documentazione più recente generata per l'anteprima su GitHub Pages
- **files:** i file sorgente della documentazione e gli script di generazione

Le sorgenti della documentazione sono scritte in un [formato markup](files/markup/README.md) personalizzato. Per motivi di compatibilità questi file di markup vengono convertiti in un formato [JSON](files/json/README.md) intermedio che verrà poi trasformato nella documentazione HTML che tutti conoscete e amate.

## Per i Collaboratori

Per contribuire alla documentazione devi avere un account GitHub attivo. [Registrati](https://github.com/signup?source_repo=DroidScript%2FDocs) se non ne hai uno.

### Forka il repository DroidScript
Per modificare la documentazione devi "forkare" il repository DroidScript. Il modo più semplice è aprire un nuovo Codespace sul repository DroidScript.

<p align="center"><img src="files/Screenshot-Codespace.jpg" alt="Open Codespace Dialog" width="100%" style="max-width:1000px"></p>

### Apporta Modifiche
Quando il Codespace è aperto, naviga nella directory files/markup/en e modifica qualsiasi file a cui vuoi contribuire. DroidScript ha diversi ambiti ognuno con la propria sottodirectory che contiene tutti i possibili metodi definiti come file _markup.js_. All'interno puoi modificare la descrizione, le sottofunzioni, i parametri e altro. Assicurati di seguire il [formato markup](files/markup/README.md)!

### Esegui il Commit delle Modifiche
Quando hai finito le modifiche passa alla scheda git a sinistra e descrivi brevemente cosa hai cambiato nel campo del messaggio di commit. La prima riga dovrebbe descrivere in generale cosa hai fatto e ogni riga successiva dovrebbe includere un elenco più dettagliato delle tue modifiche.\
Dopodiché esegui il commit e sincronizza le tue modifiche su GitHub con il pulsante verde in basso. Se hai appena aperto il Codespace sul repository DroidScript ti verrà chiesto di creare un fork.

**Nota:** esiste un bug persistente di Codespace che impedisce il commit sul tuo fork. Se ti capita, apri il terminale del workspace ed esegui `git push --set-upstream origin master`

<p align="center"><img src="files/Screenshot-Changes.jpg" alt="Commit Description Dialog" width="100%" style="max-width:1000px"></p>

### Crea una Pull Request
Quando sei soddisfatto delle modifiche e vuoi che vengano revisionate, passa alla scheda GitHub a sinistra e premi il piccolo pulsante 'Create Pull Request' che appare nel menu a discesa 'Pull Requests'. Si aprirà una nuova scheda 'Pull Request' dove potrai fornire una descrizione delle modifiche di tutti i commit effettuati. Puoi anche rivedere tutti i tuoi commit e i file modificati. Dopo premi il pulsante verde 'Create'.

<p align="center"><img src="files/Screenshot-PullRequest.jpg" alt="Pull Request Dialog" width="100%" style="max-width:1000px"></p>

### Controlla la tua Pull Request
Quando uno sviluppatore è soddisfatto della richiesta la unirà al repository DroidScript. In caso contrario lascerà un commento sulla [tua pull request](https://github.com/DroidScript/Docs/pull/60) quindi assicurati di controllarla regolarmente finché non verrà approvata e abilita le notifiche.

<div style="text-align:center">
<b><big>Grazie per il tuo contributo e per il supporto a </strong>DroidScript.org</strong>!</big></b>
</div>

## Guida per gli sviluppatori

- [Documentazione del formato JSON](json/README.md)
- [Documentazione del formato Markup](markup/README.md)

### Struttura dei file
```bash
files/
├─ json/         # definizioni di documenti json intermedi
├─ markup/       # definizioni di documenti markup
├─ docs-base/    # cartella modello dei documenti per ogni lingua/versione
├─ font-awesome/ # appartiene a docs-base
│
├─ conf.json     # informazioni generali di generazione (lingue, ambiti, definizioni di tipo, ...)
├─ generate.js   # converte json/ in documenti html nella cartella out/
├─ updatePages.js      # copia temporaneamente out/ in docs/ pubblici
├─ jsdoc-parser.js     # converte markup/ in json/
├─ markup-generator.js # converte json/ in markup/ (verifica la conversione bidirezionale)
├─ testLinks.sh        # controlla che tutti i link interni alla documentazione siano validi
├─ adjustJson.js       # pulizia dei file JSON (trim(), rimozione vuoti, ordinamento chiavi, ...)
├─ transformPopups.js  # converte i popup html nei file markup/
│
├─ ReleaseNotes.txt    # ReleaseNotes incrementali
├─ animate.png   # utilizzato dalla documentazione di app.Animate
│
├─ types.d.ts    # definizioni di tipo di DS e generator per vscode
├─ jsconfig.json # impostazioni linter js/ts per vscode
└─ package.json  # dipendenze dei pacchetti npm degli script
```


### Palette comandi NPM

Installa le dipendenze
- `npm i`

Pipeline di generazione
- `npm run generate` genera out/docs dai file json
- `npm run generateDocs` genera la documentazione visualizzata dai file json
- `npm run updateVersion` genera la documentazione visualizzata e aggiorna la versione

Passaggi individuali della pipeline
- `npm run docs` genera out/docs dai file json
- `npm run docs-lazy` docs, ma rigenera solo gli ambiti obsoleti
- `npm run update` docs-lazy, ma aggiorna out/version.txt
- `npm run updatePages` aggiorna la documentazione visualizzata (copia out/ in docs/)
- `npm run json` converte i file markup in json
- `npm run markup` converte i file json in markup

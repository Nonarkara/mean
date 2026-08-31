# What I Mean When I Say

A small personal dictionary by [Non Arkaraprasertkul](https://github.com/Nonarkara). One hundred words, defined the way a particular Thai anthropologist actually means them.

**Live site:** [https://mean.nonarkara.org](https://mean.nonarkara.org)

## What this is

This repository is a static website: a lexicon of dictionary-style entries. The page itself describes the book as a small dictionary of words the author has used wrong, and a smaller list of words used right — some jokes, some arguments, most confessions. There are about one hundred entries in three of the author’s languages, plus a few imports from elsewhere.

Each entry can include a headword, pronunciation, part of speech, origin line, numbered definitions, examples, and cross-references to other entries.

The site also includes:

- A sticky alphabet bar to jump by letter
- A “word of the day” chosen deterministically from the UTC date (the same word for everyone until midnight UTC)
- Search (`/`) and a random entry (`R`)
- A reading progress bar
- A continue-where-you-left-off prompt, plus visited-entry and reading-day counts stored in the browser (`localStorage`)
- A library footer that links other books by the same author

## Running locally

There is no build step and no package manager. The site is static HTML, CSS, and JavaScript.

From the repository root, serve the files with any static server, for example:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

You can also open `index.html` directly in a browser. The page loads webfonts from Google Fonts (Ibarra Real Nova, Cormorant Garamond, EB Garamond, IBM Plex Mono, Sarabun, and Noto Serif Thai).

## Keyboard

These shortcuts are shown on the cover and implemented in `app.js` (they do not apply while typing in the search field):

| Key | Action |
| --- | --- |
| `/` | Search |
| `R` | Random entry |
| `Esc` | Close search or menu |

The alphabet bar jumps to a letter. Arrow keys and Enter walk the search results.

## Repository layout

| File | Role |
| --- | --- |
| `index.html` | Page markup: cover, word of the day, dictionary container, colophon, library |
| `entries.js` | Lexicon data (`window.LEXICON`) |
| `app.js` | Rendering and interaction |
| `styles.css` | Layout and typography |
| `_headers` | Cache-Control rules for Cloudflare Pages-style hosting |

## License

This repository is licensed under the MIT License. See [LICENSE](LICENSE).

The site colophon states: Text © Non Arkaraprasertkul.

# Byte by Byte

A simple website that teaches computer hardware and networking to complete beginners, through a story.

Riya finds her grandfather's old computer, learns what every part does, builds her own PC, and then follows one message all the way to her friend in another city.

- **Part 1 · Inside the box (Hardware):** 8 chapters — what a computer is, binary, CPU, RAM and storage, motherboard/PSU/GPU/ports, booting, building a PC, troubleshooting.
- **Part 2 · Out into the world (Networking):** 9 chapters — what a network is, IP and MAC addresses, routers and switches, cables and Wi-Fi, packets, DNS, protocols and layers, security, network troubleshooting.

Every chapter has: the story → what's really happening → a picture → "think of it like…" → a hands-on activity (in most) → words to remember → a 3-question quick check.

Extras: word list with search, "where to go next" page, light/dark mode, three text sizes, read-aloud (uses the browser's built-in voice), progress saved in the browser only.

## Open it

- **Easiest:** double-click `index.html`. It works without a server.
- **Local server:** `node serve.mjs` → http://127.0.0.1:5240

## Edit the story

All the words live in two files — no code knowledge needed beyond keeping the quotes and commas:

- `js/story-hardware.js` — characters, the two parts, and the 8 hardware chapters
- `js/story-networking.js` — the 9 networking chapters and the "where to go next" page

Other files: `js/toys.js` (the activities), `js/app.js` (pages, quiz, progress), `css/style.css` (the look).

No libraries, no build step, no tracking, nothing sent anywhere.

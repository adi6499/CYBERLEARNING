# Byte by Byte

A simple website that teaches computers to complete beginners through one story: computer hardware, computer engineering, IT support, networking and cybersecurity.

Riya finds her grandfather's old computer and fixes it, builds her own PC, follows a message across the country, builds a plant-watering machine for the science fair, fixes the school computer lab, wires the school tech fest network, and finally defends it from attackers.

## What's inside: 53 chapters in 6 parts

| Part | Topic | Chapters |
|---|---|---|
| 1 · Inside the box | Hardware: parts, binary, CPU, RAM and storage, motherboard/PSU/GPU/ports, booting, building a PC, troubleshooting | 8 |
| 2 · Out into the world | Networking basics: networks, IP and MAC, routers and switches, cables and Wi-Fi, packets, DNS, protocols and layers, safety, troubleshooting | 9 |
| 3 · How it really works | Computer engineering: transistors and chip making, logic gates, adders and memory, inside the CPU, code to machine code, hexadecimal, embedded systems | 7 |
| 4 · The technician's toolkit | IT support: file systems, backups and RAID, peripherals, laptops and phones, the OS up close, the command line, power and safety, virtual machines and cloud, the help desk | 9 |
| 5 · The network engineer | Advanced networking: topologies, making cables, subnetting, IPv6, switching and VLANs, routing and NAT, network services, Wi-Fi design, VPNs, network tools | 10 |
| 6 · Cyber guardians | Cybersecurity: CIA triad, encryption, hashing, passwords and MFA, malware, social engineering and scams in India, network attacks, defences and incident response, privacy, ethical hacking and careers | 10 |

Every chapter: the story → what's really happening → a picture → "think of it like…" → a hands-on activity (in many) → words to remember → a quick quiz.

**17 hands-on activities:** binary switches, find the PC parts, PC build order, IP checker, packets, DNS lookup, practice Command Prompt with mystery mode, logic gates, hex and colour mixer, RAID, practice Linux terminal, wire an Ethernet cable, subnet calculator, Caesar cipher, SHA-256 fingerprint, password strength, firewall rules game.

**Also:** final test (whole course or one part) with a printable certificate, searchable word list, "where to go next" page, light/dark mode, three text sizes, read-aloud, progress saved in the browser only.

## Open it

- **Easiest:** double-click `index.html`. It works without a server.
- **Local server:** `node serve.mjs` → http://127.0.0.1:5240

## Edit the story

All the words live in the `js/story-*.js` files, one per part. After editing, run:

```
node tools/check-content.mjs
```

It checks every chapter's shape (missing fields, broken quiz answers, unknown activities).

Other files: `js/toys.js` and `js/toys-more.js` (the activities), `js/app.js` (pages, quiz, test, progress), `css/style.css` (the look).

No libraries, no build step, no tracking, nothing sent anywhere.

/* Byte by Byte — story content.
   Part 6: Cyber guardians (cybersecurity).
   Same format as story-hardware.js. Attacks are explained as ideas only, always with their defence. */
window.BBB = window.BBB || {};
BBB.chapters = BBB.chapters || [];

BBB.chapters.push({
  id: 'cy-1', track: 'cyber',
  title: 'Three promises',
  topic: 'What cybersecurity protects, and from whom',
  minutes: 7,
  story: [
    ['n', "Tech fest morning. The hall is full, 40 PCs are humming, and the tournament's first match has just started. Then the Wi-Fi starts to crawl. Videos freeze. The scoreboard stops updating."],
    ['arjun', "Riya, the tournament screen is stuck. And that strange Wi-Fi name is still showing up: “TechFest_Free”."],
    ['riya', 'Uncle Dev, someone is doing something to our network. I can feel it.'],
    ['dev', "Then let's think like a guardian, not a panicking player. Every secure system makes three promises. Secrets stay secret. Data stays correct. And the system is there when you need it. Which promise just broke?"],
    ['riya', "...The third one. The network is here, but nobody can use it."],
    ['dev', "Availability. Now we know what we're protecting. Next we work out who might be attacking, how, and how much it matters."],
    ['arjun', "So we're detectives again?"],
    ['dev', 'Guardians, this time. Detectives find out what went wrong. Guardians stop it from happening.']
  ],
  learn: [
    { p: "<b>Cybersecurity</b> means protecting computers, networks and data from harm, whether the harm is on purpose (an attacker) or by accident (a mistake or a failure)." },
    { h: 'The three promises: the CIA triad' },
    { table: { head: ['Promise', 'What it means', 'When it breaks', 'How it is protected'], rows: [
      ['Confidentiality', 'Only the right people can see the data', 'Someone reads your private chats', 'Passwords, encryption, permissions'],
      ['Integrity', 'Data stays correct and is not secretly changed', 'Someone changes the tournament scores', 'Hashing, permissions, logs, backups'],
      ['Availability', 'The system works when people need it', 'The fest Wi-Fi is flooded and nobody can connect', 'Spare equipment, backups, protection against flooding']
    ] } },
    { tip: 'CIA here has nothing to do with spies. It is just the first letters of the three promises.' },
    { h: 'Who are you, what may you do, what did you do? (AAA)' },
    { ul: [
      '<b>Authentication:</b> proving who you are, with a password, a fingerprint or a security key.',
      '<b>Authorisation:</b> what you are allowed to do once you are in. A student may play in the tournament; only the teacher may change the scores.',
      '<b>Accounting:</b> keeping a record (a <b>log</b>) of who did what, and when, so problems can be traced later.'
    ] },
    { h: 'The words guardians use' },
    { table: { head: ['Word', 'Meaning', 'Tech fest example'], rows: [
      ['Asset', 'Anything worth protecting', "The scoreboard PC, the Wi-Fi, the students' accounts"],
      ['Threat', 'Something that could cause harm', 'A player trying to change the scores'],
      ['Vulnerability', 'A weakness a threat could use', 'The scoreboard PC has no password'],
      ['Risk', 'How likely the harm is, and how bad it would be', 'Easy to do and very damaging: high risk']
    ] } },
    { p: 'A simple way to think about it: <b>risk ≈ likelihood × impact</b>. A weakness nobody can reach is a low risk. A weakness anyone can reach, guarding something important, is a high risk. Guardians fix the highest risks first.' },
    { h: 'Who attacks? (threat actors)' },
    { ul: [
      '<b>Script kiddies:</b> beginners using ready-made tools, usually to show off.',
      '<b>Criminals:</b> want money, through scams, stolen cards or ransom.',
      '<b>Insiders:</b> people already inside, like staff or students, who misuse their access on purpose or by mistake.',
      '<b>Hacktivists:</b> attack to make a political or social point.',
      '<b>Nation-states:</b> government-backed teams that spy on or attack other countries. The most skilled and patient of all.'
    ] },
    { h: 'Three habits of every guardian' },
    { ul: [
      "<b>Shrink the attack surface.</b> Every app, open port, account and device is a possible way in. Switch off and remove what you don't need.",
      '<b>Least privilege.</b> Give every person and program only the access they need, and nothing more.',
      '<b>Defence in depth.</b> Use many layers of protection, so if one fails, the next one still stops the attacker.'
    ] },
    { p: "<b>Security vs convenience:</b> more security often means more steps, like another password or another check. Good security finds the right balance for how valuable something is. A bank needs more locks than a game." }
  ],
  analogy: {
    title: 'Think of it like your school locker',
    text: 'A school locker makes the same three promises as a secure computer.',
    map: [
      ['Only you can open it', 'Confidentiality'],
      ['Nobody swaps your books for different ones', 'Integrity'],
      ['It opens when you need it, not jammed shut', 'Availability'],
      ['Showing your ID card to the watchman', 'Authentication'],
      ['Only teachers get the master key', 'Authorisation and least privilege'],
      ['The register of who came in, and when', 'Accounting (logs)']
    ]
  },
  diagram: { stack: [
    { t: 'People', s: 'Training, so nobody opens the door for an attacker' },
    { t: 'Perimeter', s: 'The firewall at the edge of the network' },
    { t: 'Network', s: 'Separate zones for students, staff and guests' },
    { t: 'Devices', s: 'Updates, antivirus, strong logins' },
    { t: 'Data', s: 'Encryption, permissions and backups' }
  ], note: 'Defence in depth: an attacker has to get past every layer, not just one.' },
  words: [
    ['CIA triad', 'The three promises of security: confidentiality, integrity and availability.'],
    ['Authentication', 'Proving who you are, for example with a password or fingerprint.'],
    ['Authorisation', 'Deciding what someone is allowed to do once they are logged in.'],
    ['Vulnerability', 'A weakness that an attacker could use.'],
    ['Risk', 'How likely a harm is, combined with how bad it would be.'],
    ['Threat actor', 'A person or group who might attack: criminals, insiders, hacktivists and others.'],
    ['Attack surface', 'All the possible ways into a system: apps, ports, accounts and devices.'],
    ['Least privilege', 'Giving each person or program only the access they truly need.'],
    ['Defence in depth', 'Using many layers of protection, so one failure is not a disaster.']
  ],
  quiz: [
    { q: 'The fest Wi-Fi is flooded and nobody can connect. Which promise has broken?', a: ['Confidentiality', 'Integrity', 'Availability', 'Authorisation'], c: 2, why: 'The network exists but nobody can use it. That is a failure of availability.' },
    { q: 'A player secretly changes the tournament scores. Which promise has broken?', a: ['Integrity', 'Availability', 'Confidentiality', 'Accounting'], c: 0, why: 'The data is no longer correct. Integrity means data is not secretly changed.' },
    { q: 'Giving each person only the access they need is called...', a: ['Defence in depth', 'Least privilege', 'Attack surface', 'Hacktivism'], c: 1, why: 'Least privilege: nobody gets more access than their job needs.' },
    { q: 'A risk is highest when the harm is...', a: ['On a brand-new computer', 'Protected by a long password', 'On a system nobody uses', 'Both likely to happen and very serious'], c: 3, why: 'Risk combines likelihood and impact. Likely and serious means high risk.' }
  ]
});

BBB.chapters.push({
  id: 'cy-2', track: 'cyber',
  title: 'Secret writing',
  topic: 'Encryption, keys and certificates',
  minutes: 8,
  story: [
    ['n', "The Wi-Fi is limping, so the tournament PCs have been moved onto cables. In a quiet corner, Arjun hands Riya a scrap of paper. On it: <code>KHOOR ULBD</code>."],
    ['arjun', "Bet you can't read it."],
    ['riya', "It's gibberish."],
    ['arjun', "It's a secret code. Every letter has been moved three places along the alphabet."],
    ['riya', "So K is really H... H, E, L, L, O. “HELLO RIYA”! That was easy once I knew the trick."],
    ['dev', "And that's the problem with the oldest codes. Julius Caesar used that one about two thousand years ago. Today a computer can try every possible shift faster than you can blink. Real encryption is very different."],
    ['riya', 'But our Wi-Fi uses encryption. So does every website with a padlock. Why is that not easy to break?'],
    ['dev', "Because modern encryption uses keys so long that every computer on Earth working together could not try them all. Let's see how it works."]
  ],
  learn: [
    { h: 'The basic words' },
    { ul: [
      '<b>Plaintext:</b> the normal, readable message.',
      '<b>Ciphertext:</b> the scrambled version.',
      '<b>Cipher:</b> the method used to scramble and unscramble.',
      '<b>Key:</b> the secret setting that controls the scrambling. Without the key, ciphertext should be useless.',
      '<b>Encrypt</b> means plaintext → ciphertext. <b>Decrypt</b> means ciphertext → plaintext.'
    ] },
    { h: 'The Caesar cipher, and why it is weak' },
    { p: "Shift every letter along the alphabet by a fixed number. With 26 letters there are only <b>25 useful shifts</b>, so anyone can try them all by hand in a few minutes, and a computer does it instantly. Patterns give it away too: E is the most common letter in English, so the most common letter in the ciphertext is probably an E." },
    { tip: "Modern encryption follows <b>Kerckhoffs's principle</b>: assume the attacker knows exactly how the cipher works. Only the key is secret. Security must come from the key, never from hiding the method." },
    { h: 'Symmetric encryption: one shared key' },
    { ul: [
      'The <b>same key</b> locks and unlocks the data.',
      'It is very fast, so it is used for large amounts of data.',
      'The common standard today is <b>AES</b> (Advanced Encryption Standard), with 128-bit or 256-bit keys. A 128-bit key has about 3.4 × 10<sup>38</sup> possible values: far too many for any computer to try them all.',
      "<b>The problem:</b> how do two people share the key safely? If you send it across the network, someone could copy it on the way."
    ] },
    { h: 'Asymmetric encryption: a pair of keys' },
    { ul: [
      'Everyone has two linked keys: a <b>public key</b>, which you can give to anyone, and a <b>private key</b>, which you never share.',
      'Data locked with your public key can only be unlocked with your private key.',
      'Common types are <b>RSA</b> and <b>ECC</b> (elliptic-curve cryptography).',
      'It is much slower than symmetric encryption, so it is used for small jobs: agreeing keys and making <b>digital signatures</b>.'
    ] },
    { h: 'How HTTPS uses both' },
    { ol: [
      'Your browser connects, and the website sends its <b>certificate</b>, which contains its public key.',
      'The browser checks that the certificate was issued by a trusted <b>Certificate Authority</b> (CA) for that exact website name, and has not expired.',
      'Using asymmetric maths, the browser and the website agree on a fresh secret <b>session key</b>. In modern HTTPS the key itself never travels across the network.',
      'Everything after that is encrypted with fast symmetric encryption, like AES, using the session key.'
    ] },
    { h: 'Certificates' },
    { p: "A certificate is like an ID card for a website. It says “this public key belongs to example.com”, and it is signed by a Certificate Authority that your device already trusts. If the name doesn't match, or the certificate is expired or fake, the browser shows a big warning. Never click past that warning on a site where you log in or pay." },
    { h: 'End-to-end encryption' },
    { p: "With normal HTTPS, your data is encrypted between you and the company's server, and the server can read it. With <b>end-to-end encryption</b> (E2EE), only the sender and the receiver hold the keys. WhatsApp and Signal messages are end-to-end encrypted, so even the company running the app can't read them." },
    { h: 'In transit and at rest' },
    { table: { head: ['', 'In transit', 'At rest'], rows: [
      ['Means', 'Data moving across a network', 'Data stored on a disk or phone'],
      ['Protects against', 'Someone listening on the network', 'Someone stealing the laptop or phone'],
      ['Examples', 'HTTPS, WPA3 Wi-Fi, VPNs', 'BitLocker on Windows, FileVault on a Mac, phone encryption with a screen lock']
    ] } },
    { warn: "Encryption at rest only helps if the device has a strong lock. A phone with no screen lock, or a laptop left logged in, hands everything over. And if you lose the key, such as a BitLocker recovery key, even you can't get your data back. Keep recovery keys somewhere safe." }
  ],
  analogy: {
    title: 'Think of it like locks and padlocks',
    text: 'Encryption is all about locks, and who holds the keys.',
    map: [
      ['A note written in a secret code', 'Ciphertext'],
      ['The rule only your friends know', 'The key'],
      ['One key that both locks and unlocks a box', 'Symmetric encryption (AES)'],
      ['Open padlocks you hand out; only you hold their key', 'Asymmetric encryption (public and private keys)'],
      ["A school ID card stamped by the principal", 'A certificate signed by a Certificate Authority'],
      ['A sealed letter the postman cannot open', 'End-to-end encryption']
    ]
  },
  diagram: { flow: [
    { t: 'Hello', s: 'your browser connects' },
    { t: 'Certificate', s: 'the site proves who it is' },
    { t: 'Agree a key', s: 'asymmetric maths' },
    { t: 'Private chat', s: 'fast symmetric encryption' }
  ], note: 'All of this happens in a fraction of a second, every time you see the padlock.' },
  toy: 'cipher',
  words: [
    ['Plaintext', 'The normal, readable form of a message.'],
    ['Ciphertext', 'The scrambled, unreadable form of a message after encryption.'],
    ['Key', 'The secret value that controls how data is encrypted and decrypted.'],
    ['Symmetric encryption', 'Encryption where the same key locks and unlocks the data. Fast.'],
    ['AES', 'Advanced Encryption Standard: the most common symmetric cipher today.'],
    ['Asymmetric encryption', 'Encryption with a public key to share and a private key to keep secret.'],
    ['Certificate Authority (CA)', 'A trusted organisation that signs website certificates.'],
    ['End-to-end encryption', 'Only the sender and receiver can read the messages, not even the app company.'],
    ['Encryption at rest', 'Encrypting data stored on a disk or phone, such as with BitLocker.']
  ],
  quiz: [
    { q: 'Why is the Caesar cipher weak?', a: ['It uses too many colours', 'There are only 25 useful shifts to try', 'It only works on numbers', 'It needs the internet'], c: 1, why: 'With so few possible keys, anyone can simply try them all.' },
    { q: 'In asymmetric encryption, which key must you keep secret?', a: ['The public key', 'Both keys', 'The private key', 'Neither key'], c: 2, why: 'The public key is meant to be shared. The private key must never leave you.' },
    { q: 'How does HTTPS use the two kinds of encryption?', a: ['Asymmetric to agree a key, then fast symmetric for the data', 'Only symmetric, with the key sent in plain text', 'Only asymmetric, for everything', 'It uses no encryption at all'], c: 0, why: 'Asymmetric maths solves the key-sharing problem. Symmetric encryption is then used because it is fast.' },
    { q: 'With end-to-end encryption, who can read your messages?', a: ['Anyone on the same Wi-Fi', 'The app company', 'Your internet provider', 'Only you and the person you send them to'], c: 3, why: 'Only the two ends hold the keys. Everyone in between sees ciphertext.' }
  ]
});

BBB.chapters.push({
  id: 'cy-3', track: 'cyber',
  title: 'Fingerprints for data',
  topic: 'Hashing and checksums',
  minutes: 7,
  story: [
    ['n', 'Lunch break. The tournament game needs an update on all 40 PCs. Arjun has found a download site that is much faster than the official one.'],
    ['arjun', 'Done! Downloaded in 20 seconds. Shall I copy it to every PC?'],
    ['dev', 'Wait. The official site shows a long code next to the download, called a SHA-256 hash. Does your file have the same one?'],
    ['n', 'Riya runs one command on the file and compares the two codes. Then she compares them again.'],
    ['riya', "They're completely different. Not even close."],
    ['dev', "Then it isn't the same file. Someone changed it, perhaps to hide something inside. A hash is a fingerprint for data. Change even one tiny bit, and the fingerprint changes completely."],
    ['arjun', '...And I nearly installed it on 40 computers.'],
    ['dev', "Delete it, and get the official one. From now on, you'll check every time."]
  ],
  learn: [
    { p: 'A <b>hash function</b> takes any data, from a single word to a whole movie, and turns it into a short code of fixed length called a <b>hash</b> (also called a <em>digest</em> or <em>fingerprint</em>).' },
    { h: 'What makes a good hash function' },
    { ul: [
      '<b>Same input, same hash.</b> Hash the same file a thousand times and you get the same answer every time.',
      '<b>Fixed length.</b> SHA-256 always gives 256 bits, written as 64 hexadecimal characters, whether the input is one letter or a whole movie.',
      "<b>One-way.</b> You can't turn a hash back into the original data.",
      '<b>Avalanche effect.</b> Change a single letter, and the hash changes completely.',
      '<b>Collision-resistant.</b> It should be practically impossible to find two different inputs with the same hash.'
    ] },
    { h: 'Where hashes are used' },
    { table: { head: ['Use', 'How it works'], rows: [
      ['Storing passwords', "Websites should store the hash of your password, not the password itself. When you log in, they hash what you typed and compare. If the database leaks, attackers get hashes, not passwords."],
      ['Checking downloads', "The official site publishes the file's hash, called a <b>checksum</b>. You hash your copy. If the two match, your file is exactly the original."],
      ['Digital signatures', 'The sender hashes a message and signs the hash with their private key. Anyone with the public key can check who sent it and that it was not changed.'],
      ['Spotting changes', 'Security tools keep hashes of important files and raise an alert if one changes. Hashes are also used to recognise known malware.']
    ] } },
    { h: 'Salting passwords' },
    { p: "If two people use the same password, they would get the same hash. Attackers keep huge ready-made lists of hashes of common passwords (sometimes called <em>rainbow tables</em>). A <b>salt</b> is a random value added to each password before hashing, different for every user. Now the same password gives different hashes, and the ready-made lists are useless. Good systems also use deliberately slow password-hashing methods, such as <b>bcrypt</b> or <b>Argon2</b>, so every guess costs an attacker more time." },
    { h: 'Old and new hash functions' },
    { ul: [
      '<b>MD5</b> and <b>SHA-1</b> are <b>broken</b> for security: researchers can create two different files with the same hash. You may still see them used as simple checksums, but never trust them for security.',
      '<b>SHA-256</b> (part of the SHA-2 family) is safe and widely used today. <b>SHA-3</b> is a newer family that is also safe.'
    ] },
    { h: 'Hashing vs encryption' },
    { table: { head: ['', 'Hashing', 'Encryption'], rows: [
      ['Direction', 'One-way only', 'Two-way: can be decrypted with the key'],
      ['Key', 'No key needed', 'Needs a key'],
      ['Output size', 'Always the same length', 'About the size of the input'],
      ['Used for', 'Integrity, passwords, fingerprints', 'Keeping data secret']
    ] } },
    { tip: 'To check a download on Windows, open Command Prompt and type <code>certutil -hashfile filename SHA256</code>, or in PowerShell type <code>Get-FileHash filename</code>. Then compare the result with the hash on the official website.' }
  ],
  analogy: {
    title: 'Think of it like a fingerprint',
    text: 'A fingerprint identifies a person without being the person. A hash does the same for data.',
    map: [
      ['A fingerprint identifies you, but it is not you', 'A hash identifies data, but it is not the data'],
      ["You can't rebuild a person from a fingerprint", 'Hashing is one-way'],
      ['A different finger gives a totally different print', 'One changed letter gives a completely different hash'],
      ['Comparing prints with police records', 'Comparing a download with its official checksum'],
      ['A wax seal on a letter', 'A digital signature']
    ]
  },
  diagram: { flow: [
    { t: 'Your password', s: 'what you type' },
    { t: '+ Salt', s: 'random, different for each user' },
    { t: 'Hash function', s: 'such as bcrypt' },
    { t: 'Stored hash', s: 'a long, meaningless code' }
  ], note: 'When you log in, the same steps run again and the two hashes are compared. The password itself is never stored.' },
  toy: 'hash',
  words: [
    ['Hash function', 'A one-way calculation that turns any data into a short, fixed-length code.'],
    ['Hash', 'The fixed-length code a hash function produces. Also called a digest or fingerprint.'],
    ['Checksum', 'A hash published with a download, so you can check your copy is the original.'],
    ['Avalanche effect', 'A tiny change in the input completely changes the hash.'],
    ['Collision', 'Two different inputs that give the same hash. Good hash functions make this practically impossible.'],
    ['Salt', 'A random value added to each password before hashing, so equal passwords get different hashes.'],
    ['SHA-256', 'A safe, widely used hash function that produces a 256-bit hash.'],
    ['Digital signature', 'A hash signed with a private key, proving who sent something and that it was not changed.']
  ],
  quiz: [
    { q: 'What does a hash function do?', a: ['Encrypts data so it can be decrypted later', "Turns data into a fixed-length fingerprint that can't be reversed", 'Makes a file smaller to save space', 'Sends data faster'], c: 1, why: 'Hashing is one-way. It makes a fingerprint, not a locked box.' },
    { q: 'You change one letter in a document. Its SHA-256 hash...', a: ['Stays exactly the same', 'Changes by one character', 'Becomes shorter', 'Changes completely'], c: 3, why: 'This is the avalanche effect. Any change gives a completely different hash.' },
    { q: 'Why should websites store a hash of your password instead of the password?', a: ['So they can email your password back to you', 'So logging in takes longer', "So a leaked database doesn't reveal the real passwords", 'Because hashes use less electricity'], c: 2, why: "Hashes can't be turned back into passwords, so a leak does far less damage." },
    { q: 'Which hash function should NOT be trusted for security today?', a: ['SHA-256', 'MD5', 'SHA-3', 'bcrypt'], c: 1, why: 'MD5 is broken: different files can be made with the same MD5 hash.' }
  ]
});

BBB.chapters.push({
  id: 'cy-4', track: 'cyber',
  title: 'Passwords that hold',
  topic: 'Passwords, MFA and passkeys',
  minutes: 8,
  story: [
    ['n', "In the afternoon, Meera from Riya's class runs up, nearly in tears. Her game account has been taken over, and someone is sending rude messages to her friends from it."],
    ['riya', 'Did you share your password with anyone?'],
    ['n', '“No!” says Meera. “But... I use the same password everywhere. Even on that old gaming forum.”'],
    ['dev', "That forum was hacked last year, and its passwords leaked. Attackers take leaked lists of emails and passwords and try them on every other website. It's called credential stuffing. Nobody guessed Meera's password. They already had it."],
    ['arjun', 'So one leak opened every door she had.'],
    ['riya', 'Because every door had the same key.'],
    ['dev', "Let's get her account back, change her passwords, and add a second lock. Then let's learn to make passwords that actually hold."]
  ],
  learn: [
    { h: 'Three kinds of proof' },
    { p: 'To prove who you are, you can use three different kinds of proof, called <b>authentication factors</b>:' },
    { table: { head: ['Factor', 'What it is', 'Examples'], rows: [
      ['Something you know', 'A secret in your head', 'Password, PIN, passphrase'],
      ['Something you have', 'An object you own', 'Your phone, a security key, a bank card'],
      ['Something you are', 'A part of your body', 'Fingerprint, face, voice']
    ] } },
    { p: '<b>Multi-factor authentication (MFA)</b> means using two or more <em>different kinds</em> of proof. A password plus a PIN is still only “something you know”.' },
    { h: 'How passwords are stolen or cracked, and the defence' },
    { table: { head: ['Attack', 'What happens', 'Defence'], rows: [
      ['Guessing', 'Trying common passwords like 123456, or a name plus a birthday', 'Never use personal details or common words on their own'],
      ['Brute force', 'Trying every possible combination, one after another', 'Long passwords; logins that lock or slow down after failed tries'],
      ['Dictionary attack', 'Trying huge lists of real words and passwords from old leaks', 'Random passphrases; never use a password that has leaked'],
      ['Credential stuffing', 'Trying leaked email-and-password pairs on other websites', 'A different password for every account'],
      ['Shoulder surfing', 'Watching you type', 'Cover the keypad and screen'],
      ['Keylogger', 'Malware that records every key you press', 'Updates, antivirus, no cracked software, MFA']
    ] } },
    { h: 'Length beats complexity' },
    { p: 'Every extra character multiplies the number of guesses an attacker needs. A <b>passphrase</b> of four or five random words, like <code>river candle orbit pepper</code>, is easier to remember and far harder to crack than a short jumble like <code>P@ss1!</code>. Avoid famous quotes and song lines: they are in attackers\' word lists too.' },
    { h: 'Password managers' },
    { p: 'A <b>password manager</b> is an app that creates a strong, different password for every site and remembers them all for you. You only remember one strong master password. Most browsers and phones have one built in.' },
    { h: 'Types of MFA' },
    { table: { head: ['Method', 'Good', 'Watch out'], rows: [
      ['SMS OTP', 'Much better than a password alone', 'You can be tricked into sharing it, and criminals can do a <b>SIM swap</b>: getting your number moved onto their SIM card'],
      ['Authenticator app codes', 'Codes are made on your phone, not sent by SMS', 'You can still be tricked into typing the code into a fake site'],
      ['Push approval', 'Easy: just tap Approve', "<b>Push fatigue</b>: attackers send request after request, hoping you'll tap Approve to make it stop. Never approve a login you didn't start."],
      ['Hardware security key', 'Very strong. It checks the real website, so it resists phishing', 'Costs money; keep a backup key'],
      ['Biometrics', 'Quick and convenient', "You can't change your fingerprint if it is copied. Usually it just unlocks a key stored on your device."]
    ] } },
    { h: 'Passkeys' },
    { p: 'A <b>passkey</b> replaces the password completely. Your device makes a key pair for each website: the private key stays on your device and is unlocked with your fingerprint, face or PIN. There is no password to leak, and nothing to type into a fake site. More and more big websites support passkeys.' },
    { h: 'Look after recovery, and watch for leaks' },
    { ul: [
      'Keep your recovery email and phone number up to date, and save backup codes somewhere safe.',
      'Recovery options are a back door: an attacker who controls your old email can reset everything else.',
      'Turn on breach alerts in your browser or password manager, and change any password that shows up in a leak.',
      'Never share a password, not even with a best friend.'
    ] }
  ],
  analogy: {
    title: 'Think of it like the keys to your home',
    text: "Passwords are keys. The question is how many doors one key opens.",
    map: [
      ['One key for your house, locker and bicycle', 'Reusing one password everywhere'],
      ['A thief copies one key and opens everything', 'Credential stuffing'],
      ['A long, unusual key that is hard to copy', 'A long passphrase'],
      ['A key ring that makes a new key for every lock', 'A password manager'],
      ['A door that also needs your fingerprint', 'Multi-factor authentication']
    ]
  },
  toy: 'password',
  words: [
    ['Authentication factor', 'A kind of proof of identity: something you know, have, or are.'],
    ['MFA', 'Multi-factor authentication: using two or more different kinds of proof to log in.'],
    ['Brute-force attack', 'Trying every possible password until one works.'],
    ['Dictionary attack', 'Trying long lists of common words and previously leaked passwords.'],
    ['Credential stuffing', 'Trying leaked usernames and passwords from one site on many other sites.'],
    ['Passphrase', 'A password made of several random words. Long, strong and easy to remember.'],
    ['Password manager', 'An app that creates and remembers a strong, unique password for every account.'],
    ['SIM swap', 'A fraud where a criminal gets your phone number moved onto their SIM card to receive your OTPs.'],
    ['Passkey', 'A login method that replaces passwords with a key stored on your device.']
  ],
  quiz: [
    { q: "Meera's account was taken over because...", a: ['Her password was too long', 'She reused a password that had leaked from another site', 'She used a password manager', 'Her phone was new'], c: 1, why: 'Credential stuffing: attackers tried her leaked password on other sites, and it worked.' },
    { q: 'Which password is strongest?', a: ['P@ss1!', 'Riya2012', 'river candle orbit pepper (used only on this site)', 'password123'], c: 2, why: 'Long, random and unique beats short and complicated.' },
    { q: "Your phone shows a login approval request, but you aren't logging in. What should you do?", a: ['Tap Approve so it stops', 'Ignore it forever', 'Turn your phone off for a day', 'Deny it, then change your password'], c: 3, why: 'Someone has your password and is hoping you will approve by mistake.' },
    { q: 'Why is a password plus a fingerprint called MFA?', a: ['They are two different kinds of proof', 'Fingerprints are longer than passwords', 'Passwords are always weak', 'It uses the internet'], c: 0, why: 'Something you know plus something you are: two different factors.' }
  ]
});

BBB.chapters.push({
  id: 'cy-5', track: 'cyber',
  title: 'A zoo of malware',
  topic: 'Types of malware and how to beat them',
  minutes: 7,
  story: [
    ['n', 'Just before the semi-final, the scoreboard PC starts acting strangely. Its fan roars, pop-up ads appear, and the antivirus icon has vanished from the taskbar.'],
    ['riya', 'Who used this PC?'],
    ['arjun', "Some boys from the other team were on it during lunch. One of them said he was installing “free game cheats”..."],
    ['dev', "Free cheats are one of the oldest tricks there is. The cheat seems to work, while something else installs quietly in the background. Pull the network cable out. Now."],
    ['n', 'Riya unplugs the cable. The fan keeps roaring.'],
    ['dev', "Good. Now it can't spread to the other 39 PCs, or send anything out. Let's find out what kind of creature we've caught."],
    ['riya', 'There are different kinds?'],
    ['dev', 'A whole zoo.']
  ],
  learn: [
    { p: 'Malware is any software made to cause harm. Different kinds behave very differently, so it helps to know the animals in the zoo:' },
    { table: { head: ['Type', 'What it does'], rows: [
      ['Virus', 'Attaches itself to normal files or programs, and spreads when they are run or shared.'],
      ['Worm', 'Spreads by itself across networks, without anyone opening anything, often through unpatched weaknesses.'],
      ['Trojan', 'Pretends to be something useful, like a game, a cheat or a free app, but hides harmful code inside.'],
      ['Ransomware', 'Locks or encrypts your files and demands money to unlock them. Paying does not guarantee you get them back.'],
      ['Spyware', 'Secretly watches what you do and sends it to someone else.'],
      ['Adware', 'Floods you with unwanted ads, and often changes your browser settings.'],
      ['Keylogger', 'Records every key you press, including your passwords.'],
      ['Rootkit', 'Hides deep inside the operating system, so it and other malware can stay hidden.'],
      ['Botnet', 'A network of infected devices (bots) that a criminal controls together, often used for spam or flooding attacks.'],
      ['Cryptojacker', "Secretly uses your computer's power to mine cryptocurrency, making it hot and slow."]
    ] } },
    { h: 'How it gets in' },
    { ul: [
      'Email attachments and links.',
      'Cracked or pirated software, key generators and game cheats.',
      'Fake apps, and APK files installed from outside the official app store (called <b>side-loading</b>).',
      'Infected USB drives.',
      'Malicious ads and fake “Download” buttons.',
      'Unpatched software with known weaknesses.'
    ] },
    { h: 'Signs a device might be infected' },
    { ul: [
      'Suddenly slow, hot, or with a loud fan when it should be idle.',
      'Pop-ups, new toolbars, or a browser home page that changed by itself.',
      'Antivirus switched off without you doing it.',
      'Strange new programs starting with the computer.',
      "Friends receiving messages you didn't send.",
      'Battery or mobile data being used up much faster than usual.',
      "Files renamed, or files that suddenly won't open."
    ] },
    { tip: "These signs can have innocent causes too. They are a reason to check, not to panic." },
    { h: 'Protection' },
    { ul: [
      'Keep the operating system and every app updated.',
      'Keep antivirus switched on. Windows Security is built in. Companies use <b>EDR</b> (endpoint detection and response), which watches how programs behave, not just known files.',
      'Never install cracked software or cheats.',
      'Install apps only from official stores, and check the permissions they ask for.',
      'Use a normal, non-administrator account every day (least privilege again).',
      "Keep backups, including one that is offline, so ransomware can't hold your files hostage."
    ] },
    { h: 'If you think you are infected' },
    { ol: [
      "<b>Disconnect</b> from the network (cable out, Wi-Fi off), so it can't spread or send your data out.",
      "Don't log in to anything important on that device.",
      '<b>Scan</b> with up-to-date antivirus. For stubborn infections, Windows Security offers an offline scan that runs before Windows starts.',
      'From a <b>clean</b> device, change your important passwords and check that MFA is on.',
      'If needed, <b>restore</b> from a clean backup or reinstall the operating system.',
      '<b>Report</b> it: tell the person in charge of IT. If money was lost or files were held for ransom, report it on the national cyber crime helpline <b>1930</b> or at <b>cybercrime.gov.in</b>.'
    ] }
  ],
  analogy: {
    title: 'Think of it like germs and uninvited guests',
    text: 'Each kind of malware gets in and causes harm in its own way.',
    map: [
      ['A cold that spreads when people share a cup', 'Virus'],
      ['A cold that spreads through the air by itself', 'Worm'],
      ['A gift box with a thief hiding inside', 'Trojan'],
      ['A kidnapper who locks your cupboard and demands money', 'Ransomware'],
      ['A stranger reading your diary over your shoulder', 'Spyware or keylogger'],
      ['Washing hands and getting vaccinated', 'Updates and antivirus']
    ]
  },
  diagram: { flow: [
    { t: 'Disconnect', s: 'cable out, Wi-Fi off' },
    { t: 'Scan', s: 'up-to-date antivirus' },
    { t: 'Change passwords', s: 'from a clean device' },
    { t: 'Restore', s: 'from a clean backup' },
    { t: 'Report', s: 'IT, 1930, cybercrime.gov.in' }
  ], note: 'What to do if a device is infected, in order.' },
  words: [
    ['Virus', 'Malware that attaches to files or programs and spreads when they are run or shared.'],
    ['Worm', 'Malware that spreads across networks by itself.'],
    ['Trojan', 'Malware disguised as something useful, like a free game or cheat.'],
    ['Ransomware', 'Malware that locks your files and demands payment.'],
    ['Spyware', 'Malware that secretly watches what you do.'],
    ['Keylogger', 'Malware or a device that records every key you press.'],
    ['Rootkit', 'Malware that hides deep in the operating system to stay invisible.'],
    ['Botnet', 'A group of infected devices controlled together by a criminal.'],
    ['EDR', 'Endpoint detection and response: security software that watches for suspicious behaviour on devices.']
  ],
  quiz: [
    { q: 'A “free game cheat” that secretly installs something harmful is a...', a: ['Worm', 'Trojan', 'Firewall', 'Patch'], c: 1, why: 'A Trojan pretends to be something you want, and hides the harm inside.' },
    { q: 'Malware that locks your files and demands money is called...', a: ['Adware', 'Spyware', 'A cookie', 'Ransomware'], c: 3, why: 'Ransomware holds your files hostage for a ransom.' },
    { q: 'What should you do FIRST if you think a PC is infected?', a: ['Disconnect it from the network', 'Post about it online', 'Install more games', 'Pay whoever is asking'], c: 0, why: 'Disconnecting stops it spreading to other devices and sending your data out.' },
    { q: 'Which kind spreads across a network by itself, without anyone opening a file?', a: ['Trojan', 'Adware', 'Worm', 'Keylogger'], c: 2, why: 'Worms spread on their own, often through devices that are missing updates.' }
  ]
});

BBB.chapters.push({
  id: 'cy-6', track: 'cyber',
  title: 'Tricks and traps',
  topic: 'Social engineering and common scams',
  minutes: 8,
  story: [
    ['n', "That evening, back home, Grandpa's phone rings. A polite voice says he is calling from Grandpa's bank."],
    ['grandpa', "Riya, the bank says my account will be blocked today unless I update my KYC. They've sent me an OTP. They just need me to read it out."],
    ['riya', "Grandpa, stop! Don't read it. Put the phone down."],
    ['grandpa', 'But he knew my name. And the last four digits of my card!'],
    ['riya', "Scammers can find those out. A real bank never asks for your OTP. Never. Let's hang up and call the bank ourselves."],
    ['n', "They call the number printed on the back of Grandpa's card. The bank says nothing is wrong with his account, and nobody from the bank had called him."],
    ['grandpa', "I would have given him everything... and he was so friendly."],
    ['dev', "That's the trick. These attacks don't break computers. They break trust. It's called social engineering, and the cure is knowing the tricks."]
  ],
  learn: [
    { p: '<b>Social engineering</b> means tricking people, rather than computers, into giving away information, money or access. Attackers play on feelings: <b>fear</b> (“your account will be blocked”), <b>hurry</b> (“today only”), <b>greed</b> (“you have won a prize”), <b>trust</b> (“I am from your bank”) and <b>kindness</b> (“please, I need help”).' },
    { h: 'Kinds of phishing' },
    { table: { head: ['Name', 'How it arrives'], rows: [
      ['Phishing', 'A fake email or message, sent to many people, that tricks you into clicking, opening a file or giving details.'],
      ['Spear phishing', 'A phishing message aimed at one person, using real details about them so it feels genuine.'],
      ['Whaling', 'Spear phishing aimed at a “big fish”: a boss, a principal or a company director.'],
      ['Smishing', 'Phishing by SMS text message.'],
      ['Vishing', "Phishing by voice: a phone call, like the one Grandpa got."],
      ['Quishing', 'Phishing with a QR code that leads to a fake website or a payment request.']
    ] } },
    { h: 'Other tricks' },
    { ul: [
      '<b>Pretexting:</b> inventing a believable story, like a “bank officer”, “courier” or “police officer”, to make you act.',
      '<b>Impersonation:</b> pretending to be someone you know, such as a message “from” a relative with a new number asking for money.',
      '<b>Baiting:</b> leaving an infected USB stick labelled “Exam answers” for someone curious to plug in.',
      '<b>Tailgating:</b> following an allowed person through a locked door.',
      '<b>Shoulder surfing:</b> watching over your shoulder as you type a PIN or password.'
    ] },
    { h: 'Common scams in India, and the truth' },
    { table: { head: ['The scam', 'The truth'], rows: [
      ['“Update your KYC now or your account will be blocked”', "Banks don't block accounts over a phone call or an SMS link. Use the official app or visit the branch."],
      ['Fake customer-care numbers found online', 'Scammers post fake helpline numbers in search results and maps. Take numbers only from the official website, the official app, or the back of your card.'],
      ['A UPI “collect request” so you can “receive” money', '<b>You never need your UPI PIN to receive money.</b> Entering your PIN always sends money out.'],
      ['“Install this app so I can help you”', 'Screen-sharing and remote-access apps let a stranger see your screen, OTPs and passwords. Never install one because a caller asks.'],
      ['Easy work-from-home or “task” jobs', 'You are paid small amounts for liking videos, then asked to “invest” to unlock bigger earnings. That money never comes back.'],
      ['“Digital arrest” video calls', 'Police, courts and government agencies never arrest anyone on a video call, or ask for money to “clear your name”.'],
      ['“Share the OTP to cancel the order”', 'An OTP is for you alone. Anyone asking for it is trying to get into your account.']
    ] } },
    { h: 'What to do' },
    { ol: [
      "<b>Stop.</b> Don't let fear or hurry push you.",
      "<b>Hang up</b>, or don't reply.",
      '<b>Check</b> by calling the official number yourself: from your card, or the official website or app.',
      "<b>Never share</b> an OTP, PIN, CVV or password, and never install an app because a caller asks you to.",
      '<b>If money was lost,</b> call your bank immediately to block your cards and accounts, and report it at once on the national cyber crime helpline <b>1930</b> or at <b>cybercrime.gov.in</b>. The faster you report, the better the chance of stopping the money.',
      '<b>Tell your family,</b> especially older relatives. Scammers often target them.'
    ] },
    { warn: 'If a message or call makes you feel scared, rushed or excited, that feeling is the warning sign. Slow down and check.' }
  ],
  analogy: {
    title: 'Think of it like a con artist at the door',
    text: "Social engineers don't pick the lock. They talk you into opening the door.",
    map: [
      ['A man in a fake uniform saying he is from the electricity board', 'Pretexting and impersonation'],
      ['“Quick, this offer ends in five minutes!”', 'Creating hurry and panic'],
      ['A free gift left on your doorstep with a hidden catch', 'Baiting'],
      ['Following a resident through the society gate', 'Tailgating'],
      ['Calling the electricity office yourself to check', 'Calling the official number back']
    ]
  },
  diagram: { flow: [
    { t: 'Stop', s: "don't rush" },
    { t: 'Hang up', s: "don't reply" },
    { t: 'Check', s: 'call the official number' },
    { t: 'Protect', s: 'never share an OTP or PIN' },
    { t: 'Report', s: '1930 or cybercrime.gov.in' }
  ], note: 'Five steps that beat almost every scam.' },
  words: [
    ['Social engineering', 'Tricking people into giving away information, money or access.'],
    ['Spear phishing', 'A phishing message aimed at one person, using real details about them.'],
    ['Whaling', 'Spear phishing aimed at an important person, like a boss or director.'],
    ['Smishing', 'Phishing by SMS text message.'],
    ['Vishing', 'Phishing by phone call.'],
    ['Quishing', 'Phishing using a QR code.'],
    ['Pretexting', 'Inventing a believable story to trick someone into acting.'],
    ['Baiting', 'Leaving something tempting, like a USB stick, to trick someone into using it.'],
    ['Tailgating', 'Following an allowed person through a locked door.']
  ],
  quiz: [
    { q: 'A caller “from your bank” asks for the OTP you just received. You should...', a: ['Read it out quickly', "Hang up, and call the bank's official number yourself", 'Send it by SMS instead', 'Share only the first three digits'], c: 1, why: 'A real bank never asks for your OTP. Hang up and check using a number you trust.' },
    { q: 'Do you need to enter your UPI PIN to RECEIVE money?', a: ['Yes, always', 'Only for big amounts', 'Never. Entering your PIN sends money out', 'Only at night'], c: 2, why: 'Receiving money never needs your PIN. A request for your PIN means money will leave your account.' },
    { q: 'A USB stick labelled “Exam answers” left in the corridor is an example of...', a: ['Baiting', 'Tailgating', 'Vishing', 'Whaling'], c: 0, why: 'Baiting uses curiosity: plug it in, and it may install malware.' },
    { q: 'Someone on a video call says you are under “digital arrest” and must pay. This is...', a: ['A normal police process', 'A court order', 'A real arrest', 'A scam'], c: 3, why: 'There is no such thing as a digital arrest. Hang up and report it on 1930.' }
  ]
});

BBB.chapters.push({
  id: 'cy-7', track: 'cyber',
  title: 'Attacks on the network',
  topic: 'How network and web attacks work, and their defences',
  minutes: 8,
  story: [
    ['n', 'Day two of the fest. The “TechFest_Free” Wi-Fi is still there, and a few visitors have joined it because it had no password.'],
    ['arjun', 'It has almost the same name as ours. Why would anyone make a free copy?'],
    ['dev', "Because whoever runs it sits in the middle of everything those people send. It's called an evil twin. Every page they open passes through the attacker's device first."],
    ['riya', 'And yesterday, when our real Wi-Fi slowed down... was that the same person?'],
    ['dev', 'Probably. Flood the real network, and people go looking for another one. Two attacks working together.'],
    ['n', "Riya opens a Wi-Fi analyser app on her phone. The fake network's signal is strongest near the back of the hall. Behind a stall, the teachers find a small battery-powered device hidden in a bag. They switch it off and take it straight to the principal."],
    ['riya', 'One hidden box. How many other kinds of attack are there?'],
    ['dev', 'Plenty. But every single one of them has a defence.']
  ],
  learn: [
    { p: "Network attacks target the connections between devices, or the services running on them. A guardian doesn't need to know how to carry them out, but must know what each one does, and how to stop it." },
    { table: { head: ['Attack', 'What it does', 'Defence'], rows: [
      ['DoS / DDoS', "Floods a website or network with so much traffic that real users can't get through. A DDoS (distributed denial of service) uses many devices at once, often a botnet.", 'Traffic filtering, spare capacity, DDoS protection services from ISPs and cloud companies'],
      ['Man-in-the-middle (MITM)', 'The attacker secretly sits between two sides, reading or changing what passes through.', 'HTTPS everywhere, a VPN on untrusted networks, never clicking past certificate warnings'],
      ['Evil-twin Wi-Fi', 'A fake access point with a real-looking name tricks people into connecting through it.', 'Join only networks you know, use WPA2 or WPA3 with a password, use a VPN on public Wi-Fi, wireless intrusion detection'],
      ['ARP spoofing', "On a local network, the attacker lies about which MAC address owns an IP address, such as the router's, so traffic goes to them first.", 'Managed switches with protections like Dynamic ARP Inspection, network segmentation, encryption'],
      ['DNS spoofing', 'Fake DNS answers send you to a fake website even though you typed the right name.', 'Trusted DNS resolvers, DNSSEC, checking the HTTPS certificate'],
      ['Port scanning', 'Checking which ports and services a device has open, looking for a way in. Often the first step of an attack, called <b>reconnaissance</b>.', 'Close unused ports, firewalls, intrusion detection that notices scans'],
      ['Brute-force login', 'Trying password after password on a login page.', 'Lockouts or delays after failed tries, MFA, strong passwords, alerts'],
      ['SQL injection', 'Typing database commands into a website form, so a badly built website runs them and reveals or changes data.', 'Developers use parameterised queries and check every input'],
      ['Cross-site scripting (XSS)', "Sneaking a harmful script into a web page so that it runs in other visitors' browsers.", 'Developers clean (escape) all user input and use security settings in the browser'],
      ['Zero-day exploit', "Uses a weakness the maker doesn't know about yet, so there is no fix. The maker has had “zero days” to prepare.", 'Defence in depth, updating quickly once a fix exists, behaviour-based detection'],
      ['Supply-chain attack', 'Attacks a trusted supplier, like a software update or a code library, so the harm arrives inside something you trust.', 'Download only from official sources, check hashes and signatures, keep a list of the software you use']
    ] } },
    { tip: 'Notice the pattern: most defences are the same few habits. Install updates, encrypt connections, use strong logins with MFA, close what you don\'t use, and watch for anything unusual.' },
    { warn: "Scanning, testing or attacking any network or website you don't own, without written permission, is a crime, even if you only wanted to see what would happen. Practise only in your own lab. There's more about this in the last chapter." }
  ],
  analogy: {
    title: 'Think of it like threats to a post office',
    text: 'The post office from Part 2 has enemies too.',
    map: [
      ['Thousands of fake letters jamming the post office', 'DDoS attack'],
      ['A postman who secretly opens and reseals your letters', 'Man-in-the-middle'],
      ['A fake post box painted to look real', 'Evil-twin Wi-Fi'],
      ['Swapping street signs so letters go to the wrong house', 'DNS spoofing'],
      ['Walking down the street trying every door handle', 'Port scanning'],
      ["Poisoned sweets inside a trusted shop's sealed packets", 'Supply-chain attack']
    ]
  },
  diagram: { flow: [
    { t: "Visitor's phone", s: 'joins “TechFest_Free”' },
    { t: "Attacker's device", s: 'sees all the traffic' },
    { t: 'Real internet', s: 'pages still load normally' }
  ], note: "An evil twin. Everything looks normal to the visitor, which is what makes it dangerous. HTTPS still keeps the contents of secure websites private." },
  words: [
    ['DDoS', 'Distributed denial of service: flooding a service from many devices so real users cannot reach it.'],
    ['Man-in-the-middle attack', 'An attacker secretly sitting between two sides, reading or changing their traffic.'],
    ['Evil twin', 'A fake Wi-Fi access point with a real-looking name.'],
    ['ARP spoofing', 'Lying about MAC addresses on a local network to redirect traffic.'],
    ['DNS spoofing', 'Giving fake DNS answers to send people to a fake website.'],
    ['Port scanning', 'Checking which ports and services a device has open.'],
    ['SQL injection', 'Tricking a badly built website into running database commands typed into a form.'],
    ['Cross-site scripting (XSS)', "Sneaking a harmful script into a web page so it runs in other visitors' browsers."],
    ['Zero-day', 'A weakness the maker does not know about yet, so no fix exists.']
  ],
  quiz: [
    { q: 'A fake Wi-Fi network with a real-looking name is called...', a: ['An evil twin', 'A botnet', 'A rootkit', 'A patch'], c: 0, why: 'An evil twin copies a real network so people connect through the attacker.' },
    { q: "Thousands of devices flood a website so real users can't reach it. This is...", a: ['SQL injection', 'Phishing', 'A DDoS attack', 'Hashing'], c: 2, why: 'A distributed denial of service attack breaks the promise of availability.' },
    { q: 'A “zero-day” is...', a: ['A day with no internet', 'A free trial of an app', 'An antivirus program', "A weakness the maker doesn't know about yet"], c: 3, why: 'The maker has had zero days to fix it, because they do not know it exists.' },
    { q: 'What protects you best on public Wi-Fi?', a: ['Turning up the screen brightness', 'Using HTTPS websites and a trusted VPN', 'Sharing your password with the café', 'Closing the laptop lid halfway'], c: 1, why: 'Encryption keeps your traffic private even if someone is in the middle.' }
  ]
});

BBB.chapters.push({
  id: 'cy-8', track: 'cyber',
  title: 'Building the walls',
  topic: 'Firewalls, monitoring and incident response',
  minutes: 8,
  story: [
    ['n', 'After the fest, the principal asks Uncle Dev, Riya and Arjun to make sure the school network can never be attacked like that again.'],
    ['riya', 'So we just switch the firewall on?'],
    ['dev', "A firewall is one wall. We need a whole fort: walls, guards, cameras, and a plan for the day something still gets through. And a firewall needs good rules, or it's a gate left wide open."],
    ['arjun', 'How many rules?'],
    ['dev', 'Few, clear, and in the right order. And the last rule is always the same: if it is not allowed, it is blocked.'],
    ['riya', 'Default deny.'],
    ['dev', "Exactly. Let's design the school's walls, and write the plan for when something gets in anyway."]
  ],
  learn: [
    { h: 'Kinds of firewall' },
    { table: { head: ['Type', 'How it decides'], rows: [
      ['Packet-filtering firewall', 'Looks at each packet on its own: where it is from, where it is going, the port and the protocol. Fast but simple.'],
      ['Stateful firewall', 'Remembers conversations. A reply is let in only if someone inside started that conversation.'],
      ['Next-generation firewall (NGFW)', 'Also understands which app is being used, can look inside traffic for threats, and can filter websites by category.'],
      ['Host-based firewall', 'Runs on one device, like Windows Defender Firewall, and protects only that device.'],
      ['Network firewall', 'A separate box, or part of the router, that protects a whole network.']
    ] } },
    { h: 'Firewall rules' },
    { ul: [
      'Rules are checked from <b>top to bottom</b>, and the <b>first rule that matches wins</b>. So specific rules go above general ones.',
      'Each rule says <b>allow</b> or <b>deny</b>, for a source, a destination, a port and a protocol.',
      'The last rule should be “deny everything else”. This is called <b>default deny</b>.',
      'Allow only what is truly needed: least privilege again.',
      'Review the rules regularly, and remove old ones nobody needs.'
    ] },
    { h: 'More walls and guards' },
    { table: { head: ['Tool', 'What it does'], rows: [
      ['DMZ (demilitarised zone)', 'A separate zone for servers the public must reach, like the school website. If one is hacked, the attacker is still outside the main network.'],
      ['IDS (intrusion detection system)', 'Watches traffic and raises an alarm when it sees something suspicious. It only warns.'],
      ['IPS (intrusion prevention system)', 'Like an IDS, but it can also block the suspicious traffic by itself.'],
      ['Segmentation and VLANs', "Splits the network into separate parts, such as students, staff, cameras and guests. A problem in one part can't easily reach the others."],
      ['Patch management', 'Installing security updates on every device on a regular schedule, and checking it actually happened.'],
      ['Hardening', 'Changing default passwords, switching off unused services and ports, and removing software nobody needs.']
    ] } },
    { h: 'Watching: logs, SIEM and the SOC' },
    { p: 'Devices keep <b>logs</b>: records of logins, errors and blocked traffic. A <b>SIEM</b> (security information and event management) system collects logs from everywhere, connects the dots, and alerts on suspicious patterns. In big organisations, a <b>SOC</b> (security operations centre) is the team that watches those alerts day and night and responds to them.' },
    { h: 'Backups: the last wall' },
    { p: 'If everything else fails, good backups, including one kept offline, mean you can still recover, even from ransomware.' },
    { h: 'When something gets through: incident response' },
    { ol: [
      '<b>Preparation:</b> plans, contacts, tools and training ready before anything happens.',
      '<b>Identification:</b> notice and confirm the incident. What happened, when, and what is affected?',
      '<b>Containment:</b> stop it spreading. Unplug, block or isolate.',
      "<b>Eradication:</b> remove the cause: the malware, the attacker's access, the weakness they used.",
      "<b>Recovery:</b> restore systems and data, and watch closely to make sure the problem doesn't return.",
      '<b>Lessons learned:</b> write down what happened, and improve, so it does not happen again.'
    ] }
  ],
  analogy: {
    title: 'Think of it like a fort',
    text: 'A safe network is built like an old fort: walls, gates, guards and lookouts.',
    map: [
      ['A gate guard with a list of who may enter', 'Firewall rules'],
      ['“Not on the list? You are not coming in.”', 'Default deny'],
      ["A visitors' room outside the inner walls", 'DMZ'],
      ['Watchtowers that sound an alarm', 'IDS'],
      ['Guards who can lock the gates at once', 'IPS'],
      ['Separate buildings, each with its own lock', 'Segmentation and VLANs']
    ]
  },
  diagram: { stack: [
    { t: 'Preparation', s: 'plans, tools and training, ready in advance' },
    { t: 'Identification', s: 'what happened, and what is affected?' },
    { t: 'Containment', s: 'stop it spreading' },
    { t: 'Eradication', s: 'remove the cause' },
    { t: 'Recovery', s: 'restore, and keep watching' },
    { t: 'Lessons learned', s: 'improve for next time' }
  ], note: 'The six steps of incident response, in order.' },
  toy: 'firewall',
  words: [
    ['Packet-filtering firewall', 'A firewall that checks each packet on its own, by address, port and protocol.'],
    ['Stateful firewall', 'A firewall that remembers conversations and only lets in replies to them.'],
    ['Next-generation firewall', 'A firewall that also understands apps and looks inside traffic for threats.'],
    ['Default deny', 'Blocking everything that is not specifically allowed.'],
    ['DMZ', 'A separate network zone for servers the public can reach.'],
    ['IDS / IPS', 'Intrusion detection system (warns) and intrusion prevention system (warns and blocks).'],
    ['SIEM', 'A system that collects logs from everywhere and alerts on suspicious patterns.'],
    ['SOC', 'Security operations centre: the team that watches and responds to security alerts.'],
    ['Incident response', 'The planned steps for handling a security incident, from preparation to lessons learned.']
  ],
  quiz: [
    { q: 'How are firewall rules checked?', a: ['All at the same time', 'From top to bottom; the first match wins', 'In a random order', 'From bottom to top'], c: 1, why: 'Order matters. The first matching rule decides, so specific rules go first.' },
    { q: 'What does “default deny” mean?', a: ['Anything not allowed by a rule is blocked', 'Everything is allowed', 'Only the principal can log in', 'The firewall is switched off'], c: 0, why: 'If no rule allows it, it is blocked. The safest last rule.' },
    { q: 'What is the difference between an IDS and an IPS?', a: ['They are exactly the same', 'An IPS only works on Wi-Fi', 'An IDS only warns; an IPS can also block', 'An IDS is a kind of virus'], c: 2, why: 'Detection systems raise alarms. Prevention systems can also stop the traffic.' },
    { q: 'In incident response, which step comes right after Identification?', a: ['Lessons learned', 'Recovery', 'Preparation', 'Containment'], c: 3, why: 'Once you know what is happening, the first job is to stop it spreading.' }
  ]
});

BBB.chapters.push({
  id: 'cy-9', track: 'cyber',
  title: 'Your digital footprint',
  topic: 'Privacy, tracking and your rights',
  minutes: 8,
  story: [
    ['n', 'On Sunday, Riya finally posts a photo from the fest: the whole team, holding the trophy for the best-run event. Within minutes, Arjun messages her.'],
    ['arjun', 'Nice photo! But your school name is on your T-shirt, the photo shows your building gate, and your profile is public. Anyone could work out where you live.'],
    ['riya', "Oh. I didn't even think of that."],
    ['dev', "Most people don't. Every photo, like, search and app you use leaves a trace. Together they make your digital footprint. And unlike footprints in the sand, the tide doesn't wash these away."],
    ['riya', 'So should I just stop posting?'],
    ['dev', "No. Just decide who gets to see what. Let's go through your settings together."]
  ],
  learn: [
    { p: 'Your <b>digital footprint</b> is the trail of information you leave online. Your <b>active footprint</b> is what you choose to share: posts, photos, comments. Your <b>passive footprint</b> is collected without you noticing: your location, your searches, what you click and how long you look.' },
    { h: 'What gets collected' },
    { p: 'Apps and websites may collect your name, age, contacts, location history, photos, what you search, watch and buy, how long you look at each post, your device and your IP address. This is used to show you ads and recommendations, and is sometimes shared with or sold to other companies.' },
    { h: 'Cookies and trackers' },
    { ul: [
      'A <b>cookie</b> is a small file a website saves in your browser, for example to keep you logged in or remember your cart.',
      '<b>First-party</b> cookies come from the site you are visiting.',
      '<b>Third-party</b> cookies and trackers come from other companies, usually advertisers, and can follow you from site to site to build a profile of you.',
      'You can block third-party cookies in your browser settings, and choose “Reject” on cookie banners.'
    ] },
    { h: 'App permissions' },
    { table: { head: ['Permission', 'Ask yourself'], rows: [
      ['Location', 'Does a calculator really need to know where I am? Choose “only while using the app”, or deny.'],
      ['Contacts', "Sharing your contacts shares your friends' numbers too, without asking them."],
      ['Microphone and camera', 'Only for apps that truly need them, like video calls.'],
      ['Photos and files', 'Where your phone allows it, share only selected photos.']
    ] } },
    { tip: "Check app permissions every few months and take back anything that isn't needed. Delete apps you no longer use." },
    { h: 'Oversharing' },
    { ul: [
      'Photos can contain hidden <b>location data</b> (GPS details stored inside the photo file). Many phones let you switch this off, or remove it when sharing.',
      'Check the background: school uniforms, house numbers, vehicle number plates, boarding passes, ID cards.',
      "Don't post that you're away on holiday until you're back home.",
      'Once something is posted, screenshots and copies can last forever, even if you delete it.'
    ] },
    { h: 'Incognito mode is not invisible' },
    { table: { head: ['Private or incognito mode DOES', 'Private or incognito mode does NOT'], rows: [
      ["Avoid saving your history, cookies and form entries on that device once you close the window", 'Hide what you do from your school, office or internet provider'],
      ['Log you out when you close the window', 'Hide you from the websites you visit'],
      ['Help on a shared computer', 'Protect you from malware or phishing']
    ] } },
    { h: 'Public Wi-Fi and data breaches' },
    { ul: [
      'On café, station or airport Wi-Fi, stick to HTTPS websites, avoid banking, switch off auto-join and file sharing, and consider a trusted VPN.',
      'If a service you use reports a <b>data breach</b>, change that password (and anywhere you reused it), turn on MFA, and watch out for phishing that uses the leaked details.'
    ] },
    { h: 'Your rights in India' },
    { p: "India's <b>Digital Personal Data Protection Act, 2023</b> (DPDP Act) says organisations generally need your <b>consent</b> to use your personal data, and must keep it safe. You have the right to ask what data they hold about you, and to have it <b>corrected</b> or <b>erased</b>. For children under 18, a parent's or guardian's consent is needed." },
    { h: 'Cyberbullying' },
    { ul: [
      "Don't reply in anger.",
      'Take screenshots as evidence.',
      'Block and report the person on the platform.',
      'Tell a parent, teacher or another trusted adult.',
      'Serious cases can be reported at cybercrime.gov.in.'
    ] }
  ],
  analogy: {
    title: 'Think of it like footprints in wet cement',
    text: 'Footprints in sand wash away. Footprints in wet cement stay forever.',
    map: [
      ['Footprints you choose to leave', 'Active footprint (your posts)'],
      ["Footprints you don't notice leaving", 'Passive footprint (tracking)'],
      ['A shopkeeper who follows you into every other shop', 'Third-party trackers'],
      ['Cement that has already set', "Posts that can't be fully deleted"],
      ['Curtains you can open or close', 'Privacy settings']
    ]
  },
  words: [
    ['Digital footprint', 'The trail of information you leave online, on purpose or without noticing.'],
    ['Cookie', 'A small file a website stores in your browser, for example to keep you logged in.'],
    ['Third-party tracker', 'A cookie or script from another company that follows you across websites.'],
    ['App permission', 'Access you give an app to things like your location, contacts, camera or microphone.'],
    ['Geotag', 'Hidden location data stored inside a photo file.'],
    ['Incognito mode', 'A private browser window that does not save history on the device. It does not make you invisible.'],
    ['Data breach', "When a company's data is stolen or leaked."],
    ['DPDP Act, 2023', "India's Digital Personal Data Protection Act, which gives people rights over their personal data."],
    ['Cyberbullying', 'Bullying through phones, games or social media.']
  ],
  quiz: [
    { q: 'What does incognito mode do?', a: ['Makes you invisible to your internet provider', "Doesn't save your history on the device after you close it", 'Blocks every virus', 'Hides you from the websites you visit'], c: 1, why: 'It only avoids saving things on that device. Websites, networks and providers can still see your activity.' },
    { q: 'A calculator app asks for your location and contacts. What is the best choice?', a: ['Allow everything so it works faster', 'Allow only contacts', "Deny both. A calculator doesn't need them", 'Share your password with it too'], c: 2, why: 'Give apps only the permissions they truly need.' },
    { q: "Under India's DPDP Act, 2023, a child's personal data generally needs...", a: ["A parent's or guardian's consent", 'Nothing at all', 'A police certificate', 'A paid subscription'], c: 0, why: 'For anyone under 18, a parent or guardian must give consent.' },
    { q: 'Which could reveal where you live in a photo you post?', a: ['A school uniform and building gate in the background', 'Hidden location data in the photo file', 'Your house number on the door', 'All of these'], c: 3, why: 'Backgrounds, visible numbers and hidden location data can all give your home away.' }
  ]
});

BBB.chapters.push({
  id: 'cy-10', track: 'cyber',
  title: 'Hackers with permission',
  topic: 'Ethical hacking, the law and careers',
  minutes: 9,
  story: [
    ['n', 'A month later, the school holds its first Capture the Flag (CTF) competition. Teams solve security puzzles, like decoding messages, finding clues hidden in files and spotting weaknesses in a practice website built just for the contest, to find secret codes called “flags”.'],
    ['arjun', 'We cracked the Caesar cipher flag in two minutes! And the hash one!'],
    ['riya', "Because we've done both for real. Look, the last puzzle is a login page with a weak password rule."],
    ['n', 'Team Riya and Arjun finish second out of twelve teams. Back home, Riya finds Grandpa in the store room, dusting the old grey computer.'],
    ['grandpa', 'You started all this with my old box, didn\'t you? Fixing it, building one, networks, and now hackers...'],
    ['riya', "Grandpa, I know what I want to be. A security engineer. The good kind of hacker. The kind who gets permission."],
    ['dev', 'The best kind. Attackers only need to find one way in. Guardians have to protect all of them.'],
    ['grandpa', "Then I'll be your first customer. Start by teaching me which calls to hang up on."],
    ['n', 'Riya presses the big round button. The old grey computer whirrs to life with one short beep, just like the first day. It all began with a box that would not wake up.']
  ],
  learn: [
    { h: 'Three kinds of hat' },
    { table: { head: ['Hat', 'Who they are', 'Legal?'], rows: [
      ['White hat', 'Ethical hackers who test systems with permission, to find and fix weaknesses.', 'Yes, with written permission'],
      ['Black hat', 'Criminals who break in without permission to steal, damage or spy.', 'No'],
      ['Grey hat', "Break in without permission but don't mean harm, and may report it afterwards.", "No. Good intentions don't make unauthorised access legal."]
    ] } },
    { h: 'Penetration testing' },
    { p: "A <b>penetration test</b> (pen test) is a planned, legal attack on a system by professionals hired by its owner, to find weaknesses before criminals do. In outline:" },
    { ol: [
      '<b>Permission and scope:</b> a written agreement saying exactly what may be tested, when and how. Nothing starts without it.',
      '<b>Reconnaissance:</b> gathering information about the target.',
      '<b>Scanning:</b> finding which systems, ports and services exist.',
      '<b>Exploitation:</b> carefully testing whether a weakness can really be used, without causing damage.',
      '<b>Reporting:</b> a clear report of every weakness found, how serious it is, and how to fix it. The report is the real result of the test.'
    ] },
    { h: 'Bug bounties and responsible disclosure' },
    { p: 'Many companies run <b>bug bounty</b> programmes. They publish rules, and reward people who find and report weaknesses in their systems. <b>Responsible disclosure</b> means reporting a weakness privately to the owner, and giving them time to fix it before telling anyone else. Always follow a programme\'s rules: testing outside them is still unauthorised.' },
    { h: 'The law' },
    { p: "Getting into a computer, account or network without permission is a crime, even if you only look and change nothing. In India, the <b>Information Technology Act, 2000</b> covers this. Section 43 deals with accessing or damaging computers without permission, and Section 66 makes those acts, when done dishonestly or fraudulently, a punishable offence. Other countries have similar laws." },
    { warn: 'The golden rule: <b>only test what you own, or what you have written permission to test.</b> “I was just curious” is not a defence.' },
    { h: 'Where to practise legally' },
    { ul: [
      '<b>CTF competitions:</b> puzzles in cryptography, web security, forensics and more, built to be solved.',
      '<b>A home lab:</b> virtual machines on your own computer (from Part 4), running practice systems that were made deliberately weak for learning.',
      '<b>Online training platforms</b> that provide legal practice labs.',
      "<b>Free courses</b>, such as Cisco Networking Academy's cybersecurity courses."
    ] },
    { h: 'Certificates' },
    { table: { head: ['Certificate', 'What it covers'], rows: [
      ['CompTIA Security+', 'A common first security certificate. It covers the basics of this whole part.'],
      ['Cisco CyberOps Associate', 'Working in a SOC: monitoring and responding to alerts.'],
      ['CEH (Certified Ethical Hacker)', 'The tools and methods of ethical hacking.'],
      ['OSCP (from OffSec)', 'Advanced, very hands-on penetration testing.']
    ] } },
    { h: 'Careers' },
    { table: { head: ['Job', 'What they do'], rows: [
      ['SOC analyst', 'Watches security alerts and investigates suspicious activity.'],
      ['Penetration tester', 'Legally attacks systems to find weaknesses before criminals do.'],
      ['Security engineer', 'Designs and builds secure networks and systems.'],
      ['Incident responder', 'Leads the response when an attack happens.'],
      ['Digital forensics analyst', 'Collects and studies digital evidence after an incident.'],
      ['GRC specialist', 'Governance, risk and compliance: writes policies, manages risk, and checks that rules and laws are followed.']
    ] } },
    { tip: 'Every skill in this whole story, from hardware and networking to operating systems and the command line, is part of security. Attackers use all of them. So do the guardians.' }
  ],
  analogy: {
    title: 'Think of it like a locksmith',
    text: 'Opening locks can be a job or a crime. The difference is permission.',
    map: [
      ['A locksmith hired by the owner to test the locks', 'White-hat penetration tester'],
      ['A burglar picking the same locks at night', 'Black-hat hacker'],
      ['Someone who picks your lock uninvited, then leaves a note', 'Grey hat: still breaking the law'],
      ["The owner's signed job card", 'Written permission and scope'],
      ['A reward for reporting a broken lock', 'Bug bounty'],
      ['A locksmith school with practice locks', 'CTFs and home labs']
    ]
  },
  diagram: { flow: [
    { t: 'Permission', s: 'scope agreed in writing' },
    { t: 'Reconnaissance', s: 'gather information' },
    { t: 'Scanning', s: 'find systems and services' },
    { t: 'Exploitation', s: 'carefully test weaknesses' },
    { t: 'Report', s: 'explain how to fix them' }
  ], note: 'The stages of a penetration test. Without step 1, it is not a test. It is a crime.' },
  words: [
    ['White hat', 'An ethical hacker who tests systems with permission.'],
    ['Black hat', 'A criminal hacker who breaks in without permission.'],
    ['Grey hat', 'Someone who breaks in without permission but without bad intent. Still illegal.'],
    ['Penetration test', 'A planned, legal attack on a system, done with the owner\'s permission, to find weaknesses.'],
    ['Scope', 'The written list of exactly what may be tested, when and how.'],
    ['Bug bounty', 'A programme that rewards people for finding and reporting weaknesses, following its rules.'],
    ['Responsible disclosure', 'Reporting a weakness privately to its owner and giving them time to fix it.'],
    ['CTF (Capture the Flag)', 'A security competition where teams solve puzzles to find hidden codes called flags.'],
    ['IT Act, 2000', "India's Information Technology Act, which makes unauthorised access to computers an offence."]
  ],
  quiz: [
    { q: 'What must a penetration tester have before starting?', a: ['Written permission and an agreed scope', 'A very fast laptop', 'A secret hacker name', 'Nothing at all'], c: 0, why: 'Without written permission, testing someone else\'s system is a crime.' },
    { q: 'A grey hat breaks into a website without permission “just to help”. Is it legal?', a: ['Yes, if they mean well', 'No. Unauthorised access is still a crime', 'Yes, if they report it afterwards', 'Only at weekends'], c: 1, why: "Good intentions don't make unauthorised access legal." },
    { q: 'Reporting a weakness privately to the owner, and giving them time to fix it, is called...', a: ['Whaling', 'Tailgating', 'Responsible disclosure', 'Defacing'], c: 2, why: 'Responsible disclosure protects users while the fix is made.' },
    { q: 'Which is a legal way to practise hacking skills?', a: ["Testing your school's website without asking", "Guessing a friend's password", 'Scanning random websites', 'A CTF competition or your own home lab'], c: 3, why: 'CTFs and your own lab are built for practice, with permission included.' }
  ]
});

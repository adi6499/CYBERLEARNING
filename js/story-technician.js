/* Byte by Byte — story content.
   Part 4: The technician's toolkit (IT support).
   Same format as story-hardware.js. Riya fixes the school's computer lab before exams. */
window.BBB = window.BBB || {};
BBB.chapters = BBB.chapters || [];

BBB.chapters.push({
  id: 'it-1', track: 'technician',
  title: 'Shelves, labels and drawers',
  topic: 'Partitions, file systems and formatting',
  minutes: 7,
  story: [
    ['n', "After the science fair, Riya's name is all over school. On Monday the computer teacher, Ms. Fernandes, calls her to the lab. Thirty grey PCs sit in rows. Half are painfully slow, three won't start, and one smells of burnt dust. \"Exams start in five weeks,\" she says. \"Can you help me bring this lab back to life?\""],
    ['riya', "Uncle Dev, I said yes! But here's the first problem. Ms. Fernandes wants to copy a 5 GB exam video onto a pen drive, and Windows says the file is too large. The pen drive is 32 GB and completely empty!"],
    ['dev', "Ah. That's not about space. It's about how the pen drive is organised. Right-click it and choose Properties. What does it say next to File system?"],
    ['riya', 'FAT32.'],
    ['dev', "There's your answer. FAT32 is an old way of organising a drive, and it can't hold any single file bigger than 4 GB. Think of a cupboard where every drawer is a fixed size. Your video simply doesn't fit in one drawer."],
    ['riya', 'So I need a cupboard with bigger drawers?'],
    ['dev', "You need a different file system, like exFAT. But changing it means formatting, and formatting wipes the drive, so copy anything important off it first. Then let's learn how drives are really organised."]
  ],
  learn: [
    { p: "Before a drive can store a single file, it has to be organised. There are three layers: <b>partitions</b>, a <b>file system</b> inside each partition, and then your <b>folders and files</b>." },
    { h: 'Partitions' },
    { ul: [
      "A <b>partition</b> is a section of a drive that the operating system treats as a separate drive. One physical drive can be split into several partitions, for example <b>C:</b> for Windows and <b>D:</b> for data.",
      "A small map at the start of the drive, the <b>partition table</b>, records where each partition begins and ends. There are two kinds:"
    ] },
    { table: { head: ['', 'MBR (Master Boot Record)', 'GPT (GUID Partition Table)'], rows: [
      ['Age', 'Old, from the early days of PCs', 'Modern, arrived with UEFI'],
      ['Largest drive', 'About 2 TB', 'Far bigger than any drive sold today'],
      ['Number of partitions', 'Up to 4 main (primary) partitions', 'Up to 128 in Windows'],
      ['Starting up', 'Goes with old BIOS-style start-up', 'Needed to start Windows with UEFI'],
      ['Safety', 'Only one copy of the table', 'Keeps a backup copy of the table at the end of the drive']
    ] } },
    { h: 'File systems' },
    { p: "A <b>file system</b> is the set of rules for how files are named, stored and found inside a partition. Each operating system has its favourites:" },
    { table: { head: ['File system', 'Mostly used by', 'Good to know'], rows: [
      ['NTFS', 'Windows', "Handles huge files, file permissions and encryption. Macs can read it but usually can't write to it."],
      ['FAT32', 'Almost everything: old cameras, TVs, car stereos', 'Works nearly everywhere, but no single file can be bigger than 4 GB.'],
      ['exFAT', 'Pen drives and memory cards', 'Works on Windows and Mac with no 4 GB limit. A good choice for pen drives.'],
      ['ext4', 'Linux', 'The usual file system on Linux computers.'],
      ['APFS', 'Apple Macs, iPhones and iPads', 'Designed for SSDs and flash storage.']
    ] } },
    { h: 'Formatting' },
    { ul: [
      "<b>Formatting</b> creates a fresh, empty file system on a partition. Everything that was there is lost.",
      "A <b>quick format</b> only writes a new, empty file table. It takes seconds.",
      "A <b>full format</b> also checks the whole drive for bad spots, so it takes much longer.",
      "On Windows, <b>Disk Management</b> (right-click the Start button) shows every drive and partition. From there you can create, delete, shrink, extend and format partitions, and change drive letters."
    ] },
    { h: 'What "delete" really does' },
    { p: "When you delete a file and empty the Recycle Bin, the data usually isn't erased straight away. The file system just marks that space as <em>free to reuse</em>. Until something new is written over it, recovery tools can often bring the file back. That's good news after an accident, and bad news if you give an old drive away without wiping it properly." },
    { h: 'Keeping drives healthy' },
    { ul: [
      "On a <b>hard disk</b>, files slowly get <b>fragmented</b>: pieces of one file end up scattered across the disk, so the arm has to jump around. <b>Defragmenting</b> gathers the pieces back together.",
      "<b>Never defragment an SSD.</b> It doesn't make an SSD faster and only adds wear. SSDs use <b>TRIM</b> instead: the OS tells the SSD which blocks are no longer used, so it can tidy them up in the background. Windows' <b>Optimize Drives</b> tool automatically does the right job for each kind of drive.",
      "Drives watch their own health with <b>S.M.A.R.T.</b> (Self-Monitoring, Analysis and Reporting Technology). A S.M.A.R.T. warning means: back up now, and replace the drive soon."
    ] },
    { tip: "Ms. Fernandes' fix: copy the files off the pen drive, format it as <b>exFAT</b>, then copy the 5 GB video. Done in two minutes." }
  ],
  analogy: {
    title: 'Think of it like a new cupboard',
    text: 'A new drive is an empty cupboard. Before you can find anything in it, you need sections, shelves, labels and a system.',
    map: [
      ['Dividing the cupboard into sections', 'Partitions'],
      ['A note on the door saying where each section starts', 'Partition table (MBR or GPT)'],
      ['The rules for drawer sizes and labels', 'File system (NTFS, exFAT...)'],
      ['Emptying everything out to start fresh', 'Formatting'],
      ['Putting scattered pages of one book back together', 'Defragmenting a hard disk']
    ]
  },
  diagram: { stack: [
    { t: 'Physical drive', s: 'the SSD or hard disk itself' },
    { t: 'Partition table', s: 'MBR or GPT: the map of sections' },
    { t: 'Partitions', s: 'sections such as C: and D:' },
    { t: 'File system', s: 'NTFS, exFAT, ext4, APFS' },
    { t: 'Folders and files', s: 'what you actually see and use' }
  ], note: 'Each layer is built on top of the one before it.' },
  words: [
    ['Partition', 'A section of a drive that the operating system treats as its own separate drive.'],
    ['MBR', 'Master Boot Record. The old partition table: drives up to about 2 TB and 4 main partitions.'],
    ['GPT', 'GUID Partition Table. The modern partition table that goes with UEFI. Handles huge drives.'],
    ['File system', 'The rules for how files are named, stored and found on a partition.'],
    ['NTFS', 'The main file system used by Windows.'],
    ['exFAT', 'A file system for pen drives and memory cards that works on Windows and Mac, with no 4 GB file limit.'],
    ['Formatting', 'Creating a fresh, empty file system on a partition. It erases what was there.'],
    ['TRIM', 'A command that tells an SSD which blocks are no longer in use, so it can tidy them up.'],
    ['S.M.A.R.T.', "A drive's built-in health monitoring. Its warnings mean: back up now."]
  ],
  quiz: [
    { q: 'A 5 GB video won\'t copy to an empty 32 GB pen drive. What is the most likely reason?', a: ['The pen drive is broken', "The pen drive uses FAT32, which can't hold any file over 4 GB", "Videos can't be copied to pen drives", 'The computer needs more RAM'], c: 1, why: 'FAT32 has a 4 GB limit per file. Formatting the pen drive as exFAT fixes it.' },
    { q: 'Which partition table do you need to start Windows with UEFI?', a: ['FAT32', 'MBR', 'GPT', 'NTFS'], c: 2, why: 'GPT is the modern partition table that goes with UEFI. MBR goes with old BIOS-style start-up. FAT32 and NTFS are file systems, not partition tables.' },
    { q: 'Which of these should you NOT do to an SSD?', a: ['Defragment it', 'Let Windows send it TRIM commands', 'Format it as NTFS', 'Check its S.M.A.R.T. health'], c: 0, why: 'Defragmenting is for hard disks. On an SSD it gives no speed-up and only adds wear.' },
    { q: 'You delete a file and empty the Recycle Bin. What usually happens to the data?', a: ['It is destroyed instantly', 'It is sent to Microsoft', 'The space is marked as free, so the file can often be recovered until it is overwritten', 'It moves into the RAM'], c: 2, why: 'Deleting only marks the space as free. That is why old drives must be wiped properly before you give them away.' }
  ]
});

BBB.chapters.push({
  id: 'it-2', track: 'technician',
  title: 'Never just one copy',
  topic: 'Backups and RAID',
  minutes: 8,
  story: [
    ['n', "In the corner of the lab hums the school's only server: a big tower PC that stores every student's projects. This morning it starts clicking. Click. Click. Click. Then a warning pops up: <em>S.M.A.R.T. status BAD. Back up your files and replace the disk.</em>"],
    ['riya', 'Uncle Dev, the server is clicking! Five years of student projects are on there!'],
    ['dev', "Clicking is a hard disk's way of saying goodbye. Don't keep restarting it. First question: is there a backup?"],
    ['riya', "Ms. Fernandes says the server has two disks that copy each other all the time. So that's a backup, right?"],
    ['dev', "That's called RAID 1, a mirror. It's good: if one disk dies, the other keeps going, so today you can swap the clicking disk without losing anything. But a mirror is not a backup. If a virus scrambles a file, or someone deletes a folder, the mirror copies that mistake onto both disks instantly."],
    ['riya', 'So the mirror protects against a broken disk, but not against a broken file.'],
    ['dev', "Exactly. Today we replace the dying disk. Then we build a real backup plan. Rule number one in IT: never just one copy."]
  ],
  learn: [
    { h: 'Why back up?' },
    { p: "Drives fail. Laptops get stolen. Phones fall into buckets. People delete the wrong folder. <b>Ransomware</b>, malware that locks your files and demands money, can scramble everything at once. A good backup is the one cure for all of these." },
    { h: 'The 3-2-1 rule' },
    { ul: [
      '<b>3</b> copies of your data: the original plus two backups.',
      '<b>2</b> different kinds of storage, for example an external drive and the cloud.',
      '<b>1</b> copy kept somewhere else (off-site or in the cloud), so a fire, flood or theft can\'t take everything.'
    ] },
    { h: 'Types of backup' },
    { table: { head: ['Type', 'What it copies', 'Making the backup', 'Restoring'], rows: [
      ['Full', 'Everything, every time', 'Slowest, uses the most space', 'Easiest: only one backup needed'],
      ['Incremental', 'Only what changed since the last backup of any kind', 'Fastest and smallest', 'Slowest: needs the last full backup plus every incremental since then'],
      ['Differential', 'Everything that changed since the last full backup', 'Grows bigger each day', 'Needs only the last full backup plus the newest differential']
    ] } },
    { ul: [
      '<b>Versioning</b> keeps older versions of each file, so you can go back to yesterday\'s copy from before a mistake.',
      "<b>Sync is not a backup.</b> Services like Google Drive and OneDrive keep folders the same on every device. If you delete or damage a file on one device, the change spreads everywhere. A real backup keeps its copies even after the original changes. (Many sync services keep deleted files in a recycle bin for a while, but don't rely on that alone.)",
      '<b>Test your restores.</b> Every few months, try bringing a file back from the backup. A backup you have never restored is only a hope.'
    ] },
    { h: 'RAID: many disks acting as one' },
    { p: "<b>RAID</b> (Redundant Array of Independent Disks) combines several drives so they act like one bigger drive. Depending on the <b>level</b>, it makes storage faster, safer from a dead disk, or both." },
    { table: { head: ['Level', 'How it works', 'Fewest disks', 'Dead disks it survives', 'Usable space'], rows: [
      ['RAID 0', 'Stripes: splits data across all disks', '2', 'None. One dead disk loses everything', 'All of it'],
      ['RAID 1', 'Mirrors: every disk holds a full copy', '2', 'All but one disk', "One disk's worth"],
      ['RAID 5', 'Stripes plus parity (repair information)', '3', '1', 'All but one disk'],
      ['RAID 6', 'Stripes plus double parity', '4', '2', 'All but two disks'],
      ['RAID 10', 'Mirrored pairs, striped together', '4', 'At least 1 (one per mirrored pair)', 'Half']
    ] } },
    { ul: [
      '<b>Speed:</b> RAID 0 is the fastest but the riskiest. RAID 10 is fast and safe, but costs twice the disks. RAID 5 and 6 read quickly but write more slowly, because they calculate parity.',
      '<b>Parity</b> is clever maths: from the surviving disks plus the parity information, the data on a missing disk can be rebuilt onto a new one.',
      'A <b>NAS</b> (Network Attached Storage) is a small box full of drives, usually set up with RAID, that shares storage with everyone on the network. Schools and offices often use one as a backup target.'
    ] },
    { warn: '<b>RAID is not a backup.</b> It protects against a disk dying. It does not protect against deleting files, ransomware, fire or theft. You still need the 3-2-1 rule.' }
  ],
  analogy: {
    title: 'Think of it like your school notes',
    text: 'Your notes are precious. How do you make sure one accident can never wipe them out?',
    map: [
      ['A photocopy of your notes kept at home', 'A backup'],
      ["One copy at home, one at Grandma's house", 'Off-site backup (the "1" in 3-2-1)'],
      ['Two friends writing the same notes at the same time', 'RAID 1 mirror'],
      ['A friend who copies your spelling mistakes too', 'Why RAID is not a backup'],
      ['Only photocopying the new pages each day', 'Incremental backup']
    ]
  },
  diagram: { flow: [
    { t: '3 copies', s: 'the original plus two backups' },
    { t: '2 kinds of storage', s: 'e.g. external drive and cloud' },
    { t: '1 off-site', s: 'safe from fire and theft' }
  ], note: 'The 3-2-1 rule. Simple, and it saves you from almost any disaster.' },
  toy: 'raid',
  words: [
    ['3-2-1 rule', 'Three copies of your data, on two kinds of storage, with one kept off-site.'],
    ['Full backup', 'A backup that copies everything, every time.'],
    ['Incremental backup', 'A backup of only what changed since the last backup of any kind.'],
    ['Differential backup', 'A backup of everything that changed since the last full backup.'],
    ['Versioning', 'Keeping older versions of files so you can go back in time.'],
    ['RAID', 'Redundant Array of Independent Disks: several drives combined to act as one.'],
    ['Parity', 'Extra repair information that lets RAID rebuild the data from a dead disk.'],
    ['NAS', 'Network Attached Storage: a box of drives shared with everyone on the network.']
  ],
  quiz: [
    { q: 'What does the 3-2-1 backup rule say?', a: ['3 copies, on 2 kinds of storage, with 1 off-site', '3 passwords, 2 drives, 1 computer', 'Back up 3 times a day for 2 weeks', '3 disks in RAID, 2 spare, 1 server'], c: 0, why: 'Three copies, two kinds of storage, one somewhere else. Then no single accident can wipe out everything.' },
    { q: 'The server uses RAID 1. Someone deletes the Projects folder by mistake. What happens?', a: ['RAID 1 keeps a safe copy', 'The folder is deleted from both disks, because RAID is not a backup', 'Only one disk loses it', 'The server refuses to delete it'], c: 1, why: 'A mirror copies every change, including mistakes, to both disks straight away.' },
    { q: 'Which RAID level survives NO dead disks at all?', a: ['RAID 1', 'RAID 5', 'RAID 10', 'RAID 0'], c: 3, why: 'RAID 0 splits data across the disks with no copies and no parity. Lose one disk and everything is gone.' },
    { q: 'You sync your files with a cloud drive and delete a file on your laptop. What usually happens on your other devices?', a: ['Nothing, it stays everywhere', 'It is deleted there too', 'It turns into a backup', 'It is emailed to you'], c: 1, why: 'Sync copies every change, including deletions. That is why sync is not the same as a backup.' }
  ]
});

BBB.chapters.push({
  id: 'it-3', track: 'technician',
  title: 'Everything you plug in',
  topic: 'Monitors, connectors, USB, printers and other devices',
  minutes: 9,
  story: [
    ['n', "Week two. The disks are sorted, so Ms. Fernandes hands Riya a new list: <em>Monitor 7 flickers. Monitor 12 looks blurry. The projector shows nothing. The printer says 'Ready' but prints nothing.</em>"],
    ['riya', "Uncle Dev, none of these problems are even inside a computer!"],
    ['dev', "Welcome to real IT support. Half of all problems live in the things people plug in. Start with monitor 12. What cable does it use?"],
    ['riya', "A thick blue plug with two screws. And everything on screen looks slightly stretched."],
    ['dev', "That's VGA, an old analogue connection, so the picture is softer. And the screen isn't set to its native resolution. Fix the resolution first, then swap to HDMI if the PC has it."],
    ['n', "Ten minutes later, monitor 12 is sharp. Monitor 7's flicker was a loose cable. The projector was set to the wrong input. That leaves the printer."],
    ['riya', "The printer says Ready, but forty documents are stuck in the queue."],
    ['dev', "Classic. The print queue is jammed. Let's learn how all these devices work, and then we'll unjam it."]
  ],
  learn: [
    { h: 'Monitors' },
    { table: { head: ['Name', 'Resolution (width × height in pixels)', 'Also called'], rows: [
      ['HD', '1280 × 720', '720p'],
      ['Full HD', '1920 × 1080', '1080p'],
      ['QHD', '2560 × 1440', '1440p'],
      ['4K UHD', '3840 × 2160', '2160p or 4K']
    ] } },
    { ul: [
      "<b>Resolution</b> is the number of pixels. More pixels give a sharper picture. Always use the monitor's <b>native resolution</b> (its real number of pixels), or text looks blurry and stretched.",
      '<b>Refresh rate</b>, in hertz (Hz), is how many times per second the picture is redrawn. 60 Hz is normal. Gaming monitors often run at 144 Hz or more for smoother motion.',
      '<b>Response time</b>, in milliseconds (ms), is how quickly a pixel can change colour. Lower means less blur in fast games.',
      '<b>Size</b> is measured diagonally, in inches. <b>Aspect ratio</b> is the shape: 16:9 is standard widescreen, 16:10 is a little taller, and 21:9 is ultrawide.'
    ] },
    { table: { head: ['Panel type', 'Strengths', 'Weaknesses'], rows: [
      ['IPS', 'Best colours and viewing angles', 'Blacks look a little grey in a dark room'],
      ['VA', 'Deep blacks and strong contrast', 'Can smear slightly in fast motion'],
      ['TN', 'Fast and cheap', 'Colours shift when you look from the side'],
      ['OLED', 'Each pixel makes its own light: perfect blacks, very fast', 'Costly; a still image left on for a very long time can leave a faint mark (burn-in)']
    ] } },
    { h: 'Video connectors' },
    { ul: [
      '<b>VGA</b>: old, usually blue, with screws. Analogue, so the picture is softer.',
      '<b>DVI</b>: an older digital connector, found on older monitors.',
      '<b>HDMI</b>: on TVs, monitors and projectors. Carries sound as well as picture.',
      '<b>DisplayPort</b>: common on PC monitors and graphics cards. Great for high refresh rates.',
      '<b>USB-C</b> with DisplayPort or Thunderbolt support: one small cable for picture, data and even charging.'
    ] },
    { h: 'USB: shape and speed are different things' },
    { p: 'The <b>shape</b> of a USB plug tells you nothing about its <b>speed</b>. The shapes are <b>USB-A</b> (the classic flat plug), <b>USB-B</b> (squarish, often on printers), <b>Micro-USB</b> (older phones) and <b>USB-C</b> (small, oval, fits either way up).' },
    { table: { head: ['Version', 'Top speed'], rows: [
      ['USB 2.0', '480 Mbps'],
      ['USB 3.2 Gen 1 (once called USB 3.0)', '5 Gbps'],
      ['USB 3.2 Gen 2', '10 Gbps'],
      ['USB 3.2 Gen 2x2', '20 Gbps'],
      ['USB4', 'Up to 40 Gbps'],
      ['Thunderbolt 3 and 4 (USB-C shape)', '40 Gbps']
    ] } },
    { tip: 'A USB-C plug might be slow USB 2.0 inside, or super-fast USB4. Check the device\'s specifications, not just the shape. Blue USB-A ports often (not always) mean USB 3.' },
    { h: 'Printers' },
    { table: { head: ['Type', 'How it works', 'Good for', 'Watch out for'], rows: [
      ['Inkjet', 'Sprays tiny drops of liquid ink', 'Colour photos; cheap to buy', 'Ink is costly and can dry out if unused'],
      ['Laser', 'Uses heat to fuse toner powder onto paper', 'Fast, sharp text; low cost per page', 'Costs more to buy; bigger'],
      ['Thermal', 'Heats special heat-sensitive paper', 'Shop receipts and labels', 'Prints fade over time; needs special paper'],
      ['Dot-matrix', 'Tiny pins strike an ink ribbon', 'Multi-part carbon copies', 'Noisy and slow'],
      ['3D printer', 'Builds an object layer by layer, usually from melted plastic', 'Models and spare parts', 'Slow; needs careful setting up']
    ] } },
    { h: 'Common printer fixes' },
    { ul: [
      '<b>Paper jam:</b> switch off, open the covers, and pull the paper out gently in the direction it normally travels. Make sure no torn bits are left inside.',
      '<b>Faded or streaky prints:</b> low ink or toner. On inkjets, run the printer\'s head-cleaning tool.',
      '<b>Stuck print queue:</b> cancel all documents. If they won\'t clear, restart the <b>Print Spooler</b> service (the part of Windows that lines up print jobs), or restart the PC and the printer.',
      '<b>Strange symbols, or the printer is missing:</b> install the correct driver.',
      '<b>Printer "offline":</b> check the cable or Wi-Fi, and that the right printer is chosen.'
    ] },
    { h: 'Other devices' },
    { ul: [
      '<b>Scanners</b> turn paper into images or PDF files.',
      '<b>Webcams, microphones, speakers and headsets</b> connect by USB, a 3.5 mm jack or Bluetooth. If one doesn\'t work, check the OS sound or camera settings and the app\'s permissions.',
      '<b>Bluetooth</b> devices must be <b>paired</b> once: put the device into pairing mode, then choose it on the computer.',
      'A <b>KVM switch</b> lets one keyboard, monitor and mouse control several computers.',
      '<b>Projectors</b> are rated in <b>lumens</b> (brightness). Most "no picture" problems are the wrong input or a loose cable.'
    ] }
  ],
  analogy: {
    title: 'Think of it like everyday things',
    text: 'Every device you plug in has an everyday twin.',
    map: [
      ['The number of tiles in a mosaic picture', 'Resolution'],
      ['How many pages of a flipbook turn each second', 'Refresh rate'],
      ['Different plug shapes on chargers', 'USB-A, USB-B, Micro-USB, USB-C'],
      ['A queue of people waiting at one counter', 'The print queue (spooler)'],
      ['Being introduced once, so you recognise each other next time', 'Bluetooth pairing']
    ]
  },
  words: [
    ['Resolution', 'The number of pixels on a screen, such as 1920 × 1080.'],
    ['Native resolution', "A monitor's real number of pixels. Using it gives the sharpest picture."],
    ['Refresh rate', 'How many times per second a screen redraws the picture, measured in Hz.'],
    ['DisplayPort', 'A video connector common on PC monitors and graphics cards.'],
    ['USB-C', 'A small, reversible USB plug shape. Its speed depends on what is inside.'],
    ['Thunderbolt', 'A very fast connection that uses the USB-C plug shape.'],
    ['Print spooler', 'The part of Windows that lines up print jobs and sends them to the printer.'],
    ['Pairing', 'Connecting two Bluetooth devices for the first time so they trust each other.'],
    ['KVM switch', 'A box that lets one keyboard, monitor and mouse control several computers.']
  ],
  quiz: [
    { q: 'Text on a monitor looks blurry and stretched. What should you check first?', a: ['That it is set to its native resolution', 'The printer driver', 'The amount of RAM', 'The Wi-Fi password'], c: 0, why: "If the resolution doesn't match the monitor's real pixels, everything looks soft and stretched." },
    { q: 'Which resolution is Full HD?', a: ['1280 × 720', '3840 × 2160', '1920 × 1080', '2560 × 1440'], c: 2, why: 'Full HD, also called 1080p, is 1920 × 1080 pixels.' },
    { q: 'Forty documents are stuck and nothing prints. What usually fixes it?', a: ['Buying a new printer', 'Cancelling the jobs and restarting the Print Spooler', 'Changing the monitor', 'Formatting the hard disk'], c: 1, why: 'The Print Spooler lines up print jobs. Restarting it clears a jammed queue.' },
    { q: 'Is every USB-C cable super fast?', a: ['Yes, USB-C always means 40 Gbps', 'Yes, but only on Macs', 'No. USB-C is the plug shape; the speed can be anything from USB 2.0 to USB4', 'No, USB-C is only for charging'], c: 2, why: 'Shape and speed are different things. Always check the specifications.' }
  ]
});

BBB.chapters.push({
  id: 'it-4', track: 'technician',
  title: 'Computers in your bag and pocket',
  topic: 'Laptops, tablets and smartphones',
  minutes: 8,
  story: [
    ['n', "Word spreads. Teachers start bringing their own devices to Riya's corner of the lab. Mr. Joshi's laptop won't charge. Ms. Fernandes' phone is full. And the sports teacher's laptop gets so hot it switches itself off in the middle of his cricket videos."],
    ['riya', "Uncle Dev, laptops are just small PCs. Can't I open them up the same way?"],
    ['dev', "Same ideas, very different packaging. A laptop squeezes everything into a thin case, so many parts are glued or soldered down. Now, where does the sports teacher use his laptop?"],
    ['riya', 'On his bed. Sitting on a pillow.'],
    ['dev', "There's your overheating. The air vents are underneath, and the pillow blocks them. And Mr. Joshi's charger: how many watts is it?"],
    ['riya', "It's a phone charger. It says 20 W. He lost his laptop's own charger."],
    ['dev', "Most laptops need a lot more power than that. With too little, a laptop charges very slowly, or not at all. Let's learn what's inside the computers people carry around."]
  ],
  learn: [
    { h: 'Laptops' },
    { ul: [
      'A laptop has the same parts as a desktop (CPU, RAM, storage, screen, keyboard) plus a <b>battery</b>, all packed into one thin case.',
      'Many laptops let you replace the <b>SSD</b>, and some let you add <b>RAM</b>. In thin laptops the RAM is often <b>soldered</b>, melted permanently onto the motherboard, so it can never be upgraded. Check before you buy.',
      'Laptop CPUs and GPUs are built to use less power, to save battery and make less heat.'
    ] },
    { table: { head: ['Problem', 'Likely cause', 'What to try'], rows: [
      ['Overheats or switches off', 'Blocked vents, dust', 'Use it on a hard, flat surface; clean the vents; try a cooling pad'],
      ["Won't charge", 'Wrong or weak charger, damaged cable or port, worn-out battery', 'Use the right charger; check the cable; check the battery health'],
      ["Some keys don't work", 'Dirt, spilled liquid, Num Lock or Fn Lock', 'Clean carefully; check Num Lock and Fn Lock'],
      ["Wi-Fi or brightness won't change", 'A function-key toggle is off', 'Press Fn with the right F-key, or use the OS settings'],
      ['Screen flickers when you move the lid', 'A loose display cable in the hinge', 'A repair job: the hinge cable needs checking']
    ] } },
    { h: 'Batteries' },
    { ul: [
      'Almost all laptops and phones use <b>lithium-ion</b> batteries. They slowly lose capacity as they age, so an old battery lasts less than a new one.',
      "Heat is a battery's worst enemy. Don't leave devices in hot cars or charge them under pillows or blankets.",
      'Many devices have a setting that stops charging at around 80%, which helps the battery last more years.'
    ] },
    { warn: 'A <b>swollen battery</b> is dangerous: the case bulges, the trackpad lifts, or the back cover pops open. It can catch fire. Stop using and charging the device, never press or puncture the battery, and take it to a proper repair shop.' },
    { h: 'Chargers' },
    { ul: [
      'Chargers are rated in <b>watts</b>. A laptop needs a charger with enough watts, or it charges slowly or not at all.',
      "<b>USB-C Power Delivery (PD)</b> lets a charger and a device agree on the right voltage. One good USB-C PD charger can often charge both a phone and a laptop, if it has enough watts.",
      'Use chargers from trusted brands. Cheap fake chargers can overheat and damage devices.'
    ] },
    { h: 'Tablets and smartphones' },
    { ul: [
      'Phones and tablets use a <b>SoC</b> (System on a Chip): the CPU, GPU, modem and more, all on one chip. That saves space and battery.',
      'Their storage is soldered too, so it can\'t be upgraded. Some Android phones accept a memory card for extra space.',
      'The two big mobile operating systems are <b>Android</b> (made by Google, used by many brands) and <b>iOS</b> (made by Apple, only on iPhones; iPads use iPadOS).',
      'Install apps only from the official store: Google Play or the Apple App Store. Installing apps from random websites, called <b>sideloading</b>, is a common way malware gets onto phones.',
      'Install system updates. They fix security holes.'
    ] },
    { h: 'Sync and safety' },
    { ul: [
      'Phones <b>sync</b> contacts, photos and settings to a cloud account (a Google account or Apple ID), so a lost phone doesn\'t mean lost memories.',
      'Always use a <b>screen lock</b>: PIN, pattern, fingerprint or face.',
      'Turn on <b>Find My Device</b> (Android) or <b>Find My</b> (Apple). They can locate, lock or <b>remote wipe</b> a lost phone.',
      'Schools and companies use <b>MDM</b> (Mobile Device Management) to set up, secure and wipe all the devices they own from one place.'
    ] }
  ],
  analogy: {
    title: 'Think of it like a kitchen and a tiffin box',
    text: 'A desktop is a whole kitchen with room for everything. A laptop is a packed tiffin box: the same food, squeezed tightly into a small space.',
    map: [
      ['A big kitchen where pots are easy to swap', 'A desktop: easy to upgrade'],
      ['A tiffin packed so tight nothing comes out', 'A laptop: parts glued or soldered'],
      ['A whole meal cooked in one pot', 'A SoC in a phone'],
      ['A water bottle that holds a little less each year', 'An ageing lithium-ion battery'],
      ['A spare house key kept with a trusted neighbour', 'Cloud sync of your phone']
    ]
  },
  words: [
    ['Soldered', 'Melted permanently onto a circuit board, so it cannot be removed or upgraded.'],
    ['Lithium-ion battery', 'The rechargeable battery in almost every laptop and phone.'],
    ['Swollen battery', 'A battery that has puffed up. A fire risk: stop using the device.'],
    ['USB-C Power Delivery', 'A charging standard that lets a charger and device agree on the right power.'],
    ['SoC', 'System on a Chip: the CPU, GPU, modem and more, all on one chip.'],
    ['Sideloading', 'Installing apps from outside the official app store. Risky.'],
    ['Remote wipe', 'Erasing a lost phone from another device, over the internet.'],
    ['MDM', 'Mobile Device Management: setting up, securing and wiping many devices from one place.']
  ],
  quiz: [
    { q: 'A laptop overheats whenever it is used on a bed. Why?', a: ['The bed blocks the air vents underneath', 'Beds interfere with Wi-Fi', 'The battery is too new', 'The screen is too bright'], c: 0, why: 'Laptops pull in cool air from underneath. Soft surfaces block the vents.' },
    { q: 'The back of a laptop is bulging. What should you do?', a: ['Press it flat again', 'Keep charging it to fix it', 'Stop using and charging it, and take it for repair', 'Put it in the fridge'], c: 2, why: 'A swollen lithium-ion battery can catch fire. Stop using it and get it replaced safely.' },
    { q: 'What is a SoC?', a: ['A type of charger', 'The CPU, GPU, modem and more on one chip', 'A phone case', 'A kind of SIM card'], c: 1, why: 'System on a Chip. It saves space and battery in phones and tablets.' },
    { q: 'Why should you install apps only from the official app store?', a: ['They are always free', 'Other apps never work', 'It makes the battery bigger', 'Apps from random websites are a common way for malware to get in'], c: 3, why: 'Official stores check apps for harmful behaviour. Sideloaded apps skip those checks.' }
  ]
});

BBB.chapters.push({
  id: 'it-5', track: 'technician',
  title: 'The operating system up close',
  topic: 'Accounts, permissions, processes, updates and reinstalling',
  minutes: 9,
  story: [
    ['n', "Week three. The PCs that do work are full of junk: browser toolbars, fake \"speed booster\" apps, and games installed by students. One PC has 42 programs starting every time Windows starts."],
    ['riya', "How did students even install all this? It's a school lab!"],
    ['dev', "Let me guess. Everyone logs in with the same account, and it's an administrator account."],
    ['riya', "The password is written on a sticky note on every monitor. It's lab123."],
    ['dev', "(laughing) Then every student is king of every PC. Step one: students get a standard account that can't install software. The administrator account is only for you and Ms. Fernandes, with a real password."],
    ['riya', 'And the 42 start-up programs?'],
    ['dev', "Task Manager. Today you learn to look under the operating system's bonnet."]
  ],
  learn: [
    { h: 'The kernel: the core of the OS' },
    { p: "The <b>kernel</b> is the heart of the operating system. It controls the CPU, the memory and the devices, and decides which program gets to run when. Ordinary programs run in <b>user mode</b>, where they can't touch the hardware directly; they have to ask the kernel. Only the kernel and drivers run in <b>kernel mode</b>, with full power. That's why one crashing app usually doesn't crash the whole computer." },
    { h: 'User accounts' },
    { table: { head: ['Account type', 'Can do', 'Use it for'], rows: [
      ['Standard user', 'Use apps, save their own files, change their own settings', 'Everyday work: students, family members, most staff'],
      ['Administrator', 'Install software, change system settings, manage other users', 'Only when needed, protected by a strong password']
    ] } },
    { ul: [
      'On Windows, <b>UAC</b> (User Account Control) shows a pop-up whenever something wants administrator power. A standard user must type an admin password. Never click Yes on a UAC prompt you didn\'t expect.',
      'The rule of <b>least privilege</b>: give each person only the access they need to do their job, and nothing more.'
    ] },
    { h: 'Permissions' },
    { p: 'Every file and folder has <b>permissions</b> that say who may <b>read</b> it (open it), <b>write</b> it (change or delete it) and <b>execute</b> it (run it as a program). Windows adds options such as Full control and Modify. Linux shows permissions like <code>rwxr-xr--</code>: read, write and execute for the owner, then for the group, then for everyone else.' },
    { h: 'File paths' },
    { ul: [
      'A <b>path</b> is the full address of a file.',
      'Windows: <code>C:\\Users\\Riya\\Documents\\notes.txt</code>. Drive letters, and backslashes between folders.',
      'Linux and macOS: <code>/home/riya/Documents/notes.txt</code>. One big tree that starts at <code>/</code> (called the root), with forward slashes.'
    ] },
    { h: 'Task Manager: what is running?' },
    { ul: [
      'Open it with <b>Ctrl + Shift + Esc</b>.',
      '<b>Processes</b> are programs that are running right now. Task Manager shows how much CPU, memory, disk and network each one uses, and lets you end one that has frozen.',
      '<b>Services</b> are programs that run quietly in the background with no window, such as the Print Spooler or Windows Update.',
      'The <b>Start-up apps</b> list shows programs that launch with Windows. Disabling the ones you don\'t need makes start-up much faster.'
    ] },
    { h: 'Updates and Device Manager' },
    { ul: [
      'Install OS updates: they fix security holes and bugs. In a school or office, schedule them outside working hours so they don\'t interrupt lessons.',
      '<b>Device Manager</b> lists every piece of hardware. A yellow warning sign means a driver problem: update or reinstall that driver.'
    ] },
    { h: 'When things go really wrong' },
    { table: { head: ['Tool', 'What it does'], rows: [
      ['Safe Mode', 'Starts Windows with only the most basic drivers and programs, so you can remove whatever is causing trouble'],
      ['System Restore', 'Takes system files and settings back to an earlier restore point. Your documents are kept'],
      ['Reset this PC', 'Reinstalls Windows. You choose whether to keep your files or remove everything'],
      ['Clean install', 'Wipes the drive and installs the OS fresh from a bootable USB stick']
    ] } },
    { h: 'Installing an operating system' },
    { ul: [
      'Make a <b>bootable USB</b> stick containing the OS installer, then start the PC from it (change the boot order, or use the boot-menu key).',
      'A <b>clean install</b> wipes the drive and starts fresh: best for messy PCs. An <b>upgrade</b> installs the new version over the old one, keeping apps and files.',
      'Windows and macOS need a <b>licence</b>. Windows uses a <b>product key</b> or a digital licence linked to the PC. Most versions of Linux are free.'
    ] },
    { table: { head: ['', 'Windows', 'macOS', 'Linux'], rows: [
      ['Made by', 'Microsoft', 'Apple', 'A worldwide community and many companies'],
      ['Runs on', 'Most PCs', 'Only Apple Macs', 'Almost anything, from old PCs to giant servers'],
      ['Cost', 'Paid licence', 'Comes with a Mac', 'Mostly free'],
      ['Examples', 'Windows 10, Windows 11', 'macOS on a MacBook or iMac', 'Ubuntu, Linux Mint, Fedora, Debian (called distributions)'],
      ['Good to know', 'The most common OS on desktops and in schools', 'Popular with designers and video editors', 'Runs most of the world\'s servers; Android is built on the Linux kernel']
    ] } }
  ],
  analogy: {
    title: 'Think of it like a school',
    text: 'An operating system runs a computer the way a principal and staff run a school.',
    map: [
      ['The principal who controls the whole school', 'The kernel'],
      ['Students in classrooms who must ask permission', 'Programs running in user mode'],
      ['A staff key that opens every door', 'An administrator account'],
      ['A student ID that opens only your classroom', 'A standard account'],
      ['Office staff working quietly in the background', 'Services']
    ]
  },
  diagram: { stack: [
    { t: 'Apps', s: 'browser, games, Word: run in user mode' },
    { t: 'OS services', s: 'settings, updates, printing, sign-in' },
    { t: 'Kernel', s: 'controls the CPU, memory and devices' },
    { t: 'Drivers', s: 'talk to each piece of hardware' },
    { t: 'Hardware', s: 'CPU, RAM, drives and devices' }
  ], note: 'Apps ask the kernel for everything. Only the kernel and drivers talk to the hardware.' },
  words: [
    ['Kernel', 'The core of the operating system. It controls the CPU, memory and devices.'],
    ['User mode', 'A safe, limited mode where ordinary apps run without direct access to the hardware.'],
    ['Administrator account', 'An account that can install software and change system settings.'],
    ['UAC', 'User Account Control: the Windows pop-up that appears when something wants administrator power.'],
    ['File permissions', 'Rules that say who may read, write or run a file.'],
    ['Path', 'The full address of a file, such as C:\\Users\\Riya\\notes.txt.'],
    ['Process', 'A program that is running right now.'],
    ['Service', 'A program that runs in the background with no window.'],
    ['Safe Mode', 'Starting Windows with only the basics, to track down and fix problems.']
  ],
  quiz: [
    { q: 'Students keep installing games on the lab PCs. What is the best fix?', a: ['Give them standard accounts and keep the admin password secret', 'Unplug the keyboards', 'Make everyone an administrator', 'Delete Windows'], c: 0, why: "Standard accounts can't install software. That's least privilege in action." },
    { q: 'Which keys open Task Manager directly?', a: ['Ctrl + C', 'Alt + F4', 'Ctrl + Shift + Esc', 'Windows + D'], c: 2, why: 'Ctrl + Shift + Esc opens Task Manager straight away.' },
    { q: "A PC became unstable after yesterday's driver install. Which tool rolls the system back but keeps your documents?", a: ['Reset this PC with "Remove everything"', 'System Restore', 'Formatting the drive', 'Disk Management'], c: 1, why: 'System Restore returns system files and settings to an earlier restore point and leaves your documents alone.' },
    { q: 'What does the "execute" permission allow?', a: ['Reading a file', 'Deleting a file', 'Renaming a folder', 'Running the file as a program'], c: 3, why: 'Read = open, write = change, execute = run as a program.' }
  ]
});

BBB.chapters.push({
  id: 'it-6', track: 'technician',
  title: 'Talking to the computer in text',
  topic: 'The command line',
  minutes: 8,
  story: [
    ['n', 'The lab has 30 PCs, and Riya has been clicking through the same settings on every one of them. By PC number 9, her wrist hurts.'],
    ['riya', "Uncle Dev, there has to be a faster way. I've done the same twenty clicks nine times!"],
    ['dev', 'There is. Remember Command Prompt, from the day you fixed your game connection?'],
    ['riya', 'ipconfig and ping! The detective tools.'],
    ['dev', "That black window can do much more than network checks. You can make folders, copy files, see what's running, even repair Windows itself. And you can save a list of commands as a script, and run it on all 30 PCs."],
    ['riya', 'So twenty clicks become one command?'],
    ['dev', "Exactly. And servers and network equipment are mostly controlled this way, often from far away. Let's learn to talk to the computer in text."]
  ],
  learn: [
    { h: 'Why use the command line?' },
    { ul: [
      '<b>Speed:</b> one typed command can replace many clicks.',
      '<b>Remote control:</b> servers, routers and switches are usually managed by typing commands over the network.',
      '<b>Automation:</b> commands saved in a file become a <b>script</b> that does the same job again and again, on as many machines as you like.',
      '<b>Power:</b> some repair tools only exist on the command line.'
    ] },
    { h: 'The shells' },
    { ul: [
      'A <b>shell</b> is the program that reads your commands and runs them.',
      'Windows has <b>Command Prompt</b> (CMD) and the newer, more powerful <b>PowerShell</b>.',
      'Linux and macOS use a <b>terminal</b> running a shell such as <b>bash</b> or zsh.'
    ] },
    { h: 'The same jobs in Windows and Linux' },
    { table: { head: ['Job', 'Windows (CMD)', 'Linux'], rows: [
      ['List the files in this folder', '<code>dir</code>', '<code>ls</code>'],
      ['Go into a folder', '<code>cd Documents</code>', '<code>cd Documents</code>'],
      ['Show where you are', '<code>cd</code>', '<code>pwd</code>'],
      ['Make a folder', '<code>mkdir notes</code>', '<code>mkdir notes</code>'],
      ['Copy a file', '<code>copy a.txt b.txt</code>', '<code>cp a.txt b.txt</code>'],
      ['Move or rename a file', '<code>move a.txt old</code>', '<code>mv a.txt old</code>'],
      ['Delete a file', '<code>del a.txt</code>', '<code>rm a.txt</code>'],
      ['Show what is in a text file', '<code>type a.txt</code>', '<code>cat a.txt</code>'],
      ['Clear the screen', '<code>cls</code>', '<code>clear</code>'],
      ['List running programs', '<code>tasklist</code>', '<code>ps</code>'],
      ['Stop a program by its number', '<code>taskkill /PID 1234</code>', '<code>kill 1234</code>'],
      ['Show network settings', '<code>ipconfig</code>', '<code>ip a</code>'],
      ['Get help', '<code>help</code> or <code>command /?</code>', '<code>man command</code>']
    ] } },
    { h: 'Paths on the command line' },
    { ul: [
      'An <b>absolute path</b> starts from the very top: <code>/home/riya/notes</code> or <code>C:\\Users\\Riya</code>.',
      'A <b>relative path</b> starts from where you are now: <code>notes/today.txt</code>.',
      '<code>.</code> means "this folder" and <code>..</code> means "the folder above". So <code>cd ..</code> goes up one level.',
      'Press <b>Tab</b> to auto-complete file and folder names. Fewer typos!',
      'Press the <b>Up arrow</b> to bring back your last command.'
    ] },
    { h: 'Repair and admin commands' },
    { ul: [
      '<code>chkdsk</code> checks a drive for file-system errors. With <code>/f</code> it also fixes them.',
      '<code>sfc /scannow</code> scans Windows\' own system files and repairs damaged ones. Run it as administrator.',
      'On Linux, putting <code>sudo</code> in front of a command runs it with administrator (root) power, after asking for your password.',
      '<code>shutdown /r</code> restarts a Windows PC, and <code>shutdown /s</code> switches it off.'
    ] },
    { warn: 'The command line rarely asks "Are you sure?". <code>del</code> and <code>rm</code> do <b>not</b> use the Recycle Bin: deleted files are simply gone. <code>rm -r</code> deletes whole folders. Read every command twice before pressing Enter, especially with <code>sudo</code>.' },
    { tip: 'PowerShell understands many Linux-style names too, such as <code>ls</code>, <code>cd</code>, <code>pwd</code> and <code>cat</code>. Try the pretend terminal below: nothing you type there can harm anything.' }
  ],
  analogy: {
    title: 'Think of it like ordering food',
    text: 'Pointing at pictures on a menu works fine. But a regular customer just says the whole order in one sentence, and it\'s done.',
    map: [
      ['Pointing at pictures on the menu', 'Clicking in windows (the GUI)'],
      ['Saying your whole order in one sentence', 'Typing a command'],
      ['Your usual order written on a card for the waiter', 'A script'],
      ['Phoning in an order from home', 'Managing a server remotely'],
      ['"Go back to the previous street"', 'cd ..']
    ]
  },
  toy: 'shell',
  words: [
    ['Command line', 'Controlling a computer by typing text commands instead of clicking.'],
    ['Shell', 'The program that reads and runs your typed commands, such as CMD, PowerShell or bash.'],
    ['PowerShell', 'The modern, more powerful command-line shell in Windows.'],
    ['Script', 'A file of commands that runs them all in order, automatically.'],
    ['Absolute path', 'A path that starts from the very top of the drive or folder tree.'],
    ['Relative path', 'A path that starts from the folder you are in right now.'],
    ['sudo', 'A Linux command that runs another command with administrator power.'],
    ['sfc /scannow', 'A Windows command that checks and repairs Windows system files.']
  ],
  quiz: [
    { q: 'Which Linux command lists the files in the current folder?', a: ['dir', 'ls', 'cls', 'pwd'], c: 1, why: 'ls lists files on Linux. dir does the same job in Windows CMD.' },
    { q: 'What does "cd .." do?', a: ['Deletes the folder', 'Copies two files', 'Clears the screen', 'Goes up to the folder above'], c: 3, why: '".." means the folder above the one you are in.' },
    { q: 'You delete a file with rm. Where does it go?', a: ["Nowhere: it's gone, because rm doesn't use the Recycle Bin", 'The Recycle Bin', 'The Downloads folder', 'The cloud'], c: 0, why: 'Command-line deletes skip the Recycle Bin. Always read the command twice.' },
    { q: 'Why would an IT technician write a script?', a: ['To make the screen brighter', 'To run the same commands automatically on many PCs', 'To slow the computer down', 'To change the keyboard language'], c: 1, why: 'Scripts turn repetitive work into one command that can run anywhere.' }
  ]
});

BBB.chapters.push({
  id: 'it-7', track: 'technician',
  title: 'Power, safety and a long life',
  topic: 'Power protection, safety, cleaning and e-waste',
  minutes: 8,
  story: [
    ['n', 'Thursday afternoon. A thunderstorm rolls over Pune. The lab lights flicker, go out, then come back with a loud crack. When the power returns, PC number 22 won\'t start, and it smells of burnt plastic.'],
    ['riya', 'Uncle Dev, a PC died in the storm! The power came back with a bang.'],
    ['dev', 'A power surge: a sudden spike of voltage, often during lightning or the moment power comes back. Was PC 22 plugged into a UPS?'],
    ['riya', "The lab has one UPS, but it only powers Ms. Fernandes' PC. All the others go straight into the wall."],
    ['dev', "Then today's lesson is power. In India the voltage goes up and down, and power cuts are common. Electronics hate that. And Riya, before you open PC 22, what do we do?"],
    ['riya', 'Unplug it, and touch metal first. Rule one and rule two.'],
    ['dev', "Good. And the power supply inside stays closed, even though it smells burnt. We replace it. We never open it."]
  ],
  learn: [
    { h: 'Power problems' },
    { ul: [
      'India uses about <b>230 volts</b> at 50 Hz, but the real voltage often rises and falls, and power cuts are common.',
      'A <b>surge</b> or <b>spike</b> is a sudden, short jump in voltage, for example from lightning, or when power comes back after a cut.',
      'A <b>sag</b> or <b>brownout</b> is a dip in voltage that lasts a while.',
      'A <b>blackout</b> is a complete power cut. Unsaved work is lost, and losing power suddenly can damage files that were open.'
    ] },
    { table: { head: ['Device', 'Protects against', 'Does not protect against'], rows: [
      ['Surge protector (spike guard)', 'Short spikes and surges', 'Power cuts, or long periods of low or high voltage'],
      ['Voltage stabiliser', 'Long periods of low or high voltage', 'Power cuts'],
      ['UPS (Uninterruptible Power Supply)', 'Power cuts (runs on its battery) and surges; many also correct the voltage', 'Very long power cuts: the battery eventually runs out']
    ] } },
    { h: 'Kinds of UPS' },
    { table: { head: ['Type', 'How it works', 'Best for'], rows: [
      ['Offline (standby)', 'Powers devices straight from the wall, and switches to battery when the power fails. The switch takes a split second', 'Home PCs'],
      ['Line-interactive', 'Like offline, but also corrects small voltage changes without using the battery', 'Offices, labs, routers'],
      ['Online (double conversion)', 'Always powers devices through its own battery circuit, so there is no switch-over gap at all', 'Servers and critical equipment']
    ] } },
    { ul: [
      'A UPS is rated in <b>VA</b> (volt-amperes) and in <b>watts</b>. The watt number is always lower than the VA number. Add up the watts of everything you\'ll plug in, and choose a UPS whose <b>watt</b> rating is comfortably above that.',
      'A UPS gives you time to save your work and shut down properly. That usually means minutes, not hours.'
    ] },
    { h: 'Safety first' },
    { ul: [
      '<b>Earthing:</b> a proper earth wire carries stray electricity safely into the ground. Use earthed three-pin sockets.',
      '<b>Static:</b> wear an anti-static wrist strap and work on an anti-static mat. Keep new parts in their anti-static bags until you fit them.',
      '<b>Unplug</b> before opening anything.',
      '<b>Never open a power supply or a monitor.</b> They contain capacitors that can hold a dangerous charge even after unplugging.',
      '<b>Lift with your legs</b>, not your back, and get help with heavy monitors, printers and servers.',
      'For an electrical fire, switch off the power if it is safe to, and use a <b>CO2 extinguisher</b> (the kind marked safe for electrical fires). <b>Never use water</b> on an electrical fire.'
    ] },
    { h: 'Cleaning and maintenance' },
    { ul: [
      'Blow out dust with <b>compressed air</b>. Hold the fans still while you do it, so they don\'t spin too fast.',
      'Wipe screens and keyboards with a soft, lint-free cloth. Use a little <b>isopropyl alcohol</b> on the cloth for sticky keys and for removing old thermal paste. Never spray liquid directly onto a device.',
      "Don't use a household vacuum cleaner inside a computer: it can build up static.",
      'Keep computers off the floor, out of direct sunlight, away from water and dust, with space around the vents.',
      'Use monitoring software to check temperatures. If they climb higher than they used to, clean out the dust and check the fans.'
    ] },
    { table: { head: ['How often', 'Task'], rows: [
      ['Every week', 'Check that backups worked; restart PCs that are always left on'],
      ['Every month', 'Install updates; check free disk space; wipe keyboards and screens'],
      ['Every 6 to 12 months', 'Blow out dust; check fans, cables and UPS batteries']
    ] } },
    { h: "The end of a computer's life" },
    { ul: [
      '<b>E-waste</b> (old electronics) contains harmful materials like lead and mercury, and also valuable metals like copper and gold. It must never go in the dustbin.',
      "India's e-waste rules say old electronics should go to <b>authorised collection centres or recyclers</b>. Many brands run take-back programmes.",
      '<b>Wipe the data first.</b> Deleting files or quick-formatting is not enough. Use a wiping tool that overwrites the whole drive, or the SSD\'s built-in secure-erase feature. For drives with very sensitive data, <b>physical destruction</b> (shredding or drilling through the drive) is the safest.'
    ] }
  ],
  analogy: {
    title: 'Think of it like getting a house ready for the monsoon',
    text: 'In the monsoon, a smart family protects the house before the storm, not after.',
    map: [
      ['A lightning rod on the roof', 'Surge protector'],
      ['A water tank that keeps taps running during a water cut', 'UPS battery'],
      ['A valve that keeps the water pressure steady', 'Voltage stabiliser'],
      ['A drain that carries rainwater safely away', 'Earthing'],
      ['A check-up of the roof and drains every year', 'Regular maintenance']
    ]
  },
  words: [
    ['Power surge', 'A sudden, short jump in voltage, for example from lightning.'],
    ['Brownout', 'A dip in voltage that lasts a while. Also called a sag.'],
    ['UPS', 'Uninterruptible Power Supply: a battery box that keeps devices running during a power cut.'],
    ['Voltage stabiliser', 'A device that keeps the voltage steady when it stays too low or too high.'],
    ['VA rating', 'Volt-amperes: one way a UPS is rated. Its watt rating is always lower.'],
    ['Earthing', 'A wire that carries stray electricity safely into the ground.'],
    ['ESD strap', 'A wrist strap that safely drains static electricity from your body while you work.'],
    ['E-waste', 'Old or broken electronics. Must be recycled properly, never thrown in the bin.'],
    ['Data wiping', "Overwriting a whole drive so old files can't be recovered."]
  ],
  quiz: [
    { q: 'Which device keeps a PC running during a power cut?', a: ['Surge protector', 'UPS', 'Voltage stabiliser', 'Extension board'], c: 1, why: 'A UPS has a battery that takes over the moment the power fails.' },
    { q: 'Which of these should you NEVER do?', a: ['Unplug a PC before opening it', 'Use compressed air on dust', 'Open a power supply, even after unplugging it', 'Wear an anti-static wrist strap'], c: 2, why: 'Power supplies contain capacitors that can hold a dangerous charge. Replace them; never open them.' },
    { q: 'What should be used on an electrical fire?', a: ['A CO2 extinguisher marked safe for electrical fires', 'A bucket of water', 'A wet towel', 'A table fan'], c: 0, why: 'Water conducts electricity and makes things worse. CO2 extinguishers are safe on electrical equipment.' },
    { q: 'The lab is getting rid of 10 old PCs. What is the right way?', a: ['Put them in the dustbin', 'Leave them on the street', 'Sell them with the old data still on the drives', 'Wipe the drives, then hand them to an authorised e-waste recycler'], c: 3, why: 'Wiping protects people\'s data, and authorised recyclers handle the harmful materials safely.' }
  ]
});

BBB.chapters.push({
  id: 'it-8', track: 'technician',
  title: 'Many computers inside one',
  topic: 'Virtual machines and cloud computing',
  minutes: 8,
  story: [
    ['n', "Riya wants to learn Linux. But Ms. Fernandes has one firm rule: <em>nobody experiments on the exam PCs.</em>"],
    ['riya', 'Uncle Dev, how can I practise Linux without breaking a lab PC, or my own?'],
    ['dev', 'Build a computer inside your computer.'],
    ['riya', 'That sounds like a riddle.'],
    ['dev', "It's called a virtual machine. A program pretends to be a whole PC: a pretend CPU, pretend RAM, a pretend disk. You install Linux inside it. If you break it, you click once and it's back to how it was."],
    ['n', 'That evening, a Linux desktop opens in a window on Riya\'s Windows PC. She takes a snapshot, then breaks the network settings on purpose to see what happens. One click on the snapshot, and everything is back in seconds.'],
    ['riya', 'This is amazing. Do big companies run their servers like this too?'],
    ['dev', "Most of the internet runs on virtual machines, in giant buildings you can rent by the hour. That's what people call the cloud."]
  ],
  learn: [
    { h: 'Virtual machines' },
    { ul: [
      'A <b>virtual machine (VM)</b> is a pretend computer made by software. It has virtual CPUs, virtual RAM and a virtual disk, which is really just a big file.',
      'The real computer is called the <b>host</b>. The VM is called the <b>guest</b>. The guest can run a completely different OS, for example Linux inside Windows.',
      'The software that creates and runs VMs is called a <b>hypervisor</b>.'
    ] },
    { table: { head: ['', 'Type 1 (bare metal)', 'Type 2 (hosted)'], rows: [
      ['Runs', 'Directly on the hardware, like its own small OS', 'As an app inside a normal OS'],
      ['Used for', 'Servers and data centres', 'Learning, testing, running two OSes on one laptop'],
      ['Examples', 'VMware ESXi, Microsoft Hyper-V, KVM', 'Oracle VirtualBox, VMware Workstation']
    ] } },
    { h: 'Why VMs are so useful' },
    { ul: [
      '<b>Safe practice:</b> break things without harming the real computer.',
      '<b>Snapshots</b> save the VM\'s exact state, so you can jump back to it in seconds.',
      '<b>Testing:</b> try new software or updates in a VM before putting them on real PCs.',
      '<b>Saving money and space:</b> one powerful server can run many VMs, each acting as a separate server.'
    ] },
    { h: 'What you need' },
    { ul: [
      'A CPU with <b>virtualisation</b> support (Intel <b>VT-x</b> or <b>AMD-V</b>), switched on in the BIOS/UEFI settings.',
      'Enough RAM for both the host <em>and</em> the guest: the VM\'s RAM is borrowed from the real RAM.',
      'Free disk space for the virtual disk files.'
    ] },
    { h: 'Containers' },
    { p: '<b>Containers</b>, such as Docker, are a lighter idea. Instead of pretending to be a whole computer, a container packs one app together with everything it needs, and shares the host\'s kernel. Containers start in seconds and are widely used to run modern web apps.' },
    { h: 'Cloud computing' },
    { p: '<b>Cloud computing</b> means renting computing power, storage or software over the internet, instead of owning the machines yourself. You pay for what you use, like an electricity bill. This is called <b>pay-as-you-go</b>.' },
    { table: { head: ['Model', 'You rent...', 'You still look after...', 'Examples'], rows: [
      ['IaaS (Infrastructure as a Service)', 'Virtual servers, storage and networks', 'The OS and everything on it', 'Amazon EC2, Azure Virtual Machines'],
      ['PaaS (Platform as a Service)', 'A ready-made platform to run your code', 'Just your app and its data', 'Google App Engine, Azure App Service'],
      ['SaaS (Software as a Service)', 'Finished software you use in a browser or app', 'Only your data and settings', 'Gmail, Microsoft 365, Zoom']
    ] } },
    { ul: [
      '<b>Public cloud:</b> shared by many customers, from providers such as Amazon Web Services (AWS), Microsoft Azure and Google Cloud. <b>Private cloud:</b> used by one organisation only. <b>Hybrid cloud:</b> a mix of both.',
      'Cloud providers divide the world into <b>regions</b>: groups of data centres in one area. India has several, for example in Mumbai. Choosing a nearby region means lower latency.'
    ] },
    { h: 'Inside a data centre' },
    { ul: [
      'Servers sit in tall metal cabinets called <b>racks</b>.',
      'Huge cooling systems carry away the heat.',
      'Power comes from separate supplies, backed by big UPS batteries and <b>diesel generators</b> for long power cuts.',
      'Everything important is <b>redundant</b> (doubled), so one failure doesn\'t stop the service.',
      'Strict physical security: guards, ID cards, cameras and locked cages.'
    ] }
  ],
  analogy: {
    title: 'Think of it like flats in a building',
    text: 'A hypervisor is like a builder who turns one big plot of land into many flats. Each family has its own home, but they all share the same land, water and electricity.',
    map: [
      ['The building and its land', 'The host computer'],
      ['The builder who divides it into flats', 'The hypervisor'],
      ['Each flat, with its own family inside', 'A guest VM with its own OS'],
      ['A photo of your room before you rearrange it', 'A snapshot'],
      ['Renting a flat instead of building a house', 'Cloud computing'],
      ['Ordering a tiffin instead of cooking', 'SaaS']
    ]
  },
  diagram: { stack: [
    { t: 'Guest OS and apps', s: 'for example Linux, running in a window' },
    { t: 'Virtual hardware', s: 'pretend CPU, RAM and disk' },
    { t: 'Hypervisor', s: 'VirtualBox, Hyper-V, VMware...' },
    { t: 'Host OS', s: 'for example Windows (only with Type 2)' },
    { t: 'Real hardware', s: 'the actual CPU, RAM and SSD' }
  ], note: 'A Type 1 hypervisor skips the host OS and sits right on top of the hardware.' },
  words: [
    ['Virtual machine (VM)', 'A pretend computer created by software, running inside a real one.'],
    ['Host', 'The real computer that runs the virtual machines.'],
    ['Guest', 'The operating system running inside a virtual machine.'],
    ['Hypervisor', 'Software that creates and runs virtual machines.'],
    ['Snapshot', "A saved copy of a VM's exact state, so you can go back to it later."],
    ['Container', "A light package of one app and everything it needs, sharing the host's kernel."],
    ['Cloud computing', 'Renting computing power, storage or software over the internet.'],
    ['IaaS / PaaS / SaaS', 'Three cloud models: rent servers, rent a platform, or rent finished software.'],
    ['Rack', 'A tall metal cabinet that holds many servers in a data centre.']
  ],
  quiz: [
    { q: 'Riya runs Linux inside a window on her Windows PC. Here, Linux is the...', a: ['Host', 'Guest', 'Hypervisor', 'Rack'], c: 1, why: 'The real computer is the host. The OS inside the virtual machine is the guest.' },
    { q: 'Which of these is a Type 2 hypervisor that runs as an app?', a: ['VMware ESXi', 'KVM', 'Oracle VirtualBox', 'A UPS'], c: 2, why: 'VirtualBox runs as an ordinary app inside Windows, macOS or Linux.' },
    { q: 'Gmail is an example of...', a: ['SaaS', 'IaaS', 'A Type 1 hypervisor', 'A container'], c: 0, why: 'It is finished software you use over the internet: Software as a Service.' },
    { q: 'A VM won\'t start and says virtualisation is disabled. What should you check?', a: ['The monitor cable', 'The printer', 'The Wi-Fi password', 'That VT-x or AMD-V is switched on in the BIOS/UEFI'], c: 3, why: 'The CPU\'s virtualisation feature must be enabled in the firmware settings.' }
  ]
});

BBB.chapters.push({
  id: 'it-9', track: 'technician',
  title: 'The help desk',
  topic: 'Working in IT support',
  minutes: 8,
  story: [
    ['n', "Two days before exams, teachers stop Riya in every corridor. \"My projector!\" \"My password!\" \"The internet is slow!\" Riya tries to remember everything, and forgets half of it."],
    ['riya', "Uncle Dev, I fixed six things today, but I've forgotten who asked for what, and two teachers are cross with me."],
    ['dev', "You need what every IT team uses: tickets. Every problem gets written down: who, what, when, and how urgent. Then nothing gets lost, and the most important problems go first."],
    ['riya', 'But how do I decide what is most important?'],
    ['dev', 'Ask two questions. How many people does it affect? And how soon does it hurt? A dead projector in the exam hall beats a slow laptop in the staff room.'],
    ['n', 'Riya and Ms. Fernandes make a simple ticket sheet. By Friday, every ticket is closed.'],
    ['n', "On the first day of exams, all 30 PCs start in under a minute and nobody's work is lost. At assembly, the principal calls Riya up on stage and thanks \"our student IT engineer\". That evening Arjun video-calls, clapping."],
    ['arjun', 'Doctor Riya, Detective Riya, and now Engineer Riya. What next?']
  ],
  learn: [
    { h: 'Tickets' },
    { p: 'A <b>ticket</b> is a record of one problem or request, from the moment it is reported until it is solved. Help desks use ticketing systems so nothing is forgotten. A good ticket includes:' },
    { ul: [
      'Who reported it, and how to contact them.',
      'Which device: its name or <b>asset tag</b> (the ID sticker on it).',
      'What exactly happens, any error message, and when it started.',
      'What has already been tried.',
      'The <b>priority</b>, who is working on it, and its <b>status</b>: new, in progress, waiting, resolved or closed.',
      'Notes on what finally fixed it.'
    ] },
    { h: 'Priority = impact × urgency' },
    { table: { head: ['', 'Low urgency', 'High urgency'], rows: [
      ['High impact (many people)', 'Medium: the staff room printer is slow', 'Critical: the exam hall network is down'],
      ['Low impact (one person)', 'Low: one teacher wants a new wallpaper', "Medium: one teacher can't log in just before class"]
    ] } },
    { h: 'The troubleshooting method' },
    { ol: [
      '<b>Identify the problem.</b> Ask questions, try to make it happen again, and check what changed recently. Back up data before changing anything.',
      '<b>Make a theory of the likely cause.</b> Start with the simple, obvious things.',
      '<b>Test the theory.</b> If it\'s wrong, make a new theory, or escalate.',
      '<b>Make a plan and fix it.</b> Think about side effects, and get permission if the fix affects other people.',
      '<b>Verify</b> that everything works, and stop it happening again if you can.',
      '<b>Document</b> what you found, what you did and how it turned out.'
    ] },
    { h: 'Escalation tiers' },
    { table: { head: ['Tier', 'Who', 'Handles'], rows: [
      ['Tier 1', 'The help desk', 'Common problems: passwords, printers, simple how-to questions'],
      ['Tier 2', 'Experienced technicians', 'Deeper problems: hardware repairs, network issues, server problems'],
      ['Tier 3', 'Experts, engineers or the product maker', 'The hardest problems, design changes, bugs in products']
    ] } },
    { h: 'Good habits' },
    { ul: [
      '<b>Documentation and a knowledge base:</b> write down every fix, so the next person (or future you) can solve the same problem in minutes.',
      '<b>Asset inventory:</b> a list of every device, with its name, location, serial number, purchase date, warranty and user.',
      '<b>Remote support</b> tools let you see and control a user\'s screen over the network. Connect only with the user\'s clear permission. Scammers use the same tools, so never let a stranger who phones you connect to your computer.'
    ] },
    { h: 'Talking to people' },
    { ul: [
      '<b>Listen</b> fully before answering. Let people explain in their own words.',
      '<b>No jargon.</b> Say "the cable that goes to the internet", not "the RJ45 patch lead".',
      '<b>Be patient and kind.</b> Never blame or laugh at the user.',
      '<b>Set expectations:</b> tell people what you will do, and roughly when.',
      '<b>Respect privacy.</b> Never open, read or copy someone\'s personal files, emails or photos. Touch only what the job needs.'
    ] }
  ],
  analogy: {
    title: 'Think of it like a hospital',
    text: 'A help desk works a lot like a hospital: record every patient, treat the most serious first, and call in specialists when needed.',
    map: [
      ['The reception desk that records every patient', 'The help desk and its tickets'],
      ['Treating the most serious patients first', 'Priority: impact × urgency'],
      ['General doctor, then specialist, then surgeon', 'Tier 1, Tier 2, Tier 3'],
      ["Each patient's medical file", 'Documentation and the knowledge base'],
      ["A doctor's kind, calm manner", 'Talking to users with patience']
    ]
  },
  diagram: { flow: [
    { t: 'Identify', s: 'ask, reproduce, back up' },
    { t: 'Theory', s: 'simple causes first' },
    { t: 'Test', s: 'wrong? make a new theory' },
    { t: 'Fix and verify', s: 'plan, fix, check, prevent' },
    { t: 'Document', s: 'write it all down' }
  ], note: 'The same steps work for a printer, a server or a whole network.' },
  words: [
    ['Help desk', 'The team people contact when they need IT help.'],
    ['Ticket', 'A record of one IT problem or request, from start to finish.'],
    ['Asset tag', 'An ID sticker that identifies a device in the inventory.'],
    ['Priority', 'How soon a ticket should be handled, worked out from its impact and urgency.'],
    ['Escalation', 'Passing a problem on to a more experienced tier.'],
    ['Knowledge base', 'A collection of written fixes and how-to guides.'],
    ['Asset inventory', 'A list of every device an organisation owns, with its details.'],
    ['Remote support', "Viewing or controlling a user's computer over the network, with their permission."]
  ],
  quiz: [
    { q: 'Which problem should be fixed first?', a: ['One teacher wants a new wallpaper', 'The exam hall network is down during exams', 'A slow laptop in the staff room', 'A request for a new mouse next month'], c: 1, why: 'It affects many people and it hurts right now: high impact and high urgency.' },
    { q: 'What is the FIRST step of the troubleshooting method?', a: ['Document the fix', 'Replace the hard disk', 'Identify the problem', 'Restart everything'], c: 2, why: 'You can\'t fix what you don\'t understand. Ask questions and find out what is really happening.' },
    { q: "While fixing a teacher's laptop, you notice her personal photos. What should you do?", a: ['Leave them alone and touch only what the job needs', 'Look through them', 'Copy them without asking', 'Show them to friends'], c: 0, why: 'Respecting privacy is part of the job. IT staff are trusted with access, and must never misuse it.' },
    { q: 'Why write fixes into a knowledge base?', a: ['To make tickets longer', 'Because the principal reads it', 'Windows requires it', 'So the same problem can be solved quickly next time'], c: 3, why: 'Good documentation turns a two-hour mystery into a two-minute fix for the next person.' }
  ]
});

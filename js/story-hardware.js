/* Byte by Byte — story content.
   Part 1: Inside the box (hardware).
   Every chapter is plain data so it is easy to edit without touching the app code.

   Story lines:  ['n', 'text']  = narrator,  ['riya'|'dev'|'arjun', 'text'] = a character speaking.
   Learn blocks: {h:'heading'} {p:'paragraph'} {ul:[...]} {ol:[...]} {table:{head:[...], rows:[[...]]}} {tip:'...'} {warn:'...'}
   Diagram:      {flow:[{t,s}], loop:true?, note?}  or  {stack:[{t,s}]}
*/
window.BBB = window.BBB || {};

BBB.characters = {
  riya:  { name: 'Riya',      initial: 'R', role: '14, curious, and about to become the family computer doctor.' },
  dev:   { name: 'Uncle Dev', initial: 'D', role: 'Hardware and network engineer. Explains everything with everyday things.' },
  arjun: { name: 'Arjun',     initial: 'A', role: "Riya's best friend. Just moved to Bengaluru, 800 km away." }
};

BBB.tracks = {
  hardware: {
    title: 'Inside the box',
    part: 'Part 1',
    label: 'Hardware',
    blurb: "Riya finds Grandpa's old computer. It won't switch on. To fix it, she has to learn what every part inside does.",
    finish: "You now know what every part inside a computer does, how it wakes up, how to build one and how to fix one. That's the foundation of computer engineering."
  },
  networking: {
    title: 'Out into the world',
    part: 'Part 2',
    label: 'Networking',
    blurb: 'Riya wants to play a game with her best friend in another city. Follow her message all the way there, and back.',
    finish: "You followed one message from Riya's room to Arjun's screen: addresses, routers, cables, packets, DNS, protocols, security and troubleshooting. That's the whole map of networking."
  }
};

BBB.chapters = [];

BBB.chapters.push({
  id: 'hw-1', track: 'hardware',
  title: 'The computer that would not wake up',
  topic: 'What is a computer?',
  minutes: 4,
  story: [
    ['n', "It's the first week of the summer holidays in Pune. In Grandpa's store room, under a dusty cloth, Riya finds a big grey box with a keyboard and a heavy old screen."],
    ['n', 'She plugs it in and presses the big round button. Nothing. Not a light, not a beep.'],
    ['riya', "Uncle Dev! Grandpa's computer is dead. Can we throw it away and buy a new one?"],
    ['dev', "Dead? Or just asleep? Before we fix anything, tell me something. What do you think a computer actually does?"],
    ['riya', 'It... plays videos? Runs games? Helps with homework?'],
    ['dev', "Those are things <em>you</em> do with it. Underneath, every computer does just four jobs. It takes something in, it works on it, it gives something out, and it remembers. Your phone does that. A calculator does that. Even the little computer inside a washing machine does that."],
    ['riya', 'Four jobs. So if Grandpa\'s box is broken, one of those four jobs is broken?'],
    ['dev', "Now you're thinking like an engineer. This week we open it up and find out which one."]
  ],
  learn: [
    { p: 'A <b>computer</b> is a machine that follows instructions to turn <b>input</b> into <b>output</b>. Big or small, every computer does the same four jobs:' },
    { table: { head: ['Job', 'What it means', 'Examples'], rows: [
      ['Input', 'Getting information in', 'Keyboard, mouse, touch screen, microphone, camera'],
      ['Processing', 'Working on the information', 'The CPU, the "brain" of the computer'],
      ['Output', 'Showing or giving the result', 'Screen, speakers, printer'],
      ['Storage', 'Remembering it for later', 'SSD or hard disk, pen drive, memory card']
    ] } },
    { h: 'Hardware and software' },
    { ul: [
      '<b>Hardware</b> is every part you can touch: the keyboard, the screen, the chips and cables inside.',
      '<b>Software</b> is the set of instructions that tells the hardware what to do: Windows, a game, WhatsApp, a calculator app.',
      'Neither is useful alone. Hardware with no software is a body with nobody home. Software with no hardware has nowhere to run.'
    ] },
    { tip: '<b>Computer engineering</b> is the job of designing and building the hardware, plus the low-level software that makes the hardware come alive.' }
  ],
  analogy: {
    title: 'Think of it like a kitchen',
    text: 'A computer works a lot like a kitchen making dinner.',
    map: [
      ['Vegetables and spices come in', 'Input'],
      ['The cook chops and cooks', 'Processing'],
      ['The dish is served on the table', 'Output'],
      ['Leftovers go into the fridge', 'Storage'],
      ['The recipe the cook follows', 'Software']
    ]
  },
  diagram: { flow: [
    { t: 'Input', s: 'keyboard, mouse, mic' },
    { t: 'Process', s: 'the CPU works on it' },
    { t: 'Output', s: 'screen, speaker' }
  ], note: 'Storage sits underneath all three, keeping everything safe for later.' },
  words: [
    ['Computer', 'A machine that follows instructions to turn input into output.'],
    ['Input', 'Information going into a computer, like a key press or a mouse click.'],
    ['Output', 'The result a computer gives back, like a picture on screen or a sound.'],
    ['Processing', 'The work a computer does on information. Done by the CPU.'],
    ['Storage', 'Where a computer keeps data for later, even when it is switched off.'],
    ['Hardware', 'The physical parts of a computer that you can touch.'],
    ['Software', 'Programs: the instructions that tell hardware what to do.']
  ],
  quiz: [
    { q: 'Which of these is an INPUT device?', a: ['Monitor', 'Keyboard', 'Speaker', 'Printer'], c: 1, why: 'You use a keyboard to put information into the computer. The others all give information out.' },
    { q: 'A game app on your phone is...', a: ['Hardware', 'Software', 'Storage', 'An output device'], c: 1, why: "A game is a set of instructions. You can't touch it, so it's software." },
    { q: 'Which job keeps your photos safe after you switch the computer off?', a: ['Processing', 'Output', 'Storage', 'Input'], c: 2, why: 'Storage remembers things even when the power is off.' }
  ]
});

BBB.chapters.push({
  id: 'hw-2', track: 'hardware',
  title: 'Talking in switches',
  topic: 'Binary, bits and bytes',
  minutes: 5,
  story: [
    ['n', 'Uncle Dev unscrews the side panel of the grey box. Inside: green boards, flat ribbon cables, a fan, and thousands of tiny black and silver parts.'],
    ['riya', 'How does all this understand my words? It\'s just metal and wires.'],
    ['dev', "Here's the secret. It doesn't understand words at all. Deep inside its chips are billions of tiny switches. Each switch is either ON or OFF. That's all it knows."],
    ['riya', 'Then how does it show photos and play songs?'],
    ['dev', "Put enough switches in a row and you can count to any number. Give every letter a number. Every colour a number. Every tiny slice of sound a number. Suddenly ON and OFF can mean anything at all."],
    ['riya', "So the whole computer is just... counting with light switches?"],
    ['dev', 'Very, very fast. Billions of times a second. Come on, let\'s count like a computer.']
  ],
  learn: [
    { p: 'Each tiny switch holds one <b>bit</b> (short for <em>binary digit</em>). A bit is either <b>0</b> (off) or <b>1</b> (on). Counting with only 0 and 1 is called <b>binary</b>.' },
    { h: 'How to read a binary number' },
    { p: 'In binary, each place is worth double the place to its right: <b>1, 2, 4, 8, 16, 32, 64, 128</b>. To read a number, add up the places that are switched ON.' },
    { ul: [
      '<code>00000101</code> → the 4 and the 1 are on → 4 + 1 = <b>5</b>',
      '<code>00001010</code> → the 8 and the 2 are on → 8 + 2 = <b>10</b>',
      '<code>11111111</code> → everything is on → 128+64+32+16+8+4+2+1 = <b>255</b>'
    ] },
    { h: 'Bits, bytes and bigger' },
    { ul: [
      '<b>8 bits = 1 byte.</b> One byte can hold 256 different patterns (0 to 255).',
      'Text uses codes to turn letters into numbers. In the common <b>ASCII</b> code, the capital letter <b>A</b> is 65, B is 66, and so on.',
      '<b>1 KB</b> (kilobyte) ≈ 1,000 bytes: a short paragraph of text.',
      '<b>1 MB</b> (megabyte) ≈ 1,000 KB: a phone photo, or about a minute of music.',
      '<b>1 GB</b> (gigabyte) ≈ 1,000 MB: a movie.',
      '<b>1 TB</b> (terabyte) ≈ 1,000 GB: hundreds of movies.'
    ] },
    { tip: "Bought a 1 TB drive and Windows says it's only 931 GB? Nothing is missing. The box counts 1 KB as 1,000 bytes, but Windows counts it as 1,024. Same bytes, different way of counting." }
  ],
  analogy: {
    title: 'Think of it like hallway switches',
    text: 'Picture 8 light switches in a row. Each pattern of ON and OFF is a secret code for one number. A computer has billions of these switches, flipping billions of times a second.',
    map: [
      ['One switch', 'A bit (0 or 1)'],
      ['A row of 8 switches', 'A byte'],
      ['The pattern of the row', 'A number, a letter, a colour...']
    ]
  },
  toy: 'binary',
  words: [
    ['Bit', 'The smallest piece of data: a single 0 or 1.'],
    ['Byte', 'A group of 8 bits. Can store a number from 0 to 255.'],
    ['Binary', 'Counting using only 0 and 1. The language of all computers.'],
    ['ASCII', 'A code that gives every letter and symbol a number, like A = 65.'],
    ['KB, MB, GB, TB', 'Kilobyte, megabyte, gigabyte, terabyte. Each is about 1,000 times bigger than the last.']
  ],
  quiz: [
    { q: 'A single bit can be...', a: ['Only 0 or 1', 'Any number from 0 to 9', 'A whole letter', 'A colour'], c: 0, why: 'A bit is one switch: off (0) or on (1). Nothing else.' },
    { q: 'How many bits make one byte?', a: ['4', '8', '10', '16'], c: 1, why: '8 bits make 1 byte.' },
    { q: 'What is binary 00000011 in normal numbers?', a: ['11', '3', '2', '1'], c: 1, why: 'The 2 and the 1 are switched on. 2 + 1 = 3.' }
  ]
});

BBB.chapters.push({
  id: 'hw-3', track: 'hardware',
  title: 'The brain in the middle',
  topic: 'The CPU',
  minutes: 5,
  story: [
    ['n', 'In the middle of the big green board sits a metal block covered in thin fins, with a fan on top. Uncle Dev unclips it and lifts it off. Underneath is a small square chip, smeared with dry grey paste.'],
    ['riya', "That tiny thing? That's the brain?"],
    ['dev', 'The CPU: the Central Processing Unit. Every click, every key press, every dot of colour on the screen, it does the maths for all of it. Billions of tiny steps every second.'],
    ['riya', 'Why is there a fan sitting on top of it?'],
    ['dev', 'Thinking that fast makes heat. A lot of heat. Without this metal heatsink and fan, it would get too hot within seconds, and it would slow itself down or switch off to protect itself.'],
    ['riya', 'And this grey toothpaste stuff?'],
    ['dev', "Thermal paste. The chip and the heatsink look flat, but they have tiny gaps full of air, and air is bad at carrying heat. The paste fills the gaps. Grandpa's paste has dried out like old clay. Make a note: that could be one of our problems."]
  ],
  learn: [
    { p: 'The <b>CPU</b> (Central Processing Unit), also called the <b>processor</b>, carries out the instructions of every program. It works in a never-ending loop:' },
    { ol: [
      '<b>Fetch</b> the next instruction from memory.',
      '<b>Decode</b> it: work out what it is asking for.',
      '<b>Execute</b> it: do the maths or move the data.',
      'Go back to step 1. Billions of times per second.'
    ] },
    { h: 'What makes one CPU faster than another?' },
    { ul: [
      '<b>Clock speed</b>, measured in <b>GHz</b> (gigahertz). 3 GHz means about 3 billion ticks per second. More ticks, more work.',
      '<b>Cores.</b> A modern CPU has several cores, each one a complete processor. A 4-core CPU can work on 4 things at the same time.',
      '<b>Cache.</b> A tiny, super-fast memory right inside the CPU for the things it needs most often.'
    ] },
    { h: 'Keeping it cool' },
    { ul: [
      'A <b>heatsink</b> (metal fins) pulls heat away from the chip, and a <b>fan</b> blows it out. Some PCs use liquid cooling instead.',
      '<b>Thermal paste</b> sits between the CPU and the heatsink so heat can flow across.'
    ] },
    { tip: 'Most PCs and laptops use CPUs from <b>Intel</b> or <b>AMD</b>. Phones and many newer laptops use <b>ARM</b>-based chips (Apple, Qualcomm Snapdragon, MediaTek). A CPU sits in a <b>socket</b> on the motherboard, and the socket has to match: not every CPU fits every board.' }
  ],
  analogy: {
    title: 'Think of it like a head chef',
    text: 'The CPU is a chef who reads one recipe step, understands it, does it, and moves on to the next. Very fast, never bored.',
    map: [
      ['Reading the next step of the recipe', 'Fetch'],
      ['Understanding "chop the onions"', 'Decode'],
      ['Chopping the onions', 'Execute'],
      ['How fast the chef works', 'Clock speed (GHz)'],
      ['Number of chefs in the kitchen', 'Cores']
    ]
  },
  diagram: { flow: [
    { t: 'Fetch', s: 'get the next instruction' },
    { t: 'Decode', s: 'work out what it means' },
    { t: 'Execute', s: 'do it' }
  ], loop: true, note: 'Then back to Fetch. Billions of times every second.' },
  words: [
    ['CPU', 'Central Processing Unit. The chip that carries out every instruction. The brain of the computer.'],
    ['Core', 'One complete processor inside a CPU. More cores can do more things at once.'],
    ['Clock speed', 'How many cycles a CPU does per second, measured in GHz. 3 GHz = 3 billion per second.'],
    ['Heatsink', 'A block of metal fins that pulls heat away from a chip.'],
    ['Thermal paste', 'Grey paste between a chip and its heatsink that helps heat flow across.'],
    ['Socket', 'The slot on the motherboard where the CPU sits. It must match the CPU.']
  ],
  quiz: [
    { q: 'What does CPU stand for?', a: ['Computer Power Unit', 'Central Processing Unit', 'Central Program Utility', 'Core Power Unit'], c: 1, why: 'Central Processing Unit: the part that processes every instruction.' },
    { q: 'Why does a CPU need a heatsink and fan?', a: ['To store files', 'To make downloads faster', 'To stay cool while it works', 'To make sound'], c: 2, why: 'Working billions of times a second makes heat. The heatsink and fan carry it away.' },
    { q: 'A 4-core CPU is like...', a: ['One cook with 4 recipes', 'A kitchen with 4 cooks', 'A fridge with 4 shelves', 'A cook who works 4 hours'], c: 1, why: 'Each core is a full processor, like an extra cook working at the same time.' }
  ]
});

BBB.chapters.push({
  id: 'hw-4', track: 'hardware',
  title: 'The desk and the cupboard',
  topic: 'Memory (RAM) and storage',
  minutes: 5,
  story: [
    ['n', 'Next to the CPU, Riya spots two long, thin green sticks clipped into slots. Further down, bolted to the case, is a heavy metal box with a cable running into it.'],
    ['dev', 'These sticks are the RAM. That heavy box is the hard disk. Both hold data, but in completely different ways.'],
    ['riya', 'Why would a computer need two places to keep things?'],
    ['dev', "Think about doing your homework. Your desk is where you spread out the books you're using right now. Your cupboard is where all your books live when you're not using them. RAM is the desk. The hard disk is the cupboard."],
    ['riya', 'So a bigger desk means I can have more books open at once?'],
    ['dev', "Exactly. And if the desk is too small, you keep running back to the cupboard to swap books. That's when a computer feels slow. Now, what happens to your desk at the end of the day?"],
    ['riya', 'Mummy makes me clear it! ...Oh. So when you switch off, the RAM gets cleared, but the hard disk keeps everything.'],
    ['dev', "That's why you have to press Save."]
  ],
  learn: [
    { h: 'RAM: the working desk' },
    { ul: [
      '<b>RAM</b> (Random Access Memory) holds the programs and files you have open <em>right now</em>.',
      "It is very fast, so the CPU doesn't have to wait.",
      'It is <b>volatile</b>: it forgets everything when the power goes off. That\'s why unsaved work is lost in a power cut.',
      'Everyday PCs today usually have 8 to 16 GB of RAM. Heavy gaming or video editing likes 32 GB or more.'
    ] },
    { h: 'Storage: the cupboard' },
    { p: 'Storage keeps your files, photos, apps and the operating system, even with the power off. There are two main kinds:' },
    { table: { head: ['', 'HDD (hard disk drive)', 'SSD (solid-state drive)'], rows: [
      ['How it works', 'Spinning metal platters and a moving arm', 'Memory chips, no moving parts'],
      ['Speed', 'Slower', 'Many times faster'],
      ['Price for the space', 'Cheaper, very large sizes', 'Costs a little more'],
      ['If dropped', 'Can easily be damaged', 'Much tougher'],
      ['Sound', 'Quiet whirring and clicking', 'Silent']
    ] } },
    { p: 'The fastest SSDs are small sticks called <b>M.2 NVMe</b> drives that plug straight into the motherboard.' },
    { h: 'How they work together' },
    { p: 'When you open an app, it is copied from <b>storage</b> into <b>RAM</b>, and the <b>CPU</b> works on it from there.' },
    { tip: "Got an old, slow PC? Replacing its hard disk with an SSD is often the single biggest speed-up you can give it, more than almost anything else." }
  ],
  analogy: {
    title: 'Think of it like a desk and a cupboard',
    text: 'You keep everything in the cupboard, but you only work on what is on your desk.',
    map: [
      ['Your desk', 'RAM'],
      ['Size of the desk', 'How many GB of RAM'],
      ['Your cupboard', 'Storage (SSD or HDD)'],
      ['Clearing the desk at night', 'RAM forgetting when power goes off'],
      ['You, doing the homework', 'The CPU']
    ]
  },
  diagram: { flow: [
    { t: 'Storage', s: 'the cupboard: keeps everything' },
    { t: 'RAM', s: 'the desk: what is open now' },
    { t: 'CPU', s: 'you, doing the work' }
  ], note: 'Open an app and it moves from storage, to RAM, to the CPU.' },
  words: [
    ['RAM', 'Random Access Memory. Fast, temporary memory for whatever is open right now.'],
    ['Volatile', 'Forgets everything when the power is switched off. RAM is volatile.'],
    ['HDD', 'Hard Disk Drive. Stores data on spinning metal platters. Big and cheap, but slower.'],
    ['SSD', 'Solid-State Drive. Stores data on memory chips with no moving parts. Fast and silent.'],
    ['M.2 / NVMe', 'A small stick-shaped SSD that plugs right into the motherboard. The fastest common type.']
  ],
  quiz: [
    { q: 'What happens to the RAM when the computer turns off?', a: ['It keeps everything', 'It empties', 'It moves to the internet', 'It doubles in size'], c: 1, why: 'RAM is volatile. It only remembers while it has power.' },
    { q: 'Which one has NO moving parts?', a: ['HDD', 'SSD', 'Cooling fan', 'DVD drive'], c: 1, why: 'An SSD stores everything on memory chips. Nothing spins or moves.' },
    { q: "Grandpa's old PC takes 5 minutes to start. Which upgrade usually helps the most?", a: ['A bigger monitor', 'A new mouse', 'Swap the hard disk for an SSD', 'Louder speakers'], c: 2, why: 'Starting up means reading lots of files from storage. An SSD reads them many times faster.' }
  ]
});

BBB.chapters.push({
  id: 'hw-5', track: 'hardware',
  title: 'A city on a green board',
  topic: 'Motherboard, power supply, graphics and ports',
  minutes: 6,
  story: [
    ['n', 'Riya runs her finger along the green board. Thin copper lines run everywhere, crossing and turning, like the roads on a map.'],
    ['dev', "That big board is the motherboard. Think of it as a city. The CPU, the RAM, the drives are the buildings. These copper lines are the roads that carry data between them."],
    ['riya', 'Then who gives the city electricity?'],
    ['dev', 'The power supply. That box in the corner with its own fan. It takes electricity from the wall socket and turns it into the smaller, steady voltages the parts need.'],
    ['riya', 'What about this flat board sticking out, with its own little fan?'],
    ['dev', 'Graphics card. The GPU. It draws everything you see on the screen: games, videos, even the mouse pointer. Its job is to colour millions of dots, very fast.'],
    ['riya', 'There are so many parts.'],
    ['dev', "Your turn. Explore the city and find every part. I'll tell you about each one."]
  ],
  learn: [
    { h: 'The motherboard' },
    { p: 'The <b>motherboard</b> is the main circuit board. Everything plugs into it:' },
    { ul: [
      'A <b>socket</b> for the CPU.',
      '<b>RAM slots</b> for memory sticks.',
      '<b>PCIe slots</b> for the graphics card and other add-on cards.',
      '<b>M.2 and SATA connectors</b> for storage drives.',
      'The <b>ports</b> on the back panel.'
    ] },
    { h: 'The power supply (PSU)' },
    { ul: [
      'Converts the AC electricity from the wall (230 volts in India) into low DC voltages: 12 V, 5 V and 3.3 V.',
      'Rated in <b>watts</b>. A gaming PC with a big graphics card needs a stronger PSU.',
      'A failed PSU is one of the most common reasons a PC shows no sign of life.'
    ] },
    { h: 'The graphics card (GPU)' },
    { ul: [
      'The <b>GPU</b> (Graphics Processing Unit) draws images. It has thousands of small cores that each do simple maths at the same time, which is perfect for colouring millions of pixels.',
      'Many CPUs have small <b>integrated graphics</b> built in. A separate <b>graphics card</b> is much more powerful and has its own memory, called <b>VRAM</b>.'
    ] },
    { h: 'Ports: the city gates' },
    { table: { head: ['Port', 'Used for'], rows: [
      ['USB / USB-C', 'Keyboard, mouse, pen drive, phone, charging'],
      ['HDMI / DisplayPort', 'Monitor or TV'],
      ['Ethernet (RJ45)', 'Network cable to the router'],
      ['3.5 mm audio', 'Headphones, speakers, microphone']
    ] } }
  ],
  analogy: {
    title: 'Think of it like a city',
    text: 'The inside of a computer is a small city where every building has one job.',
    map: [
      ['The city and its roads', 'Motherboard'],
      ['The power station', 'Power supply (PSU)'],
      ['The town hall that makes decisions', 'CPU'],
      ['The workshop desks', 'RAM'],
      ['The warehouse', 'Storage drive'],
      ['The art studio', 'Graphics card (GPU)'],
      ['The city gates', 'Ports']
    ]
  },
  toy: 'pcparts',
  words: [
    ['Motherboard', 'The main circuit board that connects every part of the computer.'],
    ['PSU', 'Power Supply Unit. Turns wall electricity into the low voltages the parts need.'],
    ['GPU', 'Graphics Processing Unit. Draws everything you see on the screen.'],
    ['VRAM', "The graphics card's own fast memory."],
    ['PCIe slot', 'A long slot on the motherboard for a graphics card or other add-on cards.'],
    ['Port', 'A socket on the outside of a computer where you plug a cable in.'],
    ['HDMI', 'A port and cable that carries picture and sound to a monitor or TV.']
  ],
  quiz: [
    { q: 'Which part turns wall electricity into power the PC can use?', a: ['GPU', 'RAM', 'Power supply (PSU)', 'Motherboard'], c: 2, why: 'The PSU converts 230 V AC from the wall into the low DC voltages the parts need.' },
    { q: 'You want to plug in a monitor. Which port would you use?', a: ['HDMI', 'Ethernet', '3.5 mm audio', 'SATA'], c: 0, why: 'HDMI (or DisplayPort) carries the picture to a screen.' },
    { q: 'What is the GPU\'s main job?', a: ['Storing files', 'Drawing images on the screen', 'Supplying power', 'Connecting to Wi-Fi'], c: 1, why: 'GPU stands for Graphics Processing Unit. It draws what you see.' }
  ]
});

BBB.chapters.push({
  id: 'hw-6', track: 'hardware',
  title: 'Waking up',
  topic: 'Booting and the operating system',
  minutes: 5,
  story: [
    ['n', 'On Saturday Uncle Dev arrives with a brand new power supply. Grandpa\'s old one smells burnt inside: that was the main problem all along. They swap it, blow out years of dust, and put fresh thermal paste on the CPU.'],
    ['dev', 'Ready? Press it.'],
    ['n', 'Riya presses the round button. The fans whirr. One short beep. The old screen glows, and a logo appears.'],
    ['riya', "It's alive! ...But what is it doing? It's just showing a logo."],
    ['dev', "Waking up takes steps, just like you in the morning. First it checks its own body. Then it looks for where its mind is stored. Only then does it load that mind."],
    ['riya', 'Its mind?'],
    ['dev', "The operating system. In Grandpa's case, Windows. Without it, all this hardware is a body with nobody home."]
  ],
  learn: [
    { p: 'Starting a computer is called <b>booting</b>. Here is what happens after you press the power button:' },
    { ol: [
      '<b>Power on.</b> The PSU sends power to the motherboard.',
      '<b>Firmware starts.</b> A small program stored on a chip on the motherboard wakes up first. It is called the <b>BIOS</b>, or on newer PCs, <b>UEFI</b>.',
      '<b>POST</b> (Power-On Self-Test). The firmware checks that the CPU, RAM and graphics are present and working. One short beep usually means "all good". Different beep patterns point to different problems.',
      '<b>Find the boot drive.</b> The firmware checks the <b>boot order</b> to find the drive that holds the operating system.',
      '<b>Bootloader.</b> A small program on that drive loads the operating system into RAM.',
      '<b>The operating system starts</b>, loads its drivers, and shows you the login screen.'
    ] },
    { h: 'The operating system (OS)' },
    { p: 'The <b>OS</b> is the main software that manages everything: it runs your apps, shares out the CPU and RAM, looks after files, talks to devices and keeps things secure. Examples: <b>Windows</b>, <b>macOS</b>, <b>Linux</b>, <b>Android</b>, <b>iOS</b>.' },
    { h: 'Drivers' },
    { p: 'A <b>driver</b> is a small program that teaches the OS how to talk to one particular piece of hardware. A new printer often does nothing until its driver is installed.' },
    { tip: 'To open the BIOS/UEFI settings, press a key like <b>Del</b>, <b>F2</b> or <b>F10</b> just after switching on. The key differs by brand, and it usually flashes on the screen for a moment.' }
  ],
  analogy: {
    title: 'Think of it like waking up in the morning',
    text: 'You don\'t jump out of bed straight into maths homework. You wake up in steps.',
    map: [
      ['Opening your eyes', 'Power on, firmware starts'],
      ['Checking you can move your arms and legs', 'POST self-test'],
      ['Remembering who you are and what day it is', 'Bootloader loads the OS'],
      ['Starting your day', 'The OS shows the login screen']
    ]
  },
  diagram: { flow: [
    { t: 'Power', s: 'PSU wakes the board' },
    { t: 'UEFI / BIOS', s: 'firmware starts' },
    { t: 'POST', s: 'checks the hardware' },
    { t: 'Boot drive', s: 'finds the OS' },
    { t: 'OS loads', s: 'drivers, then login' }
  ] },
  words: [
    ['Boot', 'Starting up a computer and loading its operating system.'],
    ['BIOS / UEFI', 'Firmware on the motherboard that runs first when you switch on. UEFI is the newer kind.'],
    ['POST', 'Power-On Self-Test. A quick hardware check at start-up.'],
    ['Boot order', 'The list of drives the computer tries, in order, to find an operating system.'],
    ['Operating system', 'The main software that manages the hardware and runs apps. Windows, Linux, Android...'],
    ['Driver', 'A small program that lets the OS talk to a specific piece of hardware.']
  ],
  quiz: [
    { q: 'What is POST?', a: ['A self-test the PC runs when it starts', 'A type of cable', 'A message on social media', 'A cooling fan'], c: 0, why: 'POST = Power-On Self-Test. It checks the hardware before the OS loads.' },
    { q: 'Which one is an operating system?', a: ['Intel', 'HDMI', 'Linux', 'NVMe'], c: 2, why: 'Linux is an operating system. Intel makes chips, HDMI is a port, NVMe is a kind of SSD.' },
    { q: 'A new printer won\'t work until you install its...', a: ['CPU', 'Driver', 'Fan', 'Router'], c: 1, why: 'The driver teaches the operating system how to talk to that printer.' }
  ]
});

BBB.chapters.push({
  id: 'hw-7', track: 'hardware',
  title: 'Building one from scratch',
  topic: 'Putting a PC together',
  minutes: 6,
  story: [
    ['n', "Grandpa's computer works again, but it's slow. Riya has been saving birthday money for a year. Uncle Dev has an idea: instead of buying a new computer, they will build one together, from parts."],
    ['riya', 'Build it? Like Lego?'],
    ['dev', "A bit like Lego. Parts only fit one way, and the order matters. But first, two rules. Rule one: always switch off and unplug the power before you touch anything inside."],
    ['riya', 'And rule two?'],
    ['dev', "Static electricity. That tiny shock you sometimes get from a door handle? It can kill a chip, and you won't even feel it. So before you touch any part, touch a bare metal part of the case. Or wear an anti-static wrist strap."],
    ['riya', 'Unplug. Touch metal. Got it. Where do we start?'],
    ['dev', "With a list. Every part has to work with the others. Then we start building on top of the motherboard's box, outside the case, where it's easy to see."]
  ],
  learn: [
    { h: 'Step 1: choose parts that work together' },
    { ul: [
      '<b>CPU and motherboard:</b> the CPU must fit the motherboard\'s socket.',
      '<b>RAM and motherboard:</b> the board supports one type, either <b>DDR4</b> or <b>DDR5</b>. They don\'t fit each other\'s slots.',
      '<b>Power supply:</b> enough watts for the CPU and graphics card, with some to spare.',
      '<b>Case:</b> must fit the motherboard size (<b>ATX</b>, <b>Micro-ATX</b> or <b>Mini-ITX</b>) and the length of the graphics card.'
    ] },
    { h: 'Step 2: build in a sensible order' },
    { ol: [
      'Put the <b>CPU</b> in its socket. Line up the little triangle mark. Never press hard.',
      'Click the <b>RAM</b> sticks into their slots.',
      'Fit the <b>M.2 SSD</b> and its small screw.',
      'Add <b>thermal paste</b> and mount the <b>CPU cooler</b>.',
      'Screw the <b>motherboard</b> into the case, on its small metal standoffs.',
      'Mount the <b>power supply</b> in the case.',
      'Push the <b>graphics card</b> into the top PCIe slot.',
      'Connect the <b>power cables</b> (big 24-pin for the board, 8-pin for the CPU, power for the GPU) and the small front-panel wires.',
      'Switch on and check it reaches the BIOS. Then install the operating system from a USB stick.'
    ] },
    { warn: 'Never force anything. If a part does not go in easily, it is the wrong way round or the wrong slot. Check the motherboard manual.' }
  ],
  analogy: {
    title: 'Think of it like building a house',
    text: 'You don\'t paint the walls before the foundation is laid. Some steps simply have to come first.',
    map: [
      ['Checking the bricks fit together', 'Checking part compatibility'],
      ['Laying the foundation', 'CPU, RAM and SSD onto the motherboard'],
      ['Putting up the walls', 'Board, PSU and GPU into the case'],
      ['Connecting the electricity', 'Power cables'],
      ['Moving in', 'Installing the operating system']
    ]
  },
  toy: 'buildorder',
  words: [
    ['Compatibility', 'Whether parts can work together, like a CPU fitting a motherboard\'s socket.'],
    ['Static electricity (ESD)', 'A small electric charge on your body that can damage chips. Touch metal to get rid of it.'],
    ['DDR4 / DDR5', 'Two generations of RAM. A motherboard supports only one of them.'],
    ['Form factor', 'The size and shape standard of a motherboard: ATX, Micro-ATX, Mini-ITX.'],
    ['Standoffs', 'Small metal pillars that hold the motherboard just above the case so it doesn\'t touch the metal.']
  ],
  quiz: [
    { q: 'What should you do before touching the parts inside a PC?', a: ['Switch it on so you can see better', 'Unplug it and touch metal to get rid of static', 'Wear woollen gloves', 'Spray water to cool it down'], c: 1, why: 'Unplugging keeps you safe. Touching metal gets rid of static that could damage a chip.' },
    { q: 'Will any CPU fit any motherboard?', a: ['Yes, always', 'No, the socket has to match', 'Only if it is Intel', 'Only laptop CPUs'], c: 1, why: 'Each CPU is made for a particular socket. Check before you buy.' },
    { q: 'DDR5 RAM goes into a motherboard that supports...', a: ['DDR4', 'Any kind of RAM', 'DDR5', 'SATA'], c: 2, why: 'DDR4 and DDR5 have different slots. The board must support DDR5.' }
  ]
});

BBB.chapters.push({
  id: 'hw-8', track: 'hardware',
  title: 'Doctor Riya',
  topic: 'Finding and fixing problems',
  minutes: 6,
  story: [
    ['n', "Two weeks later, Riya's new PC is running beautifully. Then Mrs. Kulkarni from the next flat knocks on the door holding her laptop. \"It has gone mad,\" she says. \"It's very slow, it switches itself off, and sometimes the screen stays black.\""],
    ['riya', "Uncle Dev, I can't fix that. That's three problems at once!"],
    ['dev', "Doctors don't guess. They ask questions, check the simple things first, and change one thing at a time. You already know how every part works. Use that."],
    ['riya', 'Okay... It switches itself off. That sounds like heat. Like a CPU without its fan.'],
    ['dev', 'Good. So what would you check?'],
    ['riya', 'The air vents! They might be blocked with dust.'],
    ['n', "They were packed. A soft brush and a can of compressed air later, the laptop stopped switching off. Then Riya removed nine apps that were starting with Windows, and it was quick again. Mrs. Kulkarni brought a box of sweets the next day."],
    ['riya', "I'm officially a computer doctor."]
  ],
  learn: [
    { h: 'How a computer doctor thinks' },
    { ol: [
      '<b>Ask questions.</b> What exactly happens? When did it start? Did anything change just before?',
      '<b>Check the simple things first.</b> Is it plugged in? Is the socket switched on? Is a cable loose? Is the monitor on the right input?',
      '<b>Change one thing at a time</b>, then test. Otherwise you never know what fixed it.',
      '<b>Write down</b> what you tried and what happened.'
    ] },
    { h: 'Common problems and where to look' },
    { table: { head: ['Symptom', 'Likely causes', 'What to try'], rows: [
      ['Nothing at all when you press power', 'No power reaching it, or a failed PSU', 'Check the socket, cable and the switch on the back of the PSU'],
      ['Fans spin but the screen is black', 'Monitor cable, loose RAM', 'Check the cable and monitor input; reseat the RAM; listen for beep codes'],
      ['Switches off by itself', 'Overheating', 'Clean the dust out, check the fans, renew the thermal paste'],
      ['Very slow', 'Too many start-up apps, full storage, too little RAM, an old HDD, malware', 'Remove start-up apps, free up space, run a virus scan, upgrade to an SSD'],
      ['Blue screen error', 'A faulty driver or RAM', 'Note the error message; update drivers; test the RAM with Windows Memory Diagnostic']
    ] } },
    { warn: '<b>Back up important files before you fix anything.</b> And never open a power supply or a swollen laptop battery: they can hold a dangerous charge even when unplugged.' }
  ],
  analogy: {
    title: 'Think of it like a visit to the doctor',
    text: "A good doctor doesn't give you five medicines at once. They ask questions, check the basics, and try one thing at a time.",
    map: [
      ['"Where does it hurt? Since when?"', 'Ask what happens and what changed'],
      ['Checking temperature and pulse', 'Checking cables, power and lights'],
      ['One medicine, then wait and see', 'Change one thing, then test'],
      ['Your medical file', 'Writing down what you tried']
    ]
  },
  words: [
    ['Troubleshooting', 'Finding the cause of a problem step by step, then fixing it.'],
    ['Beep code', 'A pattern of beeps at start-up that tells you which part failed its self-test.'],
    ['Overheating', 'A part getting too hot, so the computer slows down or switches off to protect itself.'],
    ['Blue screen (BSOD)', 'A Windows error screen shown when something goes badly wrong, often a driver or RAM problem.'],
    ['Backup', 'A spare copy of your files kept somewhere else, in case something goes wrong.']
  ],
  quiz: [
    { q: 'The fans spin but the screen stays black. A good first check is...', a: ['Buy a new CPU', 'The monitor cable and input', 'Reinstall Windows', 'Change the keyboard'], c: 1, why: 'Simple things first. A loose cable or the wrong monitor input is the most common cause.' },
    { q: 'A laptop keeps switching off during games. What is the most likely cause?', a: ['Overheating', 'Too many photos', 'An old mouse', 'The wallpaper is too big'], c: 0, why: 'Games make the CPU and GPU work hard and get hot. Blocked vents are a classic cause.' },
    { q: 'Good troubleshooting means...', a: ['Changing everything at once', 'Guessing quickly', 'Changing one thing at a time', 'Tapping the case'], c: 2, why: "If you change one thing at a time, you know exactly what fixed it." }
  ]
});

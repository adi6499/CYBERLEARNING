/* Byte by Byte — story content.
   Part 5: The network engineer (advanced networking).
   You and Arjun design and build the network for the school tech fest.
   Same format as story-hardware.js. */
window.BBB = window.BBB || {};
BBB.chapters = BBB.chapters || [];

BBB.chapters.push({
  id: 'ne-1', track: 'netpro',
  title: 'Shapes of a network',
  topic: 'Network topologies and types',
  minutes: 6,
  story: [
    ['n', "Diwali holidays. Arjun is back in Pune for two whole weeks, and the first thing he sees at your school is a poster: <b>TECH FEST: LAN gaming tournament on 40 PCs. Volunteers wanted for the network team.</b>"],
    ['arjun', 'Forty PCs in one hall, all playing together? We have to do this.'],
    ['you', "We've only ever set up one home router. This is a whole school hall, plus Wi-Fi for every visitor, plus a live stream."],
    ['dev', 'Then start where every network engineer starts: with a drawing. Before you buy a single cable, decide the shape of the network. Engineers call it the <b>topology</b>.'],
    ['n', 'Uncle Dev draws on the whiteboard: dots in a line, dots in a circle, dots joined to one middle dot, and dots all joined to each other.'],
    ['arjun', 'The one with the dot in the middle looks like a star.'],
    ['dev', "That's exactly what it's called. For your tournament we'll use a star made of stars: one main switch in the middle, a smaller switch on each row of tables, and every PC joined to its row switch."],
    ['you', 'So if one cable breaks, only one PC stops, not the whole hall.'],
    ['dev', 'And that is why almost every network today is a star.']
  ],
  learn: [
    { p: "A network's <b>topology</b> is its shape: how the devices are connected to each other. The shape decides what happens when a cable breaks, how easy it is to add more devices, and how much cable you need." },
    { h: 'The main shapes' },
    { table: { head: ['Topology', 'How it is connected', 'Good', 'Bad'], rows: [
      ['Bus', 'Every device taps into one long shared cable', 'Cheap, very little cable', 'One break stops everyone. Only one device can talk at a time. Old and rare today'],
      ['Ring', 'Each device connects to the next in a circle, and data travels around the ring', 'Orderly: every device gets a turn', 'One break can stop the whole ring, unless there is a second ring as a spare'],
      ['Star', 'Every device has its own cable to a central switch', 'A broken cable affects only one device. Easy to add more', 'If the central switch fails, everyone is cut off'],
      ['Extended star (tree)', 'Stars joined together: smaller switches connected to a main switch', 'Grows easily to whole buildings and campuses', 'If a main switch fails, a whole branch is cut off'],
      ['Mesh', 'Devices have several links to each other. <b>Full mesh</b>: every device links to every other. <b>Partial mesh</b>: only some do', 'Many paths, so it keeps working when a link breaks', 'Lots of links: expensive and complex'],
      ['Hybrid', 'A mix of two or more shapes', 'Each part can use the shape that suits it best', 'Harder to plan and to document']
    ] } },
    { tip: 'The internet itself is a giant <b>partial mesh</b> of routers. That is why it keeps working when one cable or one city has a problem: traffic simply finds another path.' },
    { h: 'Physical shape and logical shape' },
    { p: 'The <b>physical topology</b> is how the cables actually run. The <b>logical topology</b> is how the data actually flows. They can be different. Old "token ring" networks were wired as a star to a central box, but the data still travelled around them in a ring.' },
    { h: 'Who is in charge?' },
    { ul: [
      "<b>Client-server:</b> central servers do the important work (store files, run the game, check logins) and clients ask them. Easier to manage, back up and secure. Used in schools and offices, and for our tournament's game server.",
      '<b>Peer-to-peer (P2P):</b> every computer is equal and shares directly with the others. Simple for two or three computers at home, but hard to control and secure as it grows.'
    ] },
    { h: 'More network sizes' },
    { p: 'You already know PAN, LAN and WAN. Here are a few more names you will meet:' },
    { table: { head: ['Name', 'Covers', 'Example'], rows: [
      ['WLAN (Wireless LAN)', 'A LAN that uses Wi-Fi', 'The visitor Wi-Fi at the fest'],
      ['CAN (Campus Area Network)', 'Several buildings on one site', 'A school, college or factory campus'],
      ['MAN (Metropolitan Area Network)', 'A whole city', 'A city-wide fibre network joining offices'],
      ['SAN (Storage Area Network)', 'A separate, very fast network just for storage', 'Servers in a data centre sharing large disk systems']
    ] } }
  ],
  analogy: {
    title: 'Think of it like roads in a town',
    text: 'Topologies are like the different ways you could lay out roads between houses.',
    map: [
      ['One long road with every house on it', 'Bus'],
      ['A one-way ring road around the town', 'Ring'],
      ['Every house has its own lane to the town square', 'Star'],
      ['Small squares, each joined to one main square', 'Extended star (tree)'],
      ['So many roads there is always another way round', 'Mesh']
    ]
  },
  diagram: { flow: [
    { t: 'Internet', s: "from the school's ISP" },
    { t: 'Router', s: 'the way out' },
    { t: 'Main switch', s: 'the centre of the star' },
    { t: 'Row switches', s: 'one per row of tables' },
    { t: '40 PCs', s: 'one cable each' }
  ], note: 'An extended star: small stars joined to one central star. The Wi-Fi access points plug into the switches too.' },
  words: [
    ['Topology', 'The shape of a network: how its devices are connected.'],
    ['Bus topology', 'Every device shares one long cable. Old and rarely used now.'],
    ['Ring topology', 'Devices are joined in a circle and data travels around it.'],
    ['Star topology', 'Every device has its own cable to a central switch. The most common shape today.'],
    ['Mesh topology', 'Devices have many links to each other, so there is always another path.'],
    ['Hybrid topology', 'A network that mixes two or more shapes.'],
    ['Peer-to-peer (P2P)', 'A network where every computer is equal and shares directly, with no central server.'],
    ['WLAN', 'Wireless LAN: a local network that uses Wi-Fi.'],
    ['MAN', 'Metropolitan Area Network: a network that covers a city.']
  ],
  quiz: [
    { q: 'Almost every modern office and school network is built as a...', a: ['Bus', 'Ring', 'Star (or extended star)', 'Single long cable'], c: 2, why: 'Each device gets its own cable to a switch, so one broken cable only affects one device.' },
    { q: 'In a star network, what happens if the central switch fails?', a: ['Only one PC stops', 'Everyone connected to it is cut off', 'Nothing at all', 'The network turns into a ring'], c: 1, why: "Everything passes through the centre. That is the star's weak spot, which is why important switches often have a spare." },
    { q: 'Which shape keeps working best when one link breaks?', a: ['Mesh', 'Bus', 'Ring', 'Star'], c: 0, why: 'A mesh has several paths between devices, so traffic simply takes another one.' },
    { q: 'Three friends share files directly between their laptops, with no server. This is...', a: ['Client-server', 'A SAN', 'A MAN', 'Peer-to-peer'], c: 3, why: 'Every computer is equal and shares directly with the others: peer-to-peer.' }
  ]
});

BBB.chapters.push({
  id: 'ne-2', track: 'netpro',
  title: 'Eight little wires',
  topic: 'Network cables, and how to make one',
  minutes: 7,
  story: [
    ['n', 'A big cardboard box arrives at school: a 305-metre reel of blue cable, a bag of clear plastic plugs, a crimping tool and a little cable tester with a row of lights.'],
    ['arjun', "I'll make the first cable! Cut it, push the wires in, squeeze. How hard can it be?"],
    ['n', 'Five minutes later he plugs his cable into the tester. Lights 1 and 2 blink. Then 3 and 6 blink in the wrong places. Light 7 never comes on at all.'],
    ['arjun', "It's broken. I made a broken cable."],
    ['dev', 'You made a cable with the wires in the wrong order. Inside are eight little wires, twisted into four pairs, each with its own colour. Both ends must follow the same colour order, or the signals land on the wrong pins.'],
    ['you', "Why are they twisted? Wouldn't straight wires be simpler?"],
    ['dev', 'The twists are the clever part. Twisting each pair cancels out electrical noise, both from the other pairs and from things like motors and power cables. Untwist too much and the cable gets noisy.'],
    ['n', 'By evening Arjun has made twelve perfect cables. All eight lights blink in order, every time.']
  ],
  learn: [
    { h: 'Inside a network cable' },
    { p: 'A normal Ethernet cable has <b>8 copper wires</b>, twisted together in <b>4 pairs</b>: orange, green, blue and brown. In each pair, one wire is a solid colour and the other is white with a stripe of that colour.' },
    { ul: [
      '<b>UTP</b> (unshielded twisted pair) is the everyday cable in homes and offices.',
      '<b>STP</b> (shielded twisted pair) adds foil or a metal braid around the pairs to block electrical noise. It is used near heavy machines, motors or lots of power cables. The shield must be connected to earth (ground) to work properly.',
      'The twists reduce <b>crosstalk</b> (signals leaking from one pair into the next) and noise from outside.'
    ] },
    { h: 'The colour order: T568B and T568A' },
    { p: 'Two standards say which colour goes to which of the 8 pins in the RJ45 plug. Hold the plug with its gold pins facing you, the clip at the back and the cable hanging down: pin 1 is on the left.' },
    { table: { head: ['Pin', 'T568B', 'T568A'], rows: [
      ['1', 'White-orange', 'White-green'],
      ['2', 'Orange', 'Green'],
      ['3', 'White-green', 'White-orange'],
      ['4', 'Blue', 'Blue'],
      ['5', 'White-blue', 'White-blue'],
      ['6', 'Green', 'Orange'],
      ['7', 'White-brown', 'White-brown'],
      ['8', 'Brown', 'Brown']
    ] } },
    { tip: 'T568A simply swaps the orange and green pairs. <b>T568B</b> is the most common choice. What matters most is that both ends of a normal cable match.' },
    { h: 'Straight-through and crossover' },
    { ul: [
      'A <b>straight-through</b> cable has the same order on both ends. It joins a computer to a switch. This is the cable you will make almost every time.',
      'A <b>crossover</b> cable has T568A on one end and T568B on the other. It used to be needed to join two similar devices directly, like PC to PC or switch to switch.',
      'Most modern devices have <b>Auto-MDIX</b>: the port notices which wires are which and adjusts itself, so crossover cables are rarely needed now.'
    ] },
    { h: 'Making a cable, step by step' },
    { ol: [
      "Strip about 2 to 3 cm of the outer jacket. Don't nick the wires inside.",
      'Untwist the pairs and line them up in T568B order. Keep the twists as close to the plug as you can.',
      'Trim the wires straight across, so the outer jacket will sit just inside the plug.',
      'Push all eight wires right to the end of the RJ45 plug, colours still in order.',
      'Squeeze firmly with the <b>crimper</b>. The pins bite into the wires and the plug grips the jacket.',
      'Test it with a <b>cable tester</b>: all 8 lights should blink in order.'
    ] },
    { h: 'Tools of the trade' },
    { table: { head: ['Tool', 'Used for'], rows: [
      ['Crimper', 'Pressing an RJ45 plug onto a cable'],
      ['Cable tester', 'Checking every wire is connected, in the right order'],
      ['Punch-down tool', 'Pressing wires into the back of a patch panel or wall socket'],
      ['Patch panel', "A row of sockets, usually in a cabinet, where all the building's cables arrive, neatly labelled"],
      ['Keystone jack', 'A snap-in socket that fits into a wall plate or patch panel']
    ] } },
    { h: 'Cable categories' },
    { table: { head: ['Category', 'Speed', 'Distance'], rows: [
      ['Cat5e', '1 Gbps', 'Up to 100 m'],
      ['Cat6', '1 Gbps, or 10 Gbps on shorter runs', '100 m (about 55 m for 10 Gbps)'],
      ['Cat6a', '10 Gbps', 'Up to 100 m'],
      ['Cat8', '25 or 40 Gbps', 'Short runs up to 30 m, mostly in data centres']
    ] } },
    { h: 'Power through the cable: PoE' },
    { p: '<b>PoE</b> (Power over Ethernet) sends electricity along the same cable as the data. One cable can run a Wi-Fi access point, a security camera or a desk phone, with no power socket needed nearby. The switch (or a small box called a PoE injector) must supply the power.' },
    { h: 'Other kinds of cable' },
    { ul: [
      '<b>Single-mode fibre</b>: a very thin glass core that carries one path of laser light. Goes for many kilometres. Used by ISPs and between buildings.',
      '<b>Multi-mode fibre</b>: a thicker core that carries many paths of light. Cheaper, for shorter distances, usually inside one building or data centre.',
      'Common fibre plugs are the small square <b>LC</b> and the bigger push-pull <b>SC</b>.',
      '<b>Coaxial</b> cable has one copper wire in the middle, inside a metal shield. It is used for cable TV and some cable internet.'
    ] }
  ],
  analogy: {
    title: 'Think of it like an eight-lane highway',
    text: 'A network cable is a tiny highway with eight lanes. Every car has to enter and leave by the right lane.',
    map: [
      ['Eight lanes', 'The 8 copper wires'],
      ['Lane markings that must match at both ends', 'The T568B colour order'],
      ['Sound walls that block noise from the next road', 'Twisting and shielding'],
      ['A road that also carries power for the street lights', 'PoE'],
      ['A bullet train in a glass tunnel', 'Fibre optic cable']
    ]
  },
  diagram: { flow: [
    { t: 'Strip', s: '2 to 3 cm of jacket' },
    { t: 'Order', s: 'T568B colours' },
    { t: 'Trim', s: 'cut the wires straight' },
    { t: 'Crimp', s: 'squeeze the plug' },
    { t: 'Test', s: 'all 8 lights blink' }
  ] },
  toy: 'cable',
  words: [
    ['UTP', 'Unshielded twisted pair: the everyday network cable.'],
    ['STP (shielded cable)', 'Shielded twisted pair: network cable with foil or braid that blocks electrical noise.'],
    ['Crosstalk', 'Signals leaking from one wire pair into another. Twisting the pairs reduces it.'],
    ['T568B', 'The most common colour order for the 8 wires in a network plug.'],
    ['Crossover cable', 'A cable with T568A on one end and T568B on the other, for joining two similar devices.'],
    ['Auto-MDIX', 'A port feature that adjusts itself to the cable, so crossover cables are rarely needed.'],
    ['Crimper', 'A tool that presses an RJ45 plug onto a cable.'],
    ['Patch panel', "A panel of sockets where a building's network cables arrive."],
    ['PoE', 'Power over Ethernet: sending electricity and data along one network cable.']
  ],
  quiz: [
    { q: 'How many wires are inside a normal Ethernet cable?', a: ['4', '6', '8', '12'], c: 2, why: 'There are 8 wires, twisted together in 4 pairs.' },
    { q: 'Why are the wire pairs twisted?', a: ['To make the cable shorter', 'To reduce noise and crosstalk', 'So it looks nice', 'To carry more electricity'], c: 1, why: 'Twisting cancels out interference from the other pairs and from outside.' },
    { q: 'In T568B, which colour goes on pin 1?', a: ['White-green', 'Orange', 'Blue', 'White-orange'], c: 3, why: 'T568B starts white-orange, orange. T568A starts white-green, green.' },
    { q: 'A camera on the ceiling gets its electricity through its network cable. That is...', a: ['PoE', 'Wi-Fi', 'Auto-MDIX', 'Crosstalk'], c: 0, why: 'Power over Ethernet sends power and data along the same cable.' }
  ]
});

BBB.chapters.push({
  id: 'ne-3', track: 'netpro',
  title: 'Cutting the address cake',
  topic: 'Subnet masks and subnetting',
  minutes: 8,
  story: [
    ['dev', "Question. Should a visitor's phone on the free Wi-Fi be able to reach the PC that runs the tournament?"],
    ['arjun', 'No way! Someone could mess with the scores.'],
    ['you', 'So we need separate networks. But we only have one router and one set of addresses.'],
    ['dev', 'Then we cut the addresses like a cake. Each slice becomes its own small network, called a <b>subnet</b>. The players get one slice, the organisers another, and the visitors a big one.'],
    ['you', 'How does a computer know which slice it belongs to?'],
    ['dev', "From its subnet mask. Remember the line in ipconfig, <code>Subnet Mask 255.255.255.0</code>? That's the knife. It says which part of the address is the network's name and which part is the house number."],
    ['n', 'Arjun opens a notebook and writes the plan: players, 40 PCs. Organisers, 10 laptops. Visitors, maybe 500 phones.'],
    ['dev', "Good. Now let's work out how big each slice has to be."]
  ],
  learn: [
    { h: 'Two parts of every address' },
    { p: 'Every IPv4 address has two parts: the <b>network part</b> (which network it belongs to, like a street name) and the <b>host part</b> (which device on that network, like a house number). The <b>subnet mask</b> shows where the line between them is.' },
    { p: 'An IPv4 address is 32 bits long. In the mask, every <b>1</b> bit marks the network part and every <b>0</b> bit marks the host part.' },
    { ul: [
      '<code>255.255.255.0</code> in binary is 24 ones followed by 8 zeros.',
      'So in <code>192.168.10.37</code> with mask <code>255.255.255.0</code>, the network part is <code>192.168.10</code> and the host part is <code>37</code>.'
    ] },
    { h: 'CIDR: the short way to write a mask' },
    { p: 'Instead of writing the whole mask, people write a slash and the number of network bits. This is called <b>CIDR</b> notation. <code>192.168.10.0/24</code> means "the first 24 bits are the network". So /24 is the same as 255.255.255.0.' },
    { h: "Two addresses you can't give to a device" },
    { ul: [
      'The <b>network address</b> is the first one, with all host bits set to 0. It names the subnet itself, like <code>192.168.10.0</code>.',
      'The <b>broadcast address</b> is the last one, with all host bits set to 1. A message sent to it goes to every device in the subnet, like <code>192.168.10.255</code>.'
    ] },
    { p: 'So the number of usable addresses is 2 to the power of the host bits, minus those two. For a /24: <code>2^8 − 2 = 254</code>.' },
    { table: { head: ['Prefix', 'Subnet mask', 'Host bits', 'Usable hosts'], rows: [
      ['/22', '255.255.252.0', '10', '1,022'],
      ['/23', '255.255.254.0', '9', '510'],
      ['/24', '255.255.255.0', '8', '254'],
      ['/25', '255.255.255.128', '7', '126'],
      ['/26', '255.255.255.192', '6', '62'],
      ['/27', '255.255.255.224', '5', '30'],
      ['/28', '255.255.255.240', '4', '14'],
      ['/29', '255.255.255.248', '3', '6'],
      ['/30', '255.255.255.252', '2', '2']
    ] } },
    { tip: 'Each step down the table halves the size. A /30 has exactly 2 usable addresses: just right for one cable joining two routers.' },
    { h: 'Planning the fest' },
    { table: { head: ['Group', 'Devices', 'Subnet', 'Usable addresses'], rows: [
      ['Players', '40 PCs', '10.10.1.0/26', '62'],
      ['Organisers', '10 laptops', '10.10.2.0/28', '14'],
      ['Visitor Wi-Fi', 'Hundreds of phones', '10.10.4.0/22', '1,022']
    ] } },
    { p: 'Always leave room to grow. 40 PCs fit in a /26 with 22 addresses to spare.' },
    { h: 'Why subnet at all?' },
    { ul: [
      '<b>Security:</b> devices in different subnets cannot talk directly. Their traffic must go through a router, where rules can block it.',
      '<b>Less noise:</b> broadcasts stay inside their own subnet instead of reaching every device.',
      '<b>Organisation:</b> you can tell from an address which group a device belongs to.'
    ] },
    { p: 'Two devices in the <b>same subnet</b> talk directly through the switch. If they are in <b>different subnets</b>, a computer sends the traffic to its default gateway (the router), which passes it on.' },
    { h: 'A bit of history: address classes' },
    { table: { head: ['Class', 'First number', 'Old fixed mask'], rows: [
      ['A', '1 to 126', '/8 (255.0.0.0)'],
      ['B', '128 to 191', '/16 (255.255.0.0)'],
      ['C', '192 to 223', '/24 (255.255.255.0)'],
      ['D', '224 to 239', 'Multicast, not for normal devices'],
      ['E', '240 to 255', 'Experimental']
    ] } },
    { p: 'Fixed classes wasted lots of addresses, so since the 1990s networks use CIDR and can choose any mask. People still say "a class C network" when they mean a /24.' },
    { h: 'The private ranges, with their masks' },
    { ul: [
      '<code>10.0.0.0/8</code>: from 10.0.0.0 to 10.255.255.255',
      '<code>172.16.0.0/12</code>: from 172.16.0.0 to 172.31.255.255',
      '<code>192.168.0.0/16</code>: from 192.168.0.0 to 192.168.255.255'
    ] }
  ],
  analogy: {
    title: 'Think of it like cutting a cake',
    text: 'You have one big cake of addresses. The mask decides where you cut it.',
    map: [
      ['The whole cake', 'All the addresses you have'],
      ['The knife marks', 'The subnet mask'],
      ['One slice', 'One subnet'],
      ["The slice's name card", 'The network address'],
      ['Calling out to everyone at one table', 'The broadcast address'],
      ['Passing food to another table through a waiter', 'Going through the router']
    ]
  },
  toy: 'subnet',
  words: [
    ['Subnet', 'A smaller network made by dividing a bigger range of addresses.'],
    ['Subnet mask', 'A number like 255.255.255.0 that shows which part of an IP address is the network and which part is the device.'],
    ['CIDR', 'Writing a mask as a slash and a number, like /24. Short for Classless Inter-Domain Routing.'],
    ['Network address', 'The first address of a subnet. It names the subnet and is not given to any device.'],
    ['Broadcast address', 'The last address of a subnet. A message sent to it reaches every device in the subnet.'],
    ['Host bits', 'The bits of an address that number the devices. More host bits means room for more devices.'],
    ['Subnetting', 'Dividing one network into smaller subnets.']
  ],
  quiz: [
    { q: '/24 is the same as which subnet mask?', a: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'], c: 2, why: '24 network bits fill the first three numbers: 255.255.255.0.' },
    { q: 'How many usable host addresses does a /26 have?', a: ['64', '62', '30', '126'], c: 1, why: '6 host bits give 2^6 = 64 addresses. Take away the network and broadcast addresses: 62.' },
    { q: 'In 192.168.10.0/24, what is the broadcast address?', a: ['192.168.10.0', '192.168.10.1', '192.168.10.254', '192.168.10.255'], c: 3, why: 'The broadcast address is the last one, with all host bits set to 1.' },
    { q: "A player's PC and a visitor's phone are in different subnets. How does traffic between them travel?", a: ['Through a router, which can block it', 'Directly through the switch', 'It can never travel at all', 'Through the printer'], c: 0, why: 'Different subnets always go through a router. That is where you put rules to keep visitors away from the tournament.' }
  ]
});

BBB.chapters.push({
  id: 'ne-4', track: 'netpro',
  title: 'The longer addresses',
  topic: 'IPv6 in depth',
  minutes: 6,
  story: [
    ['n', "Arjun is checking the Wi-Fi details on his phone, and frowns."],
    ['arjun', 'My phone has two IP addresses. One is normal. The other is a monster, with letters, numbers and colons everywhere.'],
    ['you', "That's IPv6! Uncle Dev said the world ran out of IPv4 addresses."],
    ['dev', 'It did. So the internet is slowly moving to IPv6. Many big mobile networks in India already give phones an IPv6 address, and your phone uses both kinds at once.'],
    ['arjun', 'But how is anyone supposed to remember that?'],
    ['dev', "Nobody does! That's what DNS is for. But an engineer has to read one, shorten one, and know what kind of address it is. And you already know the secret: it's just hexadecimal."]
  ],
  learn: [
    { h: 'How big is IPv6?' },
    { ul: [
      "An IPv6 address is <b>128 bits</b> long: four times longer than IPv4's 32 bits.",
      'That gives 2 to the power of 128 addresses, a number with 39 digits. Enough for every device on Earth to have more addresses than it could ever use.',
      'It is written as <b>8 groups</b> of <b>4 hexadecimal digits</b> (0 to 9 and a to f), separated by colons. Each group is 16 bits.'
    ] },
    { p: 'Here is one address, group by group:' },
    { table: { head: ['Group', 'Written in full', 'Leading zeros dropped'], rows: [
      ['1', '2001', '2001'],
      ['2', '0db8', 'db8'],
      ['3', '0000', '0'],
      ['4', '0000', '0'],
      ['5', '0000', '0'],
      ['6', 'ff00', 'ff00'],
      ['7', '0042', '42'],
      ['8', '8329', '8329']
    ] } },
    { h: 'Two rules to shorten it' },
    { ol: [
      '<b>Drop the leading zeros</b> in any group: <code>0db8</code> becomes <code>db8</code>, <code>0042</code> becomes <code>42</code>, <code>0000</code> becomes <code>0</code>. Only zeros at the <em>front</em> of a group can go.',
      '<b>Replace one run</b> of all-zero groups with a double colon <code>::</code>. You can do this only <b>once</b> in an address, otherwise nobody could tell how many zeros each <code>::</code> hides.'
    ] },
    { p: 'So the full address (39 characters) becomes <code>2001:db8::ff00:42:8329</code>. Same address, much shorter.' },
    { tip: 'Addresses starting <code>2001:db8:</code> are set aside for examples and books, just like 203.0.113.x in IPv4.' },
    { h: 'Kinds of IPv6 address' },
    { table: { head: ['Type', 'Starts with', 'What it is for'], rows: [
      ['Global unicast', '2 or 3 (2000::/3)', 'A public address that works across the internet, like a public IPv4 address'],
      ['Link-local', 'fe80::', 'Works only on the local link (one network segment). Every IPv6 device makes one automatically'],
      ['Loopback', '::1', 'This computer itself, like 127.0.0.1'],
      ['Unique local', 'fc or fd (fc00::/7)', 'Private addresses for use inside an organisation'],
      ['Multicast', 'ff', 'One message to a chosen group of devices']
    ] } },
    { p: 'IPv6 has <b>no broadcast</b> address at all. It uses multicast instead, which bothers fewer devices.' },
    { h: 'Getting an address' },
    { ul: [
      '<b>SLAAC</b> (stateless address autoconfiguration): the router announces the network prefix, and each device builds its own address from it. No DHCP server needed.',
      '<b>DHCPv6</b>: a server hands out addresses, like DHCP does for IPv4.',
      'Networks are usually cut into <b>/64</b> subnets: the first 64 bits name the network, the last 64 bits name the device.'
    ] },
    { h: 'Why IPv6 helps' },
    { ul: [
      'There are so many addresses that every device can have its own public one, so <b>NAT is not needed</b>. (A firewall is still needed to block unwanted traffic.)',
      'Simpler packet headers that routers can handle efficiently.',
      'Devices can set up their own addresses automatically.'
    ] },
    { h: 'Living with both: dual stack' },
    { p: "The world is moving to IPv6 slowly, so most devices run <b>dual stack</b>: IPv4 and IPv6 at the same time. Your phone uses IPv6 when a website supports it, and IPv4 when it doesn't. IPv6 is widely used today, including by large mobile networks in India." }
  ],
  analogy: {
    title: 'Think of it like phone numbers getting longer',
    text: 'When a city runs out of phone numbers, it adds more digits. IPv6 did the same thing for the whole internet.',
    map: [
      ['Short old phone numbers running out', 'IPv4 addresses running out'],
      ['New, much longer numbers', 'IPv6 addresses'],
      ['Skipping the boring zeros when you write it down', 'Shortening with dropped zeros and ::'],
      ['An intercom that only works inside your building', 'Link-local address (fe80::)'],
      ['Keeping your old number and your new one', 'Dual stack']
    ]
  },
  diagram: { stack: [
    { t: 'Network prefix', s: 'The first 48 bits, usually given by the ISP' },
    { t: 'Subnet ID', s: 'The next 16 bits, chosen by the organisation for each of its subnets' },
    { t: 'Interface ID', s: 'The last 64 bits, which identify one device' }
  ], note: 'A typical global IPv6 address, read from left to right. Together the first two parts make the /64 subnet.' },
  words: [
    ['Global unicast address', 'An IPv6 address that works across the whole internet. Starts with 2 or 3.'],
    ['Link-local address', 'An IPv6 address starting fe80:: that works only on the local network segment.'],
    ['::1', 'The IPv6 loopback address: this computer itself.'],
    ['Unique local address', 'A private IPv6 address for use inside an organisation. Starts with fc or fd.'],
    ['Double colon (::)', 'A shortcut in IPv6 that replaces one run of all-zero groups. Used only once per address.'],
    ['SLAAC', 'A way for IPv6 devices to build their own address from the prefix the router announces.'],
    ['DHCPv6', 'The IPv6 version of DHCP, where a server hands out addresses.'],
    ['Dual stack', 'Running IPv4 and IPv6 at the same time.']
  ],
  quiz: [
    { q: 'How many bits long is an IPv6 address?', a: ['32', '64', '128', '256'], c: 2, why: '128 bits, written as 8 groups of 4 hex digits.' },
    { q: 'Which is the correct short form of 2001:0db8:0000:0000:0000:0000:0000:0001?', a: ['2001:db8::1', '2001:db8:1', '2001::db8::1', '21:db8::1'], c: 0, why: 'Drop leading zeros (0db8 becomes db8, 0001 becomes 1) and squash the run of zero groups into one ::. You can never drop zeros from the end of a group, and :: can appear only once.' },
    { q: 'An address starting with fe80:: is...', a: ['A public internet address', 'A link-local address', 'A broadcast address', 'Not allowed'], c: 1, why: 'fe80:: addresses are link-local: they only work on the local network segment.' },
    { q: 'Why does IPv6 usually not need NAT?', a: ['It is slower', 'It only works inside homes', 'IPv6 devices have no addresses', 'There are enough addresses for every device to have its own'], c: 3, why: "NAT was invented because IPv4 addresses ran out. IPv6 has more than enough, though you still need a firewall." }
  ]
});

BBB.chapters.push({
  id: 'ne-5', track: 'netpro',
  title: 'How a switch remembers',
  topic: 'Switches, ARP, VLANs and loops',
  minutes: 8,
  story: [
    ['n', 'Saturday. The school hall is full of tables, and three switches sit on the stage with cables running to every row. Arjun plugs in the last PC.'],
    ['arjun', 'How does the switch know which cable leads to which PC? We never told it anything.'],
    ['dev', 'It learns, all by itself. Every time a message comes in on a port, the switch notes down who sent it and which port it came from. Within seconds it has a full map.'],
    ['n', 'Just then a helper finds a spare cable and, trying to be useful, plugs both ends into the same switch. Every light on the switch starts flashing like a string of Diwali lights. The test game freezes on every screen.'],
    ['you', 'What happened?! Everything stopped!'],
    ['dev', "A loop. Messages are running round and round that cable forever, multiplying every time. It's called a broadcast storm. Pull that cable out!"],
    ['n', 'You yank it out. The lights calm down. The game wakes up.'],
    ['dev', "Better switches have a protection called Spanning Tree that stops loops by itself. This cheap one doesn't. Today you learn exactly how switches think, so you'll spot it next time."]
  ],
  learn: [
    { h: 'Frames: packets in an envelope' },
    { p: "Inside a local network, each packet travels wrapped in a <b>frame</b>. The frame's header holds the <b>source and destination MAC addresses</b>. Switches read frames and MAC addresses. Routers read packets and IP addresses." },
    { h: 'How a switch learns' },
    { ol: [
      'A frame arrives on port 3 from MAC address AA. The switch writes in its <b>MAC address table</b>: "AA lives on port 3."',
      'It looks up the destination MAC address in the table.',
      'If it knows the port, it sends the frame <b>only</b> out of that port. This is <b>forwarding</b>.',
      "If it doesn't know yet, it sends the frame out of every port except the one it came in on. This is <b>flooding</b>. The reply then teaches the switch where that device is.",
      'Old entries are forgotten after a few minutes, so the table stays correct when devices move.'
    ] },
    { p: '<b>Broadcast</b> frames, sent to the special MAC address <code>FF:FF:FF:FF:FF:FF</code>, always go out of every port.' },
    { h: 'ARP: finding a MAC address' },
    { p: "Your PC knows the router's IP address (192.168.1.1), but to build a frame it needs the router's MAC address. So it uses <b>ARP</b> (Address Resolution Protocol):" },
    { ol: [
      'Your PC broadcasts: "Who has 192.168.1.1? Tell 192.168.1.7."',
      'Every device hears it, but only the router answers: "192.168.1.1 is at 3C:52:82:1A:9F:07."',
      "Your PC saves the answer in its <b>ARP cache</b> for a while, so it doesn't have to ask again. Type <code>arp -a</code> to see yours."
    ] },
    { h: 'Collision domains and broadcast domains' },
    { ul: [
      'A <b>collision domain</b> is a group of devices whose signals can crash into each other. Old hubs put everyone into one big collision domain. A switch gives <b>every port its own</b>, so collisions basically disappear.',
      'A <b>broadcast domain</b> is every device that hears a broadcast. A switch passes broadcasts everywhere, so a whole switched network is one broadcast domain. <b>Routers and VLANs split broadcast domains.</b>',
      '<b>Half duplex</b> means talking or listening, one at a time, like a walkie-talkie. <b>Full duplex</b> means both at once, like a phone call. Switch ports normally run full duplex.'
    ] },
    { h: 'VLANs: several networks on one switch' },
    { p: "A <b>VLAN</b> (virtual LAN) splits one physical switch into several separate networks. Ports 1 to 20 can be VLAN 10 for players, and ports 21 to 24 VLAN 20 for organisers. Devices in different VLANs can't talk to each other unless a router lets them, just like separate subnets. Usually each VLAN gets its own subnet." },
    { ul: [
      'An <b>access port</b> belongs to one VLAN and connects a normal device like a PC.',
      'A <b>trunk</b> port carries many VLANs over one cable between switches. Each frame gets a small <b>802.1Q tag</b> saying which VLAN it belongs to.'
    ] },
    { h: 'Loops and Spanning Tree' },
    { p: 'If two switches are joined by two cables, or one cable loops back into the same switch, broadcast frames go round and round forever, multiplying. This <b>broadcast storm</b> can freeze a whole network in seconds. <b>Spanning Tree Protocol (STP)</b> finds loops and blocks the extra links, keeping them as spares in case the main link breaks. A faster version is called <b>Rapid Spanning Tree (RSTP)</b>.' },
    { h: 'Kinds of switch' },
    { table: { head: ['Type', 'What it does'], rows: [
      ['Unmanaged', 'Plug and play. No settings and no VLANs. Fine for homes'],
      ['Managed', 'Can be configured: VLANs, Spanning Tree, port security, monitoring'],
      ['Layer 3 switch', 'A managed switch that can also route between VLANs using IP addresses, very fast']
    ] } }
  ],
  analogy: {
    title: 'Think of it like a new school office clerk',
    text: 'A new clerk learns where everyone sits just by watching who comes from which classroom.',
    map: [
      ['Noting which classroom each student comes from', 'Filling the MAC address table'],
      ["Announcing on every speaker when the clerk doesn't know", 'Flooding'],
      ['"Will roll number 7 please stand up?"', 'An ARP request'],
      ['Separate classrooms in one building', 'VLANs on one switch'],
      ['An echo bouncing between two walls forever', 'A loop and a broadcast storm']
    ]
  },
  diagram: { flow: [
    { t: 'Who has .1?', s: 'the PC sends an ARP broadcast' },
    { t: 'Switch floods it', s: 'every port hears it' },
    { t: 'Router replies', s: 'with its MAC address' },
    { t: 'PC remembers', s: 'saves it in the ARP cache' },
    { t: 'Frame sent', s: "straight to the router's port" }
  ] },
  words: [
    ['Frame', 'A packet wrapped with MAC addresses, ready to travel on the local network.'],
    ['MAC address table', 'The list a switch keeps of which MAC address is on which port.'],
    ['Flooding', "A switch sending a frame out of every port because it doesn't yet know where the destination is."],
    ['ARP', 'Address Resolution Protocol: finds the MAC address that belongs to an IP address.'],
    ['Broadcast domain', 'All the devices that receive a broadcast. Routers and VLANs separate them.'],
    ['VLAN', 'Virtual LAN: one physical switch split into separate networks.'],
    ['Trunk (802.1Q)', 'A link between switches that carries many VLANs, with a tag on each frame.'],
    ['STP (Spanning Tree Protocol)', 'A protocol that finds loops in a switched network and blocks the extra links.'],
    ['Layer 3 switch', 'A switch that can also route traffic between VLANs.']
  ],
  quiz: [
    { q: 'A switch receives a frame for a MAC address it has never seen. What does it do?', a: ['Deletes it', 'Sends it out of every other port (flooding)', 'Sends it back to the sender', 'Asks the router'], c: 1, why: "Until it learns where that device is, the switch floods the frame. The reply teaches it the right port." },
    { q: 'What does ARP find?', a: ['The IP address of a website', 'The fastest route', 'The MAC address that belongs to an IP address', 'The Wi-Fi password'], c: 2, why: 'ARP asks "who has this IP address?" and the owner replies with its MAC address.' },
    { q: 'A cable plugged into the same switch at both ends causes...', a: ['Nothing at all', 'Faster speed', 'Free Wi-Fi', 'A loop and a broadcast storm'], c: 3, why: 'Broadcasts go round the loop forever, multiplying, until the network freezes. Spanning Tree prevents this.' },
    { q: 'Players and visitors are plugged into the same switch but must be kept apart. What should you use?', a: ['VLANs', 'A longer cable', 'A hub', 'Crossover cables'], c: 0, why: 'VLANs split one switch into separate networks that can only meet through a router.' }
  ]
});

BBB.chapters.push({
  id: 'ne-6', track: 'netpro',
  title: 'Maps for messages',
  topic: 'Routing, NAT and port forwarding',
  minutes: 8,
  story: [
    ['you', "We have three subnets now: players, organisers and visitors. But the players' PCs still need to reach the game server in the organisers' subnet. And the live stream has to get out to the internet."],
    ['dev', 'So you need a router to join them, with rules about who may go where. Every router carries a map called a routing table. For every single packet, it checks the map and picks the next step.'],
    ['arjun', "And parents at home want to watch the scoreboard live. Can't we just open a door in the router so the internet can reach our score PC?"],
    ['dev', "That door is called port forwarding. It works, but it means anyone on the whole internet can knock on that PC. One weak password or one missed update, and you've invited trouble in."],
    ['you', 'So what do we do?'],
    ['dev', "We put the public scoreboard on a proper website instead, and keep the score PC inside, hidden. For organisers who need to reach it from home, I'll show you a much safer tunnel soon."]
  ],
  learn: [
    { h: 'The routing table' },
    { p: 'Every router, and every computer, has a <b>routing table</b>: a list of networks it knows how to reach. Each line says where to send packets for that network:' },
    { table: { head: ['Destination network', 'Next hop', 'Interface'], rows: [
      ['10.10.1.0/26 (players)', 'Directly connected', 'VLAN 10'],
      ['10.10.2.0/28 (organisers)', 'Directly connected', 'VLAN 20'],
      ['10.10.4.0/22 (visitors)', 'Directly connected', 'VLAN 30'],
      ['0.0.0.0/0 (everything else)', "The ISP's router", 'Internet port']
    ] } },
    { ul: [
      'The <b>next hop</b> is the next router to hand the packet to.',
      "The last line, <code>0.0.0.0/0</code>, is the <b>default route</b>: \"if nothing else matches, send it this way\". It is how your home router sends everything out to the internet.",
      'If several lines match, the <b>most specific one wins</b>: the one with the longest prefix. A /26 beats a /8, which beats /0. This is called the <b>longest prefix match</b>.'
    ] },
    { h: 'Static or dynamic?' },
    { ul: [
      "<b>Static routes</b> are typed in by hand. Simple and predictable, but they don't adjust when a link breaks.",
      '<b>Dynamic routing</b> means routers talk to each other using a routing protocol, share what they know, and find a new path by themselves when something breaks.'
    ] },
    { table: { head: ['Protocol', 'How it chooses a path', 'Where it is used'], rows: [
      ['RIP', 'Fewest hops (15 at most)', 'Old and small networks'],
      ['OSPF', 'Fastest path, based on the speed of each link', 'Inside companies, colleges and ISPs'],
      ['BGP', 'Rules and paths between whole networks', 'Between ISPs and big networks: the routing protocol that holds the internet together']
    ] } },
    { h: 'TTL: no endless journeys' },
    { p: 'Every packet carries a <b>TTL</b> (Time To Live) number. Each router lowers it by 1. If it reaches 0, the packet is thrown away and a "time exceeded" message goes back to the sender. This stops lost packets from circling forever. The <code>tracert</code> command uses exactly this trick to discover each hop.' },
    { h: 'NAT and PAT, more closely' },
    { p: 'Your router swaps private addresses for its one public address on the way out. To keep track of many devices at once, it also changes the port numbers. This is called <b>PAT</b> (Port Address Translation), or NAT overload:' },
    { table: { head: ['Inside (private)', 'Outside (public)'], rows: [
      ['10.10.1.5, port 50123', '203.0.113.9, port 40001'],
      ['10.10.1.6, port 50123', '203.0.113.9, port 40002'],
      ['10.10.2.3, port 61000', '203.0.113.9, port 40003']
    ] } },
    { p: 'When replies come back, the router checks this <b>translation table</b> to see which inside device each reply belongs to. Replies to conversations started from inside are let in. A stranger knocking from outside finds no matching entry and is dropped.' },
    { h: 'Port forwarding' },
    { p: '<b>Port forwarding</b> is a permanent rule that sends outside traffic arriving on one port to one inside device. For example: everything arriving on port 8080 goes to 10.10.2.3. It lets the internet reach a server inside your network.' },
    { warn: "Port forwarding opens a door to the <b>whole internet</b>, not just your friends. Only do it for a server that is fully updated, has strong passwords, and truly must be reached from outside. Never forward remote desktop or a router's admin page. A VPN (two chapters from now) is usually much safer." },
    { h: 'Routing between VLANs' },
    { p: 'Devices in different VLANs need a router to talk. This <b>inter-VLAN routing</b> can be done by a router joined to the switch with one trunk cable (sometimes called "router on a stick"), or by a <b>layer 3 switch</b>. It is also the perfect place for rules: players may reach the game server, and visitors may reach only the internet.' }
  ],
  analogy: {
    title: 'Think of it like signboards at a road junction',
    text: 'At every junction, a signboard tells drivers which way to go. Routers are junctions, and routing tables are their signboards.',
    map: [
      ['"Mumbai: left. Nashik: right."', 'Lines in a routing table'],
      ['"All other places: straight ahead"', 'The default route 0.0.0.0/0'],
      ['Following "Pune Station" rather than just "Pune"', 'The most specific match wins'],
      ['A bus ticket that runs out after a set number of stops', 'TTL'],
      ['A hotel receptionist putting calls through to the right room', 'The PAT translation table'],
      ['Leaving a side gate permanently open for one visitor', 'Port forwarding']
    ]
  },
  diagram: { flow: [
    { t: 'Packet arrives', s: 'router reads the destination IP' },
    { t: 'Check the table', s: 'find the most specific match' },
    { t: 'TTL minus 1', s: 'drop it if it reaches 0' },
    { t: 'Send it on', s: 'to the next hop' }
  ] },
  words: [
    ['Routing table', "A router's list of the networks it can reach and where to send packets for each."],
    ['Next hop', 'The next router a packet should be handed to.'],
    ['Default route', 'The route 0.0.0.0/0: where packets go when no other route matches.'],
    ['Static route', 'A route typed into a router by hand.'],
    ['OSPF', 'Open Shortest Path First: a routing protocol used inside organisations. Picks the fastest path.'],
    ['BGP', 'Border Gateway Protocol: how ISPs and big networks share routes. It holds the internet together.'],
    ['TTL', 'Time To Live: a counter in each packet, lowered by every router, so packets cannot loop forever.'],
    ['PAT', 'Port Address Translation: many private devices sharing one public address, kept apart by port numbers.'],
    ['Port forwarding', 'A router rule that sends outside traffic on one port to one inside device.']
  ],
  quiz: [
    { q: 'What does the route 0.0.0.0/0 mean?', a: ['Block everything', 'The default route: everything not matched elsewhere', 'Only local traffic', 'A broken route'], c: 1, why: 'It matches every address, so it is used when nothing more specific matches.' },
    { q: 'Two routes match a packet: 10.0.0.0/8 and 10.10.1.0/26. Which one is used?', a: ['10.0.0.0/8', 'Both at once', '10.10.1.0/26, the most specific', 'Neither'], c: 2, why: 'The longest prefix match wins. /26 is far more specific than /8.' },
    { q: 'Which routing protocol connects ISPs and holds the internet together?', a: ['RIP', 'OSPF', 'ARP', 'BGP'], c: 3, why: 'BGP carries routes between ISPs and other big networks.' },
    { q: 'Why is port forwarding risky?', a: ['Anyone on the internet can now reach that device', 'It slows down the Wi-Fi', 'It uses too much electricity', 'It deletes the routing table'], c: 0, why: 'The forwarded port is open to the whole internet, so the device behind it must be very well protected.' }
  ]
});

BBB.chapters.push({
  id: 'ne-7', track: 'netpro',
  title: 'Helpers in the background',
  topic: 'Network services: DHCP, DNS records, email, file sharing and more',
  minutes: 8,
  story: [
    ['n', 'Test day. Forty PCs switch on together. Twenty of them join the network. The other twenty show a little yellow warning triangle: no internet.'],
    ['arjun', "Half of them work and half don't? They're exactly the same PCs!"],
    ['you', "I know this one. Detective steps. <code>ipconfig</code>... 169.254. They didn't get an address. So it's DHCP."],
    ['n', "You and Arjun open the router's DHCP page. The address pool for the players' subnet: 10.10.1.10 to 10.10.1.29. Exactly twenty addresses."],
    ['dev', 'The twenty-first PC asked for an address, and the router had none left to give. Make the pool bigger.'],
    ['n', 'You change it to 10.10.1.10 to 10.10.1.60. One by one, the warning triangles disappear.'],
    ['dev', "DHCP is one of many quiet helpers running in the background of every network. Nobody notices them, until one stops working. Let's meet them all."]
  ],
  learn: [
    { h: 'DHCP, step by step: DORA' },
    { ol: [
      '<b>Discover:</b> the new device broadcasts "Is there a DHCP server out there?"',
      '<b>Offer:</b> a server replies "You can have 10.10.1.23."',
      '<b>Request:</b> the device answers "Yes please, I\'ll take 10.10.1.23."',
      '<b>Acknowledge:</b> the server confirms, and also sends the subnet mask, default gateway and DNS server.'
    ] },
    { ul: [
      'Addresses are only <b>leased</b> for a time (hours or days). The device renews its lease before it runs out.',
      'The <b>scope</b> (or pool) is the range of addresses the server is allowed to hand out.',
      'A <b>reservation</b> always gives the same address to one device, recognised by its MAC address. Useful for printers and servers.',
      "DHCP uses UDP ports 67 (server) and 68 (client). Because it starts with a broadcast, routers don't pass it on, unless a <b>DHCP relay</b> is set up to forward it to a server in another subnet."
    ] },
    { h: 'DNS records' },
    { p: "A domain's name server holds different kinds of <b>records</b>:" },
    { table: { head: ['Record', 'What it holds', 'Example'], rows: [
      ['A', 'The IPv4 address for a name', 'fest.example.com → 203.0.113.20'],
      ['AAAA', 'The IPv6 address for a name', 'fest.example.com → 2001:db8::20'],
      ['CNAME', 'Another name for the same thing (an alias)', 'www.fest.example.com → fest.example.com'],
      ['MX', 'Which server receives email for the domain', 'example.com → mail.example.com'],
      ['TXT', 'Text notes, used to prove who owns a domain and for email security', 'v=spf1 ...'],
      ['NS', 'Which name servers look after the domain', 'ns1.example.com'],
      ['PTR', 'Reverse lookup: the name that belongs to an IP address', '203.0.113.20 → fest.example.com']
    ] } },
    { h: 'Email' },
    { table: { head: ['Protocol', 'Job', 'Port'], rows: [
      ['SMTP', 'Sending email, and passing it between mail servers', '25 between servers; 587 when an app sends with a login'],
      ['IMAP', 'Reading email that stays on the server, so every device shows the same inbox', '993 (secure)'],
      ['POP3', 'Downloading email to one device, usually removing it from the server', '995 (secure)']
    ] } },
    { h: 'Files, time and monitoring' },
    { table: { head: ['Service', 'Job', 'Port'], rows: [
      ['FTP', 'An old way to transfer files. Sends passwords unencrypted', '21'],
      ['SFTP', 'Secure file transfer, using SSH', '22'],
      ['SMB', 'Windows file and printer sharing (shared folders)', '445'],
      ['NTP', "Keeps every device's clock correct", '123'],
      ['SNMP', 'Lets monitoring software check on routers, switches and printers', '161'],
      ['LDAP', 'A directory of users and computers, used for logins in organisations', '389']
    ] } },
    { tip: "Correct time matters more than you'd think. Security certificates check the date, logins can fail when clocks disagree, and logs are useless for investigating problems if every device shows a different time." },
    { h: 'Web servers and status codes' },
    { p: 'A <b>web server</b> answers HTTP requests. Every answer starts with a <b>status code</b>:' },
    { table: { head: ['Code', 'Meaning'], rows: [
      ['200', 'OK: here is the page'],
      ['301', 'Moved permanently: the page has a new address'],
      ['403', "Forbidden: you aren't allowed to see this"],
      ['404', 'Not found: there is no page at this address'],
      ['500', 'Internal server error: something went wrong on the server'],
      ['503', 'Service unavailable: the server is too busy, or down for maintenance']
    ] } },
    { p: 'Codes starting with 2 mean success, 3 means "look somewhere else", 4 means something was wrong with the request, and 5 means the server had a problem.' },
    { h: 'Proxy servers' },
    { ul: [
      'A <b>proxy</b> fetches web pages on your behalf. Schools and offices use one to filter websites and to keep copies of popular pages so they load faster.',
      'A <b>reverse proxy</b> sits in front of web servers, sharing visitors out between them and protecting them.'
    ] }
  ],
  analogy: {
    title: 'Think of it like the staff of a big hotel',
    text: 'Guests never think about the hotel staff, but nothing works without them.',
    map: [
      ['The receptionist handing out room keys for a few nights', 'DHCP leases'],
      ['The guest directory at the front desk', 'DNS records'],
      ["The hotel's post room", 'Email servers (SMTP, IMAP)'],
      ['The shared storeroom', 'SMB file sharing'],
      ['The lobby clock that everyone sets their watch by', 'NTP'],
      ['A concierge who runs errands for you', 'A proxy server']
    ]
  },
  diagram: { flow: [
    { t: 'Discover', s: '"Any DHCP server here?"' },
    { t: 'Offer', s: '"You can have .23"' },
    { t: 'Request', s: '"I\'ll take .23, please"' },
    { t: 'Acknowledge', s: '"It\'s yours, plus gateway and DNS"' }
  ], note: 'DORA: four messages, and a device has everything it needs to join the network.' },
  words: [
    ['DORA', 'The four DHCP steps: Discover, Offer, Request, Acknowledge.'],
    ['DHCP lease', 'How long a device may keep the address that DHCP gave it.'],
    ['DHCP reservation', 'A rule that always gives the same address to one device.'],
    ['MX record', 'A DNS record that says which server receives email for a domain.'],
    ['SMTP', 'Simple Mail Transfer Protocol: the protocol for sending email.'],
    ['IMAP', 'A protocol for reading email that stays on the server, so all your devices match.'],
    ['NTP', 'Network Time Protocol: keeps the clocks on all devices correct.'],
    ['HTTP status code', 'A number a web server sends back, like 200 (OK) or 404 (not found).'],
    ['Proxy server', 'A server that fetches web pages for you, often to filter them or speed them up.']
  ],
  quiz: [
    { q: 'What are the four DHCP steps, in order?', a: ['Discover, Offer, Request, Acknowledge', 'Ask, Give, Take, Thanks', 'Ping, Trace, Lookup, Connect', 'Offer, Discover, Accept, Done'], c: 0, why: 'DORA: Discover, Offer, Request, Acknowledge.' },
    { q: "Which DNS record says where a domain's email should be delivered?", a: ['A', 'CNAME', 'MX', 'PTR'], c: 2, why: 'MX stands for Mail Exchanger.' },
    { q: 'A web page shows "404". What does it mean?', a: ['Everything is fine', 'The page was not found', 'The server crashed', 'You need a password'], c: 1, why: '404 means there is no page at that address. A crashed server would give a 500-something code.' },
    { q: 'You want your email to look the same on your phone and your laptop. Which protocol should the app use?', a: ['POP3', 'FTP', 'SNMP', 'IMAP'], c: 3, why: 'IMAP keeps mail on the server, so every device sees the same inbox. POP3 downloads it to one device.' }
  ]
});

BBB.chapters.push({
  id: 'ne-8', track: 'netpro',
  title: 'Wi-Fi for a whole school',
  topic: 'Designing and securing wireless networks',
  minutes: 8,
  story: [
    ['n', 'The cables are done. Now the hard part: Wi-Fi for every visitor, in a hall full of concrete pillars, steel shutters and hundreds of phones.'],
    ['arjun', 'Easy. Put one really powerful router in the middle and turn it up to maximum.'],
    ['dev', "That's the most common mistake of all. One box can only talk to so many phones at a time, however loudly it shouts. And the phones have to shout back, with their tiny, weak radios."],
    ['you', 'So we need several access points, each looking after one part of the hall?'],
    ['dev', "Exactly. Several access points, all cabled to the switches, all with the same network name, on different channels so they don't talk over each other. Phones move between them as people walk around."],
    ['n', 'You walk the hall with a Wi-Fi analyser app, noting the signal strength every few metres. Arjun marks the numbers on a map. By evening, four small access points are mounted high on the walls, and the weak corners are gone.']
  ],
  learn: [
    { h: 'The basics' },
    { ul: [
      'The <b>SSID</b> is the network name you see in the Wi-Fi list. Several access points can share one SSID, so devices can move between them.',
      'Wi-Fi is divided into <b>channels</b>: slices of the radio band. Access points near each other should use different channels.',
      'Hiding the SSID does <b>not</b> make a network secure. Hidden networks are still easy to find.'
    ] },
    { h: 'Wi-Fi generations' },
    { table: { head: ['Name', 'Standard', 'Bands', 'Notes'], rows: [
      ['Wi-Fi 4', '802.11n', '2.4 and 5 GHz', 'First to use several antennas at once (MIMO)'],
      ['Wi-Fi 5', '802.11ac', '5 GHz', 'Much faster on 5 GHz'],
      ['Wi-Fi 6', '802.11ax', '2.4 and 5 GHz', 'Handles crowds of devices far better'],
      ['Wi-Fi 6E', '802.11ax', 'Adds 6 GHz', 'A new, uncrowded band'],
      ['Wi-Fi 7', '802.11be', '2.4, 5 and 6 GHz', 'Very wide channels, and can use several bands at once']
    ] } },
    { p: 'Older standards (802.11a, b and g) still live on very old devices. A connection can only be as modern as both the access point <em>and</em> the device.' },
    { h: 'Channels and interference' },
    { ul: [
      "On <b>2.4 GHz</b>, the channels overlap. Only <b>1, 6 and 11</b> don't overlap each other, so neighbouring access points should use those.",
      '<b>5 GHz</b> has many more channels. Some are <b>DFS</b> channels, shared with weather radar and other radar: an access point must move off them if it detects radar.',
      '<b>Channel width</b> can be 20, 40, 80 or 160 MHz (and 320 MHz with Wi-Fi 7). Wider is faster but uses up more of the band. In crowded places narrower is often better. Use 20 MHz on 2.4 GHz.',
      'Interference comes from neighbouring networks, microwave ovens, Bluetooth, thick walls, metal, and even crowds of people, because bodies soak up the signal.'
    ] },
    { h: 'Measuring signal: dBm' },
    { p: 'Wi-Fi signal strength is measured in <b>dBm</b>. The numbers are negative, and <b>closer to zero is stronger</b>.' },
    { table: { head: ['Signal', 'What it is like'], rows: [
      ['−30 to −50 dBm', 'Excellent: very close to the access point'],
      ['Around −67 dBm', 'Good: a common target for video calls and streaming'],
      ['Around −70 dBm', 'Fine for browsing'],
      ['−80 dBm and lower', 'Poor: slow, and drops out']
    ] } },
    { h: 'Planning coverage' },
    { ul: [
      'Do a <b>site survey</b>: walk the area measuring signal and interference, then decide where the access points go.',
      'Several low-power access points beat one loud one. Mount them high, away from metal.',
      '<b>Wired access points</b>, cabled to a switch and often powered by PoE, give the best results.',
      '<b>Mesh</b> systems link access points to each other by radio. Easier to install, but some speed is used up passing data between them.',
      '<b>Extenders</b> (repeaters) re-broadcast a weak signal. Cheap, but they often cut the speed a lot. Use them as a last resort.',
      '<b>Roaming</b> lets a device switch to a stronger access point as you walk, without disconnecting.'
    ] },
    { h: 'Guest Wi-Fi' },
    { ul: [
      'A separate <b>guest network</b>, with its own SSID, VLAN and subnet, keeps visitors away from the important devices.',
      '<b>Client isolation</b> stops guest devices from talking to each other.',
      'A <b>captive portal</b> is the login or "accept the rules" page you see before getting online in hotels and airports.'
    ] },
    { h: 'Wi-Fi security' },
    { table: { head: ['Option', 'Verdict'], rows: [
      ['Open (no password)', "Anyone can join and the traffic isn't encrypted. Avoid it, except for guests behind a captive portal"],
      ['WEP and the first WPA', 'Old and broken. Never use them'],
      ['WPA2-Personal', 'One shared password. Fine for homes, with a long, strong password'],
      ['WPA3-Personal', 'Newer and much harder to crack by guessing passwords. The best choice for homes'],
      ['WPA2 or WPA3-Enterprise', 'Every person logs in with their own username and password, checked by a RADIUS server (802.1X). Used in schools and offices']
    ] } },
    { warn: "Turn off <b>WPS</b> (the push-button or PIN way of joining): its PIN method has a known weakness. Always change the router's default admin password, keep its firmware updated, and set a sensible DHCP range." }
  ],
  analogy: {
    title: 'Think of it like speakers in a big hall',
    text: 'You can\'t fill a huge hall with sound by shouting louder. You spread several speakers around it.',
    map: [
      ['One person shouting louder and louder', 'One powerful router'],
      ['Several speakers spread around the hall', 'Several access points'],
      ["Neighbouring speakers playing on different frequencies so they don't clash", 'Channels 1, 6 and 11'],
      ['Walking around listening for quiet spots', 'A site survey'],
      ['A separate entrance and room for visitors', 'A guest network'],
      ['Every staff member with their own ID card', 'WPA-Enterprise (802.1X)']
    ]
  },
  diagram: { flow: [
    { t: 'See the network', s: 'the phone hears the SSID (the Wi-Fi name)' },
    { t: 'Join', s: 'you pick it and type the password' },
    { t: 'Prove it', s: 'WPA2 or WPA3 checks the password and sets up encryption' },
    { t: 'Get an address', s: 'DHCP hands out an IP address' },
    { t: 'Online', s: 'traffic flows, scrambled over the air' }
  ] },
  words: [
    ['SSID', 'The name of a Wi-Fi network.'],
    ['Channel', 'A slice of the radio band that a Wi-Fi network uses.'],
    ['Channel width', 'How wide a slice of the radio band a network uses: 20, 40, 80, 160 or 320 MHz.'],
    ['dBm', 'The unit for Wi-Fi signal strength. Closer to zero is stronger.'],
    ['Site survey', 'Walking an area to measure Wi-Fi signal and plan where access points should go.'],
    ['Roaming', 'A device moving to a stronger access point without disconnecting.'],
    ['Mesh Wi-Fi', 'Access points that link to each other by radio to cover a large area.'],
    ['Captive portal', 'The login or welcome page you see before using public Wi-Fi.'],
    ['802.1X', 'A way for each person to log in to a network with their own account, checked by a RADIUS server.']
  ],
  quiz: [
    { q: "Which 2.4 GHz channels don't overlap each other?", a: ['1, 2 and 3', '1, 6 and 11', '5, 10 and 15', 'Every channel overlaps'], c: 1, why: 'Channels 1, 6 and 11 are far enough apart that they do not overlap.' },
    { q: 'Which Wi-Fi signal is the strongest?', a: ['−80 dBm', '−67 dBm', '−90 dBm', '−45 dBm'], c: 3, why: 'dBm values are negative, and the closer to zero, the stronger the signal.' },
    { q: 'Visitors need Wi-Fi but must not reach the tournament PCs. The best set-up is...', a: ['Give them the staff password', 'Hide the SSID', 'A separate guest network with client isolation', 'Turn the Wi-Fi off'], c: 2, why: 'A guest network on its own VLAN and subnet keeps visitors apart, and client isolation keeps them apart from each other too.' },
    { q: 'Which Wi-Fi security should a new home router use?', a: ['WPA3-Personal', 'WEP', 'Open, with no password', 'WPS PIN only'], c: 0, why: 'WPA3 is the newest and strongest. WEP is broken and WPS PIN has a known weakness.' }
  ]
});

BBB.chapters.push({
  id: 'ne-9', track: 'netpro',
  title: 'A private tunnel',
  topic: 'VPNs and remote access',
  minutes: 7,
  story: [
    ['n', 'Two days before the fest, the teacher in charge has a request. The organisers want to update the tournament schedule on the score server from home, in the evenings.'],
    ['arjun', 'We said port forwarding is dangerous. So how can they reach a PC inside the school from their homes?'],
    ['dev', "With a tunnel. A VPN builds an encrypted tunnel across the internet, from the organiser's laptop straight into the school network. Anyone watching sees only scrambled data going into a tunnel."],
    ['you', 'And without the tunnel, the score server stays invisible from outside?'],
    ['dev', 'Exactly. Only people with a VPN login can get in, and once inside, they can reach only what we allow.'],
    ['arjun', "My cousin uses a VPN app to hide from hackers. So he's totally safe now, right?"],
    ['dev', "Not quite. A VPN protects the journey. It doesn't stop him clicking a scam link or installing a bad app. Let's be clear about what a VPN does, and what it doesn't."]
  ],
  learn: [
    { h: 'What a VPN is' },
    { p: "A <b>VPN</b> (Virtual Private Network) creates an encrypted <b>tunnel</b> between your device and a VPN server. Everything you send travels inside the tunnel, so people on the same network (like a café's Wi-Fi) can't read it. Websites see the VPN server's IP address instead of yours." },
    { h: 'Two main kinds' },
    { table: { head: ['Type', 'Joins', 'Example'], rows: [
      ['Remote-access VPN', "One person's device to an organisation's network", 'An organiser at home reaching the score server'],
      ['Site-to-site VPN', 'Two whole networks, router to router, all the time', "A company's Pune and Bengaluru offices working like one network"]
    ] } },
    { h: 'VPN protocols' },
    { table: { head: ['Protocol', 'Notes'], rows: [
      ['IPsec', 'A widely used standard, often for site-to-site links between routers and firewalls'],
      ['OpenVPN', 'A popular open-source VPN that uses TLS, the same kind of encryption as HTTPS'],
      ['WireGuard', 'Newer, small and fast, with modern encryption'],
      ['SSL/TLS VPN', 'Runs over port 443 like a website, so it gets through most firewalls. Often used from a browser or a small app']
    ] } },
    { ul: [
      '<b>Full tunnel:</b> all your traffic goes through the VPN.',
      '<b>Split tunnel:</b> only traffic meant for the organisation goes through the VPN; everything else goes straight to the internet. Faster, but the organisation can protect less of what you do.'
    ] },
    { h: 'What a VPN does NOT do' },
    { ul: [
      'It does <b>not</b> make you anonymous. The VPN company can see your traffic, and websites still know who you are when you log in, or through cookies.',
      'It does <b>not</b> stop phishing, scam links or malware.',
      'It does <b>not</b> make anything illegal legal.'
    ] },
    { warn: 'Be careful with free VPN apps. Running VPN servers costs money, so some free apps earn it by collecting and selling what you do, by showing ads, or worse. Use a trusted provider, or the one your school or company gives you.' },
    { h: 'Remote access to a computer' },
    { table: { head: ['Tool', 'Port', 'Used for'], rows: [
      ['RDP (Remote Desktop Protocol)', '3389', "Seeing and using a Windows computer's screen from far away"],
      ['SSH (Secure Shell)', '22', 'Typing commands on a remote server over an encrypted link. The standard way to manage Linux servers'],
      ['Telnet', '23', "Old. Sends everything, passwords included, unencrypted. Don't use it"],
      ['Remote-support apps', 'Varies', 'A helper sees and controls your screen to fix a problem']
    ] } },
    { warn: '<b>Never expose RDP directly to the internet</b>: it is attacked constantly. Put it behind a VPN. And only let someone control your computer with a remote-support app if <b>you</b> contacted them and you trust them. Scammers love these apps (more about that in Part 6).' },
    { h: 'Zero trust' },
    { p: 'The old idea was "inside the network means trusted". <b>Zero trust</b> says <em>never trust, always verify</em>: every person and every device must prove who they are, every time, and gets access only to what it needs, whether it is in the office or at home.' }
  ],
  analogy: {
    title: 'Think of it like a sealed tube under a busy road',
    text: 'Imagine a sealed pipe running from your house to the school, under all the traffic.',
    map: [
      ['A sealed tube from your house to the school', 'A VPN tunnel'],
      ['People on the road see the tube, not what is inside it', 'Encryption'],
      ['A tube between two school buildings, always open', 'A site-to-site VPN'],
      ['Only school post goes in the tube; everything else uses the road', 'Split tunnelling'],
      ['Showing your ID at every door, even inside the building', 'Zero trust']
    ]
  },
  diagram: { flow: [
    { t: "Organiser's laptop", s: 'at home' },
    { t: 'Encrypted tunnel', s: 'across the internet' },
    { t: 'VPN gateway', s: 'at the school' },
    { t: 'Score server', s: 'only what is allowed' }
  ] },
  words: [
    ['VPN', 'Virtual Private Network: an encrypted tunnel between your device and another network.'],
    ['Tunnel', 'A connection that carries your traffic, encrypted, inside another network.'],
    ['Site-to-site VPN', 'A permanent VPN that joins two whole networks.'],
    ['Remote-access VPN', "A VPN that lets one person's device join an organisation's network."],
    ['Split tunnelling', 'Sending only some traffic through the VPN and the rest straight to the internet.'],
    ['WireGuard', 'A modern, fast VPN protocol.'],
    ['RDP', "Remote Desktop Protocol: using a Windows computer's screen from far away. Port 3389."],
    ['SSH', 'Secure Shell: typing commands on a remote computer over an encrypted link. Port 22.'],
    ['Zero trust', 'A security idea: never trust automatically; check every person and device, every time.']
  ],
  quiz: [
    { q: 'What does a VPN do?', a: ['Makes your internet free', 'Creates an encrypted tunnel for your traffic', 'Removes all viruses', 'Makes you completely anonymous'], c: 1, why: 'A VPN encrypts the journey between you and the VPN server. It does not remove viruses or make you anonymous.' },
    { q: 'What is the safest way for organisers to reach a server at school from home?', a: ['Port-forward RDP to the internet', 'Email the password around', 'Connect with a VPN, then reach the server', 'Use Telnet'], c: 2, why: 'The VPN keeps the server hidden from the internet and encrypts the connection.' },
    { q: 'Which protocol sends passwords unencrypted and should not be used?', a: ['SSH', 'WireGuard', 'HTTPS', 'Telnet'], c: 3, why: 'Telnet sends everything as plain text. SSH replaced it.' },
    { q: "Arjun's cousin uses a VPN. Is he now safe from phishing links?", a: ['No. A VPN protects the connection, not what he clicks', 'Yes, completely', 'Only on Sundays', 'Yes, if the VPN app is free'], c: 0, why: 'A VPN does nothing to stop you trusting a fake message or website.' }
  ]
});

BBB.chapters.push({
  id: 'ne-10', track: 'netpro',
  title: 'Seeing inside the network',
  topic: 'Network tools and monitoring',
  minutes: 8,
  story: [
    ['n', 'Fest day. The hall roars. Forty players, a giant screen, and a live stream for parents at home. On the stage, you watch a laptop full of graphs: every switch, every access point, all green.'],
    ['n', 'From his PC in row 3, Arjun shouts across the hall.'],
    ['arjun', 'Semi-final! If the network lags now, I will never forgive you!'],
    ['n', "It doesn't lag once. Arjun's team wins by two points, and the hall erupts."],
    ['dev', 'Proud of you both. But an engineer never just hopes. Keep watching. Open Wireshark on the visitor network and look at what "normal" looks like.'],
    ['you', 'Web pages, DNS lookups, video... all normal. But Uncle Dev, look. This one phone is sending thousands of strange requests a minute. And look at the Wi-Fi list: there\'s a network called <b>TechFest_Free_WiFi</b>.'],
    ['dev', "That isn't one of ours."],
    ['n', 'You and Arjun look at each other. Somebody at the fest is up to something.']
  ],
  learn: [
    { h: 'Commands you know, and a few more' },
    { table: { head: ['Command', 'What it shows or does'], rows: [
      ['<code>ipconfig /all</code>', 'Everything about your network adapters: IP, mask, gateway, DNS servers, MAC address and DHCP lease'],
      ['<code>ipconfig /release</code> then <code>/renew</code>', 'Gives back your DHCP address and asks for a fresh one'],
      ['<code>ipconfig /flushdns</code>', 'Empties the DNS cache, so names are looked up again'],
      ['<code>arp -a</code>', 'The ARP cache: IP addresses and the MAC addresses that go with them'],
      ['<code>netstat -an</code>', 'Every connection, and every port "listening" for new connections'],
      ['<code>pathping</code>', 'Like tracert, but also measures packet loss at each hop'],
      ['<code>ping</code>, <code>tracert</code>, <code>nslookup</code>', 'Reachability, the route, and name lookups (from Part 2)']
    ] } },
    { h: 'Wireshark: seeing every packet' },
    { ul: [
      "<b>Wireshark</b> is a free program that captures packets and shows every header, layer by layer. It is the network engineer's microscope.",
      'A capture fills up very fast, so you use <b>display filters</b> to see only what matters, like <code>dns</code>, <code>http</code> or <code>ip.addr == 10.10.1.5</code>.',
      'It shows exactly what is happening: which device talks to which, using which protocol, and where errors appear.'
    ] },
    { warn: "Only capture traffic on networks you own, or have clear permission to monitor. Capturing other people's traffic without permission is a serious invasion of privacy, and can be a crime." },
    { h: 'Testing speed and quality' },
    { ul: [
      'A <b>speed test</b> measures download speed, upload speed and latency (ping).',
      '<b>Jitter</b> is how much the latency jumps around. High jitter makes calls and games stutter, even when the speed looks good.',
      '<b>Packet loss</b> is the share of packets that never arrive. Even a little hurts calls and games.',
      'A <b>Wi-Fi analyser</b> app shows the nearby networks, their channels and their signal strength.'
    ] },
    { h: 'Hardware tools' },
    { table: { head: ['Tool', 'Used for'], rows: [
      ['Cable tester', 'Checking every wire in a cable is connected, in the right order'],
      ['Toner and probe', 'Finding one cable in a big bundle: the toner sends a sound down the cable, and the probe beeps when it is near it'],
      ['Loopback plug', 'Testing a network port by sending its signal straight back into itself'],
      ['Multimeter', 'Measuring voltage and checking wires for breaks'],
      ['PoE tester', 'Checking whether a port supplies power, and how much'],
      ['Fibre light meter', 'Checking how much light gets through a fibre cable']
    ] } },
    { h: 'Practising without real equipment' },
    { p: '<b>Cisco Packet Tracer</b> (free from Cisco Networking Academy) and <b>GNS3</b> let you build pretend networks of routers, switches and PCs on your own computer, configure them, and break them safely.' },
    { h: 'Keeping watch' },
    { ul: [
      '<b>Documentation:</b> a network diagram, an IP address plan, labels on every cable and port, and a log of every change. The person fixing it late at night might be you.',
      '<b>Monitoring:</b> software checks every device (often using SNMP and ping) and draws graphs of traffic and errors.',
      '<b>Alerts</b> warn you the moment something goes down or looks wrong.',
      'A <b>baseline</b> is a record of what normal looks like. You can only spot something strange if you know what normal is.'
    ] }
  ],
  analogy: {
    title: "Think of it like a doctor's instruments",
    text: 'A doctor has tools to look inside the body. A network engineer has tools to look inside the network.',
    map: [
      ['A stethoscope to listen inside', 'Wireshark'],
      ['Taking temperature and pulse', 'ping, speed tests and jitter'],
      ['Your medical records', 'Network documentation'],
      ['Knowing your normal temperature is about 37 °C', 'A baseline'],
      ['A heart monitor that beeps when something changes', 'Monitoring and alerts']
    ]
  },
  diagram: { flow: [
    { t: 'Baseline', s: 'learn what normal looks like' },
    { t: 'Monitor', s: 'graphs of every device' },
    { t: 'Alert', s: 'something looks wrong' },
    { t: 'Capture', s: 'look closer in Wireshark' },
    { t: 'Fix and record', s: 'write down what changed' }
  ] },
  words: [
    ['Wireshark', 'A free program that captures network packets and shows what is inside them.'],
    ['Packet capture', 'Recording network traffic so it can be studied.'],
    ['Display filter', 'A rule in Wireshark that shows only the packets you are interested in.'],
    ['netstat', 'A command that lists network connections and listening ports.'],
    ['Jitter', 'How much latency changes from moment to moment. High jitter makes calls stutter.'],
    ['Toner and probe', 'A pair of tools for finding one cable in a big bundle.'],
    ['Loopback plug', "A small plug that sends a port's signal straight back, to test the port."],
    ['Baseline', 'A record of what normal network behaviour looks like.'],
    ['Packet Tracer', 'A free Cisco program for building and testing pretend networks.']
  ],
  quiz: [
    { q: 'Which tool shows every packet on a network, layer by layer?', a: ['Wireshark', 'A multimeter', 'ipconfig', 'A crimper'], c: 0, why: 'Wireshark captures packets and shows every header inside them.' },
    { q: 'Video calls stutter, even though a speed test looks fast. What should you check?', a: ['Screen brightness', 'Jitter and packet loss', 'The keyboard', 'The colour of the cable'], c: 1, why: 'Calls need steady, complete delivery. Speed alone is not enough.' },
    { q: 'You need to find which of 50 identical cables in a ceiling goes to Room 12. Which tool helps?', a: ['A loopback plug', 'A crimper', 'A toner and probe', 'Wireshark'], c: 2, why: 'The toner sends a tone down the cable from Room 12, and the probe beeps when it finds it.' },
    { q: 'Why record a baseline?', a: ['To make the network faster', 'To save electricity', 'Because every network must by law', "So you can tell when something isn't normal"], c: 3, why: "You can't spot strange behaviour if you don't know what normal looks like." }
  ]
});

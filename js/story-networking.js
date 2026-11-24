/* Byte by Byte — story content.
   Part 2: Out into the world (networking).
   Same format as story-hardware.js. */
window.BBB = window.BBB || {};
BBB.chapters = BBB.chapters || [];

BBB.chapters.push({
  id: 'net-1', track: 'networking',
  title: 'A note across the room',
  topic: 'What is a network?',
  minutes: 4,
  story: [
    ['n', "Riya's best friend Arjun has moved to Bengaluru, 800 kilometres away. They have a plan: tonight at 6, they will play an online game together, Riya on her new PC and Arjun on his laptop."],
    ['riya', 'Uncle Dev, how does my game even know where Arjun is? He\'s in a different city!'],
    ['dev', 'Remember passing notes in class? You write a note, fold it, write your friend\'s name on the outside, and pass it down the row until it reaches them.'],
    ['riya', '...And sometimes the teacher catches it.'],
    ['dev', "Networks have teachers too. We'll get to security later. But that's the whole idea of a network: devices connected together, passing messages along until each message reaches the right one."],
    ['riya', 'So the internet is just a very, very long row of desks?'],
    ['dev', "A row of desks that wraps around the whole planet. Let's follow one message, yours to Arjun, all the way there."]
  ],
  learn: [
    { p: 'A <b>network</b> is two or more devices connected so they can share information and things like files, printers and an internet connection.' },
    { h: 'Networks come in sizes' },
    { table: { head: ['Type', 'Size', 'Example'], rows: [
      ['PAN (Personal Area Network)', 'Around one person', 'Your phone and wireless earbuds over Bluetooth'],
      ['LAN (Local Area Network)', 'One home, school or office', 'Every device on your home Wi-Fi'],
      ['WAN (Wide Area Network)', 'Across cities and countries', "A bank joining all its branches' networks together"]
    ] } },
    { p: 'The <b>internet</b> is the biggest network of all. It is really a <b>network of networks</b>: millions of LANs and WANs all joined together.' },
    { h: 'Clients and servers' },
    { ul: [
      'A <b>client</b> asks for something: your web browser, your game, your WhatsApp.',
      'A <b>server</b> answers: the computer that stores the website, runs the game, or passes on your messages.',
      'Servers are just computers, usually big ones, kept in buildings called <b>data centres</b>.'
    ] }
  ],
  analogy: {
    title: 'Think of it like passing notes in class',
    text: 'A network is a classroom where notes get passed from desk to desk until they reach the right person.',
    map: [
      ['The note', 'The data (your message)'],
      ['The name written on the outside', 'The address'],
      ['Classmates passing it along', 'Network devices like routers'],
      ['The classroom', 'A LAN'],
      ['Every classroom in every school, joined up', 'The internet']
    ]
  },
  diagram: { flow: [
    { t: "Riya's PC", s: 'the client' },
    { t: 'Home router', s: 'her LAN' },
    { t: 'Internet', s: 'network of networks' },
    { t: 'Game server', s: 'in a data centre' },
    { t: "Arjun's laptop", s: 'another client' }
  ] },
  words: [
    ['Network', 'Two or more devices connected so they can share information.'],
    ['LAN', 'Local Area Network. A network in one home, school or office.'],
    ['WAN', 'Wide Area Network. A network that joins LANs across long distances.'],
    ['Internet', 'The worldwide network of networks.'],
    ['Client', 'A device or app that asks for something, like your web browser.'],
    ['Server', 'A computer that answers requests, like the one that stores a website.'],
    ['Data centre', 'A building full of servers.']
  ],
  quiz: [
    { q: 'The Wi-Fi network in your home is a...', a: ['WAN', 'PAN', 'LAN', 'Server'], c: 2, why: 'It covers one home, so it is a Local Area Network.' },
    { q: 'When you open a website, your browser is the...', a: ['Server', 'Client', 'Router', 'Cable'], c: 1, why: 'Your browser asks for the page, so it is the client. The website lives on a server.' },
    { q: 'The internet is best described as...', a: ['One giant computer in America', 'A network of networks', 'A single cable under the sea', 'A website'], c: 1, why: 'It is millions of separate networks all joined together.' }
  ]
});

BBB.chapters.push({
  id: 'net-2', track: 'networking',
  title: 'Every house has an address',
  topic: 'IP addresses and MAC addresses',
  minutes: 6,
  story: [
    ['riya', "If messages get passed along, how does anyone know where to pass them?"],
    ['dev', 'How does the postman find our flat?'],
    ['riya', 'Our address. Flat 4, Shanti Apartments, Kothrud, Pune.'],
    ['dev', 'Computers have addresses too. They\'re called IP addresses. Open Command Prompt and type <code>ipconfig</code>.'],
    ['n', 'Riya types it and presses Enter. Among the lines of text, one stands out: <code>IPv4 Address . . . : 192.168.1.7</code>'],
    ['riya', "Four numbers with dots in between. That's my computer's address?"],
    ['dev', "Its address inside our home. Out on the internet, our whole house shares one different address. And your computer has one more ID, given to it in the factory, like the name you're born with. That's called the MAC address."]
  ],
  learn: [
    { h: 'IP address' },
    { p: 'An <b>IP address</b> identifies a device on a network so data can be delivered to it. IP stands for <em>Internet Protocol</em>.' },
    { ul: [
      '<b>IPv4</b> addresses are four numbers from <b>0 to 255</b>, separated by dots, like <code>192.168.1.7</code>. There are only about 4.3 billion of them, and the world has run out.',
      '<b>IPv6</b> addresses are much longer, written with letters, numbers and colons, like <code>2001:db8::1</code>. There are enough for every device we could ever make.'
    ] },
    { h: 'Private and public addresses' },
    { ul: [
      'Inside your home, devices get <b>private</b> addresses. They start with <code>192.168.</code>, <code>10.</code> or <code>172.16.</code> to <code>172.31.</code>. Millions of homes use the same private addresses, and that\'s fine, because they never leave the house.',
      'Your router gets one <b>public</b> address from your internet provider. All the devices in your home share it when they go online. This sharing trick is called <b>NAT</b>.',
      '<code>127.0.0.1</code> is special: it always means "this computer itself". It also has a name: <b>localhost</b>.'
    ] },
    { h: 'Who hands out the addresses?' },
    { p: 'Your router does, using <b>DHCP</b>. When your phone joins the Wi-Fi, it asks "can I have an address?" and the router gives it a free one, like a hotel receptionist handing out room numbers.' },
    { h: 'MAC address' },
    { p: 'A <b>MAC address</b> is a hardware ID built into every network adapter, written as six pairs of letters and numbers like <code>3C:52:82:1A:9F:07</code>. It is used to deliver data <em>inside</em> the local network. The IP address is used to find the way <em>across</em> networks.' },
    { tip: 'MAC has nothing to do with Apple Mac computers. It stands for <em>Media Access Control</em>. (Phones often show a random MAC to each Wi-Fi network, for privacy.)' }
  ],
  analogy: {
    title: 'Think of it like a postal address and a name',
    text: "If you move house, your address changes but your name doesn't.",
    map: [
      ['Your home address (changes when you move)', 'IP address'],
      ['Your name (stays the same wherever you go)', 'MAC address'],
      ['The flat numbers inside one building', 'Private IP addresses'],
      ["The building's street address", 'Public IP address'],
      ['The receptionist giving out room numbers', 'DHCP on the router']
    ]
  },
  toy: 'ipcheck',
  words: [
    ['IP address', 'A number that identifies a device on a network, like 192.168.1.7.'],
    ['IPv4', 'The older, shorter kind of IP address: four numbers from 0 to 255.'],
    ['IPv6', 'The newer, much longer kind of IP address, written with colons.'],
    ['Private IP', 'An address used only inside a home or office network, like 192.168.x.x.'],
    ['Public IP', 'The address your whole network uses out on the internet.'],
    ['NAT', 'Network Address Translation. Lets many devices share one public IP address.'],
    ['DHCP', 'The service, usually on the router, that hands out IP addresses automatically.'],
    ['MAC address', 'A hardware ID built into every network adapter.'],
    ['localhost', 'The name for 127.0.0.1: "this computer itself".']
  ],
  quiz: [
    { q: 'Which of these is a valid IPv4 address?', a: ['192.168.1.300', '192.168.1', '192.168.1.20', '192-168-1-20'], c: 2, why: 'It has four numbers, each from 0 to 255, separated by dots. 300 is too big, and the others have the wrong shape.' },
    { q: 'At home, who usually gives your phone its IP address?', a: ['The router, using DHCP', 'Your phone company\'s head office', 'The phone makes one up', 'Nobody, phones don\'t need one'], c: 0, why: 'The router hands out addresses with DHCP whenever a device joins.' },
    { q: 'A MAC address belongs to...', a: ['A website', 'Only Apple Mac computers', 'The network adapter hardware', 'The whole internet'], c: 2, why: 'Every network adapter has its own MAC address. MAC means Media Access Control.' }
  ]
});

BBB.chapters.push({
  id: 'net-3', track: 'networking',
  title: 'The post office downstairs',
  topic: 'Routers, switches, modems and access points',
  minutes: 5,
  story: [
    ['n', 'Riya follows the blue cable from her PC, along the skirting board, down the hallway. It ends at a small white box with blinking green lights, next to the TV.'],
    ['riya', 'This is the Wi-Fi box, right?'],
    ['dev', "Everyone calls it that. But it's really four machines squeezed into one box. Look at the back."],
    ['riya', 'One cable coming in from outside. Four yellow sockets. And two antennas.'],
    ['dev', "The cable from outside comes from our internet provider. The part that talks to it is the modem. The four sockets are a little switch. The antennas are the access point, for Wi-Fi. And the brain that decides where every message should go? That's the router."],
    ['riya', "It's like the post office in our building! Letters for someone in the building go straight to their flat. Letters for anywhere else go out to the city."],
    ['dev', 'That is exactly what a router does.']
  ],
  learn: [
    { table: { head: ['Device', 'What it does'], rows: [
      ['Modem / ONT', 'Connects your home to your internet provider\'s line. On fibre connections it is called an ONT (Optical Network Terminal).'],
      ['Router', 'Connects your home network to the internet and decides where each message should go. It also hands out IP addresses (DHCP), shares your one public address (NAT), and usually has a firewall.'],
      ['Switch', 'Connects many wired devices inside the same network. It sends each message only to the device it is meant for, using MAC addresses.'],
      ['Access point', 'The Wi-Fi radio. It lets wireless devices join the network.'],
      ['Hub (old)', 'An old, simple box that copied every message to every device. Switches replaced them.']
    ] } },
    { p: 'Your home "Wi-Fi router" is usually <b>all of these in one box</b>. In offices and schools they are separate boxes, so there can be many switches and access points.' },
    { h: 'The internet provider' },
    { p: 'Your <b>ISP</b> (Internet Service Provider) is the company that connects your home to the internet: Jio, Airtel, BSNL, ACT and others. Their network connects to other networks, which connect to others, all around the world.' }
  ],
  analogy: {
    title: 'Think of it like the post office in your building',
    text: 'Every big apartment building has a mail room, and a postal van that connects it to the city.',
    map: [
      ['Mail room that sorts letters to each flat', 'Switch'],
      ['Post office that decides which city a letter goes to', 'Router'],
      ['The postal van to the city', 'Modem'],
      ['A post box you can use from anywhere in the building', 'Wi-Fi access point'],
      ['The national postal service', 'Your ISP']
    ]
  },
  diagram: { flow: [
    { t: 'Phone and laptop', s: 'over Wi-Fi' },
    { t: 'Access point + switch', s: 'inside the home' },
    { t: 'Router', s: 'decides where to send' },
    { t: 'Modem / ONT', s: 'talks to the ISP' },
    { t: 'ISP', s: 'then the internet' }
  ], note: "Riya's PC plugs into the switch with a cable. Her phone uses the access point." },
  words: [
    ['Router', 'Connects different networks together and decides where each message goes.'],
    ['Switch', 'Connects devices inside one network and sends each message only where it needs to go.'],
    ['Modem / ONT', 'Connects your home to your internet provider\'s line.'],
    ['Access point', 'The radio that lets wireless devices join a network over Wi-Fi.'],
    ['Hub', 'An old device that copied every message to every connected device.'],
    ['ISP', 'Internet Service Provider. The company that connects you to the internet.']
  ],
  quiz: [
    { q: 'Which device connects your home network to the internet and decides where messages go?', a: ['Switch', 'Router', 'Monitor', 'Keyboard'], c: 1, why: 'The router joins networks together and picks the route for each message.' },
    { q: 'A switch connects devices...', a: ['Inside the same network', 'Between countries', 'Only over Bluetooth', 'To the power supply'], c: 0, why: 'A switch works inside one network, like the mail room inside one building.' },
    { q: 'Jio, Airtel and BSNL are examples of...', a: ['Routers', 'Operating systems', 'ISPs', 'Web browsers'], c: 2, why: 'They are Internet Service Providers: they connect your home to the internet.' }
  ]
});

BBB.chapters.push({
  id: 'net-4', track: 'networking',
  title: 'Roads and radio waves',
  topic: 'Cables, fibre and Wi-Fi',
  minutes: 6,
  story: [
    ['riya', 'Why does my PC need a cable, but my phone doesn\'t?'],
    ['dev', "Both are roads for data. A cable is like a private paved road: fast, steady, no traffic from anyone else. Wi-Fi is more like shouting across a playground. Very handy, but walls get in the way, and when everyone shouts at once it gets messy."],
    ['riya', 'That\'s why my video calls get choppy in my bedroom!'],
    ['dev', 'Two brick walls and a steel cupboard between you and the router. Let\'s try something.'],
    ['n', 'They move the router from behind the TV to a high shelf in the middle of the hallway, and switch Riya\'s phone to the 5 GHz network. The bedroom signal jumps from one bar to three.'],
    ['riya', 'We didn\'t buy anything, and it\'s faster!'],
    ['dev', "Knowing how radio waves behave is free."]
  ],
  learn: [
    { h: 'Copper cables (Ethernet)' },
    { ul: [
      'An <b>Ethernet</b> cable has twisted pairs of copper wire inside and a clear <b>RJ45</b> plug on each end.',
      '<b>Cat5e</b> and <b>Cat6</b> cables carry 1 Gbps easily. <b>Cat6a</b> carries 10 Gbps.',
      'One cable run can be up to about <b>100 metres</b> long.',
      'Best for gaming PCs, smart TVs and anything that stays in one place.'
    ] },
    { h: 'Fibre optic' },
    { p: 'Fibre cables carry data as <b>flashes of light</b> through thin strands of glass. They are extremely fast and work over huge distances: undersea cables join whole continents. Many homes now get fibre right to the door (FTTH).' },
    { h: 'Wi-Fi' },
    { table: { head: ['', '2.4 GHz', '5 GHz'], rows: [
      ['Range', 'Reaches farther', 'Shorter range'],
      ['Through walls', 'Better', 'Weaker'],
      ['Speed', 'Slower', 'Faster'],
      ['Crowding', 'Crowded (neighbours, Bluetooth, microwaves)', 'Less crowded']
    ] } },
    { p: 'Newer Wi-Fi 6E and Wi-Fi 7 routers can also use a <b>6 GHz</b> band: even faster, even shorter range.' },
    { h: 'Speed: bandwidth and latency' },
    { ul: [
      '<b>Bandwidth</b> is how much data can flow each second, like how many lanes a road has. It is measured in <b>Mbps</b> (megabits per second).',
      '<b>Latency</b> (also called <b>ping</b>) is how long one trip takes, in <b>milliseconds</b>. Online gamers care about this most.',
      'Internet speed is in <b>bits</b>, but file sizes are in <b>bytes</b>. Divide by 8: a 100 Mbps plan downloads about <b>12.5 MB per second</b>.'
    ] },
    { tip: 'Better Wi-Fi for free: put the router high up and in the middle of the home, away from metal cupboards, mirrors and microwave ovens.' }
  ],
  analogy: {
    title: 'Think of it like roads and shouting',
    text: 'Data needs a road to travel on. Some roads are better than others.',
    map: [
      ['A private paved road', 'Ethernet cable'],
      ['A high-speed train in a glass tunnel', 'Fibre optic'],
      ['Shouting across a playground', 'Wi-Fi'],
      ['Number of lanes on the road', 'Bandwidth'],
      ['How long the drive takes', 'Latency (ping)']
    ]
  },
  words: [
    ['Ethernet', 'The standard for wired networks using copper cables.'],
    ['RJ45', 'The clear plastic plug on the end of an Ethernet cable.'],
    ['Fibre optic', 'Cable that carries data as flashes of light through glass.'],
    ['Wi-Fi', 'Wireless networking using radio waves.'],
    ['2.4 GHz / 5 GHz', 'The two main Wi-Fi bands. 2.4 GHz reaches farther; 5 GHz is faster.'],
    ['Bandwidth', 'How much data can flow per second. Measured in Mbps or Gbps.'],
    ['Latency', 'How long data takes to make one trip. Measured in milliseconds. Also called ping.'],
    ['Mbps', 'Megabits per second. Divide by 8 to get megabytes per second.']
  ],
  quiz: [
    { q: 'Which Wi-Fi band reaches farther and gets through walls better?', a: ['2.4 GHz', '5 GHz', 'They are exactly the same', 'Neither can pass walls'], c: 0, why: 'Lower-frequency 2.4 GHz waves travel farther and pass through walls better, but are slower.' },
    { q: 'Your plan is 100 Mbps. About how many megabytes per second can you download?', a: ['100 MB/s', 'About 12.5 MB/s', '800 MB/s', '1 MB/s'], c: 1, why: 'Speed is in bits, files are in bytes. 100 ÷ 8 = 12.5.' },
    { q: 'For online games, which one matters most?', a: ['Low latency (ping)', 'Screen size', 'Storage space', 'Speaker volume'], c: 0, why: 'Low latency means your actions reach the game server quickly.' }
  ]
});

BBB.chapters.push({
  id: 'net-5', track: 'networking',
  title: 'A letter cut into postcards',
  topic: 'Packets',
  minutes: 5,
  story: [
    ['n', 'Riya types into the game chat: "Hi Arjun! Ready at 6?" and presses Enter. Before she can even blink, Arjun replies with a thumbs up.'],
    ['riya', 'That went 800 kilometres in less than a second?'],
    ['dev', 'And it didn\'t even travel in one piece. Your computer cut it into small numbered pieces called packets. A short message might fit in one or two. A photo becomes hundreds. A movie, millions.'],
    ['riya', 'Why cut it up at all?'],
    ['dev', "Imagine posting a whole storybook as postcards. Each card has the address, your name, and a page number. If one card gets lost, you only send that one card again, not the whole book. And if one road is jammed, some cards can take a different road."],
    ['riya', "And Arjun's computer uses the page numbers to put them back in order!"],
    ['dev', 'Try it yourself.']
  ],
  learn: [
    { p: 'Data sent over a network is cut into small pieces called <b>packets</b>. Each packet has two parts:' },
    { ul: [
      'The <b>header</b>: like the outside of a postcard. It holds the sender\'s IP address, the destination IP address, a sequence number, and other details.',
      'The <b>payload</b>: the actual piece of your data.'
    ] },
    { p: 'On most home networks a packet carries at most about <b>1,500 bytes</b>.' },
    { h: 'The journey' },
    { ol: [
      'Your computer cuts the data into numbered packets.',
      'Each router reads the destination address and passes the packet one step closer. Each step is called a <b>hop</b>.',
      'Packets can take different routes. They may arrive out of order.',
      'The receiving computer puts them back in order using the numbers, and asks again for any that went missing.'
    ] },
    { p: 'Sending data in independent packets like this is called <b>packet switching</b>. It is how the whole internet works.' }
  ],
  analogy: {
    title: 'Think of it like a book sent as postcards',
    text: 'Too big to send in one go? Number the pages and post them one by one.',
    map: [
      ['One postcard', 'One packet'],
      ['Address and page number on the front', 'Header'],
      ['The words written on the card', 'Payload'],
      ['Each post office the card passes through', 'A hop (router)'],
      ['Putting pages in order at the other end', 'Reassembly']
    ]
  },
  toy: 'packet',
  words: [
    ['Packet', 'A small piece of data sent across a network, with a header and a payload.'],
    ['Header', 'The part of a packet with the addresses and sequence number.'],
    ['Payload', 'The part of a packet that carries the actual data.'],
    ['Hop', 'One step of a packet\'s journey, from one router to the next.'],
    ['Packet switching', 'Sending data as separate packets that can each find their own route.']
  ],
  quiz: [
    { q: 'Why are messages split into packets?', a: ['To make them look nicer', 'A lost piece can be resent alone, and pieces can take different routes', 'Because cables are short', 'To make the message bigger'], c: 1, why: 'Small numbered pieces are easy to resend, and can travel around traffic jams.' },
    { q: 'Which part of a packet holds the destination address?', a: ['The payload', 'The header', 'Nowhere', 'The screen'], c: 1, why: 'The header is like the front of the postcard: addresses and the page number.' },
    { q: 'Each router a packet passes through is called a...', a: ['Hop', 'Jump', 'Bounce', 'Skip'], c: 0, why: 'Each step from router to router is a hop.' }
  ]
});

BBB.chapters.push({
  id: 'net-6', track: 'networking',
  title: "The internet's phonebook",
  topic: 'DNS: turning names into addresses',
  minutes: 5,
  story: [
    ['riya', "Wait. If every computer has a number for an address, how come I just type youtube.com? I don't know YouTube's number."],
    ['dev', "Do you know Grandma's phone number by heart?"],
    ['riya', "No. I just tap 'Grandma' in my contacts."],
    ['dev', 'Your phone looks up the number for you. The internet has a giant contacts list too. It\'s called DNS, the Domain Name System. You type a name, and DNS finds the number.'],
    ['riya', 'Who looks after that list? It must be enormous.'],
    ['dev', "No single computer has the whole thing. It's split up. It's like asking at a library: the front desk sends you to the right floor, the floor sends you to the right shelf, and the shelf has your book. Want to watch a lookup happen?"]
  ],
  learn: [
    { p: 'A <b>domain name</b> is an easy-to-remember name like <code>wikipedia.org</code>. Computers need an IP address to connect, so <b>DNS</b> translates the name into the address.' },
    { h: 'What happens when you type a name' },
    { ol: [
      'Your device checks its own memory (its <b>cache</b>). Already know it? Done.',
      'If not, it asks a <b>DNS resolver</b>, usually run by your ISP, or a public one like Google (<code>8.8.8.8</code>) or Cloudflare (<code>1.1.1.1</code>).',
      'The resolver asks a <b>root server</b>, which says: "I don\'t know, but ask the servers for <code>.org</code>."',
      'The <b>.org server</b> says: "Ask the name server that looks after <code>wikipedia.org</code>."',
      "That <b>authoritative name server</b> answers with the real IP address.",
      'The resolver gives the address to your device and remembers it for a while, so the next lookup is instant.'
    ] },
    { p: 'All of this usually takes just a few milliseconds.' },
    { h: 'Parts of a name' },
    { p: 'In <code>www.example.com</code>, the <code>.com</code> part is the <b>top-level domain</b> (TLD). Others include <code>.org</code>, <code>.in</code> and <code>.edu</code>. <code>example</code> is the domain someone registered, and <code>www</code> is one name inside it.' },
    { tip: 'If a website "can\'t be reached" but other things like WhatsApp still work, DNS might be the problem. Trying a different DNS server often fixes it.' }
  ],
  analogy: {
    title: 'Think of it like the contacts on your phone',
    text: "You remember names. Your phone remembers the numbers.",
    map: [
      ['Grandma', 'A domain name like example.com'],
      ["Grandma's phone number", 'An IP address'],
      ['Your contacts list', 'DNS'],
      ['Recently called numbers', 'DNS cache']
    ]
  },
  toy: 'dns',
  words: [
    ['DNS', 'Domain Name System. Turns names like example.com into IP addresses.'],
    ['Domain name', 'An easy-to-remember name for a website, like wikipedia.org.'],
    ['DNS resolver', 'The server that does the looking-up for you.'],
    ['Root server', 'The first stop in a DNS lookup. It points to the right top-level domain servers.'],
    ['TLD', 'Top-Level Domain: the last part of a name, like .com, .org or .in.'],
    ['Cache', 'A short-term memory of recent answers, so repeat lookups are instant.']
  ],
  quiz: [
    { q: 'DNS turns...', a: ['Photos into packets', 'Names into IP addresses', 'Wi-Fi into cables', 'Bits into bytes'], c: 1, why: 'DNS is the internet\'s phonebook: names in, IP addresses out.' },
    { q: 'In www.example.com, the ".com" part is the...', a: ['Top-level domain (TLD)', 'MAC address', 'Router', 'Password'], c: 0, why: '.com is the top-level domain, the last part of the name.' },
    { q: 'Why does DNS keep a cache?', a: ['To store your photos', 'So repeat lookups are instant', 'To slow the internet down', 'To block games'], c: 1, why: 'Remembering recent answers means it doesn\'t have to ask all over again.' }
  ]
});

BBB.chapters.push({
  id: 'net-7', track: 'networking',
  title: 'Rules of the road',
  topic: 'Protocols, TCP and UDP, ports and layers',
  minutes: 7,
  story: [
    ['riya', 'There are millions of different computers and phones. How do they all understand each other?'],
    ['dev', "The same way you and Arjun understand each other on a call. You agreed to speak the same language, and you take turns. Computers agree on rules too. Each set of rules is called a protocol."],
    ['riya', 'Like traffic rules?'],
    ['dev', "Exactly like traffic rules. And some rules are strict, some are relaxed. Your chat messages use TCP. It's like registered post: every packet is checked off, and anything lost is sent again. But in the game, your character's position uses UDP. Just throw it and keep going. If one update gets lost, never mind, the next one is already on its way."],
    ['riya', 'Because an old position is useless anyway! By the time it arrives, I\'ve already moved.'],
    ['dev', 'Now you sound like a network engineer.']
  ],
  learn: [
    { p: 'A <b>protocol</b> is an agreed set of rules for how devices talk to each other. The internet runs on hundreds of them, each with one job.' },
    { h: 'TCP and UDP' },
    { table: { head: ['', 'TCP', 'UDP'], rows: [
      ['Like...', 'Registered post', 'Shouting a message across a field'],
      ['Before sending', 'Sets up a connection first (a "handshake")', 'Just sends'],
      ['Lost packets', 'Noticed and sent again', 'Gone. No resending'],
      ['Order', 'Always put back in order', 'Not guaranteed'],
      ['Speed', 'A little slower', 'Faster'],
      ['Used for', 'Web pages, email, downloads, chat messages', 'Video calls, online games, live streams, DNS lookups']
    ] } },
    { h: 'Ports: which app gets the packet?' },
    { p: 'An IP address gets a packet to the right <b>building</b> (device). A <b>port number</b> gets it to the right <b>flat</b> (app). Some well-known ports:' },
    { table: { head: ['Port', 'Used for'], rows: [
      ['80', 'HTTP: normal web pages'],
      ['443', 'HTTPS: secure web pages (the padlock)'],
      ['53', 'DNS lookups'],
      ['587', 'Sending email'],
      ['22', 'SSH: securely controlling another computer'],
      ['3389', 'Windows Remote Desktop']
    ] } },
    { h: 'Layers: wrapping a parcel' },
    { p: 'Network rules are organised in <b>layers</b>. Each layer does one job and wraps the data in its own envelope before passing it down. This wrapping is called <b>encapsulation</b>. The simple <b>TCP/IP model</b> has four layers, shown in the picture below.' },
    { tip: 'Network courses like CCNA also teach the <b>OSI model</b>, which splits the same ideas into 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application. Remember them from bottom to top with: <b>"Please Do Not Throw Sausage Pizza Away"</b>.' }
  ],
  analogy: {
    title: 'Think of it like sending a parcel',
    text: 'Write the letter, put it in an envelope, add a courier label, put it on a truck. At the other end, it is all unwrapped in reverse.',
    map: [
      ['Writing the letter', 'Application layer (HTTP, DNS)'],
      ['Envelope with the flat number', 'Transport layer (TCP/UDP, port)'],
      ['Courier label with the city address', 'Internet layer (IP address)'],
      ['The truck on the road', 'Link layer (Ethernet, Wi-Fi)']
    ]
  },
  diagram: { stack: [
    { t: 'Application', s: 'What to say. HTTP, HTTPS, DNS, email' },
    { t: 'Transport', s: 'How reliably, and to which app. TCP or UDP, port numbers' },
    { t: 'Internet', s: 'Which address, which route. IP addresses, routers' },
    { t: 'Link', s: 'The actual wire or radio. Ethernet, Wi-Fi, MAC addresses' }
  ], note: 'Sending: data moves down the layers. Receiving: it moves back up.' },
  words: [
    ['Protocol', 'An agreed set of rules for how devices communicate.'],
    ['TCP', 'Transmission Control Protocol. Reliable: checks every packet arrives, in order.'],
    ['UDP', 'User Datagram Protocol. Fast: sends without checking. Good for live video and games.'],
    ['Port', 'A number that tells a device which app a packet is for, like 443 for HTTPS.'],
    ['HTTP / HTTPS', 'The protocol for web pages. HTTPS is the encrypted, secure version.'],
    ['TCP/IP model', 'A 4-layer way of organising network protocols.'],
    ['OSI model', 'A 7-layer way of organising network protocols, used in teaching.'],
    ['Encapsulation', 'Each layer wrapping the data in its own header before passing it on.']
  ],
  quiz: [
    { q: 'Which is better for a live video call?', a: ['TCP, because it resends everything', 'UDP, because speed matters more than old frames', 'Neither', 'A USB cable'], c: 1, why: 'Waiting for a lost frame would freeze the call. Better to skip it and show the next one.' },
    { q: 'Websites with a padlock in the address bar use...', a: ['HTTP on port 80', 'DNS on port 53', 'HTTPS on port 443', 'SSH on port 22'], c: 2, why: 'HTTPS, the secure version of HTTP, normally uses port 443.' },
    { q: 'In the TCP/IP model, IP addresses belong to which layer?', a: ['Application', 'Internet', 'Link', 'Presentation'], c: 1, why: 'The Internet layer handles addresses and routes.' }
  ]
});

BBB.chapters.push({
  id: 'net-8', track: 'networking',
  title: 'Guards at the gate',
  topic: 'Staying safe on a network',
  minutes: 6,
  story: [
    ['n', 'The next morning, Riya\'s phone buzzes with an SMS: "URGENT! Your game account will be BLOCKED today. Verify now: free-gems-login.xyz"'],
    ['riya', 'Uncle Dev! I have to verify my account right now or they\'ll block it!'],
    ['dev', 'Stop. Read it again, slowly. Who sent it? What is the web address? And why are they in such a hurry?'],
    ['riya', "...It's from a random number. That isn't the game's real website. And they want me to panic so I don't think."],
    ['dev', "That's called phishing: fishing for your password. The scariest attacks don't break through anything. They just trick you into opening the door yourself."],
    ['riya', 'So who are the guards at our gate?'],
    ['dev', "Let's count them. And you're one of them."]
  ],
  learn: [
    { h: 'Your guards' },
    { ul: [
      '<b>Firewall:</b> checks traffic going in and out and blocks anything not allowed, like a security guard with a list. Your router and Windows both have one.',
      '<b>Strong passwords:</b> long is strong. A phrase of four random words beats a short jumble. Use a <b>different password for every account</b>, and a password manager to remember them.',
      '<b>Two-factor authentication (2FA):</b> a second check, like a code on your phone. A stolen password alone is then not enough.',
      '<b>Encryption (HTTPS):</b> scrambles data between you and a website so nobody in between can read it. Look for the padlock.',
      '<b>Updates:</b> updates fix security holes. Install them for Windows, your phone and your apps.',
      '<b>Antivirus:</b> Windows Security is built in. Keep it switched on.'
    ] },
    { warn: 'A padlock means the connection is <b>encrypted</b>, not that the website is <b>honest</b>. Scam websites can have padlocks too. Always check the actual web address.' },
    { h: 'Spotting phishing' },
    { ul: [
      'It rushes you or scares you: "URGENT", "account blocked", "last chance".',
      'It promises prizes, free money or free gems.',
      'The link or sender looks slightly wrong.',
      'It asks for a password, an <b>OTP</b> or bank details. Real companies <b>never</b> ask for your OTP.'
    ] },
    { h: 'Your home Wi-Fi' },
    { ul: [
      'Change the router\'s default admin password.',
      'Use <b>WPA2</b> or <b>WPA3</b> security with a strong Wi-Fi password.',
      'Be careful on free public Wi-Fi: avoid banking on it.'
    ] }
  ],
  analogy: {
    title: 'Think of it like a housing society',
    text: 'A safe building has several layers of protection, and the people inside are one of them.',
    map: [
      ['Guard at the gate with a visitor list', 'Firewall'],
      ['The key to your flat', 'Password'],
      ['A second lock on the door', 'Two-factor authentication'],
      ['A sealed envelope', 'Encryption'],
      ['A stranger pretending to be the electricity man', 'Phishing'],
      ['Fixing a broken window', 'Installing updates']
    ]
  },
  words: [
    ['Firewall', 'Software or hardware that blocks network traffic that is not allowed.'],
    ['Phishing', 'Tricking people into giving away passwords or codes, usually with a fake message.'],
    ['2FA', 'Two-factor authentication: a second check, like a code on your phone, as well as a password.'],
    ['OTP', 'One-time password: a short code sent to you for one use only. Never share it.'],
    ['Encryption', 'Scrambling data so only the right person can read it.'],
    ['Malware', 'Harmful software, like viruses and ransomware.'],
    ['WPA2 / WPA3', 'Security standards that protect a Wi-Fi network with a password and encryption.']
  ],
  quiz: [
    { q: 'A message says "Share your OTP to receive your prize". You should...', a: ['Share it quickly before the prize expires', 'Never share it: it is a scam', 'Share only half of it', 'Reply with your password instead'], c: 1, why: 'Real companies never ask for your OTP. Anyone who does is trying to get into your account.' },
    { q: 'A website shows a padlock. That means...', a: ['The site is 100% safe and honest', 'The connection is encrypted, but the site could still be a scam', 'The site is run by the government', 'The site is free'], c: 1, why: 'The padlock only protects the connection. Always check the address too.' },
    { q: 'Which is the best password?', a: ['123456', 'Your name and birthday', 'A long phrase of random words, used on one site only', 'The same password for everything'], c: 2, why: 'Long and unique. If one site leaks it, your other accounts stay safe.' }
  ]
});

BBB.chapters.push({
  id: 'net-9', track: 'networking',
  title: 'The network detective',
  topic: 'Finding network problems',
  minutes: 7,
  story: [
    ['n', 'Six o\'clock. Game time. Riya clicks "Join match"... "Connection failed."'],
    ['riya', "Noooo! The internet is broken!"],
    ['dev', "Is it? A detective never just says 'broken'. A detective finds out exactly where the message stops. Start close to home and walk outward, one step at a time."],
    ['riya', 'Like Doctor Riya. Simple things first.'],
    ['dev', "Exactly. Is your PC connected at all? Does it have an address? Can it reach our router? Can it reach the internet? Can it find names? Each tool answers one question."],
    ['n', "Five minutes later, Riya found it. When they moved the router onto the shelf, her blue cable had slipped half out of its socket. Click. Two green lights. She joined the match with a minute to spare."],
    ['arjun', 'Finally! What took you so long?'],
    ['riya', 'Detective work.']
  ],
  learn: [
    { p: 'Network problems are found by <b>working outward</b>, one step at a time. Each step has a tool. (On Windows, open <b>Command Prompt</b> and type these.)' },
    { table: { head: ['Question', 'How to check', 'If it fails...'], rows: [
      ['Am I connected at all?', 'Look: cable clicked in? Wi-Fi on? Lights on the router?', 'Fix the cable, turn Wi-Fi on, restart the router'],
      ['Do I have an address?', '<code>ipconfig</code>', 'An address starting <code>169.254</code> means the router didn\'t give you one'],
      ['Can I reach the router?', '<code>ping 192.168.1.1</code> (your default gateway)', 'The problem is inside your home'],
      ['Can I reach the internet?', '<code>ping 8.8.8.8</code>', 'The router or the ISP has a problem'],
      ['Can I find names?', '<code>nslookup google.com</code> or <code>ping google.com</code>', 'Internet works but DNS doesn\'t'],
      ['Where does it stop?', '<code>tracert google.com</code>', 'Shows each hop, and where replies stop coming back']
    ] } },
    { h: 'What the tools do' },
    { ul: [
      '<b>ipconfig</b> shows your IP address, subnet mask and <b>default gateway</b> (your router\'s address). On Linux it\'s <code>ip a</code>; on a Mac, <code>ifconfig</code>.',
      '<b>ping</b> sends a tiny "are you there?" message and times the reply.',
      '<b>tracert</b> (traceroute) lists every hop between you and a destination.',
      '<b>nslookup</b> asks DNS for a name\'s IP address.'
    ] },
    { tip: 'Restarting the router really does fix lots of problems. Unplug it, wait 30 seconds, plug it back in. But now you know how to find out <em>why</em> when it doesn\'t.' }
  ],
  analogy: {
    title: 'Think of it like tracing a lost parcel',
    text: "Did it leave your house? Did it reach the local post office? The city sorting centre? The parcel didn't just vanish. It stopped somewhere, and you can find where.",
    map: [
      ['Did the parcel leave the house?', 'Cable plugged in, Wi-Fi on'],
      ['Did it get a tracking number?', 'ipconfig: do I have an IP?'],
      ['Did it reach the local post office?', 'ping the router'],
      ['Did it reach the city?', 'ping 8.8.8.8'],
      ['Was the address readable?', 'nslookup: is DNS working?'],
      ['Full tracking history', 'tracert']
    ]
  },
  toy: 'terminal',
  words: [
    ['ipconfig', 'A Windows command that shows your network settings and IP address.'],
    ['ping', 'A command that checks if another device answers, and how fast.'],
    ['tracert', 'A command that lists every hop on the way to a destination.'],
    ['nslookup', 'A command that asks DNS for the IP address of a name.'],
    ['Default gateway', 'The address of your router: the way out of your local network.'],
    ['169.254.x.x', 'An address a computer gives itself when it can\'t get one from the router. A sign of trouble.']
  ],
  quiz: [
    { q: '"ping 8.8.8.8" works, but "ping google.com" fails. What is the problem?', a: ['The monitor', 'DNS', 'The CPU', 'The keyboard'], c: 1, why: 'The internet is reachable by number, but names aren\'t being turned into numbers. That\'s DNS.' },
    { q: 'ipconfig shows an address starting with 169.254. What does it mean?', a: ['Super-fast internet', 'You are connected by satellite', 'The PC could not get an address from the router', 'Everything is fine'], c: 2, why: 'Windows gives itself a 169.254 address when DHCP fails. Check the cable, Wi-Fi or router.' },
    { q: 'Which command shows every hop on the way to a website?', a: ['tracert', 'ipconfig', 'cls', 'dir'], c: 0, why: 'tracert traces the route, hop by hop.' }
  ]
});

BBB.whatNext = {
  practice: [
    'Open an old PC (unplugged, with an adult) and name every part you can see.',
    'Run <code>ipconfig</code>, <code>ping</code> and <code>tracert</code> on your own computer.',
    'Draw a map of your home network: every device, the router, and how each one connects.',
    'Find your router\'s settings page (usually <code>192.168.1.1</code> or <code>192.168.0.1</code>) with permission from whoever owns it, and look around without changing anything.'
  ],
  learn: [
    ['Cisco Networking Academy', 'Free beginner courses on networking and security.', 'https://www.netacad.com'],
    ['Cisco Packet Tracer', 'A free program for building pretend networks on your computer. You get it by signing up at Cisco Networking Academy.', ''],
    ['Professor Messer', 'Free video courses for the CompTIA exams.', 'https://www.professormesser.com']
  ],
  certificates: [
    ['CompTIA A+', 'Hardware, operating systems and troubleshooting. A common first IT certificate.'],
    ['CompTIA Network+', 'Networking fundamentals.'],
    ['Cisco CCNA', 'Routing, switching and network administration.']
  ],
  jobs: ['IT support technician', 'Hardware engineer', 'Network administrator', 'Network engineer', 'Cybersecurity analyst', 'Data centre technician']
};

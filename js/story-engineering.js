/* Byte by Byte — story content.
   Part 3: How it really works (computer engineering).
   You build a plant-watering machine for the school science fair, and learn how a chip thinks on the way.
   Same format as story-hardware.js. */
window.BBB = window.BBB || {};
BBB.chapters = BBB.chapters || [];

BBB.chapters.push({
  id: 'ce-1', track: 'engineering',
  title: 'From sand to switches',
  topic: 'Electricity, transistors and how chips are made',
  minutes: 7,
  story: [
    ['n', 'Two weeks after the big game with Arjun, your school announces a science fair. The theme is "Machines that help".'],
    ['n', "You know exactly what you want to build. Grandpa loves the plants on his balcony, but he keeps forgetting to water them. Half the tulsi pot has already gone brown."],
    ['you', "Uncle Dev, I want to build a machine that waters Grandpa's plants by itself. Can a computer do that?"],
    ['dev', "A very small one can. But if you want to build machines, let's start at the very bottom. Do you know what a computer chip is made of?"],
    ['you', 'Metal? Plastic?'],
    ['dev', 'Mostly silicon, and silicon comes from sand. Every chip is a city of tiny switches built into silicon. Billions of them.'],
    ['you', 'Sand that thinks? That sounds like magic.'],
    ['dev', "It isn't magic. It's electricity and some very clever switches. Let's start with the electricity."]
  ],
  learn: [
    { h: 'A tiny bit of electricity' },
    { p: 'Electricity is the flow of tiny charged particles called <b>electrons</b>. A few words explain almost everything:' },
    { table: { head: ['Word', 'What it means', 'Water pipe comparison'], rows: [
      ['Voltage (volts, V)', 'The push that makes electricity flow', 'Water pressure'],
      ['Current (amps, A)', 'How much electricity is flowing', 'How much water is flowing'],
      ['Resistance (ohms)', 'How much something slows the flow down', 'A narrow pipe'],
      ['Circuit', 'A complete loop that electricity can flow around', 'A closed loop of pipes']
    ] } },
    { p: 'Inside a computer, a <b>high voltage</b> on a wire means <b>1</b> (on) and a <b>low voltage</b>, close to zero, means <b>0</b> (off). That is how electricity becomes bits.' },
    { h: 'Conductors, insulators and semiconductors' },
    { ul: [
      '<b>Conductors</b> let electricity flow easily: copper, aluminium, gold.',
      '<b>Insulators</b> block it: plastic, rubber, glass. That\'s why wires have plastic coats.',
      '<b>Semiconductors</b> sit in between. With a tiny change they can be made to conduct, or to block. <b>Silicon</b>, made from ordinary sand (silicon dioxide), is the most famous one.'
    ] },
    { h: 'The transistor: a switch flipped by electricity' },
    { p: 'A <b>transistor</b> is a tiny switch with no moving parts. It has three connections. Electricity flows between two of them, and the third one, the <b>gate</b>, decides whether it is allowed to. A small voltage on the gate switches a bigger current on or off.' },
    { p: 'Because electricity flips the switch, one transistor can control another, which controls another, and so on. Join enough of them together in clever patterns and you get a machine that can calculate and decide. (Transistors can also <em>amplify</em>: a tiny signal controls a bigger copy of itself. That\'s how a radio makes a faint signal loud.)' },
    { h: 'From glowing tubes to chips' },
    { ol: [
      '<b>1940s: vacuum tubes.</b> The first electronic computers used glass tubes as switches. They were big, hot and burnt out often. One computer could fill a whole room.',
      '<b>1947: the transistor</b> is invented at Bell Labs in the USA. Small, cool and reliable.',
      '<b>Late 1950s: the integrated circuit (IC)</b>, or chip: many transistors and the wires between them made together on one piece of silicon.',
      '<b>Today:</b> a single chip in a phone or laptop holds billions of transistors.'
    ] },
    { h: 'How a chip is made' },
    { ol: [
      'Sand is purified into extremely pure silicon, which is grown into a large, round crystal called an <b>ingot</b>.',
      'The ingot is sliced into thin, mirror-smooth discs called <b>wafers</b>.',
      'Patterns are printed onto the wafer with light shone through a stencil called a mask. This is <b>photolithography</b>. Chemicals then etch away material or add new material where the light fell.',
      'This is repeated for many layers: first the transistors, then many layers of tiny metal "wires" that connect them.',
      'Every chip on the wafer is <b>tested</b>. Then the wafer is cut into separate chips, called <b>dies</b>.',
      'Each good die is <b>packaged</b>: sealed in a case with pins or pads so it can be connected to a circuit board.'
    ] },
    { p: 'All of this happens in <b>clean rooms</b>, where the air is far cleaner than in a hospital operating theatre, because one speck of dust can ruin a chip. Workers wear full-body suits nicknamed "bunny suits".' },
    { h: 'What does "3 nm" mean?' },
    { p: 'Chip makers name their processes "7 nm", "5 nm", "3 nm" and so on (nm is a <b>nanometre</b>, a billionth of a metre). A smaller number means a newer process with smaller, more tightly packed transistors: more speed and less power. Today these names work more like model names than an exact measurement of any one part.' },
    { tip: '<b>Moore\'s law</b>: in 1965 Gordon Moore noticed that the number of transistors that fit on a chip was doubling regularly. He later said about every two years. It is an observation, not a law of nature, and it has slowed down as parts of transistors shrink towards the size of a few atoms.' }
  ],
  analogy: {
    title: 'Think of it like water pipes and taps',
    text: 'Electricity in a circuit behaves a lot like water in pipes. A transistor is a tap that is opened and closed by the pressure in another pipe, not by a hand.',
    map: [
      ['Water pressure', 'Voltage'],
      ['How much water flows', 'Current'],
      ['A tap that another pipe can open or close', 'A transistor'],
      ['A tap that is fully open or fully closed', '1 or 0'],
      ['A whole city of pipes and taps on one plate', 'A chip (integrated circuit)']
    ]
  },
  diagram: { flow: [
    { t: 'Sand', s: 'silicon dioxide' },
    { t: 'Pure silicon', s: 'grown into an ingot' },
    { t: 'Wafer', s: 'sliced thin and polished' },
    { t: 'Patterns printed with light', s: 'photolithography, layer by layer' },
    { t: 'Cut, packaged, tested', s: 'finished chips' }
  ], note: 'One wafer holds many chips. The bad ones are found by testing and thrown away.' },
  words: [
    ['Voltage', 'The push that makes electricity flow. Measured in volts (V).'],
    ['Current', 'How much electricity is flowing. Measured in amps (A).'],
    ['Circuit', 'A complete loop that electricity can flow around.'],
    ['Semiconductor', 'A material like silicon that can be made to conduct electricity or to block it.'],
    ['Transistor', 'A tiny switch with no moving parts, turned on and off by electricity. Chips are made of billions of them.'],
    ['Integrated circuit (IC)', 'A chip: many transistors and their connections built together on one piece of silicon.'],
    ['Wafer', 'A thin, polished disc of pure silicon on which many chips are made at once.'],
    ['Photolithography', 'Printing tiny patterns onto a wafer using light shone through a mask.'],
    ["Moore's law", 'The observation that the number of transistors on a chip doubled about every two years.']
  ],
  quiz: [
    { q: 'What does a transistor do inside a chip?', a: ['It stores files', 'It works as a tiny switch controlled by electricity', 'It cools the chip down', 'It shows images'], c: 1, why: 'A transistor is a switch with no moving parts. A small voltage on its gate turns a bigger current on or off.' },
    { q: 'Silicon is a...', a: ['Conductor', 'Insulator', 'Semiconductor', 'Magnet'], c: 2, why: 'Silicon is a semiconductor: it can be made to conduct electricity or to block it. That is what makes it perfect for switches.' },
    { q: 'Inside a computer, a high voltage on a wire usually means...', a: ['1 (on)', '0 (off)', 'The chip is broken', 'The fan should turn on'], c: 0, why: 'High voltage means 1, low voltage means 0. That is how electricity carries bits.' },
    { q: 'Why are chips made in clean rooms?', a: ['To keep the workers cool', 'To save electricity', 'To keep the chips quiet', 'Because one speck of dust can ruin a chip'], c: 3, why: 'Chip parts are so tiny that a single speck of dust can block a pattern and ruin the chip.' }
  ]
});

BBB.chapters.push({
  id: 'ce-2', track: 'engineering',
  title: 'Yes, no and not',
  topic: 'Logic gates and truth tables',
  minutes: 6,
  story: [
    ['n', 'You have drawn your machine on paper: a sensor in the soil, a little pump, a pipe to the pot. Uncle Dev taps the drawing with his pen.'],
    ['dev', 'Your machine has to make a decision. When should the pump switch on?'],
    ['you', 'When the soil is dry.'],
    ['dev', 'Always? Even when the water bucket is empty?'],
    ['you', "Oh. Then the pump would run dry and get damaged. So: when the soil is dry AND there's water in the bucket."],
    ['dev', "You just did logic. AND, OR, NOT. A chip makes every decision with tiny circuits called logic gates, and each gate is made of just a few transistors."],
    ['you', 'So a chip is just billions of tiny yes-or-no decisions?'],
    ['dev', "Exactly. Let's meet the gates."]
  ],
  learn: [
    { p: 'A <b>logic gate</b> is a tiny circuit, usually made of a few transistors, that takes one or two inputs (each 0 or 1) and gives one output (0 or 1) by following a simple rule. Every decision a computer makes is built out of gates.' },
    { p: 'Thinking with true and false like this is called <b>Boolean logic</b>, after George Boole, a mathematician who described it in the 1800s, long before computers existed. In Boolean logic, 1 means <em>true</em> or <em>yes</em>, and 0 means <em>false</em> or <em>no</em>.' },
    { h: 'The main gates' },
    { table: { head: ['Gate', 'Output is 1 when...', 'Everyday example'], rows: [
      ['AND', 'both inputs are 1', 'The pump runs only if the soil is dry AND the bucket has water.'],
      ['OR', 'at least one input is 1', 'The doorbell rings if someone presses the front button OR the back button.'],
      ['NOT', 'the input is 0. It has one input and simply flips it.', 'The night lamp switches on when it is NOT bright.'],
      ['NAND', 'anything except both inputs being 1 (NOT AND)', 'An alarm sounds unless both doors are locked.'],
      ['NOR', 'both inputs are 0 (NOT OR)', 'An "empty room" light that is on only when neither motion sensor sees anyone.'],
      ['XOR', 'the two inputs are different (exclusive OR)', 'A staircase light with a switch at the top and the bottom: flipping either one changes the light.'],
      ['XNOR', 'the two inputs are the same', 'A "match" light that turns on when two answers agree.']
    ] } },
    { h: 'Truth tables' },
    { p: 'A <b>truth table</b> lists every possible combination of inputs and the output you get. With two inputs there are only four combinations:' },
    { table: { head: ['Inputs (A and B)', 'AND', 'OR', 'XOR', 'NAND', 'NOR'], rows: [
      ['0 and 0', '0', '0', '0', '1', '1'],
      ['0 and 1', '0', '1', '1', '1', '0'],
      ['1 and 0', '0', '1', '1', '1', '0'],
      ['1 and 1', '1', '1', '0', '0', '0']
    ] } },
    { p: 'NOT has only one input: 0 becomes 1, and 1 becomes 0. XNOR is the opposite of XOR: 1 when both inputs match.' },
    { h: 'Joining gates together' },
    { p: 'Gates can feed into other gates to make bigger decisions. Your pump rule could be: <code>(soil is dry AND bucket has water) AND NOT (it is raining)</code>. The output of one gate becomes an input of the next. Whole processors are built this way, from huge numbers of gates.' },
    { h: 'Gates are made of transistors' },
    { ul: [
      'A NOT gate can be made from just two transistors.',
      'NAND and NOR gates need about four each.',
      '<b>NAND is a "universal" gate</b>: by joining enough NAND gates together you can build every other gate, and from those, a whole computer. NOR is universal too.'
    ] },
    { tip: 'Engineers draw each gate with its own shape in circuit diagrams, a bit like road signs. An AND gate looks like a capital D; an OR gate looks like a curved shield; a NOT gate is a triangle with a small circle on its tip.' }
  ],
  analogy: {
    title: 'Think of it like everyday rules',
    text: 'You use logic gates all day without noticing. Every rule with "and", "or" or "not" in it is one.',
    map: [
      ['You need a permission slip AND the fee to go on the trip', 'AND gate'],
      ['A ticket OR a pass gets you into the hall', 'OR gate'],
      ['Play outside if it is NOT raining', 'NOT gate'],
      ['A staircase light with two switches', 'XOR gate'],
      ['A list of every possible case and its answer', 'Truth table']
    ]
  },
  toy: 'gates',
  words: [
    ['Logic gate', 'A tiny circuit that takes inputs of 0 or 1 and gives one output by following a simple rule.'],
    ['Boolean logic', 'Thinking with only true (1) and false (0), using AND, OR and NOT. Named after George Boole.'],
    ['Truth table', 'A table showing the output of a gate for every possible combination of inputs.'],
    ['AND gate', 'Outputs 1 only when both inputs are 1.'],
    ['OR gate', 'Outputs 1 when at least one input is 1.'],
    ['NOT gate', 'Flips its single input: 0 becomes 1 and 1 becomes 0. Also called an inverter.'],
    ['XOR gate', 'Exclusive OR. Outputs 1 only when the two inputs are different.'],
    ['NAND gate', 'NOT AND. Outputs 0 only when both inputs are 1. Any other gate can be built from NAND gates.']
  ],
  quiz: [
    { q: 'An AND gate outputs 1 when...', a: ['Both inputs are 1', 'At least one input is 1', 'The inputs are different', 'Both inputs are 0'], c: 0, why: 'AND needs both inputs to be 1, just like needing both the permission slip and the fee.' },
    { q: 'Which gate simply flips its input?', a: ['AND', 'XOR', 'NOT', 'OR'], c: 2, why: 'NOT has one input and turns 0 into 1 and 1 into 0.' },
    { q: 'An XOR gate gets the inputs 1 and 1. What does it output?', a: ['1', '0', '2', 'Nothing at all'], c: 1, why: 'XOR outputs 1 only when the inputs are different. Here they are the same, so the output is 0.' },
    { q: 'Why is NAND called a "universal" gate?', a: ['It works in every country', 'It has the most inputs', 'It never outputs 0', 'Every other gate can be built from NAND gates alone'], c: 3, why: 'Join enough NAND gates in the right way and you can make AND, OR, NOT, XOR, and in the end a whole computer.' }
  ]
});

BBB.chapters.push({
  id: 'ce-3', track: 'engineering',
  title: 'Teaching sand to add',
  topic: 'Adding with gates, and memory made from gates',
  minutes: 7,
  story: [
    ['you', 'Okay, gates make decisions. But computers do maths too. How can AND and OR possibly add 7 and 5?'],
    ['dev', "Let's add in binary on paper first. What's 1 plus 1?"],
    ['you', "Two... but there's no 2 in binary. So it's 10?"],
    ['dev', 'Right. Write 0, carry 1. Just like 9 plus 1 in normal numbers: write 0, carry 1. Now look at the two answers. The digit you write is 1 only when the two inputs are different...'],
    ['you', "That's XOR! And the carry is 1 only when both inputs are 1. That's AND!"],
    ['dev', 'You just invented a half adder. Engineers worked it out exactly the same way.'],
    ['n', 'You grin. Then you frown.'],
    ['you', 'But my machine also has to remember things, like when it last watered the plants. Can gates remember?'],
    ['dev', "They can, if you loop them back into each other. Let's see how."]
  ],
  learn: [
    { h: 'Adding in binary' },
    { p: 'Binary addition has only four rules:' },
    { table: { head: ['Sum', 'Answer', 'Written in binary'], rows: [
      ['0 + 0', '0', '<code>0</code>'],
      ['0 + 1', '1', '<code>1</code>'],
      ['1 + 0', '1', '<code>1</code>'],
      ['1 + 1', '2', '<code>10</code>: write 0, carry 1']
    ] } },
    { p: 'Worked example: 3 + 1. In binary that is <code>011 + 001</code>. Right column: 1 + 1 = 0, carry 1. Middle column: 1 + 0 + the carried 1 = 0, carry 1. Left column: 0 + 0 + the carried 1 = 1. The answer is <code>100</code>, which is 4.' },
    { h: 'The half adder and the full adder' },
    { ul: [
      'A <b>half adder</b> adds two bits. It is just two gates: an <b>XOR</b> gives the sum digit, and an <b>AND</b> gives the carry. Try it in the gate toy from the last chapter: inputs 1 and 1 give XOR 0 (sum) and AND 1 (carry).',
      'A <b>full adder</b> adds three bits: the two digits in a column plus the carry coming in from the column on its right. It can be built from two half adders and an OR gate.',
      'Put full adders side by side, each passing its carry to the next, and you can add numbers of any size. Eight in a row add two bytes. Sixty-four in a row add the big numbers a 64-bit CPU works with.'
    ] },
    { p: 'Real CPUs use cleverer designs that work out the carries faster, but the idea is exactly the same.' },
    { h: 'What about subtraction and the rest?' },
    { p: 'Computers mostly don\'t subtract directly. They <b>add a negative number</b> instead: 7 − 5 is worked out as 7 + (−5). Negative numbers are stored with a trick called <b>two\'s complement</b>: to make a number negative, flip every bit and then add 1. That way the same adder circuit can do both jobs. Multiplying is done with adding and shifting, and dividing with subtracting and shifting.' },
    { h: 'Memory made from gates' },
    { ul: [
      'Connect two gates so that each one\'s output feeds back into the other\'s input, and the pair "holds on" to its value even after the input changes. This is a <b>latch</b>. An improved version that only changes on a clock tick is a <b>flip-flop</b>. Each one stores exactly <b>one bit</b>.',
      'A row of flip-flops (8, 32 or 64 of them) is a <b>register</b>: a tiny, super-fast storage slot inside the CPU.',
      'The CPU\'s cache is made from similar fast memory cells, called <b>SRAM</b>.',
      'Main memory (RAM) uses a cheaper, smaller trick called <b>DRAM</b>: each bit is a tiny electric charge stored in a part called a capacitor. The charge leaks away, so it must be refreshed many times every second. That is one reason RAM forgets everything when the power goes off.'
    ] },
    { h: 'The clock keeps everyone in step' },
    { p: 'The <b>clock</b> is a signal that flips between 0 and 1 billions of times a second (the GHz from Part 1). On each tick, the flip-flops take in their new values all at once, so every part of the chip moves forward together, like a rowing team pulling to the beat of a drum.' },
    { table: { head: ['Type of logic', 'How it works', 'Example'], rows: [
      ['Combinational', 'The output depends only on the inputs right now. No memory.', 'An adder'],
      ['Sequential', 'The output also depends on what was stored before. It has memory and follows the clock.', 'A counter, a register']
    ] } }
  ],
  analogy: {
    title: 'Think of it like sums in your notebook',
    text: 'Adding in binary works exactly like the column addition you learnt in school, just with fewer digits.',
    map: [
      ['Writing the digit under a column', 'Sum bit (from the XOR gate)'],
      ['Carrying 1 to the next column', 'Carry bit (from the AND gate)'],
      ['A row of classmates, each adding one column and passing the carry along', 'Full adders chained together'],
      ['Writing a number on your palm so you don\'t forget it', 'A flip-flop storing one bit'],
      ['The teacher clapping so everyone writes at the same moment', 'The clock signal']
    ]
  },
  diagram: { stack: [
    { t: 'Transistors', s: 'tiny switches flipped by electricity' },
    { t: 'Logic gates', s: 'a few transistors each: AND, OR, NOT, XOR' },
    { t: 'Adders and flip-flops', s: 'gates that add bits, and gates that remember them' },
    { t: 'ALU and registers', s: 'the calculator and the fast storage slots of a CPU' },
    { t: 'A whole CPU', s: 'billions of transistors working to the beat of the clock' }
  ], note: 'Each level is built out of the one above it.' },
  words: [
    ['Half adder', 'Two gates (XOR and AND) that add two bits and give a sum bit and a carry bit.'],
    ['Full adder', 'A circuit that adds two bits plus a carry coming in from the column next to it.'],
    ['Carry', 'The extra 1 passed to the next column when a column adds up to more than one digit can hold.'],
    ["Two's complement", 'The usual way computers store negative numbers: flip every bit, then add 1.'],
    ['Flip-flop', 'A small circuit of gates that stores one bit and changes only on a clock tick. A simpler version is called a latch.'],
    ['Register', 'A row of flip-flops inside the CPU that holds one number. The fastest storage in a computer.'],
    ['Clock signal', 'A signal that ticks billions of times a second to keep every part of a chip in step.'],
    ['Sequential logic', 'Logic with memory, whose output depends on what was stored before. Its opposite is combinational logic.']
  ],
  quiz: [
    { q: 'In binary, 1 + 1 = ?', a: ['2', '11', '10', '0'], c: 2, why: 'There is no digit 2 in binary, so you write 0 and carry 1. That makes 10, which means two.' },
    { q: 'A half adder uses which two gates?', a: ['XOR for the sum and AND for the carry', 'OR and NOT', 'Two NOT gates', 'NAND and NOR'], c: 0, why: 'The sum digit is 1 when the inputs differ (XOR). The carry is 1 when both are 1 (AND).' },
    { q: 'What does a flip-flop do?', a: ['Adds two numbers', 'Cools the CPU', 'Converts hex to binary', 'Stores one bit'], c: 3, why: 'Gates looped back into each other hold on to a value. A flip-flop stores exactly one bit.' },
    { q: 'How do most computers work out 7 − 5?', a: ['With a separate subtracting chip', 'They add 7 and a negative 5', 'They ask the user', 'They count backwards on the clock'], c: 1, why: 'Using two\'s complement, the same adder circuit can subtract by adding a negative number.' }
  ]
});

BBB.chapters.push({
  id: 'ce-4', track: 'engineering',
  title: 'A tour inside the CPU',
  topic: 'How a processor is organised',
  minutes: 8,
  story: [
    ['n', 'On Sunday, Uncle Dev opens his laptop on the dining table and shows you a photo of a CPU chip, magnified so much that it looks like a city seen from an aeroplane.'],
    ['dev', 'Remember fetch, decode, execute from Part 1? Today we walk inside the chip and meet the departments that do it.'],
    ['you', 'There are departments inside a chip?'],
    ['dev', "In a way. A manager who reads each instruction. A calculator. Tiny pockets for the numbers being used right now. A small shelf of things it will probably need next. And roads connecting all of them."],
    ['you', "And the little chip for my plant machine has all of this too?"],
    ['dev', 'A smaller, simpler version. But the same plan. Once you know this map, you can understand any processor in the world.']
  ],
  learn: [
    { h: 'The main parts of a CPU' },
    { table: { head: ['Part', 'Its job'], rows: [
      ['Control unit (CU)', 'The manager. It fetches each instruction, decodes it, and tells every other part what to do.'],
      ['ALU (Arithmetic Logic Unit)', 'The calculator. It adds, subtracts, compares and does AND, OR and NOT, using the adders and gates from the last chapters.'],
      ['Registers', 'Tiny storage slots inside the CPU for the numbers being worked on right now. The fastest memory there is.'],
      ['Program counter (PC)', 'A special register that holds the memory address of the next instruction.'],
      ['Instruction register', 'A special register that holds the instruction being carried out right now.'],
      ['Cache', 'Small, very fast memory on the chip that keeps copies of data the CPU is likely to need soon.']
    ] } },
    { h: 'Buses: the roads inside' },
    { p: 'A <b>bus</b> is a set of wires that carries signals between parts of the computer:' },
    { ul: [
      'The <b>data bus</b> carries the actual numbers.',
      'The <b>address bus</b> carries <em>where</em> in memory to read or write.',
      'The <b>control bus</b> carries commands like "read now" and "write now".'
    ] },
    { h: 'The memory hierarchy' },
    { p: 'Fast memory is expensive and small. Big memory is cheap and slow. So computers use layers, and the CPU always looks in the fastest layer first:' },
    { ul: [
      '<b>L1 cache</b>: tiny, inside each core, extremely fast.',
      '<b>L2 cache</b>: bigger and a little slower, usually one per core.',
      '<b>L3 cache</b>: bigger still, usually shared by all the cores.',
      'Then <b>RAM</b>, then the <b>SSD</b> or hard disk.'
    ] },
    { p: 'If the data is already in the cache, that is a <b>cache hit</b> and the CPU carries on at full speed. If not, that is a <b>cache miss</b>, and the CPU has to wait while the data comes from slower memory.' },
    { h: 'Instruction sets: the CPU\'s own language' },
    { p: 'Every CPU understands a fixed list of basic commands called its <b>instruction set architecture (ISA)</b>. A program built for one ISA cannot run directly on another. The two big families:' },
    { table: { head: ['', 'x86-64', 'ARM'], rows: [
      ['Made by', 'Intel and AMD', 'Designed by the company Arm; chips made by Apple, Qualcomm, MediaTek, Samsung and others'],
      ['Style', 'CISC: many complex instructions', 'RISC: fewer, simpler instructions'],
      ['Found in', 'Most Windows desktops and laptops, and many servers', 'Almost all phones and tablets, newer Apple Macs, and more and more laptops and servers'],
      ['Known for', 'Speed, and running decades of older software', 'Using little power, so batteries last longer']
    ] } },
    { p: '<b>CISC</b> means Complex Instruction Set Computer. <b>RISC</b> means Reduced Instruction Set Computer. <b>RISC-V</b> is a newer, open instruction set that anyone can use without paying a licence fee.' },
    { h: '32-bit and 64-bit' },
    { p: 'The "bit" number tells you how big the numbers in the CPU\'s registers are, and so how many memory addresses it can count. A 32-bit CPU can only count about 4 billion addresses, so it can use only about <b>4 GB of RAM</b>. A 64-bit CPU can count vastly more, which is why every modern computer is 64-bit.' },
    { h: 'Doing more at the same time' },
    { ul: [
      '<b>Cores</b>: complete processors on one chip, working side by side.',
      '<b>Threads</b>: one core can often juggle two streams of instructions, using the gaps when one is waiting for memory. The general name is <b>SMT</b> (simultaneous multithreading); Intel calls it Hyper-Threading. An "8-core, 16-thread" CPU has 8 cores, each handling 2 threads.',
      '<b>Pipelining</b>: like an assembly line. While one instruction is being executed, the next one is being decoded and the one after that is being fetched.'
    ] },
    { h: 'Other kinds of processor' },
    { table: { head: ['Chip', 'Best at'], rows: [
      ['CPU', 'A few complicated jobs, one step after another, very quickly'],
      ['GPU', 'Thousands of simple jobs at the same time: graphics, video and training AI'],
      ['NPU (neural processing unit)', 'Running AI features like face unlock or live captions while using very little power'],
      ['SoC (system on a chip)', 'Not one processor but a whole computer on one chip: CPU, GPU, NPU, memory controller and more. Used in phones and many laptops']
    ] } }
  ],
  analogy: {
    title: 'Think of it like a restaurant kitchen',
    text: 'A CPU is organised like a busy kitchen, where everyone has one job and nothing is ever far away.',
    map: [
      ['The head chef who reads each order and hands out jobs', 'Control unit'],
      ['The cook who chops, mixes and measures', 'ALU'],
      ['The ingredients in the cook\'s hands', 'Registers'],
      ['The small shelf right next to the stove', 'Cache'],
      ['The big store room at the back', 'RAM and storage'],
      ['Helpers carrying things between them', 'Buses']
    ]
  },
  diagram: { stack: [
    { t: 'Registers', s: 'inside the CPU: a handful of numbers, fastest of all' },
    { t: 'Cache (L1, L2, L3)', s: 'on the chip: kilobytes to megabytes, very fast' },
    { t: 'RAM', s: 'gigabytes, fast, forgets when the power goes off' },
    { t: 'SSD', s: 'hundreds of gigabytes or more, keeps data' },
    { t: 'Hard disk or cloud', s: 'the biggest and cheapest, and the slowest to reach' }
  ], note: 'Top: fastest and smallest. Bottom: biggest and slowest.' },
  words: [
    ['Control unit', 'The part of the CPU that fetches and decodes instructions and directs everything else.'],
    ['ALU', 'Arithmetic Logic Unit. The part of the CPU that does maths and logic.'],
    ['Program counter', 'A register that holds the address of the next instruction to fetch.'],
    ['Bus', 'A set of wires carrying data, addresses or control signals between parts of a computer.'],
    ['Cache hit / cache miss', 'A hit means the data was already in the fast cache. A miss means the CPU had to wait for slower memory.'],
    ['Instruction set (ISA)', 'The fixed list of basic commands a family of CPUs understands, such as x86-64 or ARM.'],
    ['RISC / CISC', 'Two styles of instruction set: Reduced (fewer, simpler instructions) and Complex (more, bigger instructions).'],
    ['Thread', 'One stream of instructions. A core that supports SMT can run two at once.'],
    ['SoC', 'System on a Chip: CPU, GPU and other parts of a computer combined on one chip.']
  ],
  quiz: [
    { q: 'Which part of the CPU does the maths and logic?', a: ['Control unit', 'Program counter', 'ALU', 'Address bus'], c: 2, why: 'The ALU (Arithmetic Logic Unit) is the calculator of the CPU.' },
    { q: 'The CPU finds the data it needs already waiting in the cache. This is called...', a: ['A cache hit', 'A cache miss', 'A bus error', 'A pipeline'], c: 0, why: 'A cache hit means no waiting for slower memory, so the CPU keeps running at full speed.' },
    { q: 'Why can a 32-bit computer use only about 4 GB of RAM?', a: ['Its fans are too small', 'It can only count about 4 billion memory addresses', '32-bit RAM sticks only come in 4 GB', 'Windows blocks the rest'], c: 1, why: '32 bits can make about 4.3 billion different addresses, one per byte, which is about 4 GB.' },
    { q: 'Most phones use processors based on...', a: ['x86-64', 'Vacuum tubes', 'CISC only', 'ARM'], c: 3, why: 'ARM chips use little power, which is perfect for battery-powered phones and tablets.' }
  ]
});

BBB.chapters.push({
  id: 'ce-5', track: 'engineering',
  title: 'From words to switches',
  topic: 'How code becomes something a machine can do',
  minutes: 7,
  story: [
    ['n', 'The parts have arrived: a small blue circuit board, a soil sensor, a tiny water pump and a bag of coloured wires. You line them up on your desk like a surgeon.'],
    ['you', "The machine is ready. But how do I tell it what to do? I can't write in ones and zeros!"],
    ['dev', 'Nobody does that any more. You write in a programming language: words and symbols that people can read. Then another program translates it into the chip\'s own language.'],
    ['you', 'Like a translation app, but for chips?'],
    ['dev', "Something like that. Except it has to be perfect. One wrong letter and it refuses to work."],
    ['n', 'That evening you type your first program: twelve short lines. You press Upload. A red error message appears. You have typed <code>dely</code> instead of <code>delay</code>.'],
    ['you', 'My first bug!'],
    ['dev', 'Welcome to programming. Every programmer in the world has met thousands of them.']
  ],
  learn: [
    { h: 'Programs and algorithms' },
    { p: 'A <b>program</b> is a list of instructions for a computer. The plan behind it, a step-by-step method for solving a problem, is called an <b>algorithm</b>. A recipe is an algorithm for cooking.' },
    { p: 'Your algorithm: read the soil sensor. If the soil is dry, run the pump for 3 seconds. Wait a while. Repeat forever.' },
    { h: 'Programming languages' },
    { p: 'People write programs in <b>programming languages</b>. The text they type is called <b>source code</b>. There are hundreds of languages, each good at different things:' },
    { table: { head: ['Language', 'Often used for'], rows: [
      ['Python', 'Beginners, data, AI and automating boring jobs'],
      ['C and C++', 'Operating systems, games, and small chips like yours (Arduino code is based on C++)'],
      ['Java', 'Large business systems and many Android apps'],
      ['JavaScript', 'Websites, including this one'],
      ['Assembly', 'Talking almost directly to the CPU, one simple instruction per line']
    ] } },
    { h: 'Translating for the CPU' },
    { p: 'The CPU only understands <b>machine code</b>: numbers that stand for the instructions in its instruction set. Source code has to be translated, in one of two main ways:' },
    { table: { head: ['', 'Compiler', 'Interpreter'], rows: [
      ['How it works', 'Translates the whole program into machine code before it runs', 'Reads and runs the program a little at a time'],
      ['Like...', 'Translating a whole book, then printing it', 'A live interpreter translating a speech sentence by sentence'],
      ['Speed', 'The finished program usually runs faster', 'Usually slower, but quick to try out changes'],
      ['Examples', 'C, C++', 'Python, JavaScript (modern ones also compile parts as they go)']
    ] } },
    { p: '<b>Assembly language</b> sits between people and machine code. Each line is one machine instruction written as a short word, like <code>ADD</code> or <code>MOV</code>, instead of a number. A program called an <b>assembler</b> turns it into machine code.' },
    { h: 'The layers of software' },
    { p: 'Most programs don\'t talk to the hardware on their own. They sit on top of other layers of software, shown in the picture below:' },
    { ul: [
      '<b>Apps</b>: the programs you use.',
      '<b>The operating system kernel</b>: the core of the OS. It shares out the CPU and memory, and stops apps from interfering with each other.',
      '<b>Drivers</b>: translators for each device.',
      '<b>Firmware</b>: software stored on a chip inside the hardware itself, like the BIOS/UEFI, or the code inside an SSD, a printer or a router. A <b>firmware update</b> replaces it with a newer version. Never switch the power off during one.',
      '<b>Hardware</b>: the transistors at the bottom of it all.'
    ] },
    { p: 'Small chips like yours usually have no operating system at all. Your program runs straight on the hardware, and it is the only program there.' },
    { h: 'Bugs and debugging' },
    { ul: [
      'A <b>bug</b> is a mistake in a program.',
      'A <b>syntax error</b> breaks the grammar of the language, like your <code>dely</code>. The translator stops and refuses to continue.',
      'A <b>logic error</b> runs without complaint but does the wrong thing, like watering when the soil is already wet. These are harder to find.',
      '<b>Debugging</b> means finding and fixing bugs: read the error message carefully, test small pieces at a time, print out values to see what is really happening, and change one thing at a time, just like you did as a computer doctor in Part 1.'
    ] },
    { tip: 'The word "bug" is older than computers, but there is a famous 1947 logbook from the Harvard Mark II computer with a real moth taped into it. It had been found stuck in one of the machine\'s relays.' }
  ],
  analogy: {
    title: 'Think of it like a recipe in another language',
    text: 'Imagine a brilliant, very fast cook who understands only one rare language. You write your recipe in English, and a translator turns it into the cook\'s language.',
    map: [
      ['The idea of the recipe', 'Algorithm'],
      ['The recipe written in English', 'Source code'],
      ['The translator', 'Compiler or interpreter'],
      ['The recipe in the cook\'s own language', 'Machine code'],
      ['The cook', 'CPU'],
      ['A spelling mistake the translator can\'t understand', 'Syntax error']
    ]
  },
  diagram: { stack: [
    { t: 'Apps', s: 'games, browsers, your program' },
    { t: 'Operating system kernel', s: 'shares the CPU and memory between apps' },
    { t: 'Drivers', s: 'translators for each device' },
    { t: 'Firmware', s: 'code stored inside the hardware itself' },
    { t: 'Hardware', s: 'CPU, memory and devices: transistors at the bottom' }
  ], note: 'Each layer uses the one below it. Your little chip skips the middle layers: your program runs straight on the hardware.' },
  words: [
    ['Algorithm', 'A step-by-step method for solving a problem, like a recipe.'],
    ['Source code', 'The instructions people write in a programming language.'],
    ['Compiler', 'A program that translates source code into machine code before it runs.'],
    ['Interpreter', 'A program that reads and runs source code a little at a time.'],
    ['Machine code', 'Instructions as numbers that a CPU can carry out directly.'],
    ['Assembly language', 'A way of writing machine instructions as short words like ADD and MOV.'],
    ['Kernel', 'The core of an operating system that controls the CPU, memory and devices.'],
    ['Firmware', 'Software stored on a chip inside a device, like the BIOS or the code inside a router.'],
    ['Bug / debugging', 'A bug is a mistake in a program. Debugging is finding and fixing it.']
  ],
  quiz: [
    { q: 'A step-by-step plan for solving a problem is called...', a: ['A driver', 'An algorithm', 'A compiler', 'A bus'], c: 1, why: 'An algorithm is the plan. The program is that plan written in a programming language.' },
    { q: 'What does a compiler do?', a: ['Cools the CPU', 'Finds Wi-Fi networks', 'Translates source code into machine code before the program runs', 'Stores files'], c: 2, why: 'A compiler translates the whole program in advance, so the CPU can run it directly.' },
    { q: 'You typed "dely" instead of "delay". What kind of mistake is that?', a: ['A syntax error', 'A logic error', 'A hardware fault', 'A cache miss'], c: 0, why: 'It breaks the grammar of the language, so the translator stops. That is a syntax error.' },
    { q: 'Code stored on a chip inside a device, like the BIOS, is called...', a: ['An app', 'Source code', 'Assembly', 'Firmware'], c: 3, why: 'Firmware lives inside the hardware itself and is the first software to run.' }
  ]
});

BBB.chapters.push({
  id: 'ce-6', track: 'engineering',
  title: 'Counting in sixteens',
  topic: 'Hexadecimal and other number systems',
  minutes: 6,
  story: [
    ['n', 'Your program works. Now you want a coloured light on the machine: green when the soil is fine, blue while it is watering. In the example code, colours are written as strange codes like <code>#00FF00</code>.'],
    ['you', 'Uncle Dev, what is this? Numbers with letters in them?'],
    ['dev', "That's hexadecimal: counting in sixteens. You've already met it in MAC addresses and IPv6 addresses."],
    ['you', 'Why would anyone count in sixteens? We have ten fingers!'],
    ['dev', "Computers don't have fingers. They have bits. Binary is far too long for people to read, and ten doesn't fit neatly with bits. Sixteen fits perfectly: one hex digit is exactly four bits."],
    ['you', 'So hex is just a short way of writing binary?'],
    ['dev', "That's all it is. A shorthand that people and computers can both live with."]
  ],
  learn: [
    { h: 'Three ways to write the same number' },
    { table: { head: ['System', 'Base', 'Digits it uses', 'Thirty written in it'], rows: [
      ['Decimal', '10', '0 to 9', '<code>30</code>'],
      ['Binary', '2', '0 and 1', '<code>11110</code>'],
      ['Hexadecimal (hex)', '16', '0 to 9, then A to F', '<code>1E</code>']
    ] } },
    { p: 'In hex, after 9 come six letters: <b>A = 10, B = 11, C = 12, D = 13, E = 14, F = 15</b>. Then sixteen is written <code>10</code>, just as ten is written <code>10</code> in decimal.' },
    { h: 'Why hex fits computers so well' },
    { ul: [
      'One hex digit can show 16 different values. So can <b>4 bits</b>. A group of 4 bits is sometimes called a <b>nibble</b> (half a byte).',
      'So one byte (8 bits) is always exactly <b>two hex digits</b>, from <code>00</code> to <code>FF</code> (0 to 255).',
      'Example: binary <code>1010 1111</code>. Split it into fours: <code>1010</code> is A and <code>1111</code> is F. So in hex it is <code>AF</code>, which is 175.'
    ] },
    { h: 'Converting, step by step' },
    { ol: [
      '<b>Hex to decimal</b> (two digits): multiply the left digit by 16, then add the right digit. <code>2B</code> = 2 × 16 + 11 = <b>43</b>.',
      '<b>Decimal to hex</b>: divide by 16. The answer gives the left digit and the remainder gives the right digit. 200 ÷ 16 = 12, remainder 8. 12 is C, so 200 = <code>C8</code>.',
      '<b>Hex to binary</b>: swap each hex digit for its 4 bits. <code>C8</code> → <code>1100 1000</code>.',
      '<b>Binary to hex</b>: split into groups of 4 from the right, and swap each group for one hex digit.'
    ] },
    { h: 'How to tell that a number is hex' },
    { p: 'Because <code>10</code> could mean ten, two or sixteen, hex is usually marked: <code>0x</code> in front in programming (<code>0xFF</code>), <code>#</code> in front in colour codes (<code>#FF8800</code>), or sometimes a small <code>h</code> after it (<code>FFh</code>).' },
    { h: 'Where you will see hex' },
    { table: { head: ['Place', 'Example'], rows: [
      ['MAC addresses', '<code>3C:52:82:1A:9F:07</code>: six bytes, each written as two hex digits'],
      ['IPv6 addresses', '<code>2001:db8::1</code>'],
      ['Colour codes on websites', '<code>#FF8800</code> = red FF, green 88, blue 00, which makes orange'],
      ['Memory addresses', '<code>0x7FFE1A20</code>'],
      ['Error codes', 'Windows error screens show codes like <code>0x0000007E</code>']
    ] } },
    { h: 'Octal: counting in eights' },
    { p: '<b>Octal</b> (base 8) uses the digits 0 to 7, and each octal digit is exactly 3 bits. You will mostly meet it in Linux file permissions: <code>755</code> means the owner can read, write and run a file (7 = 4 + 2 + 1), while everyone else can read and run it (5 = 4 + 1).' },
    { tip: 'Screens make every colour from red, green and blue light, each from 0 to 255 (<code>00</code> to <code>FF</code>). That gives 256 × 256 × 256 = over 16 million possible colours. Try mixing some below.' }
  ],
  analogy: {
    title: 'Think of it like beads in packs',
    text: 'Long rows of 0s and 1s are hard for people to read and copy. Hex groups them into neat packs of four, so they become short and easy.',
    map: [
      ['Counting single beads one by one', 'Binary'],
      ['Putting beads in packs of four and counting the packs', 'Hexadecimal: one digit = 4 bits'],
      ['Two packs make one set', 'Two hex digits = one byte'],
      ['Writing ₹ before a price so people know it is money', 'Writing 0x or # before a hex number'],
      ['A short nickname for a long name', 'Hex as shorthand for binary']
    ]
  },
  diagram: { flow: [
    { t: 'Binary', s: '1010 1111' },
    { t: 'Split into fours', s: '1010 | 1111' },
    { t: 'Swap each four', s: 'A | F' },
    { t: 'Hex', s: 'AF, which is 175' }
  ] },
  toy: 'hex',
  words: [
    ['Decimal', 'The everyday base-10 number system, with the digits 0 to 9.'],
    ['Hexadecimal', 'The base-16 number system, with the digits 0 to 9 and A to F. Often called hex.'],
    ['Base', 'How many different digits a number system uses before it moves to the next column.'],
    ['Nibble', 'A group of 4 bits: half a byte, and exactly one hex digit.'],
    ['0x prefix', 'The mark put in front of a number to show it is written in hex, like 0xFF.'],
    ['Colour code (#RRGGBB)', 'A hex code for a colour: two digits each for red, green and blue.'],
    ['Octal', 'The base-8 number system, with the digits 0 to 7. Used in Linux file permissions.']
  ],
  quiz: [
    { q: 'In hexadecimal, what value does the letter F stand for?', a: ['16', '15', '10', '6'], c: 1, why: 'A = 10, B = 11, C = 12, D = 13, E = 14 and F = 15.' },
    { q: 'How many hex digits does it take to write one byte?', a: ['1', '4', '8', '2'], c: 3, why: 'One hex digit is 4 bits, so 8 bits need two hex digits, from 00 to FF.' },
    { q: 'What is hex <code>10</code> in decimal?', a: ['16', '10', '2', '8'], c: 0, why: 'In hex the second column is worth 16, so 10 means one sixteen and no ones.' },
    { q: 'What colour is <code>#FF0000</code>?', a: ['Pure green', 'Black', 'Pure red', 'White'], c: 2, why: 'Red is FF (full), green is 00 and blue is 00. Only red light is on.' }
  ]
});

BBB.chapters.push({
  id: 'ce-7', track: 'engineering',
  title: 'A tiny computer that waters plants',
  topic: 'Embedded systems, microcontrollers and the Internet of Things',
  minutes: 8,
  story: [
    ['n', "The night before the science fair, the machine sits on Grandpa's balcony: a little blue board in a plastic box, a soil sensor pushed into the tulsi pot, a tiny pump in a bucket of water, and a small coloured light."],
    ['you', "Uncle Dev, is this board really a computer? It's smaller than my palm."],
    ['dev', "It has a processor, memory, inputs and outputs, and it runs your program. So yes, it's a computer. Just a very focused one. It's called a microcontroller."],
    ['you', "Last week the pump wouldn't start when I wired it straight to the board."],
    ['dev', "Lucky for the board. Its pins can only give out a tiny current, and a pump needs far more. That's why we added the relay: the board flicks a small switch, and the relay switches the big current. The same idea as a transistor."],
    ['n', 'At the science fair a crowd gathers. You pull the sensor out of the wet soil and push it into a cup of dry sand. The light turns blue, the pump hums, and water trickles out of the pipe. People clap.'],
    ['grandpa', 'Now my plants have a better memory than I do!'],
    ['n', 'You win second prize. Better still, by the end of the month the tulsi plant is green again.']
  ],
  learn: [
    { h: 'Embedded systems' },
    { p: 'An <b>embedded system</b> is a small computer built inside another machine to do one job. You usually can\'t see it, but it is there in washing machines, microwave ovens, cars, traffic lights, lifts, TV remotes, smartwatches and even some electric toothbrushes.' },
    { h: 'Three kinds of small brain' },
    { table: { head: ['', 'Microprocessor', 'Microcontroller', 'Single-board computer'], rows: [
      ['What it is', 'Just the CPU. Memory and everything else are separate chips', 'CPU, memory and input/output pins all on one chip', 'A whole small computer on one board'],
      ['Example', 'The CPU in a laptop', 'The chip on an Arduino Uno; the ESP32', 'Raspberry Pi'],
      ['Runs', 'A full operating system', 'Usually one program, with no operating system', 'A full operating system, such as Linux'],
      ['Power use', 'High', 'Very low', 'Medium'],
      ['Good for', 'Laptops, desktops, servers', 'Simple, reliable control jobs, like watering plants', 'Projects that need a screen, a camera or internet services']
    ] } },
    { h: 'Sensors and actuators' },
    { ul: [
      '<b>Sensors</b> are the senses. They measure the world: soil moisture, temperature, humidity, light, motion, distance, sound, gas.',
      '<b>Actuators</b> are the muscles. They make something happen: motors, pumps, relays, LEDs, buzzers, small screens, and servo motors that turn to an exact angle.'
    ] },
    { p: 'The microcontroller sits in the middle: it reads the sensors, decides what to do, then drives the actuators. Over and over, many times a second.' },
    { h: 'Pins and signals' },
    { ul: [
      '<b>GPIO pins</b> (General Purpose Input/Output) are the metal pins on the board. The program decides whether each pin reads a signal or sends one out.',
      'A <b>digital</b> signal is just on or off, like a button that is pressed or not pressed.',
      'An <b>analog</b> signal can be any level in between, like how wet the soil is or how bright the room is.',
      'An <b>ADC</b> (analog-to-digital converter) turns an analog level into a number the program can use. On an Arduino Uno that number goes from 0 to 1023.',
      '<b>PWM</b> (pulse-width modulation) is a trick going the other way: by switching a pin on and off very fast, the board can fake "half power" to dim an LED or slow down a motor.'
    ] },
    { h: 'Building safely' },
    { ul: [
      'A <b>breadboard</b> lets you push wires and parts into little holes to test a circuit without soldering.',
      'A pin can only supply a small current. <b>Never run a motor or pump straight from a pin.</b> Use a relay module or a transistor driver, and give the motor its own power supply.',
      'A <b>relay</b> is a switch flipped by a small electric signal, so a small current can safely control a much bigger one.'
    ] },
    { warn: 'Water and electricity don\'t mix. Keep the board and battery in a box, away from the water, and use only low-voltage battery or USB power for projects like this. Never connect anything to mains electricity (230 V) yourself: that needs a trained electrician.' },
    { h: 'The Internet of Things (IoT)' },
    { p: 'Give an embedded system Wi-Fi and it becomes part of the <b>Internet of Things</b>: smart plugs, video doorbells, fitness bands, smart electricity meters. Boards like the <b>ESP32</b> have Wi-Fi built in, so your machine could one day send Grandpa\'s phone a message when the water bucket is empty.' },
    { tip: 'Every IoT gadget is a real computer on your network. Change its default password and keep its firmware updated, just like your router.' }
  ],
  analogy: {
    title: 'Think of it like a gardener',
    text: 'Your machine does exactly what a careful gardener does, just without ever forgetting.',
    map: [
      ['The gardener\'s fingers feeling the soil', 'Soil moisture sensor'],
      ['The gardener\'s brain deciding "too dry"', 'Microcontroller running the program'],
      ['The gardener\'s hands tipping the watering can', 'Pump (an actuator)'],
      ['Asking a strong friend to lift the heavy bucket', 'A relay switching the big current'],
      ['Phoning someone to say the bucket is empty', 'IoT: a message sent over Wi-Fi']
    ]
  },
  diagram: { flow: [
    { t: 'Read soil sensor', s: 'the ADC gives a number' },
    { t: 'Too dry?', s: 'compare with a set limit' },
    { t: 'Pump on', s: 'for 3 seconds, only if dry' },
    { t: 'Wait', s: 'let the water soak in' }
  ], loop: true, note: "If the soil isn't dry, the machine skips the pump and just waits. Then it starts again, forever." },
  words: [
    ['Embedded system', 'A small computer built inside another machine to do one particular job.'],
    ['Microcontroller', 'A single chip with a CPU, memory and input/output pins. Made for control jobs.'],
    ['Single-board computer', 'A whole small computer on one board that runs a full operating system, like a Raspberry Pi.'],
    ['Sensor', 'A part that measures something in the world, like temperature or soil moisture.'],
    ['Actuator', 'A part that makes something happen, like a motor, pump, LED or buzzer.'],
    ['GPIO pin', 'General Purpose Input/Output: a pin the program can use to read a signal or send one.'],
    ['ADC', 'Analog-to-digital converter. Turns a smooth level, like soil wetness, into a number.'],
    ['PWM', 'Pulse-width modulation. Switching a pin on and off very fast to fake a lower power level.'],
    ['Internet of Things (IoT)', 'Everyday objects with small computers inside that connect to the internet.']
  ],
  quiz: [
    { q: 'What is an embedded system?', a: ['A computer built inside another machine to do one job', 'A very large server', 'A kind of network cable', 'A video game'], c: 0, why: 'Embedded systems hide inside machines like washing machines, cars and your plant waterer.' },
    { q: 'Which of these is an actuator?', a: ['A temperature sensor', 'A pump', 'A soil moisture sensor', 'A light sensor'], c: 1, why: 'Actuators make something happen. A pump moves water. The others only measure.' },
    { q: 'What does an ADC do?', a: ['Adds two digital numbers', 'Dims an LED', 'Turns an analog level, like soil wetness, into a number', 'Connects the board to the internet'], c: 2, why: 'An analog-to-digital converter turns a smooth level into a number the program can compare.' },
    { q: 'Why did you need a relay for the pump?', a: ['To make the pump quieter', 'To connect to Wi-Fi', 'To store the program', "The board's pins can't supply enough current for a pump"], c: 3, why: 'The pin only gives a tiny current. The relay lets that small signal switch the bigger current the pump needs.' }
  ]
});

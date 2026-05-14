export const sideProjects = [
  {
    slug: 'scorekeeper',
    link: 'https://scorekeeper.ryanparag.com/',
    title: 'ScoreKeeper',
    description: 'Track scores across your card games',
    longDescription: 'I built ScoreKeeper to solve a very specific problem: tracking scores during high-stakes lunch-break card games with my coworkers. Tired of hunting for scraps of paper and doing mental math, I designed this "stupidly-simple" web app to handle the heavy lifting. It allows players to set up custom games, manage rounds, and track leaderboards in real-time with a clean, mobile-first interface.',
    logo: 'scorekeeper-logo.svg',
    color: '#00d1b2',
    images: [
      { src: '/projects/scorekeeper/1.png', caption: 'Homepage, where you can find recent games and their status' },
      { src: '/projects/scorekeeper/2.png', caption: 'Game summary page for a completed game' },
      { src: '/projects/scorekeeper/3.png', caption: 'Score interface for entering scores by round and player' },
      { src: '/projects/scorekeeper/4.png', caption: 'Leaderboard view for tracking performance per player, per type of game, # of rounds, etc.' },
      { src: '/projects/scorekeeper/5.png', caption: 'Chart breakdown for players in a league' },
      { src: '/projects/scorekeeper/6.png', caption: 'Profile settings and customization options' }
    ]
  },
  {
    slug: 'timezones',
    link: 'https://timezones.ryanparag.com/',
    title: 'Timezones',
    description: `View and manage timezones across the world`,
    longDescription: 'Working in distributed teams often leads to the "math tax"—constantly calculating what 10:00 AM EST looks like for a colleague in London or Poland. I built Timezones to move beyond basic world clocks, creating a highly visual interface that makes scheduling across borders intuitive. It’s a utility-first tool designed to ensure no one gets invited to a meeting at 3:00 AM their time.',
    logo: 'timezones-logo.svg',
    color: '#5D0FDD',
    images: [
      { src: '/projects/preview-timezones.png', caption: 'Homepage where you can add, manage, and share a world clock of timezones' },
      { src: '/projects/timezones/1.png', caption: 'Dark mode and dense view' },
      { src: '/projects/timezones/2.png', caption: 'Searchable list of cities' }
    ]
  },
  {
    slug: 'cutting-board-designer',
    link: 'https://cutting-board-designer.ryanparag.com/',
    title: 'Cutting Board Designer',
    description: 'Design custom cutting boards with precision',
    longDescription: 'As a hobbyist woodworker, I found it difficult to visualize how different wood species and grain patterns would look together before making the first cut. This project is a specialized CAD-lite tool for the browser. It allows makers to toggle between edge-grain and end-grain views and experiment with dimensions and species (like Walnut, Maple, and Cherry) to generate a precise visual blueprint before heading to the shop.',
    logo: 'cbd-logo.svg',
    color: '#FF8A00',
    images: [
      { src: '/projects/cbd/1.png', caption: 'Design for the desired dimensions, wood species, and type of cutting board' },
      { src: '/projects/cbd/2.png', caption: 'Walk through which cuts are needed for what was designed' }
    ]
  },
  {
    slug: 'vanilla-extract-calculator',
    link: 'https://vanilla.ryanparag.com/',
    title: 'Vanilla Extract Calculator',
    description: 'Precisely make vanilla extract',
    longDescription: 'I wanted to stop buying vanilla extract and begin calculating how much of each ingredient I would need to make better quality (and cheaper) vanilla extract for my own use. Depending on which formula I wanted to use, I could easily deduce how much vanilla bean and alcohol I would need to make the desired amount of extract to fit into a container. This project is a simple calculator that allows users to toggle between different formulas and adjust the desired output to get precise measurements for their homemade vanilla extract.',
    logo: 'vanilla.svg',
    color: '#EAC234',
    images: [
      { src: '/projects/vanilla/1.png', caption: 'Select the type of vanilla extract and walk through the necessary components needed to make it' }
    ]
  },
  {
    slug: 'tampabay-design',
    link: 'https://tampabay.design',
    title: 'TampaBay.design',
    description: 'How to get involved in one of the many local design communities',
    longDescription: `When I first entered the design industry in Tampa, I realized there wasn't a centralized hub to find local meetups, agencies, or community events. I launched TampaBay.design to act as a digital compass for the local creative community. By aggregating resources and highlighting local talent, the site serves as a jumping-off point for designers looking to get involved and grow the design culture in the Tampa Bay area.`,
    logo: 'tampa-bay-designers-logo.svg',
    color: '#E684AF',
    images: [
      { src: '/projects/tbd/1.png', caption: 'Homepage for Tampa Bay Designers' },
      { src: '/projects/tbd/2.png', caption: 'Events listing' },
      { src: '/projects/tbd/3.png', caption: 'Event page' },
      { src: '/projects/tbd/4.png', caption: 'Newlsetter and calendar sign up' },
      { src: '/projects/tbd/5.png', caption: 'Internal site for quickly generating event images for Meetup, Social Media, and OpenGraph' },
    ]
  },
  {
    slug: 'donut-drums',
    link: 'https://donuts.ryanparag.com/',
    title: 'Donut Drums',
    description: 'A simple, tappable drum kit - an homage to the great J Dilla',
    longDescription: 'This project is a playful intersection of my love for beat-making and interactive web design. Inspired by the legendary producer J Dilla, Donut Drums is a browser-based, tappable drum kit. The goal was to create a low-latency, tactile experience where users could trigger soulful samples and loops, proving that the web can be a highly expressive medium for music and sound design.',
    logo: 'donuts-logo.svg',
    color: '#FF8A00',
    images: [
      { src: '/projects/donut-drums/1.png', caption: 'Click or use keyboard shortcuts to play with a simple drum machine' }
    ]
  },
  {
    slug: 'slack-themes',
    link: 'https://slack-themes.vercel.app',
    title: 'Slack Themes',
    description: 'Having trouble keeping track of all of your Slack workspaces?',
    longDescription: 'For anyone juggling five or more Slack workspaces, the "wrong window" mistake is a constant risk. I created this gallery to help users quickly distinguish between their clients, side projects, and primary jobs. It’s a curated collection of copy-pasteable sidebar themes that range from professional to vibrant, designed to help users organize their digital workspace with better visual hierarchy.',
    logo: 'slack-themes-logo.svg',
    color: '#5D0FDD',
    images: [
      { src: '/projects/preview-slackthemes.png', caption: 'V2 in progress' }
    ]
  },
  {
    slug: 'race-times',
    link: 'https://race-times.vercel.app/',
    title: 'Race Times',
    description: 'A directory of translated race times schedules and leaderboards',
    longDescription: `Formula 1 is a global sport, but keeping track of practice, qualifying, and race start times across shifting timezones is a recurring headache for fans. I built Race Times to act as a dedicated, spoiler-free dashboard. It automatically translates the full race weekend schedule into the user's local time, ensuring you never miss a lights-out moment, regardless of where the Grand Prix is hosted.`,
    logo: 'race-times-logo.svg',
    color: '#E684AF',
    images: [
      { src: '/projects/preview-racetimes.png', caption: 'V2 in progress' }
    ]
  },
  {
    slug: 'portfolio-timeline',
    link: 'https://timeline.ryanparag.com/',
    title: 'Portfolio Timeline',
    description: 'A timeline viewer for past versions of my portfolio',
    longDescription: `As designers, we often hide our old work, but I believe there is immense value in seeing the evolution of a craft. Portfolio Timeline is a "meta" project that archives and displays past versions of my personal site. It serves as a visual record of my growth in UI trends, front-end technology, and personal branding—turning my own archive into a case study on continuous improvement.`,
    logo: 'timeline-logo.svg',
    color: '#00d1b2',
    images: [
      { src: '/projects/timeline/1.png', caption: 'Timeline widget for all of the different versions of my portfolio' }
    ]
  },
  {
    slug: 'buy-fresh-florida',
    link: 'https://buy-fresh-florida.ryanparag.com/',
    title: 'Buy Fresh Florida',
    description: 'Find what produce is in season in Florida',
    longDescription: `This project turns a clunky, static PDF of Florida’s agricultural data into a clean, searchable web app that's actually easy to use on the go. I focused on stripping away the noise to create a high-utility experience that helps locals find what's in season in seconds. It’s a simple, mobile-first solution for anyone who wants to shop local without the headache of digging through government charts.`,
    logo: 'buy-fresh-logo.svg',
    color: '#f97316',
    images: [
      { src: '/projects/buy-fresh-florida/1.png', caption: 'Choose a month and see what produce is in season in Florida' },
      { src: '/projects/buy-fresh-florida/2.png', caption: 'Light mode' },
       { src: '/projects/buy-fresh-florida/3.png', caption: 'Dark mode' }
    ]
  }
]

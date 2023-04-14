export const devskills = [
  "JavaScript",
  "CSS/SCSS",
  "HTML5",
  "React",
  "NextJs/Gatsby",
  "HydrogenJS",
  "Angular",
  "GraphQL",
  "Shopify",
  "TailwindCSS",
  "Bootstrap",
  "ExpressJS",
  "Firebase",
  "MongoDB",
  "Framer/GSAP",
  "Adobe Suite/Figma",
];

export const otherSkills = [
  "Graphic Design",
  "Project Management",
  "Public Speaking",
  "Adobe Suite",
  "Sketch/Figma/XD",
  "Print Production",
  "Logo Design",
];

export const items = [
  {
    id: 1,
    year: "2021",
    client: "NeoTreks",
    url: "/images/project-images/plow-ops.jpg",
    slug: "/plowops",
    otherImages: ["/images/project-images/plow-ops-1.jpg"],
    title: "Plow Ops",
    tagline: "innovative snow operations software",
    description:
      "PlowOps is one of the world's first snow plow tracking applications and it is sold to cities around the country. My involvement with the product included making the website, as well as developing the front end for the customer dashboard in which plows can be seen and communicated with in real time. The dashboard's frontend was developed with Angular and Material, while the website was created with GatbsyJS, TailwindCSS, and AWS serverless functions. This project was for NeoTreks Inc, a software company based in Castle Rock, CO.",
    tech: ["Angular 10", "GatsbyJs", "Material UI", "TailwindCSS"],
    category: "professional",
    github: null,
    link: "https://plowops.com/",
  },
  {
    id: 2,
    year: "2022",
    client: "Hartman Ely Investments",
    url: "/images/project-images/hartman-ely.jpg",
    slug: "/hartman-ely-investments",
    otherImages: ["/images/project-images/hartman-ely-1.jpg"],
    title: "Hartman Ely Investments",
    tagline: "sustainable investment company website",
    description:
      "This website was designed and built for a sustainable development company based in Boulder, Colorado to showcase their work and services. The site was built/designed on my own, with NextJS and TailwindCSS.",
    tech: ["NextJS", "TailwindCSS"],
    category: "professional",
    github: "https://github.com/balthazarely/hartmanely.com",
    link: "https://www.hartmanely.com/",
  },
  {
    id: 3,
    year: "2021",
    client: "NeoTreks",
    url: "/images/project-images/accuterra.jpg",
    slug: "/accuterra",
    otherImages: [
      "/images/project-images/accuterra-1.jpg",
      "/images/project-images/accuterra-2.jpg",
    ],
    title: "AccuTerra",
    tagline: "website for AccuTerra map overlay",
    description:
      "This website is for AccuTerra Maps, which is a map overlay that is used by a variety of different apps and websites. Accuterra is geared towards outdoor recreations, and offers extensive national park data to its users. This project was built using Gatsby and incorporates maps from Mapbox, MapLibre, Google Maps, Leaflet, and ArcGIS. This project was for NeoTreks Inc, a software company based in Castle Rock, CO.",
    tech: ["GatsbyJs", "Maps"],
    category: "professional",
    github: null,
    link: "https://accuterra.com/",
  },
  {
    id: 4,
    year: "2022",
    client: "me",
    url: "/images/project-images/songdive.jpg",
    slug: "/songdive",
    otherImages: ["/images/project-images/songdive-1.jpg"],
    title: "Song Dive",
    tagline: "create playlists based on what you love",
    description:
      "Song Dive is a full stack web app I built, using the Spotify API, React, and ExpressJS. The app allows users to login, view their favorite songs, and build playlists based on their listening habits. The app allows users to also create playlists based off of genre, as well as to search Spotify’s music collection. The app adheres to Spoitify’s design standards and was officially granted an extended quota.",
    tech: ["React", "ExpressJS", "Spotify API", "TailwindCSS"],
    category: "personal",
    github: "https://github.com/balthazarely/playlist-last",
    link: "https://song-dive.herokuapp.com/",
  },
  {
    id: 5,
    year: "2023",
    client: "me",
    url: "/images/project-images/moviebin.jpg",
    slug: "/moviemate",
    otherImages: [
      "/images/project-images/moviebin-1.jpg",
      "/images/project-images/moviebin-2.jpg",
    ],
    title: "MovieMate",
    tagline: "create watchlists for your next movie night",
    category: "personal",
    description:
      "The purpose of developing this website was to provide users with a platform to create watch lists of their preferred movies. The majority of the effort was devoted to designing a visually pleasing and user-friendly interface, in addition to becoming proficient in utilizing Google's Firebase Cloud Function to carry out various tasks within the application. \n\n The interface includes the capability to drag and drop lists, which in turn update Firestore, as well as adjustable settings to modify the username and application colors. A significant challenge was encountered while updating nested collections, which was resolved by leveraging Cloud Functions for advanced features. React Query was utilized to retrieve all user and movie data, ensuring data caching and real-time updates.",
    type: "Web App",
    tech: ["NextJS", "Firebase", "React Query", "TailwindCSS"],
    github: "https://github.com/balthazarely/moviebin-2023-ts",
    link: "https://moviebin-2023-ts.vercel.app/login",
  },
  {
    id: 6,
    year: "2023",
    client: "me",
    url: "/images/project-images/portfolio.jpg",
    slug: "/portfolio",
    otherImages: ["/images/project-images/portfolio-1.jpg"],
    title: "Portfolio",
    tagline: "2023 Potfolio",
    category: "personal",
    description:
      "This is the newest iteration of my portfolio, which I usually tinker with once a year. I tried to put most of my time into making a smooth and responsive experience, as well as add a couple fun features. All the animations were done with Framer Motion, with some help with TailwindCSS.",
    type: "Website",
    tech: ["NextJS", "Framer Motion", "DaisyUI", "TailwindCSS"],
    github: "https://github.com/balthazarely/portfolio-2023-next",
    link: null,
  },
  {
    id: 7,
    year: "2022",
    client: "Freebird",
    url: "/images/project-images/freebird.jpg",
    title: "Freebird Shoes",
    slug: "/freebird",
    tagline: "high end women's shoes with Colorado flare.",
    description:
      "Freebird Shoes creates unique handcrafted boots and footwear, and runs a large ecommerce site based in Shopify, My work included writing custom Javascript/jQuery/Liquid to make custom features, integrating Yotpo/Klaviyo plugins, and creating a fully functioning Hydrogen (Shopify's React-based framework) shop, which used the GraphQL to interface with the Storefront API, and TailwindCss for styling.",
    tech: ["Shopify", "HydrogenJS", "jQuery", "GraphQL", "SanityCMS"],
    category: "professional",
    github: null,
    link: "https://www.balthazar-dev.com/freebird-shoes",
  },
  {
    id: 8,
    year: "2021",
    client: "NeoTreks",
    url: "/images/project-images/privett.jpg",
    otherImages: ["/images/project-images/privett-1.jpg"],
    slug: "/privett",
    title: "Privett Hatchery",
    tagline: "chicken hatchery eccommerce site",
    description:
      "Privett Hatchery specializes in selling a wide variety of baby chickens, ducks, and other common birds. We built the frontend for this ecommerce site using Angular 11 and created a custom theme using Bootstrap 4.",
    tech: ["Angular 10", "Bootstrap"],
    category: "professional",
    github: null,
    link: "https://www.privetthatchery.com/home",
  },
  {
    id: 9,
    year: "2020",
    client: "me",
    url: "/images/project-images/identity.jpg",
    otherImages: ["/images/project-images/identity-1.jpg"],
    slug: "/identity-records",
    title: "Identity Records",
    tagline: "record website idea built with Gatsby",
    description:
      "This site was built with Gatsby and Sanity Headless CMS. The project goal was to create a responsive, slick, and fully-functional website using Gatsby and all of it’s templating power. The relationship between artist, releases, and genres were established in Sanity, allowing templates and a blog to be automatically created on build. The animations were done with Framer-Motion and GSAP.",
    tech: ["GatsbyJs", "Styled Components", "SanityCMS"],
    category: "professional",
    github: "https://github.com/balthazarely/identity-records",
    link: "https://determined-perlman-c1aee9.netlify.app/",
  },
  {
    id: 10,
    year: "2020",
    client: "Dish Network",
    url: "/images/project-images/bannerbox.jpg",
    title: "Bannerbox",
    slug: "/bannerbox",
    tagline: "DCO animated banners",
    description:
      "This portfolio site was developed to showcase some of the HTML5 web banners I've developed over the last year. The site was built with React, and the animations were created using GSAP and Framer Motion. The styles were built entirely using Styled Components and did not use any UI Frameworks.",
    tech: ["React", "Firebase", "GSAP", "HTML Canvas", "DCO"],
    category: "professional",
    github: "https://github.com/balthazarely/bannerbox_2020",
    link: "https://bannerbin-552ae.web.app/",
  },
  {
    id: 11,
    year: null,
    client: null,
    url: "/images/project-images/logos.jpg",
    slug: "/logos",
    otherImages: [
      "/images/project-images/logos-1.jpg",
      "/images/project-images/logos-2.jpg",
      "/images/project-images/logos-3.jpg",
      "/images/project-images/logos-4.jpg",
      "/images/project-images/logos-5.jpg",
      "/images/project-images/logos-6.jpg",
      "/images/project-images/logos-7.jpg",
      "/images/project-images/logos-8.jpg",
      "/images/project-images/logos-9.jpg",
      "/images/project-images/logos-10.jpg",
      "/images/project-images/logos-11.jpg",
      "/images/project-images/logos-12.jpg",
      "/images/project-images/logos-13.jpg",
      "/images/project-images/logos-14.jpg",
    ],
    title: "Logos",
    tagline: "various logos from the past",
    description:
      "These are a collection of various logos I have designed over the last few years for various clients.",
    tech: ["Illustrator"],
    category: "design",
    github: null,
    link: null,
  },
  {
    id: 12,
    year: null,
    client: null,
    slug: "/brochures",
    url: "/images/project-images/branding.jpg",
    otherImages: [
      "/images/project-images/brochures.jpg",
      "/images/project-images/brochures-1.jpg",
      "/images/project-images/brochures-2.jpg",
      "/images/project-images/brochures-3.jpg",
      "/images/project-images/brochures-4.jpg",
      "/images/project-images/brochures-5.jpg",
      "/images/project-images/brochures-6.jpg",
      "/images/project-images/brochures-7.jpg",
      "/images/project-images/brochures-8.jpg",
      "/images/project-images/branding-1.jpg",
      "/images/project-images/branding-2.jpg",
      "/images/project-images/branding-3.jpg",
    ],
    title: "Branding",
    tagline: "various brochures from the past",
    description:
      "These are a collection of various brochures I have designed over the last few years for various clients.",
    tech: ["Photoshop", "InDesign", "Illustrator", "Lightroom"],
    category: "design",
    github: null,
    link: null,
  },
  // {
  //   id: 12,
  //   year: null,
  //   client: null,
  //   url: "/images/project-images/branding.jpg",
  //   slug: "/branding",
  //   otherImages: [
  //     "/images/project-images/branding-1.jpg",
  //     "/images/project-images/branding-2.jpg",
  //     "/images/project-images/branding-3.jpg",
  //   ],
  //   title: "Branding",
  //   tagline: "various branding projects from the past",
  //   description: "",
  //   tech: ["Photoshop", "InDesign", "Illustrator", "Lightroom"],
  //   category: "design",
  //   github: null,
  //   link: null,
  // },
];

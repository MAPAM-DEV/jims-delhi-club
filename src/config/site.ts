// Site configuration - Edit this file to update site-wide settings

export const siteConfig = {
  // Business info
  name: "JIM'S DELHI CLUB",
  tagline: "Craft coffee, fresh eats & good vibes",
  description: "Coffee & Deli",
  
  // Location
  address: "72 Albert St, Dundee DD4 6QH",
  hours: "Mon–Sat: 8am–5pm · Sun: 10am–4pm",
  coordinates: {
    lat: 56.4651,
    lng: -2.9640,
  },
  
  // Social & links
  links: {
    instagram: "https://www.instagram.com/jims_delhi_club/",
    tiktok: "https://www.tiktok.com/discover/jims-delhi-dundee",
    googleMaps: "https://www.google.com/maps/search/72+Albert+St,+Dundee+DD4+6QH",
    appleMaps: "https://maps.apple.com/?address=72%20Albert%20St,%20Dundee%20DD4%206QH",
  },
  
  // Press articles
  pressArticles: [
    {
      title: "Article 1: First Look at Jim's Delhi Club",
      url: "https://www.thecourier.co.uk/fp/lifestyle/food-drink/5360542/first-look-at-loom-dundee-cafe/",
    },
    {
      title: "Article 2: Jim's Delhi Club Review", 
      url: "https://www.thecourier.co.uk/fp/lifestyle/food-drink/5396317/review-loom-deli-dundee/",
    },
  ],
  
  // Navigation
  nav: {
    main: [
      { label: "Menu", section: "menu" },
      { label: "Find Us", section: "location" },
    ],
    more: [
      { label: "About Us", section: "atmosphere" },
      { label: "Catering", section: "catering" },
    ],
  },
  
  // Current menu
  currentMenu: {
    month: "January 2026",
  },
} as const;

// Site configuration - Edit this file to update site-wide settings

export const siteConfig = {
  // Business info
  name: "LOOM DELI",
  tagline: "Craft coffee, fresh eats & good vibes",
  description: "Coffee & Deli",
  
  // Location
  address: "Old Mill Complex, Brown St, Dundee DD1 5EF",
  hours: "Mon–Sat: 8am–5pm · Sun: 10am–4pm",
  coordinates: {
    lat: 56.4617134,
    lng: -2.9798164,
  },
  
  // Social & links
  links: {
    instagram: "https://www.instagram.com/jims_delhi_club/",
    googleMaps: "https://www.google.com/maps/place/Loom/@56.4617134,-2.9798164,17z/data=!3m1!4b1!4m6!3m5!1s0x48865d00671fa093:0x386339a903adba5b!8m2!3d56.4617134!4d-2.9798164!16s%2Fg%2F11mrds_yqb!5m1!1e4?entry=ttu",
    appleMaps: "https://maps.apple.com/?address=Dundee,%20Scotland&ll=56.4617134,-2.9798164&q=Loom%20Deli",
  },
  
  // Press articles
  pressArticles: [
    {
      title: "Article 1: First Look at Loom",
      url: "https://www.thecourier.co.uk/fp/lifestyle/food-drink/5360542/first-look-at-loom-dundee-cafe/",
    },
    {
      title: "Article 2: Loom Deli Review", 
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

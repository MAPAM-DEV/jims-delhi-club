// Site configuration - Edit this file to update site-wide settings

export const siteConfig = {
  // Business info
  name: "jim's delhi club",
  tagline: "your local sandwich dealer",
  description: "Coffee & Deli",
  
  // Location
  address: "72 Albert St, Dundee DD4 6QH",
  hours: [
    { day: "Tuesday", time: "Closed" },
    { day: "Wednesday", time: "4–8 pm" },
    { day: "Thursday", time: "4–8 pm" },
    { day: "Friday", time: "12–6 pm" },
    { day: "Saturday", time: "12–4 pm" },
    { day: "Sunday", time: "Closed" },
    { day: "Monday", time: "Closed" },
  ],
  coordinates: {
    lat: 56.46961393836929,
    lng: -2.9576973288148767,
  },
  
  // Social & links
  links: {
    instagram: "https://www.instagram.com/jims_delhi_club/",
    instagramApp: "instagram://user?username=jims_delhi_club",
    tiktok: "https://www.tiktok.com/@jimsdelhi",
    tiktokApp: "tiktok://user?username=jimsdelhi",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=72+Albert+St,+Dundee+DD4+6QH",
    appleMaps: "https://maps.apple.com/?address=72%20Albert%20St,%20Dundee%20DD4%206QH",
  },
  
  // Press & reviews
  pressArticles: [
    { platform: "The Courier", title: "Jim's Delhi Club", url: "https://www.thecourier.co.uk/fp/lifestyle/food-drink/2767908/jims-delhi-club/" },
    { platform: "The Courier", title: "Restaurant Review", url: "https://www.thecourier.co.uk/fp/lifestyle/food-drink/3201908/restaurant-review-jims-delhi-club-is-a-food-gem-in-dundees-city-centre/" },
    { platform: "The Skinny", title: "Jim's Delhi Club", url: "https://www.theskinny.co.uk/whats-on/dundee/restaurants/jims-delhi-club" },
    { platform: "Stobswell Forum", title: "Meet James", url: "https://www.facebook.com/stobswellforum/posts/meet-jamesowner-of-jims-delhi-club-est-january-2020-during-the-pandemic-as-a-mob/3794830243975023/" },
    { platform: "Wanderlog", title: "Jim's Delhi Club", url: "https://wanderlog.com/place/details/9821341/jims-delhi-club" },
  ],
  
  // Navigation
  nav: {
    main: [
      { label: "Menu", section: "menu" },
      { label: "Find Us", section: "location" },
    ],
    more: [
      { label: "About Us", section: "atmosphere" },
    ],
  },
  
  // Current menu
  currentMenu: {
    month: "February 2026",
  },
} as const;

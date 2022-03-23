import { BOARD } from "./customTypes";

export const boards: BOARD[] = [
  {
    id: 0,
    name: "General",
    cats: [
      {
        name: "popular",
        items: [
          {
            name: "media",
            links: [
              "google.com",
              "facebook.com",
              "instagram.com",
              "web.whatsapp.com",
              "twitter.com",
            ],
          },
          {
            name: "Linux Help",
            links: ["linuxilize.com", "ubuntu.com", "linuxmint.com"],
          },
          {
            name: "Windows Help",
            links: ["Microsoft.com", "bing.com"],
          },
        ],
      },
    ],
  },

  {
    id: 1,
    name: "Professional",
    cats: [
      {
        name: "social",
        items: [
          {
            name: "popular",
            links: ["linkedin.com", "dribble.com"],
          },
        ],
      },
    ],
  },
];

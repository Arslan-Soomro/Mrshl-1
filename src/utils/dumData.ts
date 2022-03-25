import { BOARD } from "./customTypes";

export const boards: BOARD[] = [
  {
    id: '0',
    name: "General",
    cats: [
      {
        name: 'main',
        items: [
          { name: 'design',
            links: ['zoom.com', 'dribble.com', 'unsplash.com', 'pexels.com']
          }
        ]
      },
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
    id: '1',
    name: "Professional",
    cats: [
      {
        name : 'main',
        items : [
          {
            name : 'Open Source OS',
            links : [
              'Linux.com',
              'Dippin.com',
              'Zeepin.com'
            ]
          }
        ]
      },
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
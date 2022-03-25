export const createDefaultCatBoard = (boardName: string | undefined) => {
  return {
    name: boardName != undefined ? boardName : 'General',
    cats: [
      {
        name: "main",
        items: [
          {
            name: "Search",
            links: ["https://www.google.com"],
          },
        ],
      },
    ],
  };
};

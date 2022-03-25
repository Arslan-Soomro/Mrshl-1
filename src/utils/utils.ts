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

export const extractDomain = (url : string) => {
  const res = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img)

  if(res != null) return res[0];
  
  return null;
};

export const generateIconLink = (url: string) => {
return url + "/favicon.ico";
};

//Extract and Generate Icon
export const extAndGenIco = (url: string) => {
const domain = extractDomain(url);
if(domain != null) return generateIconLink(domain);

return undefined;
}
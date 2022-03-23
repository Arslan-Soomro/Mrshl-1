import { BOARD } from "./customTypes";
import fbApp from "./firebase";
import { getDatabase, push, ref, remove, update } from "firebase/database";


export const pushBoardData = (data: Partial<BOARD>) => {
  const db = getDatabase(fbApp);

  push(ref(db, "boards/"), {
    name: data.name,
    cats: data.cats,
  });
};


export const deleteBoardData = (boardId: string) => {
  if (boardId && boardId.length > 0) {
    const db = getDatabase(fbApp);

    const boardDataRef = ref(db, "boards/" + boardId);
    remove(boardDataRef);
  }
};

export const updateLinksOfBoard = (boardId: string, newUrls: string[]) => {
  const db = getDatabase(fbApp);

  const boardDataRef = ref(db, "boards/" + boardId);

  update(boardDataRef, {
    'urls' : newUrls
  })

}

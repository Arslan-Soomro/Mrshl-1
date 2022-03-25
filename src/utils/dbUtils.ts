import { BOARD, CATEGORY, CAT_ITEM } from "./customTypes";
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

export const pushCat = (newCatName: string, boardId: string, allCatData: CATEGORY[] | undefined) => {
  const db = getDatabase(fbApp);
  const boardDataRef = ref(db, 'boards/' + boardId);
  const defaultCat = {
    name: newCatName.toLowerCase(),
    items: []
  };

  if(allCatData == undefined){
    update(boardDataRef, {
      'cats' : [ defaultCat ],
    });
  }else{
    const draft = allCatData;
    draft.push(defaultCat);
    update(boardDataRef, {
      'cats' : draft,
    });
  }

};

export const pushCatItem = (newItemName: string, curCatName: string, boardId: string, allCatData: CATEGORY[] | undefined ) => {

  const db = getDatabase(fbApp);
  const boardDataRef = ref(db, 'boards/' + boardId);
  const defaultItem = {
    name: newItemName,
    links: ['google.com']
  }
  
  if(allCatData == undefined){//If there are no categories, initialize a category with default Item
    update(boardDataRef, {
      'cats' : [ {name: 'main', items: [defaultItem]} ],
    });
  }else{
    //Temporary Variable to manipulate data without affecting original data //but it does manipulate original data 
    const draft: CATEGORY[] = allCatData;
    const curCatIndex = draft.findIndex((cate) => cate.name == curCatName);
    if(curCatIndex != -1){ //We successfully found the element
      
      if(draft[curCatIndex].items == undefined){//If items propery is undefined
        draft[curCatIndex].items = [];//Initialize the items property with an empty array
      }

      draft[curCatIndex].items?.push(defaultItem);

      //Formated Data To Make Update Proper
      //Now Make The Update

      update(boardDataRef, {
        'cats' : draft
      });

    }
  }
};



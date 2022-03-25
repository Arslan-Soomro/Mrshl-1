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

/*
export const pushCatBoard = (catBoardName: string, currentCatName: string, prevCatData: CATEGORY[], boardId: string) => {

  const db = getDatabase(fbApp);

  const defaultItems = [{
    name: 'Search',
    links: ['https://www.google.com']
  }];

  const catData = prevCatData.find((item) => item.name === currentCatName);


  if(catData != undefined){

    const boardDataRef = ref(db, 'boards/' + boardId);
    update(boardDataRef, {
      'cats' : [
        ...prevCatData,
        {
          name: catBoardName,
          items : defaultItems,
        }
      ]
    });
  
  }
};
*/


export const pushCatItem = (newItemName: string, curCatName: string, boardId: string, allCatData: CATEGORY[] | undefined ) => {

  const db = getDatabase(fbApp);
  const defaultItem = {
    name: newItemName,
    links: ['google.com']
  }
  const boardDataRef = ref(db, 'boards/' + boardId);

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
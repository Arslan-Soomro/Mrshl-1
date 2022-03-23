
export interface CAT_ITEM{
    name : string,
    links : string[],
}

export interface CATEGORY {
    name: string,
    items?: CAT_ITEM[]
};

export interface BOARD {
    id: string,
    name: string,
    cats : CATEGORY[]
};

export interface STORE {
    boards : BOARD[],
    setBoard : (newBoards: BOARD[]) => void; 
}
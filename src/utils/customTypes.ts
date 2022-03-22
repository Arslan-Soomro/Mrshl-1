
interface CATEGORY {
    name: string,
    links : string[]
};

interface BOARD {
    id: number,
    name: string,
    cats : CATEGORY[]
};

export interface STORE {
    boards : BOARD[]
}
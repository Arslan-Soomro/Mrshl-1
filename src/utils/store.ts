import create from "zustand";
import { BOARD, STORE } from "./customTypes";
import { boards } from "./dumData";

export const defaultBoards = boards;

//TODO fix whatever is happening inside

export const useStore = create<STORE>((set, get) => ({
    boards: defaultBoards,
    setBoard: (newBoards) => {
        set((state) => ({
            boards : newBoards
        }))
    }
}));

export default useStore;
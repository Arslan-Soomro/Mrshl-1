import create from "zustand";
import { BOARD, STORE } from "./customTypes";
import { boards } from "./dumData";



const defaultBoards = boards;
//TODO Remove Default Boards

export const useStore = create<STORE>((set, get) => ({
    boards: defaultBoards,
    setBoard: (newBoards) => {
        set((state) => ({
            boards : newBoards
        }))
    }
}));

export default useStore;
import create from "zustand";
import { STORE } from "./customTypes";
import { boards } from "./dumData";

export const defaultBoards = boards;

//TODO fix whatever is happening inside

export const useStore = create<STORE>((set, get) => ({
    boards: defaultBoards
}));

export default useStore;
import create from "zustand";
import { STORE } from "./customTypes";
import { boards } from "./dumData";

export const defaultBoards = boards;

export const useStore = create<STORE>((set, get) => ({
    boards: defaultBoards
}));

export default useStore;
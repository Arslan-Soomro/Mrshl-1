import create from "zustand";
import { STORE } from "./customTypes";
import {sideItems as sidebarItems} from "./dumData";

export const defaultSideItems = sidebarItems;

export const useStore = create<STORE>((set, get) => ({
    sideItems: defaultSideItems,
}));

export default useStore;
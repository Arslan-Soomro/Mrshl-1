import useStore from "../utils/store";
import Csidebar from "./Csidebar";

const SmartSidebar = () => {

    const boards = useStore((state) => state.boards);

    return (
        <Csidebar sidebarItems={boards.map((item) => ({id: item.id, name: item.name}))} />
    );
    
};

export default SmartSidebar;
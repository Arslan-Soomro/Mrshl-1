import { boards } from "../utils/dumData";
import useStore from "../utils/store";
import Cardslist from "./Cardslist";

interface props {
    boardId : number,
}

const SmartCardsList = ({ boardId } : props) => {

    const allBoards = useStore((state) => state.boards);
    const board = allBoards.find((item) => item.id === boardId);

    if(board != undefined){
        return (
            <Cardslist cats={board.cats} />
        )
    }

    return(
        <div>Empty Space</div>
    )
    
}

export default SmartCardsList;

//<Cardslist cats={board.cats} />  
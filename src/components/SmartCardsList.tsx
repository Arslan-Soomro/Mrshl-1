import { boards } from "../utils/dumData";
import useStore from "../utils/store";
import Cardslist from "./Cardslist";

interface props {
    boardId : number,
    catName : string
}

const SmartCardsList = ({ boardId, catName } : props) => {

    const allBoards = useStore((state) => state.boards);
    const board = allBoards.find((item) => item.id === boardId);
    const cat = board?.cats.find((item) => item.name === catName);

    if(cat != undefined){
        return (
            <Cardslist catItems={cat.items} />
        )
    }

    return(
        <div>Empty Space</div>
    )
    
}

export default SmartCardsList;

//<Cardslist cats={board.cats} />  
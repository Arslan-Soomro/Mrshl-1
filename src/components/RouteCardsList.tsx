import SmartCardsList from "./SmartCardsList";
import { useParams } from "react-router-dom";

const RouteCardsList = () => {

    const { boardId, catName } = useParams();

    if(boardId != undefined && catName != undefined){
        return(
            <SmartCardsList boardId={boardId} catName={catName} />
        )
    }else{
        return <p>Incorrect URL</p>
    }

};

export default RouteCardsList;
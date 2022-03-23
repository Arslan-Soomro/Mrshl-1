
import {useParams} from "react-router-dom";

const TestRoute = () => {

    const params = useParams();

    return (
        <>
            <p>BoardId = {params.boardId}</p>
            <p>catName = {params.catName}</p>
        </>
    )
};

export default TestRoute;
import { Box, IconButton, Typography } from "@mui/material";
import { boards } from "../utils/dumData";
import useStore from "../utils/store";
import Cardslist from "./Cardslist";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormDialog from "./FormDialog";

interface props {
    boardId : string,
    catName : string
}

const Styles = {
    emptyBox: {
        display: 'flex',
        width: 1,
        minHeight: 1/2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}

const SmartCardsList = ({ boardId, catName } : props) => {

    const allBoards = useStore((state) => state.boards);
    const board = allBoards.find((item) => item.id === boardId);
    const cat = board?.cats.find((item) => item.name === catName);

    return (
        <Cardslist catItems={cat?.items} />
    )
    
    /*
    return(
        <Box>
            <FormDialog
                opener={
                    <IconButton >
                <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
                }
                title="Category Board"
                label="Category Board Name"
                btnText="Add Board"
                btnAction={(inp) => console.log('Hello World')}
            />
            <Typography>Add Category Board</Typography>
        </Box>
    )*/
    
}

export default SmartCardsList;

//<Cardslist cats={board.cats} />  
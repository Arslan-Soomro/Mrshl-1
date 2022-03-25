import { Box, IconButton } from "@mui/material";
import useStore from "../utils/store";
import Cardslist from "./Cardslist";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormDialog from "./FormDialog";
import { pushCatItem, pushItemLink } from "../utils/dbUtils";

interface props {
  boardId: string;
  catName: string;
}

const Styles = {
  emptyBox: {
    display: "flex",
    width: 1,
    minHeight: 1 / 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};


const SmartCardsList = ({ boardId, catName }: props) => {

  const allBoards = useStore((state) => state.boards);
  const board = allBoards.find((item) => item.id == boardId);
  const cat = board?.cats?.find((item) => item.name == catName);

  //console.log(board);

  const addActionHandler = (name: string | undefined) => {
    
    if(name != undefined && catName != undefined && board != undefined && boardId != undefined){
      
      pushCatItem(name, catName, boardId , board.cats);
    }else{
      console.log(name, catName, board, boardId)
      console.warn("Undefined Parameters @ Add Board Category");
    }


  }

  //console.log(allBoards);

  return (
    <Cardslist
      boardId={boardId}
      catName={catName}
      catItems={cat?.items}
      AddPlaceholder={
        <Box>
          <FormDialog
            opener={
              <IconButton>
                <AddCircleOutlineIcon fontSize="large" />
              </IconButton>
            }
            title="Category Board"
            label="Category Board Name"
            btnText="Add Board"
            btnAction={addActionHandler}
          />
          {/* <Typography>Add Category Board</Typography> */}
        </Box>
      }
    />
  );

};

export default SmartCardsList;

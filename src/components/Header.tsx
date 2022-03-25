import { Box, Divider, Typography, Button, TextField, InputAdornment, IconButton } from "@mui/material";
import Cmenu from "./Cmenu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import useStore from "../utils/store";
import { useParams } from "react-router-dom";
import FormDialog from "./FormDialog";
import { pushCat } from "../utils/dbUtils";

const Header = () => {

    const { boardId, catName } = useParams(); 

    const boards = useStore((state) => state.boards);
    const board = boards.find((item) => item.id === boardId);

    const addCatActionHandler = (inpStr: string | undefined) => {
        if(boardId != undefined && board != undefined && inpStr != undefined){
            pushCat(inpStr, boardId, board.cats);
        }
    }

    return (
        <>
        <Typography variant="h6">{board?.name ? board.name : 'No Board' }</Typography>
        <Divider />

        <Box sx={{p: 2}}>
            
            <Box sx={{display: 'flex', gap: 2}}>
                <FormDialog 
                opener={<Button variant="outlined" size="small">Create Category</Button>}
                title="Category"
                label="Category Name"
                btnText="Add Category"
                btnAction={addCatActionHandler}
                />
                
                <Cmenu
                menuItems={board?.cats ? board.cats.map((item) => item.name) : null}
                AncEl={<Button
                variant="contained"
                disableElevation
                endIcon={<KeyboardArrowDownIcon />}
                size="small"
                >
                    Categories
                </Button>} />
            </Box>

            {/* <TextField size="small" sx={{width: 1, mt: 1}} InputProps={{endAdornment: <InputAdornment position="end"><IconButton><SearchIcon /></IconButton></InputAdornment>}}/> */}
        </Box>
        
        <Divider />
        </>
    )

};

export default Header;
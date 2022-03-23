import { Box, Divider, Typography, Button, TextField, InputAdornment, IconButton } from "@mui/material";
import Cmenu from "./Cmenu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import useStore from "../utils/store";
import { useParams } from "react-router-dom";

const Header = () => {

    const { boardId, catName } = useParams(); 

    const boards = useStore((state) => state.boards);
    const board = boards.find((item) => item.id === boardId);

    return (
        <>
        <Typography variant="h6">{board?.name ? board.name : 'No Board' }</Typography>
        <Divider />

        <Box sx={{p: 2}}>
            
            <Box sx={{display: 'flex', gap: 2}}>
                <Button variant="outlined" size="small">Create Category</Button>
                <Cmenu
                menuItems={board?.cats ? board.cats.map((item) => item.name) : ['main']}
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
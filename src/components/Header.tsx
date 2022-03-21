import { Box, Divider, Typography, Button, TextField, InputAdornment, IconButton } from "@mui/material";
import Cmenu from "./Cmenu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { sideItems } from "../utils/dumData";

const Header = () => {

    return (
        <>
        <Typography variant="h6">General</Typography>
        <Divider />

        <Box sx={{p: 2}}>
            
            <Box sx={{display: 'flex', gap: 2}}>
                <Button variant="outlined" size="small">Create Category</Button>
                <Cmenu
                menuItems={sideItems.map((item) => item.text)}
                AncEl={<Button
                variant="contained"
                disableElevation
                endIcon={<KeyboardArrowDownIcon />}
                size="small"
                >
                    Categories
                </Button>} />
            </Box>

            <TextField size="small" sx={{width: 1, mt: 1}} InputProps={{endAdornment: <InputAdornment position="end"><IconButton><SearchIcon /></IconButton></InputAdornment>}}/>
        </Box>
        
        <Divider />
        </>
    )

};

export default Header;
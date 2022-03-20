import CircleIcon from '@mui/icons-material/Circle';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip, Typography, Card, TextField, InputAdornment, IconButton } from "@mui/material";
import React from "react";
import Cmenu from './Cmenu';
import AddCircle from "@mui/icons-material/AddCircle";
import Ccard from './Ccard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

interface props {
    side: React.ReactNode,
    content: React.ReactNode,
}

//TODO Include list items using props

const styles = {
    drawerWidth : {
        xs: 55  ,
        sm: 200,
    },

    listItemText : {
        display : {
            xs: 'none',
            sm: 'block',
        }
    },

    listItem : {
        width: 1,
        '& .MuiListItemIcon-root' : {
            minWidth: {
                xs: 24,
                sm: 40,
            },
            mx: 'auto'
        },
        pl: {
            xs: 2,
            sm: 5,
        },
        '&. MuiSvgIcon-root' : {
            fontSize: 10
        },
    },

    listItemHeader : {
        width: 1,
        '& .MuiListItemIcon-root' : {
            minWidth: {
                xs: 20,
                sm: 20,
            },
            mx: 0,
            my: 1,
            cursor: 'pointer'
        },
        justifyContent: 'space-between',
        flexDirection : {
            xs: 'column-reverse',
            sm: 'row'
        },
    },
}

const sideItems = [
{
    text: 'General'
},
{
    text: 'Implicit'
},
{
    text: 'Explicit'
},
];

const Layout = ({side, content} : props) => {
    return (
        // Layout Container
        <Box sx={{width: 1, height: 1, display: 'flex'}}>
            {/* Sidebar */}
            <Drawer variant="permanent" sx={{minWidth: styles.drawerWidth}} PaperProps={{sx: {minWidth: styles.drawerWidth, py: 0}}} open={true}>
                <List>
                    <Typography variant="h6" sx={{textAlign: 'center'}}>M<Typography sx={{display : {xs: 'none', sm: 'inline'}}}>RSHL</Typography></Typography>
                    <ListItem sx={styles.listItemHeader} divider>
                        <ListItemIcon><AutoAwesomeMosaicIcon /></ListItemIcon>
                        <ListItemIcon><AddCircleIcon /></ListItemIcon>
                    </ListItem>
                    {sideItems.map((item, ind) => {
                        return (
                        <Tooltip title={item.text} key={ind} placement="right">
                            <ListItem button sx={styles.listItem} divider>
                                <ListItemIcon ><CircleIcon fontSize="small" /></ListItemIcon>
                                <ListItemText sx={styles.listItemText}>{item.text}</ListItemText>
                            </ListItem>
                        </Tooltip>
                        )
                    })}
                </List>
            </Drawer>
            {/* Content */}
            <Box sx={{flexGrow: 1, p: 2}}>
                <Typography variant="h6">General</Typography>
                <Divider />

                <Box sx={{p: 2, }}>
                    
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
                {/* The Cards */}
                <Box sx={{p: 2}}>
                    <Ccard />
                </Box>
            </Box>
        </Box>
    )
}

export default Layout;

//style={{width: '100%', height: '100%', display: 'flex'}}
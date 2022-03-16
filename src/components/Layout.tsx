import CircleIcon from '@mui/icons-material/Circle';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip, Typography } from "@mui/material";
import React from "react";
import AddCircle from "@mui/icons-material/AddCircle";

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

const items = [
{
    text: 'General'
},
{
    text: 'Implicit'
},
{
    text: 'Explicit'
},
]

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
                    {items.map((item, ind) => {
                        return (
                        <Tooltip title={item.text} placement="right">
                            <ListItem button sx={styles.listItem} key={ind} divider>
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
                {content}
            </Box>
        </Box>
    )
}

export default Layout;

//style={{width: '100%', height: '100%', display: 'flex'}}
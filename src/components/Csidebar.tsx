import CircleIcon from '@mui/icons-material/Circle';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip, Typography, IconButton } from "@mui/material";
import FormDialog from './FormDialog';


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
};

interface props {
    sidebarItems: {id: number, name: string}[]
}

const Csidebar = ({sidebarItems} : props) => {

    return(
        <Drawer variant="permanent" sx={{minWidth: styles.drawerWidth}} PaperProps={{sx: {minWidth: styles.drawerWidth, py: 0}}} open={true}>
        
        <List>
            <Typography variant="h6" sx={{textAlign: 'center'}}>M<Typography sx={{display : {xs: 'none', sm: 'inline'}}}>RSHL</Typography></Typography>
            <ListItem sx={styles.listItemHeader} divider>
                <ListItemIcon><AutoAwesomeMosaicIcon /></ListItemIcon>
                <ListItemIcon><FormDialog opener={<IconButton><AddCircleIcon /></IconButton>} title={"Boards"} label={"Board Name"} btnText={"Add Board"} btnAction={() => console.log("Hello World")} /></ListItemIcon>
            </ListItem>
            {sidebarItems.map((item, ind) => {
                return (
                <Tooltip title={item.name} key={ind} placement="right">
                    <ListItem button sx={styles.listItem} divider>
                        <ListItemIcon ><CircleIcon fontSize="small" /></ListItemIcon>
                        <ListItemText sx={styles.listItemText}>{item.name}</ListItemText>
                    </ListItem>
                </Tooltip>
                )
            })}
        </List>
    </Drawer>
    )

};

export default Csidebar;
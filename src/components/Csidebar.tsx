import CircleIcon from "@mui/icons-material/Circle";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import FormDialog from "./FormDialog";
import { Link } from "react-router-dom";
import { pushBoardData } from "../utils/dbUtils";
import { createDefaultCatBoard } from "../utils/utils";

const styles = {
  drawerWidth: {
    xs: 65,
    sm: 200,
  },

  listItemText: {
    display: {
      xs: "none",
      sm: "block",
    },
    color: 'black',
  },

  listItem: {
    width: 1,
    "& .MuiListItemIcon-root": {
      minWidth: {
        xs: 24,
        sm: 40,
      },
      mx: "auto",
    },
    pl: {
      xs: 2,
      sm: 5,
    },
    "&. MuiSvgIcon-root": {
      fontSize: 10,
    },
  },

  listItemHeader: {
    width: 1,
    "& .MuiListItemIcon-root": {
      minWidth: {
        xs: 20,
        sm: 20,
      },
      mx: 0,
      my: 1,
      cursor: "pointer",
    },
    justifyContent: "space-between",
    flexDirection: {
      xs: "column-reverse",
      sm: "row",
    },
  },
};

interface props {
  sidebarItems: { id: string; name: string }[];
}

const Csidebar = ({ sidebarItems }: props) => {
  return (
    <Drawer
      variant="permanent"
      sx={{ minWidth: styles.drawerWidth }}
      PaperProps={{ sx: { minWidth: styles.drawerWidth, py: 0 } }}
      open={true}
    >
      <List>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          M
          <Typography sx={{ display: { xs: "none", sm: "inline" } }}>
            RSHL
          </Typography>
        </Typography>
        <ListItem sx={styles.listItemHeader} divider>
          <ListItemIcon>
            <AutoAwesomeMosaicIcon />
          </ListItemIcon>
          <ListItemIcon>
            <FormDialog
              opener={
                <IconButton>
                  <AddCircleIcon />
                </IconButton>
              }
              title={"Boards"}
              label={"Board Name"}
              btnText={"Add Board"}
              btnAction={(inputName) => pushBoardData(createDefaultCatBoard(inputName))}
            />
          </ListItemIcon>
        </ListItem>
        {sidebarItems.map((item, ind) => {
          return (
            <Tooltip title={item.name} key={ind} placement="right">
              <Link replace to={`/boards/${item.id}/main`} style={{textDecoration: 'none'}}>
                <ListItem button sx={styles.listItem} divider>
                  <ListItemIcon>
                    <CircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText sx={styles.listItemText}>
                    {item.name}
                  </ListItemText>
                </ListItem>
              </Link>
            </Tooltip>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Csidebar;

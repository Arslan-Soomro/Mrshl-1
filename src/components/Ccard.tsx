import {
  Link,
  Box,
  Card,
  CardHeader,
  IconButton,
  Divider,
  CardContent,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import AddLinkIcon from "@mui/icons-material/AddLink";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Cmenu from "./Cmenu";
import FormDialog from "./FormDialog";
import useStore from "../utils/store";
import { pushItemLink } from "../utils/dbUtils";
import { extAndGenIco } from "../utils/utils";

const catOptions = ["Edit Category", "Open All Links", "Delete Category"];

interface props {
  links: string[];
  cardTitle: string;
  catName: string;
  boardId: string;
} 

//TODO Remove broken images and only show the proper ones

const Ccard = ({ cardTitle, links, catName, boardId }: props) => {
  const boards = useStore((state) => state.boards);
  const board = boards?.find((item) => item.id === boardId);
  const catData = board?.cats;

  const addActionHandler = (inpStr: string | undefined) => {
    if (
      inpStr != undefined &&
      catName != undefined &&
      boardId != undefined &&
      catData != undefined
    ) {
      pushItemLink(inpStr, catName, boardId, cardTitle, catData);
    }
  };

  if (cardTitle != undefined && links != undefined) {
    return (
      <Card variant="outlined" sx={{ height: 1 }}>
        <CardHeader
          sx={{ px: 2, py: 1.5 }}
          title={cardTitle}
          titleTypographyProps={{ fontSize: 18 }}
          action={
            <Box sx={{ display: "flex" }}>
              <FormDialog
                opener={
                  <IconButton>
                    <AddLinkIcon />
                  </IconButton>
                }
                title="link"
                label="Link Address"
                btnText="Add Link"
                btnAction={addActionHandler}
              />

              <Cmenu
                menuItems={catOptions}
                AncEl={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
              />
            </Box>
          }
        />
        <Divider />
        {/* TODO, Reduce the gap between links */}
        <CardContent>
          <List sx={{ p: 0 }}>
            {links.map((item, ind) => {

              const imgIcon = extAndGenIco(item);

              return (
                <ListItem key={ind} sx={{ p: 0 }}>
                  <Link
                    sx={{ width: 1 }}
                    target="_blank"
                    rel="noopener"
                    href={item}
                    underline="none"
                  >
                    <ListItemButton sx={{ py: 1, m: 0, fontSize: 14 }}>
                      <img src={imgIcon} style={{width: '18px', height: '18px', margin: '0 6px'}} />
                      {item}
                    </ListItemButton>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default Ccard;

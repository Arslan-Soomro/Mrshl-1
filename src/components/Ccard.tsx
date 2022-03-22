import { Link, Box, Card, CardHeader, IconButton, Divider, CardContent, List, ListItem, ListItemButton } from "@mui/material";
import AddLinkIcon from '@mui/icons-material/AddLink';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Cmenu from "./Cmenu";


const catOptions = [
    'Edit Category',
    'Open All Links',
    'Delete Category',
];

interface props {
  links : string[],
  cardTitle: string,
}

const Ccard = ({ cardTitle,  links } : props) => {

  return (
    <Card variant="outlined" sx={{height: 1,}}>
      <CardHeader title={cardTitle} titleTypographyProps={{ fontSize: 20 }} action={
          <Box sx={{display: 'flex'}}>
              <IconButton>
                <AddLinkIcon /> 
              </IconButton>
              <Cmenu
                    menuItems={catOptions}
                    AncEl={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    }
                />
          </Box>
      } />
      <Divider />
      {/* TODO, Reduce the gap between links */}
      <CardContent>
          <List sx={{p: 0}}>
              {links.map((item, ind) => (
                <ListItem  key={ind} sx={{p: 0}}>
                  <Link sx={{width: 1}} underline="none">
                    <ListItemButton sx={{py: 1, m: 0, fontSize: 14}}>{item}</ListItemButton>
                  </Link>
                </ListItem>))}
          </List>
      </CardContent>

    </Card>
  );
};

export default Ccard;
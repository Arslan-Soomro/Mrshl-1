import Ccard from "./Ccard";
import { CAT_ITEM } from "../utils/customTypes";
import { Grid } from "@mui/material";
import FormDialog from "./FormDialog";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, IconButton, Typography } from "@mui/material";

interface props {
  catItems: CAT_ITEM[] | undefined;
}

const Cardslist = ({ catItems }: props) => {
  //TODO Sort Cards Before Displaying

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={3}
      justifyContent={{ sx: "center", sm: "flex-start" }}
      alignItems="stretch"
      sx={{ p: 2 }}
    >
      {catItems != undefined
        ? catItems.map((item, ind) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={ind}>
                <Ccard cardTitle={item.name} links={item.links} />
              </Grid>
            );
          })
        : null}
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
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
            btnAction={(inp) => console.log("Hello World")}
          />
          {/* <Typography>Add Category Board</Typography> */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cardslist;

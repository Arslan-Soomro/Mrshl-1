import Ccard from "./Ccard";
import { CAT_ITEM } from "../utils/customTypes";
import { Grid } from "@mui/material";
import * as React from "react";

interface props {
  catItems: CAT_ITEM[] | undefined;
  AddPlaceholder?: React.ReactElement;
  catName: string,
  boardId: string,
}

const Cardslist = ({ catItems, AddPlaceholder,  catName, boardId}: props) => {


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
                <Ccard boardId={boardId} catName={catName} cardTitle={item.name} links={item.links} />
              </Grid>
            );
          })
        : null}
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          { AddPlaceholder != undefined ? React.cloneElement(AddPlaceholder) : null}
      </Grid>
    </Grid>
  );
};

export default Cardslist;
import Box from "@mui/material/Box/Box";
import Ccard from "./Ccard";
import {CATEGORY} from "../utils/customTypes";
import { Grid } from "@mui/material";

interface props {
    cats : CATEGORY[]
}

const Cardslist = ({ cats } : props) => {

    //TODO Sort Cards Before Displaying

    return (
        <Grid container rowSpacing={3} columnSpacing={3} justifyContent={{sx: "center", sm: 'flex-start'}} alignItems="stretch" sx={{p: 2}}>
            {cats.map((item, ind) => {
                return (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={ind}>
                        <Ccard cardTitle={item.name} links={item.links} />
                    </Grid>
                )
            })}   
        </Grid>
    )

};

export default Cardslist;
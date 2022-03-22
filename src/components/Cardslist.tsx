import Box from "@mui/material/Box/Box";
import Ccard from "./Ccard";
import {CATEGORY} from "../utils/customTypes";
import { Grid } from "@mui/material";

interface props {
    cats : CATEGORY[]
}

const Cardslist = ({ cats } : props) => {

    return (
        <Grid container rowSpacing={3} columnSpacing={3} justifyContent="center" alignItems="stretch" sx={{p: 2}}>
            {cats.map((item, ind) => {
                return (
                    <Grid item key={ind}>
                        <Ccard cardTitle={item.name} links={item.links} />
                    </Grid>
                )
            })}   
        </Grid>
    )

};

export default Cardslist;
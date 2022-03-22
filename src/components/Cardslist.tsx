import Box from "@mui/material/Box/Box";
import Ccard from "./Ccard";
import {CATEGORY} from "../utils/customTypes";
import { Grid } from "@mui/material";

interface props {
    cats : CATEGORY[]
}

const Cardslist = ({ cats } : props) => {

    return (
        <Grid container rowSpacing={2} columnSpacing={3} sx={{p: 2}}>
            {cats.map((item) => {
                return (
                    <Grid item>
                        <Ccard cardTitle={item.name} links={item.links} />
                    </Grid>
                )
            })}   
        </Grid>
    )

};

export default Cardslist;
import Box from "@mui/material/Box/Box";
import Ccard from "./Ccard";
import {CATEGORY} from "../utils/customTypes";

interface props {
    cats : CATEGORY[]
}

const Cardslist = ({ cats } : props) => {

    return (
        <Box sx={{p: 2}}>
            {cats.map((item) => {
                return (
                    <Ccard cardTitle={item.name} links={item.links} />
                )
            })}   
        </Box>
    )

};

export default Cardslist;
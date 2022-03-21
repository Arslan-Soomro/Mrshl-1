import Box from "@mui/material/Box/Box";
import Ccard from "./Ccard";
import { links } from "../utils/dumData";

const Cardslist = () => {

    return (
        <Box sx={{p: 2}}>
            <Ccard links={links} />
        </Box>
    )

};

export default Cardslist;
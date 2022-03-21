import { Box } from "@mui/material";
import React from "react";
import Ccard from './Ccard';


interface props {
    side: React.ReactNode,
    content: React.ReactNode,
}

//TODO Break layout into smaller, reusable components

const Layout = ({side, content} : props) => {
    return (
        // Layout Container
        <Box sx={{width: 1, height: 1, display: 'flex'}}>
            {/* Sidebar */}
            {side}
            {/* Content */}
            <Box sx={{flexGrow: 1, p: 2}}>
                {content}
            </Box>
        </Box>
    )
}

export default Layout;

//style={{width: '100%', height: '100%', display: 'flex'}}
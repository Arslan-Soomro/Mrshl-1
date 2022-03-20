import { Box, Card, CardHeader, IconButton, Button } from "@mui/material";
import AddLinkIcon from '@mui/icons-material/AddLink';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import Cmenu from "./Cmenu";


const catOptions = [
    'Edit Category',
    'Open All Links',
    'Delete Category',
    'Add Subcategory',
]

const Ccard = () => {

  return (
    <Card variant="outlined" sx={{ width: 300 }}>
      <CardHeader title="Linux" titleTypographyProps={{ fontSize: 20 }} action={
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
    </Card>
  );
};

export default Ccard;

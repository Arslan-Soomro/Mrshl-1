import { Box, Card, CardHeader, IconButton } from "@mui/material";
import AddLinkIcon from '@mui/icons-material/AddLink';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

const Ccard = () => {

const [optionsAnchorEl, setOptionsAnchorEl] = useState<HTMLButtonElement | null>(null);

const handleOptionsClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOptionsAnchorEl(event.currentTarget);
  };

  const handleOptionsClose = () => {
    setOptionsAnchorEl(null);
  };

  return (
    <Card variant="outlined" sx={{ width: 300 }}>
      <CardHeader title="Linux" titleTypographyProps={{ fontSize: 20 }} action={
          <Box>
              <IconButton>
                <AddLinkIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
          </Box>
      } />
    </Card>
  );
};

export default Ccard;

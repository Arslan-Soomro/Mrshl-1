import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface props {
    AnEl: React.ReactNode,
}

const Cmenu = () => {
  
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        disableElevation
        endIcon={<KeyboardArrowDownIcon />}
        size="small"
      >
        Categories
      </Button> 
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
        }}
      >
        <MenuItem onClick={handleClose}>General</MenuItem>
        <MenuItem onClick={handleClose}>Implicit</MenuItem>
        <MenuItem onClick={handleClose}>Explicit</MenuItem>
      </Menu>
    </div>
  );
};

export default Cmenu;
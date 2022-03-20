import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface props {
    AncEl: React.ReactElement<any, string>,
    menuItems: string[]
}

const Cmenu = ({AncEl, menuItems}: props) => {
  
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
    console.log("Hello World");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>

      {React.cloneElement(AncEl, {onClick: handleClick})}
      
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

        {menuItems.map((item, ind) => <MenuItem onClick={handleClose} key={ind}>{item}</MenuItem>)}
      </Menu>
    </div>
  );
};

export default Cmenu;
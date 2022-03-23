import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useParams } from "react-router-dom";

interface props {
    AncEl: React.ReactElement<any, string>,
    menuItems: string[]
}

const Cmenu = ({AncEl, menuItems}: props) => {
  
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const params = useParams();
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
    console.log("Hello World");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const itemClickHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const menuItemName = e.currentTarget.dataset.name;
    navigate(`/boards/${params.boardId}/${menuItemName}`, {replace: true});
    handleClose();
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

        {menuItems.map((item, ind) => <MenuItem onClick={itemClickHandler} key={ind} data-name={item} sx={{fontSize: 15}}>{item}</MenuItem>)}
      </Menu>
    </div>
  );
};

export default Cmenu;
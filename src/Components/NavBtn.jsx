import React from 'react';
import {Link} from 'react-router-dom' 
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles'



const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles({
    root: {
        textDecoration: 'none',
        'a:hover': { 
          textDecoration: 'none',
         },
    },
})

  const anc = useStyles();
  


  return (

    <div classname="NavBtn">
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{ color: grey[100] }} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            textDecoration: 'none',
          },
        }}
      >
      <Link to="/">
        <MenuItem onClick={handleClose}><li><a href="Portfolio" className={anc.root}>Portfolio</a></li></MenuItem>
      </Link>

      <Link to="Skills">
        <MenuItem onClick={handleClose}><li> <a href="Skills" className={anc.root}>Skills</a></li></MenuItem>
      </Link>

      <Link to="Contact">
        <MenuItem onClick={handleClose}><li><a href="Contact" className={anc.root}>Contact</a></li></MenuItem>
      </Link>

      </Menu>
    </div>
  );
 }


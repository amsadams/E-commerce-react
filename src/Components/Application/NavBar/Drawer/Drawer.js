import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({[anchor]: open });
  };

  const list = ()=> (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer( false)}
    >


      <List>
        
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <MailIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
 
    



     
        
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <MailIcon />
              </ListItemIcon>
              <ListItemText primary='Shop' />
            </ListItemButton>
          </ListItem>
 
      


      
     
        
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <MailIcon />
              </ListItemIcon>
              <ListItemText primary='Pages' />
            </ListItemButton>
          </ListItem>
 
     




      
     
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <MailIcon />
              </ListItemIcon>
              <ListItemText primary='Login' />
            </ListItemButton>
          </ListItem>
 





          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
             <MailIcon />
              </ListItemIcon>
              <ListItemText primary='Contact' />
            </ListItemButton>
          </ListItem>




      </List>

    </Box>
  );

  return (
   
    
        <React.Fragment>
          <Button onClick={toggleDrawer('right', true)}  sx={{textDecoration:'none'}}>  <MenuIcon/> </Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
    
  );
}


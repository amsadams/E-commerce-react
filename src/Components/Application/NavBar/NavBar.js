import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';

import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TemporaryDrawer from './Drawer/Drawer';


// import styled from 'styled-components'
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
function NavBar() {

    const AppStyle = styled(AppBar)({
        backgroundColor: "white",
        color: 'black'

    })

   



    return (




        <>
            <AppStyle sx={{position:"static"}}>

                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
                    <Container>
                        <img src="Rectangle.png" />

                    </Container>
                    <Container sx={{ display: {xs:'none',md:'flex'}, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box sx={{cursor:'pointer'}}>Home</Box>
                        <Box sx={{cursor:'pointer'}}>Shop</Box>
                        <Box sx={{cursor:'pointer'}}>Pages</Box>
                        <Box sx={{cursor:'pointer'}}>Login</Box>
                        <Box sx={{cursor:'pointer'}}>Contact</Box>
                    </Container>

                    <Container sx={{display:{md:'flex',xs:'none'},justifyContent:'flex-end'}}>

                    <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                    </StyledBadge>
                    </IconButton>
                    </Container>
<Container sx={{display:{xs:'flex', md:'none'},    justifyContent:'flex-end'}}>

<TemporaryDrawer/>

</Container>





                </Toolbar>


            </AppStyle>




        </>





    )
}

export default NavBar
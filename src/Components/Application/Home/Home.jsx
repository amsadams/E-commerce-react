// import { Box, Container } from '@mui/material';
// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import RespAppBar from '../RespAppBar';
// import CssBaseline from '@mui/material/CssBaseline';
// import {StyledButton} from './Home.styles'

// function Home() {
//   const navigate = useNavigate();

//   useEffect(() => {


//     const token = localStorage.getItem('usertoken');


//     if (!token) {
//       navigate('/login')
//     }

//   }, [])

//   return (
//     <>

//       <RespAppBar />
      
//       <div maxWidth="100%">

//         <Box sx={{height:"50vh",bgcolor:'#ecfdff',width:"100%"}}></Box> 


//         <StyledButton primary>  hello   </StyledButton>

//       </div>

     

//     </>
//   )
// }

// export default Home
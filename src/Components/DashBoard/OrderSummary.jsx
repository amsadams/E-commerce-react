import { Typography } from '@mui/material'
import { Button, ButtonGroup, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Box, fontSize } from '@mui/system'
import React, { useEffect, useState } from 'react'
import BarChart from './BarChart.jsx'
import { Container, Fab } from '@mui/material';



import AddIcon from '@mui/icons-material/Add';

import RespAppBar from '../Application/RespAppBar';
import axios from 'axios'



const token = localStorage.getItem('admintoken') 

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'react-chartjs-2';
// import { Bar } from 'react-chartjs-2';




// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );



function OrderSummary() {



  const [products,setProducts]=React.useState([]);

  const fetchdata = async()=>{


        
    let config = {
        headers: {
          'Content-Type': 'application/json',

          'Authorization' : `Bearer ${token}  `
        //   "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      }
      
    
    await axios.get('http://localhost:8080/admin/product?pagesize=10&page=1'
    
      ,config)
      .then((response)=> {
        
        // if(response)
        // {
          console.log(response);
          
          
        setProducts(response?.data?.data?.Products)
  
    
        // }
    
    
      })
      .catch((e)=>{ console.log("Errrorrr",e.response) })
    
    }


//  fetchdata();

console.log("productsssss",products)



useEffect(() => {
  fetchdata();
  

 
}, [])



  return (
<>

<div style={{display:"flex"}}>


<Box display="flex"
          flexDirection={"column"}
          maxWidth={400}
         
          marginRight={10}
          
          height={85}
          width={300}
          
          borderRadius={5}
          boxShadow={"2px 2px 5px  rgba(117, 113, 249, 0.5)"}
          sx={{  backgroundColor:"#FFFFFF", color:"grey" , fontSize:25 , ":hover": { boxShadow: "3px 3px 10px  #7571f9",backgroundColor:" #FFFFFF " } }}
        >
<Typography sx={{fontSize:10,marginTop:1,marginLeft:3}}>
Products Sold
</Typography>   
<Typography sx={{fontSize:25,marginTop:1,marginLeft:3}}>
1000
</Typography>  
<Typography sx={{fontSize:10,marginLeft:3}}>
Oct 05, 2022
</Typography>  

        </Box>



        <Box display="flex"
          flexDirection={"column"}
          maxWidth={400}
          marginRight={10}
          width={300}
          height={85}
          
          
          borderRadius={5}
          boxShadow={"2px 2px 5px  rgba(117, 113, 249, 0.5)"}
          sx={{ backgroundColor:"#FFFFFF", color:"grey" , fontSize:25 , ":hover": { boxShadow: "3px 3px 10px  #7571f9",backgroundColor:" #FFFFFF " } }}
        >
<Typography sx={{fontSize:10,marginTop:1,marginLeft:3}}>
Products Sold
</Typography>   
<Typography sx={{fontSize:25,marginTop:1,marginLeft:3}}>
1000
</Typography>  
<Typography sx={{fontSize:10,marginLeft:3}}>
Oct 05, 2022
</Typography>  

        </Box>




        <Box display="flex"
          flexDirection={"column"}
          maxWidth={400}
          marginRight={10}
          width={300}
          
          height={85}
          
          
          borderRadius={5}
          boxShadow={"2px 2px 5px  rgba(117, 113, 249, 0.5)"}
          sx={{ backgroundColor:"#FFFFFF", color:"grey" , fontSize:25 , ":hover": { boxShadow: "3px 3px 10px  #7571f9",backgroundColor:" #FFFFFF " } }}
        >
<Typography sx={{fontSize:10,marginTop:1,marginLeft:3}}>
Products Sold
</Typography>   
<Typography sx={{fontSize:25,marginTop:1,marginLeft:3}}>
1000
</Typography>  
<Typography sx={{fontSize:10,marginLeft:3}}>
Oct 05, 2022
</Typography>  

        </Box>






        <Box display="flex"
          flexDirection={"column"}
          maxWidth={400}
          marginRight={10}
          width={300}
          
          height={85}
          paddingDown={50}
          
          borderRadius={5}
          boxShadow={"2px 2px 5px  rgba(117, 113, 249, 0.5)"}
          sx={{ backgroundColor:"#FFFFFF", color:"grey" , fontSize:25 , ":hover": { boxShadow: "3px 3px 10px  #7571f9",backgroundColor:" #FFFFFF " } }}
        >
<Typography sx={{fontSize:10,marginTop:1,marginLeft:3}}>
Products Sold
</Typography>   
<Typography sx={{fontSize:25,marginTop:1,marginLeft:3}}>
1000
</Typography>  
<Typography sx={{fontSize:10,marginLeft:3}}>
Oct 05, 2022
</Typography>  

        </Box>

        </div>






<div>

        <Box 
       
          width={"50%"}
          height={"45vh"}
           marginTop={10}
          
          borderRadius={5}
          boxShadow={"2px 2px 5px  rgba(117, 113, 249, 0.5)"}
          sx={{ backgroundColor:"#FFFFFF", color:"grey" , fontSize:25 , ":hover": { boxShadow: "3px 3px 10px  #7571f9",backgroundColor:" #FFFFFF " } }}
        >


         
<BarChart />



        </Box>


</div>
        
<div style={{marginTop:50}}>

{/* <Paper md={12}    sx={{height:"auto",width:"100%", backgroundColor:"#eeeeee"}} elevation={2}>  */}
 






<TableContainer component={Paper} >
        
      <Table sx={{ maxWidth: "100%"}} aria-label="simple table">
        <TableHead sx={{backgroundColor:"rgb(255 160 180)"}}>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="right"><b>Brand</b></TableCell>
            <TableCell align="right"><b>Processor</b></TableCell>
            <TableCell align="right"><b>Color</b></TableCell>
            <TableCell align="right"><b>Category</b></TableCell>
            <TableCell align="right"><b>Price</b></TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((user) => (

            
((!user?.product?.is_deleted) &&
            
            <TableRow
              key={user?.product?.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {console.log("userrrrrrr",user)}
              <TableCell align="left">{user?.product?.name}</TableCell>
              <TableCell align="right">{user?.product?.brand?.name}</TableCell>
              <TableCell align="right">{user?.product?.processor?.name}</TableCell>
              <TableCell align="right">{user?.product?.colors.map(elem=>elem.name)}</TableCell>
              <TableCell align="right">{user?.product?.category?.name}</TableCell>

              <TableCell align="right">
               {user?.product?.price}
                
                </TableCell>
                
            </TableRow>
          )))}
        </TableBody>
      </Table>

    </TableContainer>

   
    {/* </Paper> */}
</div>

</>

     






       




      

 


   
  )
}

export default OrderSummary


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Fab } from '@mui/material';



import AddIcon from '@mui/icons-material/Add';

import RespAppBar from '../Application/RespAppBar';
import axios from 'axios';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CategoryManagement() {

  const [products,setProducts]=React.useState([]);

  const token = localStorage.getItem('admintoken') 





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



React.useEffect(() => {
  
  fetchdata();
  

 
}, [])





  return (
    <>



    {/* <Container sx={{paddingTop:5}} > */}
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Categories</b> </TableCell>
            {/* <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.name}
              sx={{ '&:last-child td, &:last-child th': { border:0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="left">{product.product.category.name}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* </Container> */}


    <Fab color="secondary" aria-label="add" style={{marginLeft:1500,marginTop:150}}>
         <AddIcon/>
      </Fab>

    </>
  );
}

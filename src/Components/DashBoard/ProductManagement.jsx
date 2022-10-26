import { Button, ButtonGroup, Fab, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'

import AddIcon from '@mui/icons-material/Add';
import ProductAdd from './ProductAdd';
import axios from 'axios';
import ProductEdit from './ProductEdit';

function ProductManagement() {




  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('admintoken')




  const deleteHandler = async (prodId) => {
    let config = {
      headers: {
        'Content-Type': 'application/json',

        'Authorization': `Bearer ${token}  `
        //   "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    }


    await axios.delete(`http://localhost:8080/admin/product?productCode=${prodId}`

      , config)
      .then((response) => {

        // if(response)
        // {
        console.log(response);





        // }


      })
      .catch((e) => { console.log("Errrorrr", e.response) })

  }





  const fetchdata = async () => {



    let config = {
      headers: {
        'Content-Type': 'application/json',

        'Authorization': `Bearer ${token}  `
        //   "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    }
// try{

// const result = await axios.get('http://localhost:8080/admin/product?pagesize=10&page=1',config)
// if (result.status==200)
// {

  
// }



// }

    await axios.get('http://localhost:8080/admin/product?pagesize=10&page=1'

      , config)
      .then((response) => {

        // if(response)
        // {
        console.log(response);


        setProducts(response?.data?.data?.Products)


        // }


      })
      .catch((e) => { console.log("Errrorrr", e.response) })

  }


  //  fetchdata();

  console.log("productsssss", products)



  useEffect(() => {

    fetchdata();



  }, [])

  return (
    <>
      <Grid container  >

        <Paper md={12} sx={{ height: "auto", width: "100%", backgroundColor: "#eeeeee" }} elevation={0}>







          <TableContainer component={Paper} >

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><b>Name</b></TableCell>
                  <TableCell align="right"><b>Brand</b></TableCell>
                  <TableCell align="right"><b>Processor</b></TableCell>
                  <TableCell align="right"><b>Color</b></TableCell>
                  <TableCell align="right"><b>Category</b></TableCell>
                  <TableCell align="right"><b>Price</b></TableCell>
                  <TableCell align="right"><b>Action</b></TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {products?.map((user) => (


                  ((!user?.product?.is_deleted) &&

                    <TableRow
                      key={user?.product?.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >

                      <TableCell align="left">{user?.product?.name}</TableCell>
                      <TableCell align="right">{user?.product?.brand?.name}</TableCell>
                      <TableCell align="right">{user?.product?.processor?.name}</TableCell>
                      <TableCell align="right">{user?.product?.colors.map(elem => elem.name)}</TableCell>
                      <TableCell align="right">{user?.product?.category?.name}</TableCell>

                      <TableCell align="right">
                        {user?.product?.price}

                      </TableCell>
                      <TableCell align="right">


                        <ButtonGroup
                          disableElevation
                          variant="contained"
                          aria-label="Disabled elevation buttons"

                        >
                          <Button style={{ border: "none" }} color="warning" onClick={(e) => { setOpenEditModal(true) }}>Edit</Button>
                          <Button color="error" onClick={() => { deleteHandler(user.product.code) }}>Delete</Button>
                        </ButtonGroup>

                        {openEditModal && <ProductEdit openEditModal={openEditModal} closeEditModal={setOpenEditModal}

                          productName={user?.product?.name}
                          productCode={user?.product?.code}
                          brandName={user?.product?.brand?.name}
                          processorName={user?.product?.processor?.name}
                          Color={user?.product?.colors.map(elem => elem.name)}
                          categoryName={user?.product?.category?.name}
                          price={user?.product?.price}
                          description={user?.product?.description}
                          quantity={user?.product?.category?.name}

                        />}





                      </TableCell>

                    </TableRow>

                  )))}

              </TableBody>
            </Table>

          </TableContainer>





















          {openModal && <ProductAdd modal={openModal} closeModal={setOpenModal} />}

        </Paper>

        <Fab fixed color="secondary" aria-label="add" style={{ marginLeft: 1500, marginTop: 150 }} onClick={(e) => {
          setOpenModal(true)

        }}>
          <AddIcon />
        </Fab>

      </Grid>
    </>

  )

}

export default ProductManagement
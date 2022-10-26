import { Backdrop, Box, Button, Fade, Grid, Modal, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function ProductAdd({
    closeModal,
    modal
  }) {

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "40%",
        bgcolor: "#eeeeee",
        border: "2px solid #7571f9",
        boxShadow: 24,
        p: 4,
        borderRadius: 4,
        color:'black'
      };

const token = localStorage.getItem('admintoken')  
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX0lkIjoxLCJFbWFpbCI6ImFuYW5kdS5lbWFpbEBnbWFpbC5jb20iLCJSb2xlIjoiYWRtaW4iLCJleHAiOjE2NjUzOTQ4NDh9.EHIevb4tikYAsXGuPcwfxx1OQRkmd4cmfZeyO5dZKcs'
console.log(JSON.stringify(token))
const { register, handleSubmit, formState: { errors } } = useForm();

const history =useNavigate();
const onSubmit=async (data) => {   


console.log("dataaa",data.description)

    let config = {
        headers: {
          'Content-Type': 'application/json',

          'Authorization' : `Bearer ${token}  `
        //   "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      }
      
    
      await axios.post('http://localhost:8080/admin/product', {
      
      //   code:data.code,
      //   name:data.name , 
      //   description:data.description,
      //   price: parseInt(data.price) ,
      //   category: {
      //   name : data.category
      // },
      // brand : {
      //     name : data.brand
      // },
      // processor : {
      //     name : data.processor
      // },
      // colors : 
      // {
      //     name : data.color,
      //     quantity: parseInt(data.quantity)
      // }
      
      "code": data.code,
      "name": data.name,
      "description": data.description,
      "price": parseFloat(data.price),
      "category": {
          "name" : data.category
      },
      "brand" : {
          "name" : data.brand
      },
      "processor" : {
          "name" : data.processor
      },
      "colors" : [
      {
          "name" : data.color,
          "quantity": parseInt(data.quantity)
      }
     
  
      ]
      
      }  
      
    
      ,config)
      .then((response)=> {
        
        // if(response)
        // {
          console.log(response);
          
           history("/admin/products")
    
       
    
        // }
    
    
      })
      .catch((e)=> console.log("Errrorrr",e.response))
    
      



}






  return (


<div>
<Modal
  aria-labelledby="transition-modal-title"
  aria-describedby="transition-modal-description"
  open={modal}
  onClose={() => closeModal(false)}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500,
  }}
>
  <Fade in={modal}>
    <Box 
    sx={style}
    >
      <form  onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" paddingBottom={3} textAlign="center">
         Add Product
        </Typography>
<Grid continer>
            <Grid item xs={12} md={12}>
              <TextField
                variant="outlined"
                margin="normal"
                placeholder="Product Code"
                style={{ width: "100%", textColor: "white" }}
                {...register("code", { required: true, minLength: 1 })}
              />
              {errors.code && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                variant="outlined"
                margin="normal"
                placeholder="Product Name"
                style={{ width: "100%", textColor: "white" }}
                {...register("name", { required: true, minLength: 1 })}
              />
              {errors.name && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                variant="outlined"
                margin="normal"
                placeholder="Product Description"
                style={{ width: "100%", textColor: "white",":focus": { borderColor: "black",color:"black",textColor:"white"} }}
                {...register("description", { required: true, minLength: 1 })}
              />
              {errors.description && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

            </Grid>


            <Grid item xs={12} md={12}>
              <TextField
                variant="outlined"
                margin="normal"
                placeholder="Price"
                style={{ width: "100%", textColor: "white",":focus": { borderColor: "black",color:"black",textColor:"white"} }}
                {...register("price", { required: true, minLength: 1 })}
              />
              {errors.price && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

            </Grid>



            <Grid item xs={12} md={12}>
              <TextField
                variant="outlined"
                margin="normal"
                placeholder="Category"
                style={{ width: "100%", textColor: "white" }}
                {...register("category", { required: true, minLength: 1 })}
              />
              {errors.category && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                variant="outlined"
                margin="normal"
                placeholder="Brand"
                style={{ width: "100%", textColor: "white" }}
                {...register("brand", { required: true, minLength: 1 })}
              />
              {errors.brand && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

            </Grid>


            <Grid item xs={12} md={12}>
              <TextField
                variant="outlined"
                margin="normal"
                placeholder="Processor"
                style={{ width: "100%", textColor: "white" }}
                {...register("processor", { required: true, minLength: 1 })}
              />
              {errors.processor && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

            </Grid>



            <Grid item xs={12} md={12}>
              <TextField
                variant="outlined"
                margin="normal"
                placeholder="Color"
                style={{ width: "100%", textColor: "white" }}
                {...register("color", { required: true, minLength: 1 })}
              />
              {errors.color && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                variant="outlined"
                margin="normal"
                placeholder="Quantity"
                style={{ width: "100%", textColor: "white" }}
                {...register("quantity", { required: true, minLength: 1 })}
              />
              {errors.quantity && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

            </Grid>



 </Grid>


        <Button
         type='submit'
          variant="contained"
        //    
          style={{ marginLeft:"42%" }}
          loadingIndicator="Loading…"
          onClick={()=>{history("/admin/products")}}
        >
       
          Add Product

        </Button>
      </form>
    </Box>
  </Fade>
</Modal>
</div>

  )
}

export default ProductAdd
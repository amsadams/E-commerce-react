import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function CouponManagement() {
const token = localStorage.getItem('admintoken')  

const { register, handleSubmit, formState: { errors } } = useForm();
const history =useNavigate();

const onSubmit= async (data)=>{

console.log("dataaa",data.description)

    let config = {
        headers: {
          'Content-Type': 'application/json',

          'Authorization' : `Bearer ${token}  `
        //   "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      }
      
    
      await axios.post('http://localhost:8080/admin/add/coupon', {


        "name":data.couponName,
        "code":data.couponCode,
        "description": data.couponCode,
        "min_amount": data.minAmt,
        "coupon_value": data.couponValue,
        "valid_till": "2022-11-30T23:25:33.017104Z"
        
    
    
    
    }
    
      ,config)
      .then((response)=> {
        
        // if(response)
        // {
          console.log(response);

          toast.success('Coupon Added!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
 
    
       
    
        // }
    
    
      })
      .catch((e)=> console.log("Errrorrr",e.response))
    
      



}



  return (
   <>
    <form  onSubmit={handleSubmit(onSubmit)}>
    <Typography variant="h6" paddingBottom={3} textAlign="center">
  Generate Coupons
    </Typography>
<Grid continer display="flex" justifyContent="space-evenly" paddingTop={'3%'}>
        <Grid item xs={12} width={'40%'}>
          <TextField
            color="warning"
          
            variant="outlined"
            margin="normal"
            placeholder="Coupon Code"
            style={{ width: "100%", textColor: "white" }}
            {...register("couponCode", { required: true, minLength: 1 })}
          />
          {errors.couponCode && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

        </Grid>

        <Grid item xs={12} width={'40%'}>
          <TextField
           color="warning"
           
            variant="outlined"
            margin="normal"
            placeholder="Coupon Name"
            style={{ width: "100%", textColor: "white" }}
            {...register("couponName", { required: true, minLength: 1 })}
          />
          {errors.couponName && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

        </Grid>


        


   </Grid>



   <Grid continer display="flex" justifyContent="space-evenly">
        <Grid item xs={12} width={'40%'}>
          <TextField
            color="warning"
          
            variant="outlined"
            margin="normal"
            placeholder="Description"
            style={{ width: "100%", textColor: "white" }}
            {...register('couponDescription', { required: true, minLength: 1 })}
          />
          {errors.couponDescription && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Coupon Description</p>}

        </Grid>

        <Grid item xs={12} width={'40%'}>
          <TextField
           color="warning"
           
            variant="outlined"
            margin="normal"
            placeholder="Minimum Amount"
            style={{ width: "100%", textColor: "white" }}
            {...register("minAmt", { required: true, minLength: 1 })}
          />
          {errors.minAmt && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Minimum Amount</p>}

        </Grid>


        


   </Grid>



   <Grid continer display="flex" justifyContent="space-evenly">
        <Grid item xs={12} width={'40%'}>
          <TextField
            color="warning"
          
            variant="outlined"
            margin="normal"
            placeholder="Coupon Value"
            style={{ width: "100%", textColor: "white" }}
            {...register("couponValue", { required: true, minLength: 1 })}
          />
          {errors.couponValue && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Name</p>}

        </Grid>

        <Grid item xs={12} width={'40%'}>
          <TextField
           color="warning"
           
            variant="outlined"
            margin="normal"
            placeholder="Valid Till..."
            style={{ width: "100%", textColor: "white" }}
            {...register("validity", { required: true, minLength: 1 })}
          />
          {errors.validity && <p style={{color:"#E8D73F", marginTop:3, marginBottom:2}}>Please check the Validity</p>}

        </Grid>


        


   </Grid>

   <Button
         type='submit'
          variant="contained"
          color="warning"
          
          style={{ marginLeft:"45%",marginTop:"4%" }}
          loadingIndicator="Loading…"
        >
       
          Add Product

        </Button>
        


</form>

<ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

</>
  )
}

export default CouponManagement
import {React,useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Box,TextField,Typography,Button} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import AppBar from '../Application/RespAppBar'

import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



function SignUp() {


//  const [value, setValue] = useState("");
//  const [number,setNumber]= useState("");
//  const [name,setName]=useState("")
//  const [password,setPassword]=useState("")
//  const [email,setEmail]=useState("")
 const navigate=useNavigate();


const { register, handleSubmit, formState: { errors } } = useForm();


const onSubmit = async (data)=>
{ 
 

    console.log(data);

    let config = {
        headers: {
          'Content-Type': 'application/json',
        //   "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      }
      
    
      await axios.post('http://localhost:8080/user/register', {


         "first_name":data.first_name,
         "last_name":data.last_name,
         "phone_number":parseInt(data.phone_number),
         "email":data.email, 
         "password": data.password
       
     }  
      
    
      ,config)
      .then(function (response) {
        console.log('hi');
        if(response.status)
        {
    
       navigate("/")
    
        }
    
    
      }).catch((e)=>console.log(e))
     

 }

 return (
<>



<AppBar/>


<div>
   <form onSubmit={handleSubmit(onSubmit)}>

   <Box display="flex"
    flexDirection={"column"}
     maxWidth={400}
     alignItems="center"
     justifyContent={'center'}
     margin="auto"
     marginTop={21}
     padding={3}
     borderRadius={5}
     boxShadow={"5px 5px 10px #ccc"}
     sx={{":hover":{boxShadow:"10px 10px 20px #ccc"}}}
    >
       <Typography variant='h2' padding={3} textAlign='center'>
     SignUp
       </Typography>





       <TextField variant='outlined' margin='normal' placeholder='First Name' color="secondary" style={{width:260}}  
        {...register("first_name", { required: true, minLength: 1 })}
       />
         {errors.first_name && <p style={{color:"red", marginTop:3, marginBottom:2}}>Please check the First Name</p>}






         <TextField variant='outlined' margin='normal' placeholder='Last Name' color="secondary" style={{width:260}}  
        {...register("last_name", { required: true, minLength: 1 })}
       />
         {errors.last_name && <p style={{color:"red", marginTop:3, marginBottom:2}}>Please check the Last Name</p>}




<TextField
         id="standard-number"
         placeholder='Phone Number'
         type="tel"
         color="secondary"style={{width:260}} 
         InputLabelProps={{
           shrink: true,
         }}
         variant="outlined"
         {...register("phone_number", {
          required: true,
          minLength: 10,
          maxLength: 12,
        })}
       />
{errors.phone_number && <p style={{color:"red", marginTop:3, marginBottom:2}}>Please check the Phone</p>}
     
<TextField type = "string" variant='outlined' name ="email" margin='normal' placeholder='Email' color="secondary" style={{width:260}} 
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        />

       
 { errors.email && 




<p style={{color:"red", marginTop:3, marginBottom:2}}>Please check the Email</p>

}

       <TextField type={'password'} margin='normal' placeholder='Password' color="secondary"style={{width:260}}  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 10,
                  })}  />
                   {errors.password && <p style={{color:"red",}}>Please check the Password</p>}
       <Button type ="submit" variant='contained' sx={{marginTop: 3, marginBottom: 2 }} padding={4}  loadingIndicator="Loading…" > SignUp </Button>

       
       <Typography variant='h6' padding={3} textAlign='center'>
       <Link to="/login" style={{fontSize:15, textDecoration:"none",
 cursor: "pointer"}}> Already have an account? Login. </Link>
       </Typography>

 
 </Box>
</form>
<ToastContainer/>
 </div>


 </>
   )
}

export default SignUp
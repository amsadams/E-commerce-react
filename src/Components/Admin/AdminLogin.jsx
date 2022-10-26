import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, TextField, Typography, Button } from "@mui/material"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form'
import Home from '../Application/Home/Home';
import DashHome from '../DashBoard/DashHome';
import axios from 'axios';
import "./adminLogin.css"

function AdminLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [Details, setDetails] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

 

const LoginHandler= async ()=>{

  let config = {
    headers: {
      'Content-Type': 'application/json',
    //   "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  }
  

  await axios.post('http://localhost:8080/admin/login', {
  
    "email":email, "password": password }  
  

  ,config)
  .then(function (response) {
    
    if(response.status)
    {
       console.log(response.data.data);
      localStorage.setItem('admintoken', response.data.data)
       history("/admin")

   

    }


  })

}

  useEffect(() => {

  

    const token = localStorage.getItem('admintoken');


    if (token) {
      history('/admin')
    }
  }, [])


  return (
    <div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

<video  loop autoPlay id="myVideo">
  <source src={"bgvid.mp4"} type="video/mp4" />
</video>

      <form>
     
        <Box display="flex"
          flexDirection={"column"}
          maxWidth={500}
          alignItems="center"
          justifyContent={'center'}
          margin="auto"
          marginTop={25}
          padding={3}
          className="glassmorphism"
          // borderRadius={5}
          // boxShadow={"2px 2px 5px  rgba(117, 113, 249, 0.5)"}
          // sx={{ backgroundColor:"#FFFFFF",":hover": { boxShadow: "3px 3px 10px  #7571f9",backgroundColor:" #FFFFFF " } }}
        >
          <Typography variant='h5' padding={3} textAlign='center' style={{color:"#FFFFFF"}} >
            Admin Login
          </Typography>

          <TextField required


          type={email} variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}  margin='normal' placeholder='Username' style={{color:'white',width:300}}/>
          <TextField variant="standard" value={password} onChange={(e) => setPassword(e.target.value)} type={'password'} margin='normal' placeholder='Password' style={{width : 300, color:'white',textDecorationColor:'white', outline:'none',":focus":{outline:'none'}}}/>
          <Button variant='contained' sx={{ marginTop: 3, marginBottom: 2,width: 310, backgroundColor:" #7571f9" }} padding={4} loadingIndicator="Loading…" onClick={LoginHandler}> Login </Button>

{/* 
          <Typography variant='h6' padding={3} textAlign='center'>
            <Link to="/form"  style={{
              fontSize: 15, textDecoration: "none",color:"silver",
              cursor: "pointer"
            }}> Not Registered yet? Register Now! </Link>
          </Typography> */}


        </Box>
      </form>
    </div>
  )
}

export default AdminLogin
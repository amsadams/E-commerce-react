import { Button, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '../Application/RespAppBar'
import { AuthContext } from './../../store/UserContext';
function Login() {



  const { register, handleSubmit, formState: { errors } } = useForm();
  // const [Details, setDetails] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);


  const LoginHandler = async () => {

    let config = {
      headers: {
        'Content-Type': 'application/json',
        //   "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    }



    await axios.post('http://localhost:8080/user/login', {

      "email": email, "password": password

    }


      , config)
      .then(function (response) {
        console.log('hi');
        if (response.status) {
          console.log(response);
          localStorage.setItem('usertoken', response.data)
          setUser(email)
          navigate("/")

        }


      }).catch((e) => console.log(e))




  }
  useEffect(() => {


    const token = localStorage.getItem('usertoken');


    if (token) {
      navigate('/')
    }

  }, [])


  return (
    <>



      <AppBar />
      {/* <Container height="300" width="100%" color="success">

</Container> */}

      <div style={{ height: 400, width: "100%", backgroundColor: "#ecfdff" }}></div>

      <form>

        <Box display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={'center'}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"2px 2px 5px  #cf95a4"}
          sx={{ backgroundColor: "#FFFFFF", ":hover": { boxShadow: "3px 3px 10px  #eb6286", backgroundColor: " #FFFFFF " } }}
        >
          <Typography variant='h5' padding={3} textAlign='center' style={{ color: "silver" }} >
            User Login
          </Typography>

          <TextField required


            type={email} variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} margin='normal' placeholder='Username' style={{ color: 'white', width: 300 }} />
          <TextField variant="standard" value={password} onChange={(e) => setPassword(e.target.value)} type={'password'} margin='normal' placeholder='Password' style={{ width: 300, color: 'white', textDecorationColor: 'white', outline: 'none', ":focus": { outline: 'none' } }} />
          <Button variant='contained' sx={{ marginTop: 3, marginBottom: 2, width: 310, backgroundColor: " #ff3368", borderRadius: 50 }} padding={4} loadingIndicator="Loading…" onClick={LoginHandler}> Login </Button>


          <Typography variant='h6' padding={3} textAlign='center'>
            <Link to="/signup" style={{
              fontSize: 15, textDecoration: "none", color: "silver",
              cursor: "pointer"
            }}> Not Registered yet? Register Now! </Link>
          </Typography>


        </Box>
      </form>



    </>
  )
}

export default Login
import { Button, Fab, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


function UserManagement() {
    const history = useNavigate();
    const [users,setUsers]=useState([]);
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
        
      
      await axios.get('http://localhost:8080/admin/view/users'
      
        ,config)
        .then((response)=> {
          
          // if(response)
          // {
            console.log(response);
            
            
          setUsers(response.data.data)
         
      
          // }
      
      
        })
        .catch((e)=> console.log("Errrorrr",e.response))
      
      }






    const handleBlock=async(email,value)=>{
    
    console.log("hiiiiiiiiiiiii",token)
    let config = {
        headers: {
          'Content-Type': 'application/json',

          'Authorization' : `Bearer ${token}  `
        //   "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      }
      
    
    await axios.put('http://localhost:8080/admin/block/users',
{

    "email":email,
    "is_active":value


}
    
      ,config)
      .then((response)=> {
        
        // if(response)
        // {
          console.log(response);
          
          fetchdata();
       
    
        // }
    
    
      })
      .catch((e)=> console.log("Errrorrr",e.response))
    








    }
    


    // useEffect( () => { 


    //   console.log("hiiiiiiiiiiiii",token)






    // },[])
    
useEffect(() => {

  fetchdata()

 
  }, [] )


  return (
    <>
    <TableContainer component={Paper} >
        {console.log(users)}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TableRow
              key={user?.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{user?.first_name}</TableCell>
              <TableCell align="right">{user?.last_name}</TableCell>
              <TableCell align="right">{user?.email}</TableCell>
              <TableCell align="right">{user?.phone_number}</TableCell>
              <TableCell align="right">
                {user.is_active ?
                <Button variant="contained" color="success" onClick={()=>{ const value=false; handleBlock(user.email,value);  } }>Active</Button>:
                <Button variant="contained" color="error" onClick={()=>{   const value=true; handleBlock(user.email,value);  } } >Block</Button>}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>



    <div>

    {/* <Fab color="secondary" aria-label="add" style={{marginLeft:1500,marginTop:150}}    
    //     
                    >
       <AddIcon/>
    </Fab> */}


    </div>

    </>
  )
}

export default UserManagement
import React from 'react'

function CouponList() {


    const [coupons,setCoupons]=useState([]);
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
            
            
          setCoupons(response?.data?.data?.Products)
    
      
          // }
      
      
        })
        .catch((e)=>{ console.log("Errrorrr",e.response) })
      
      }
  
  
  //  fetchdata();
  
  console.log("productsssss",coupons)
  
  
  
useEffect(() => {
    fetchdata();
}, [])

    
  return (

<Grid container  >

<Paper md={12}   ms={"50%"} sx={{height:"50vh",width:"95%", backgroundColor:"#eeeeee",marginLeft:"2%"}} elevation={3}> 
 






<TableContainer component={Paper} >
        
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Coupon Name</TableCell>
            <TableCell align="right">Coupon Code</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Coupon Value</TableCell>
            <TableCell align="right">Crated at</TableCell>
            <TableCell align="right">Valid Till</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coupons?.map((coupon) => (

            
            <TableRow
              key={user?.product?.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {console.log("userrrrrrr",coupon)}
              <TableCell align="left">{coupon?.product?.name}</TableCell>
              <TableCell align="right">{coupon?.product?.brand?.name}</TableCell>
              <TableCell align="right">{coupon?.product?.processor?.name}</TableCell>
              <TableCell align="right">{coupon?.product?.colors.map(elem=>elem.name)}</TableCell>
              <TableCell align="right">{coupon?.product?.category?.name}</TableCell>
              <TableCell align="right">
               {coupon?.product?.price}
                
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer>


</Paper>
</Grid>
 
 
 
 
 
 
    )
}

export default CouponList
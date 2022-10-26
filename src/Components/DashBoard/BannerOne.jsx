import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

function BannerOne() {
  return (



    <div >

                    <Box sx={{ height: "500px", bgcolor: '#ecfdff', width: "100%"}}>

                        <Grid  container sx={{width:"100%",height:'100%', display: 'flex', flexDirection:{md:'row',xs:'column'}, justifyContent: 'space-between', alignItems: 'center' }}>

                            <Grid item sx={{width:"70%"}}>

                                <Typography sx={{ fontSize:"2rem" ,color: 'black', mt:{xs:"50%",md:'0%',display:'flex', alignItems:{xs:'center',sm:'center',md:'none'}}  , ml:{ md:'50%'}}}>

                                    Laptops and Computers


                                </Typography>

                            </Grid>

                            <Grid item  sx={{width:"30%"}}>

                                <Typography sx={{ color: 'black', ml: "20%" }}>

                                 

                                </Typography>
                            </Grid >
                        </Grid>
                    </Box>


                    {/* <StyledButton primary>  hello   </StyledButton> */}

                </div>

  )
}

export default BannerOne
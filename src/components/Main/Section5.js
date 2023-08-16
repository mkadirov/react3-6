import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import phone from '../../assets/images/phone.png'
import apple from '../../assets/images/apple.png'
import google from '../../assets/images/google.png'
import { grey } from '@mui/material/colors'


function Section5() {
  return (
    <Box marginY={12}>
        <Grid container justifyContent='center' spacing={8}>
            <Grid item xs={11} md={3}>
                <Box>
                    <img src={phone} alt="" />
                </Box>
            </Grid>
            <Grid item xs={11} md={6}>
                <Box>
                    <Typography>
                        Download App
                    </Typography>

                    <Typography marginTop={5} variant='h2'>
                        Simple Way To Order Your Organic Fruit
                    </Typography>

                    <Typography marginY={6} color={grey[400]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Praesentium hic vel pariatur deleniti et ullam, 
                         culpa eius cumque neque explicabo voluptatibus ab ea odit, 
                         inventore dolor obcaecati. Nostrum, voluptatem rem.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Praesentium hic vel pariatur deleniti et ullam, 
                         culpa eius cumque neque explicabo voluptatibus ab ea odit, 
                         inventore dolor obcaecati. Nostrum, voluptatem rem.
                    </Typography>

                    <Box display='flex' gap={3} >
                        <Box sx={{width: '80px'}}>
                             <img src={apple} alt="" />
                        </Box>
                        <Box sx={{width: '80px'}}>
                             <img src={google} alt="" />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Section5
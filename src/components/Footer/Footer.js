import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import planet from '../../assets/icons/planet.png'
import { grey } from '@mui/material/colors'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box marginBottom={10} >
        <Grid container justifyContent='center' spacing={8}>
            <Grid item xs={12} md={4}>
                <Box sx={{width: '80px', height: '80px'}}>
                    <img src={planet} alt="" />
                </Box>
                <Typography color={grey[400]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Delectus a quibusdam magnam ipsam aliquid! Odio labore
                    neque possimus unde nostrum est dignissimos ad ea
                     reprehenderit molestias. Impedit necessitatibus perferendis nobis.
                </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
                <Typography variant='h5' marginY={4}>
                    Navigation
                </Typography>

                <Typography color={grey[400]}>
                    About us
                </Typography>
                <Typography color={grey[400]}>
                    Service
                </Typography>
                <Typography color={grey[400]}>
                    Menu
                </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
                <Typography variant='h5' marginY={4}>
                    Resources
                </Typography>

                <Typography color={grey[400]}>
                    Reviews
                </Typography>
                <Typography color={grey[400]}>
                    Blog
                </Typography>
                <Typography color={grey[400]}>
                    Update News
                </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                <Typography variant='h5' marginY={4}>
                    Resources
                </Typography>

                <Typography>
                    Email: master@gmail.com
                </Typography>

                <Box marginTop={4} display='flex' gap={3}>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer
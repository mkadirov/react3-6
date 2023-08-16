import { Box, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import StarIcon from '@mui/icons-material/Star';
import React from 'react'
import userImg from '../../assets/images/User.png'

function Section4() {
  return (
    <Box marginTop={12}>
        <Grid container justifyContent='center' spacing={10}>
            <Grid item xs={11} md={6}>
                <Typography variant='h2'>
                    What Our Customers About Us saying
                </Typography>
                <Typography marginY={6} color={grey[400]}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam inventore, 
                    hic nam dignissimos eum reprehenderit eos unde sapiente ab sint optio, 
                    molestiae necessitatibus deserunt vitae assumenda quod, autem nemo ad?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam inventore, 
                    hic nam dignissimos eum reprehenderit eos unde sapiente ab sint optio, 
                    molestiae necessitatibus deserunt vitae assumenda quod, autem nemo ad?
                </Typography>

                <Typography variant='h4'>
                    Ahmad Hridoy
                </Typography>

                <Box marginY={4} display='flex' gap={2}>
                   <StarIcon sx={{color: 'yellow'}}/>
                   <StarIcon sx={{color: 'yellow'}}/>
                   <StarIcon sx={{color: 'yellow'}}/>
                   <StarIcon sx={{color: 'yellow'}}/>
                   <StarIcon sx={{color: 'yellow'}}/>
                </Box>

            </Grid>
            <Grid item xs={11} md={4}>
                <Box>
                    <img src={userImg} alt="" />
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Section4
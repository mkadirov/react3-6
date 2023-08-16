import { Box, Fab, Grid, Typography } from '@mui/material'
import React from 'react'
import gemuse from '../../assets/images/gemuse.png'
import { grey } from '@mui/material/colors'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import bletter from '../../assets/images/bletter.png'

function Section3() {
  return (
    <Box marginTop={5} >
        <Grid container justifyContent='center' spacing={6} marginY={5}>
            <Grid item xs= {12} md={5}>
                <Box sx={{width: '100%'}}>
                    <img src={gemuse} alt="" />
                </Box>
            </Grid>
            <Grid item xs= {12} md={5}>
                <Box marginTop={5}>
                    <Typography variant='h2'>
                        Explor Our Special Items
                    </Typography>

                    <Typography marginY={6} color={grey[400]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Odit doloribus autem tenetur placeat illo. Natus aperiam magni 
                        a facilis reprehenderit explicabo unde sint veritatis cumque, 
                        temporibus quidem quas, quis officia.
                    </Typography>

                    <Box display='flex' gap={2} alignItems='center'>
                        <Typography>
                            Explor Now
                        </Typography>
                        <Fab color='success'>
                             <ArrowRightAltIcon/>
                        </Fab>
                    </Box>

                    
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Section3
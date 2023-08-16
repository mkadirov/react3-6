
import { Box, Grid, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import React from 'react'
import elipse from '../../assets/images/elipse.png'
import deliver from '../../assets/images/deliver.png'


function Section2() {
  return (
    <Box sx={{width: '100%', minHeight: '70vh'}} marginTop={8}>
        <Box sx={{ width: '90%', margin: 'auto', height: '100%', position: 'relative', overflow: 'hidden'}}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <Box marginY={4}>
                        <Typography variant='h2'>
                            Why We Are The Best?
                        </Typography>
                        <Typography color={grey[400]}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Doloribus possimus ut, corrupti sunt earum explicabo fugiat, 
                            nesciunt quam beatae velit
                        </Typography>

                        <Box sx={{width: '60%', margin: 'auto'}}>
                        <Stack direction='row' spacing={3} marginTop={5}>
                           <DeliveryDiningIcon fontSize='large' sx={{color: 'green'}}/>
                           <Box>
                           <Typography fontWeight='bold'>
                                Fasted delivery Service
                            </Typography>
                            <Typography color={grey[400]}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Doloribus
                            </Typography>
                           </Box>
                        </Stack>
                        <Stack direction='row' spacing={3} marginTop={10}>
                           <DeliveryDiningIcon fontSize='large' sx={{color: 'green'}}/>
                           <Box>
                           <Typography fontWeight='bold'>
                                Fasted delivery Service
                            </Typography>
                            <Typography color={grey[400]}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Doloribus
                            </Typography>
                           </Box>
                        </Stack>
                        <Stack direction='row' spacing={3} marginTop={10}>
                           <DeliveryDiningIcon fontSize='large' sx={{color: 'green'}}/>
                           <Box>
                           <Typography fontWeight='bold'>
                                Fasted delivery Service
                            </Typography>
                            <Typography color={grey[400]}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Doloribus
                            </Typography>
                           </Box>
                        </Stack>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>

                </Grid>
            </Grid>

            <Box sx={{position: 'absolute', bottom: 0, right: 0, width: '30vw', height: '30vw'}}>
                <Box sx={{width: '100%', height: '100%', position: 'relative'}}>
                    <img src={elipse} alt="" />
                    <Box position='absolute' sx={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%'}}>
                        <img src={deliver} alt="" />
                    </Box>
                </Box>

            </Box>
        </Box>
    </Box>
  )
}

export default Section2
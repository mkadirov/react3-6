import React from 'react'
import { Box, Container, Fab, Grid, Typography } from '@mui/material'
import img1 from '../../assets/images/bletter.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import fruits from '../../assets/images/fruits.png'
import PersonIcon from '@mui/icons-material/Person';

function Section1() {
  return (
    <Box sx={{position: 'relative', overflow: 'hidden'}}>

    <Box sx={{width: '30%', position: 'absolute', top: 0, left: '-20px'}}>
        <img src={img1} alt="" />
    </Box>

    <Box align= 'center' >
        <Box sx={{width: '50%'}}>
        <Typography variant='h2' paddingTop={4} >
            Organic Fruit & Vegetabels
        </Typography>
        <Typography paddingTop={2}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus tempore dolore 
            magni harum alias, error repellendus, tempora numquam 
            totam laborum iste fugit temporibus dignissimos. 
            
        </Typography>

        <Box  marginTop={5} >

            <Fab color='success'>
                <ArrowRightAltIcon/>
            </Fab>
        </Box>

        </Box>
        
    </Box>

    <Box>
        <Grid container spacing={10}>
            <Grid item xs= {12} md= {8}>
                <Box>
                    <img src={fruits} alt="" />
                </Box>
            </Grid>

            <Grid item xs= {12} md= {4}>
                <Box marginRight={4}  >
                    <Box display='flex' alignItems='center' justifyContent='center' gap={3} marginY={4}>
                        <PersonIcon sx={{color: 'green'}}/>
                        <Box>
                            <Typography variant='h3'>
                                30K
                            </Typography>
                            <Typography>
                                User Order
                            </Typography>
                        </Box>
                    </Box>

                    <Box display='flex' alignItems='center' justifyContent='center' gap={3} marginY={4}>
                        <PersonIcon sx={{color: 'green'}}/>
                        <Box>
                            <Typography variant='h3'>
                                30K
                            </Typography>
                            <Typography>
                                User Order
                            </Typography>
                        </Box>
                    </Box>

                    <Box display='flex' alignItems='center' justifyContent='center' gap={3} marginY={4}>
                        <PersonIcon sx={{color: 'green'}}/>
                        <Box>
                            <Typography variant='h3'>
                                30K
                            </Typography>
                            <Typography>
                                User Order
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
    </Box>
  )
}

export default Section1
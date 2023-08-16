import { Box, Button, Container, styled } from '@mui/material'
import React from 'react'
import planet from '../../assets/icons/planet.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {

    const StyledBtn = styled(Button)({
        color: 'black'
    })
  return (
    <Container>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 4}}>
        <Box display='flex' gap={2}>
            <StyledBtn>
                About us
            </StyledBtn>
            <StyledBtn>
                Service
            </StyledBtn>
            <StyledBtn>
                Menu
            </StyledBtn>
            <StyledBtn>
                Contact
            </StyledBtn>
        </Box>

        <Box sx={{width: '50px', height: '50px'}}>
            <img src={planet} alt="" />
        </Box>

        <Box display='flex' gap={2}>
            <StyledBtn>
                <SearchIcon/>
            </StyledBtn>
            <StyledBtn>
                <ShoppingCartOutlinedIcon/>
            </StyledBtn>
            <Button variant='contained' color="success" >
                Register Now
            </Button>
        </Box>
    </Box>
    </Container>
  )
}

export default Header
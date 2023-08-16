import React, { Component } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { Box } from '@mui/material'

export default class App extends Component {
  render() {
    return (
      <>
        
        <Header/>
        <Main/>
        <Footer/>
        
      </>
    )
  }
}

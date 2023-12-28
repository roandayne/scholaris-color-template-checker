import { Box, Button, Container, Paper, Typography, Tooltip } from '@mui/material'
import React from 'react'

import backgroundImage from "../static/images/graduation-cap.jpg"

const Welcome = (props) => {
  const {primary, accent, fontColor} = props

  const paperStyle = {
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center"
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: `${primary}90`,
  };
  
  return (
    <Paper
      style={paperStyle}
    >
      <Box style={overlayStyle}></Box>
      <Container 
        maxWidth="md" 
        sx={{
          position: "relative", 
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Typography variant="h2" component="div" gutterBottom sx={{color: fontColor}}>
          Welcome to <span style={{color: accent}}>Scholaris</span>
        </Typography>
        <Tooltip title="
          Header Content
          - Highlight the aim of the app
          - Why use the app?
          - Display the specific usage
          - What issue does the app fixes?
          - What help this app can give the user?
        ">
          <Typography variant="body2" align='center' sx={{color: fontColor, fontSize: '1.25rem'}}>
            Empowering Dreams, Igniting Futures: <br/> Your Path to Knowledge, Our Commitment to Support
          </Typography>
        </Tooltip>
      </Container>
      <Button 
        size="large" 
        sx={{
          backgroundColor: accent, 
          color: fontColor,
          marginTop: "48px"
        }}
      >
        Get Started
      </Button>
    </Paper>
  )
}

export default Welcome
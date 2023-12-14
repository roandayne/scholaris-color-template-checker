import { Box, Button, Container, Paper, Typography } from '@mui/material'
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
          Welcome to Scholarship Pooling
        </Typography>
        <Typography variant="body2" align='center' sx={{color: fontColor}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet purus nulla. Suspendisse egestas erat eu lectus semper, quis sollicitudin diam blandit. Sed rhoncus, nisi ac sollicitudin ultricies, ante turpis fermentum elit, id euismod dolor augue mollis dui. Integer efficitur diam sed tellus feugiat, et posuere tortor vestibulum. 
        </Typography>
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
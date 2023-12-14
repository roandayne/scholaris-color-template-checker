import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'

const Choice = () => {
  const handleClick = () => {

  }

  const cardStyle = {
    width: '300px', // Set your desired width
    height: '200px', // Set your desired height
  };

  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "24px"
      }}
    >
      <Card 
        style={cardStyle}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "24px"
        }} 
      >
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              I am a student
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card 
        style={cardStyle} 
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "24px"
        }} 
      >
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              I am a SGO (Scholarship Granting Organization)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default Choice
import { Box, Button, ButtonGroup, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'

const Choice = (props) => {
  const {secondary, accent, bg} = props
  const handleClick = () => {

  }

  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        backgroundColor: bg
      }}
    >
      <Typography variant="h4" align="center" sx={{margin: "24px"}}>
        Dream, Achieve, Succeed: <br /> Your Journey Begins with <span style={{color: accent}}>Scholaris</span>.
      </Typography>
      <Typography align="center" variant="h6" sx={{margin: "24px"}}>
        Begin your journey now. <br /> Are you an aspiring student or a scholarship-granting organization?
      </Typography>
      <ButtonGroup>
        <Button variant="contained" size="large" sx={{margin: "24px", backgroundColor: secondary}}>Student</Button>
        <Button variant="contained" size="large" sx={{margin: "24px", backgroundColor: secondary}}>Scholarship Granting Organization (SGO)</Button>
      </ButtonGroup>
    </Box>
  )
}

export default Choice
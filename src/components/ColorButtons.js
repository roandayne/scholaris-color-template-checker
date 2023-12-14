
import { Button, ButtonGroup } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function ColorButtons(props) {
  const {onUpdateColor} = props

  return (
    <Box
      position="sticky"
      sx={{
        width: "100%", 
        height: "124px",
        backgroundColor: "white", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ButtonGroup variant="outlined" sx={{margin: "12px"}} aria-label="outlined primary button group">
        <Button onClick={() => onUpdateColor("primary", "#2972FF")}>S Primary</Button>
        <Button onClick={() => onUpdateColor("secondary", "#A9D4ED")}>S Secondary</Button>
        <Button onClick={() => onUpdateColor("tertiary", "#E7AE1A")}>S Tertiary</Button>
        <Button onClick={() => onUpdateColor("accent", "#D33F49")}>S Accent</Button>
        <Button onClick={() => onUpdateColor("bg", "#ffffff")}>S Bg</Button>
        <Button onClick={() => onUpdateColor("darkFont", "#000000")}>S Dark Font</Button>
        <Button onClick={() => onUpdateColor("lightFont", "#ffffff")}>S Light Font</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" sx={{margin: "12px"}} aria-label="outlined primary button group">
      <Button onClick={() => onUpdateColor("primary", "#002147")}>R Primary</Button>
        <Button onClick={() => onUpdateColor("secondary", "#1AA5D8")}>R Secondary</Button>
        <Button onClick={() => onUpdateColor("tertiary", "#DE592A")}>R Tertiary</Button>
        <Button onClick={() => onUpdateColor("accent", "#F36B3B")}>R Accent</Button>
        <Button onClick={() => onUpdateColor("bg", "#fefefe")}>R Bg</Button>
        <Button onClick={() => onUpdateColor("darkFont", "#01172F")}>R Dark Font</Button>
        <Button onClick={() => onUpdateColor("lightFont", "#fefefe")}>R Light Font</Button>
      </ButtonGroup>
    </Box>
  )
}

export default ColorButtons
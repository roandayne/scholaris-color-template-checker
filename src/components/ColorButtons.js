
import { Button, ButtonGroup, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, {useState} from 'react'

function ColorButtons(props) {
  const {onUpdateColor, onChangeColor, primaryInput, secondaryInput, tertiaryInput, accentInput, bgInput, darkFontColorInput, lightFontColorInput, showComponent} = props
  const [clicked, setClicked] = useState("")

  const handleClick = (value) => {
    setClicked(value)
    console.log(value)
  }

  return (
    <Box
      position="sticky"
      sx={{
        width: "100%", 
        padding: "24px",
        backgroundColor: "white", 
        display: showComponent ? "flex" : "none", 
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ButtonGroup variant="outlined" sx={{margin: "12px"}} aria-label="outlined primary button group">
        <Button onClick={() =>onUpdateColor("primary", "#2972FF")}>S Primary</Button>
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
      <Box sx={{margin: "12px", width: "74vw", display: "flex", alignItems: "center"}}>
        <TextField inputRef={primaryInput} size="small" onChange={(event) => onChangeColor("primary", event.target.value)} id="outlined-basic" label="Primary" variant="outlined" />
        <TextField inputRef={secondaryInput} size="small" onChange={(event) => onChangeColor("secondary", event.target.value)} id="outlined-basic" label="Secondary" variant="outlined" />
        <TextField inputRef={tertiaryInput} size="small" onChange={(event) => onChangeColor("tertiary", event.target.value)} id="outlined-basic" label="Tertiary" variant="outlined" />
        <TextField inputRef={accentInput} size="small" onChange={(event) => onChangeColor("accent", event.target.value)} id="outlined-basic" label="Accent" variant="outlined" />
        <TextField inputRef={bgInput} size="small" onChange={(event) => onChangeColor("bg", event.target.value)} id="outlined-basic" label="Bg" variant="outlined" />
        <TextField inputRef={darkFontColorInput} size="small" onChange={(event) => onChangeColor("darkFont", event.target.value)} id="outlined-basic" label="Dark Font" variant="outlined" />
        <TextField inputRef={lightFontColorInput} size="small" onChange={(event) => onChangeColor("lightFont", event.target.value)} id="outlined-basic" label="Light Font" variant="outlined" />
      </Box>
    </Box>
  )
}

export default ColorButtons
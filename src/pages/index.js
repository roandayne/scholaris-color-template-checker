import { Avatar, Box } from '@mui/material'
import React, {useState} from 'react'
import Choice from '../components/Choice'
import ColorButtons from '../components/ColorButtons'
import Footer from '../components/Footer'
import Guides from '../components/Guides'
import Navigation from '../components/Navigation'
import Newsletter from '../components/Newsletter'
import Welcome from '../components/Welcome'

import '../style.css'

function Index() {
  const [primary, setPrimary] = useState("#457B9D")
  const [secondary, setSecondary] = useState("#E63946")
  const [tertiary, setTertiary] = useState("#A8DADC")
  const [accent, setAccent] = useState("#E63946")
  const [bg, setBg] = useState("#F1FAEE")
  const [fontColor, setFontColor] = useState("#ffffff")

  const handleOnUpdateColor = (type, color) => {
    switch (type) {
      case "primary":
        setPrimary(color)
        break;
      case "secondary":
        setSecondary(color)
        break;
      case "tertiary":
        setTertiary(color)
        break;
      case "accent":
        setAccent(color)
        break;
      case "bg":
        setBg(color)
        break;
      case "darkFont":
        setFontColor(color)
        break;
      case "lightFont":
        setFontColor(color)
        break;
      default:
        break;
    }
  }

  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
      <Box sx={{position: "sticky", top: 0, zIndex: 10}}>
        <ColorButtons onUpdateColor={handleOnUpdateColor} />
        <Navigation 
          primary={primary}
          bg={bg} 
          fontColor={fontColor} 
        />
      </Box>
      <Choice />
      <Welcome primary={primary} accent={accent} fontColor={fontColor} />
      <Newsletter accent={accent} />
      <Guides primary={primary} secondary={secondary} tertiary={tertiary} bg={bg}/>
      <Footer primary={primary} fontColor={fontColor} />
    </Box>
  )
}

export default Index
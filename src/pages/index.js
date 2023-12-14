import { Avatar, Box } from '@mui/material'
import React, {useState, useRef} from 'react'
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
  const [showComponent, setShowComponent] = useState(true)

  const primaryInput = useRef();
  const secondaryInput = useRef();
  const tertiaryInput = useRef();
  const accentInput = useRef();
  const bgInput = useRef();
  const darkFontColorInput = useRef();
  const lightFontColorInput = useRef();

  const handleOnUpdateColor = (type, color) => {
    switch (type) {
      case "primary":
        primaryInput.current.value = ""
        setPrimary(color)
        break;
      case "secondary":
        secondaryInput.current.value = ""
        setSecondary(color)
        break;
      case "tertiary":
        tertiaryInput.current.value = ""
        setTertiary(color)
        break;
      case "accent":
        accentInput.current.value = ""
        setAccent(color)
        break;
      case "bg":
        bgInput.current.value = ""
        setBg(color)
        break;
      case "darkFont":
        darkFontColorInput.current.value = ""
        setFontColor(color)
        break;
      case "lightFont":
        lightFontColorInput.current.value = ""
        setFontColor(color)
        break;
      default:
        break;
    }
  }

  const handleOnChangeColor = (type, color) => {
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

  const handleOnClickShowComponent = () => {
    setShowComponent(!showComponent);
  }

  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
      <Box sx={{position: "sticky", top: 0, zIndex: 10}}>
        <ColorButtons
          onUpdateColor={handleOnUpdateColor} 
          onChangeColor={handleOnChangeColor}
          primaryInput={primaryInput}
          secondaryInput={secondaryInput}
          tertiaryInput={tertiaryInput}
          accentInput={accentInput}
          bgInput={bgInput}
          darkFontColorInput={darkFontColorInput}
          lightFontColorInput={lightFontColorInput}
          showComponent={showComponent}
        />
        <Navigation 
          primary={primary}
          bg={bg} 
          fontColor={fontColor}
          onClickShowComponent={handleOnClickShowComponent}
          status={showComponent ? "Hide" : "Show"}
        />
      </Box>
      <Choice accent={accent} secondary={secondary} bg={bg} />
      <Welcome primary={primary} accent={accent} fontColor={fontColor} />
      <Newsletter accent={accent} />
      <Guides primary={primary} secondary={secondary} tertiary={tertiary} bg={bg}/>
      <Footer primary={primary} fontColor={fontColor} />
    </Box>
  )
}

export default Index
import { Container, Tooltip, Typography } from '@mui/material'
import React from 'react'
import Guide from './Guide'

const Guides = ({primary, secondary, tertiary, bg}) => {
  return (
    <Container
      maxWidth="xl"
      width="100%"
      sx={{
        margin: "10vh 0 0 0",
        paddingTop: "5vh", 
        paddingBottom: "10vh",
        backgroundColor: tertiary,
      }}
    >
      <Tooltip title="
        Feature Guide Content
        -brief overview of what the feature guide covers.
        -Identify the target audience for your feature guide.
        -What do you want users to achieve after reading it?
        -Structure feature guide logically
        -Feature: Description of each guide, Benefits of using the guide, how to use each guide, if possible, Tips and Tricks
        -Visual should be eye pleasing: Board names and backgrounds for easy identification, Lists, Cards
        -Clear Navigation
        -Categorization
        -User-Friendly Language
      ">
        <Typography variant='h3' margin={"36px"}>Feature Guides</Typography>
        <Guide 
          primary={primary}
          secondary={secondary}
          numberOnRight={false}
          number="1"
          titleContent="Lorem ipsum dolor sit amet"
          bodyContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet purus nulla. Suspendisse egestas erat eu lectus semper, quis sollicitudin diam blandit. Sed rhoncus, nisi ac sollicitudin ultricies, ante turpis fermentum elit, id euismod dolor augue mollis dui. Integer efficitur diam sed tellus feugiat, et posuere tortor vestibulum. "
        />
        <Guide 
          primary={primary}
          secondary={secondary}
          numberOnRight={true}
          number="2"
          titleContent="Lorem ipsum dolor sit amet"
          bodyContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet purus nulla. Suspendisse egestas erat eu lectus semper, quis sollicitudin diam blandit. Sed rhoncus, nisi ac sollicitudin ultricies, ante turpis fermentum elit, id euismod dolor augue mollis dui. Integer efficitur diam sed tellus feugiat, et posuere tortor vestibulum. "
        /> 
        <Guide 
          primary={primary}
          secondary={secondary}
          numberOnRight={false}
          number="3"
          titleContent="Lorem ipsum dolor sit amet"
          bodyContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet purus nulla. Suspendisse egestas erat eu lectus semper, quis sollicitudin diam blandit. Sed rhoncus, nisi ac sollicitudin ultricies, ante turpis fermentum elit, id euismod dolor augue mollis dui. Integer efficitur diam sed tellus feugiat, et posuere tortor vestibulum. "
        /> 
        <Guide 
          primary={primary}
          secondary={secondary}
          numberOnRight={true}
          number="4"
          titleContent="Lorem ipsum dolor sit amet"
          bodyContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet purus nulla. Suspendisse egestas erat eu lectus semper, quis sollicitudin diam blandit. Sed rhoncus, nisi ac sollicitudin ultricies, ante turpis fermentum elit, id euismod dolor augue mollis dui. Integer efficitur diam sed tellus feugiat, et posuere tortor vestibulum. "
        /> 
      </Tooltip>
      
    </Container>
  )
}

export default Guides
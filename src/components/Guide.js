import React from 'react';
import { Box, Typography, Container, Paper, Avatar } from '@mui/material';

const ImageTextLayout = (props) => {
  const { number, titleContent, bodyContent, numberOnRight = true, primary, secondary } = props

  const circleStyles = {
    width: "100px",
    height: "100px",
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: "transparent",
    border: `2px solid ${primary}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Box style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: "center" }}>
        {numberOnRight ? (
          <Box sx={{display: "flex"}}>
            <Box flex={1} sx={{width: "40vw"}}>
              <Typography variant="h3" gutterBottom>
                {titleContent}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {bodyContent}
              </Typography>
            </Box>
            <Box sx={{width: "20vw", display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
              <Avatar flex={1} style={circleStyles} textAlign="center">
                <Typography variant="h1">{number}</Typography>
              </Avatar>
            </Box>
          </Box>
        ) : (
          <Box sx={{display: "flex"}}>
            <Box sx={{width: "20vw", display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
              <Avatar flex={1} style={circleStyles} textAlign="center">
                <Typography variant="h1">{number}</Typography>
              </Avatar>
            </Box>
            <Box flex={1} sx={{width: "40vw"}}>
              <Typography variant="h3" gutterBottom>
                {titleContent}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {bodyContent}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ImageTextLayout;

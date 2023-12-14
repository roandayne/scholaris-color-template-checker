import React from 'react';
import { TextField, Button, Container, Typography, FormControl, Box } from '@mui/material';

const Newsletter = (props) => {
  const {accent} = props

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container 
      maxWidth="md" 
      style={{
        marginTop: "15vh", 
        marginBottom: "10vh",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box width="50vw">
        <Typography variant="h4" align="center" gutterBottom>
          Stay Updated from our Newsletters
        </Typography>
        <Typography variant="h5" align="center" gutterBottom sx={{ marginTop: "48px"}}>
          Join and get latest news and features
        </Typography>
        <Typography variant="body2" align="center" gutterBottom sx={{marginBottom: "48px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet purus nulla. Suspendisse egestas erat eu lectus semper, quis sollicitudin diam blandit. 
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <TextField
              label="Your Email"
              variant="outlined"
              type="email"
              required
            />
          </FormControl>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            style={{ marginTop: '10px', backgroundColor: accent }}
          >
            Subscribe
          </Button>
        </form>
      </Box>
      
    </Container>
  );
};

export default Newsletter;

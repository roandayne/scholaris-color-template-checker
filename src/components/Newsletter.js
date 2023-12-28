import React from 'react';
import { TextField, Button, Container, Typography, FormControl, Box, Tooltip } from '@mui/material';

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
      <Tooltip title="
        Newletter Content
        -understand the audience
        -provide relevant information
        -deliver in competitive way
        -Inform or Educate: Share industry insights, news, or educational content.
        -Promote: Highlight new products, services, or promotions.
        -Connect: Share behind-the-scenes stories, team updates, or customer spotlights
      ">
        <Box width="50vw">
        <Typography variant="h4" align="center" gutterBottom>
          Stay Updated from our Newsletters
        </Typography>
        <Typography variant="h5" align="center" gutterBottom sx={{ marginTop: "48px"}}>
          Join Now, Stay Informed
        </Typography>
        <Typography variant="body2" align="center" gutterBottom sx={{marginBottom: "48px"}}>
          Unlock Exclusive Updates for a Brighter Tomorrow.
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
      </Tooltip>
      
      
    </Container>
  );
};

export default Newsletter;

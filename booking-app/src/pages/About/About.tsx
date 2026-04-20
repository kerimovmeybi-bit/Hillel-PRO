// src/pages/About/About.tsx

import { Container, Typography, Box } from "@mui/material";
import Header from "../../components/Header";

const About = () => {
  return (
    <>
      <Header />

      <Container sx={{ mt: 4 }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            About
          </Typography>

          <Typography sx={{ color: "gray", maxWidth: "800px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
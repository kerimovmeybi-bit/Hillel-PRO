

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "#fff", color: "#000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "orange",
              mr: 1,
            }}
          />
          <Typography variant="h6">Booking</Typography>
        </Box>

        <Box>
          <Button component={Link} to="/" color="warning" variant="contained" sx={{ mr: 1 }}>
            Home
          </Button>
          <Button component={Link} to="/about" color="warning" variant="contained">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
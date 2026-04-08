import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/">Home</Button>
        <Button component={Link} to="/todo">Todo</Button>
        <Button component={Link} to="/swapi">SWAPI</Button>
      </Toolbar>
    </AppBar>
  );
}
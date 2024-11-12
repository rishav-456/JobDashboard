import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

function Header({ setIsAuthenticated }) {
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/candidates/1">
          Candidates
        </Button>
        {/* <Button color="inherit" component={Link} to="/assessment">Assessments</Button> */}
        <Button
          color="inherit"
          onClick={handleLogout}
          component={Link}
          to="/logout"
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

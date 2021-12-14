import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  useEffect(() => {
    if (!auth) {
      navigate("/");
      window.location.reload();
    }
  });
  const handleLogin = () => {
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    } else setAuth(false);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coliveri
          </Typography>
          {auth ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              Hi, {localStorage.getItem("email")}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleLogout}
              >
                <Logout />
              </IconButton>
            </div>
          ) : (
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleLogin}
            >
              Login
              <Login />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, fetchAccountSummary, logout } from "../../store/action";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const userName = useSelector((state) => state?.user?.name); 
  const [customerId, setCustomerId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state?.isAuthenticated);
  const navigate = useNavigate();
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(customerId, password));
  };

  const handleLogout = () => {
    dispatch(logout());
    setWelcomeMessage("");
    navigate("/login");
  };

  useEffect(() => {

    const fetchSummary = async () => {
      if (isAuthenticated) {
        try {
          await dispatch(fetchAccountSummary());

          if (userName) { 
            setWelcomeMessage(`Welcome, ${userName}!`);
          }

          navigate("/my/accounts");
        } catch (error) {
          console.error("Error fetching account summary:", error);
          if (error.response && error.response.status === 401) {
            dispatch(logout());
            navigate("/login");
          }
        }
      }
    };

    fetchSummary();
  }, [isAuthenticated, dispatch, navigate]); 

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      {isAuthenticated && (
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      )}

      {welcomeMessage && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">{welcomeMessage}</Typography>
        </Box>
      )}
    </form>
  );
};

export default LoginForm;
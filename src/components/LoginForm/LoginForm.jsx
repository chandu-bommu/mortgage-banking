import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/action";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const userName = useSelector((state) => state?.user?.name);
  const [customerId, setCustomerId] = useState("");
  const [password, setPassword] = useState("");
  const [customerIdError, setCustomerIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state?.isAuthenticated);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCustomerIdError(customerId.trim() === "");
    setPasswordError(password.trim() === "");
    if (customerId.trim() !== "" && password.trim() !== "") {
      setSubmitted(true);
      dispatch(login(customerId, password));
    }
  };

  useEffect(() => {
    const navigateToSummary = async () => {
      if (isAuthenticated) {
        navigate("/my/accounts");
      }
    };
    navigateToSummary();
  }, [isAuthenticated]);

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        fullWidth
        margin="normal"
        error={customerIdError}
        helperText={customerIdError && "Customer ID is required"}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
        error={passwordError}
        helperText={passwordError && "Password is required"}
      />
      {/* Display error if authentication fails */}
      {!isAuthenticated && customerId && password && submitted && (
        <Typography variant="body2" color="error">
          Invalid User
        </Typography>
      )}
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
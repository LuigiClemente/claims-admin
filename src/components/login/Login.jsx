import React from "react";
import { useState } from "react";
import { useLogin, useNotify, Notification } from "react-admin";
import {Container, Box, Checkbox, FormControlLabel, TextField, CssBaseline, Button} from '@mui/material'
const Login = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const auth = useLogin();
  const notify = useNotify();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth({ login, password }).catch(() => notify("Invalid login or password"));
  };

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
      <Box
        sx={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login Address"
            name="login"
            autoComplete="login"
            autoFocus
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          </Box>
      </Box>
    </Container>
  );
};
export default Login;

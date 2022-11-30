import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../store/authSlice'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Login = () => {

    const { authStore } = useSelector((state) => ({ ...state }))
    const dispatch = useDispatch();

    let navigate = useNavigate();
    let schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email Required'),
        password: yup.number().required().min(4, 'Too Short!').required('Password Required')
    });

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()

    const handleSubmit = () => {
        schema
            .validate({
                email: email,
                password: password
            }).catch(function (err) {
                alert(err.errors)
            }).then(function async(valid) {
                if (valid.email === authStore.email && valid.password === authStore.password) {
                    dispatch(login())
                }
                else (
                    alert("Email or password incorrect")
                )
            })
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email}
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
                                onChange={(e) => setPassword(e.target.value)} 
                                value={password}
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
            </ThemeProvider>
        </div>
    )
}

export default Login
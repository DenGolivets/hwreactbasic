import React, { useEffect, useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleRegistration } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
        const [fullName, setFullName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const dispatch = useDispatch();
        const loading = useSelector((state) => state.auth.loading);
        const token = useSelector((state) => state.auth.token);
        const navigate = useNavigate();

        useEffect(() => {
            if(token) {
                navigate('/home');
            }
        }, [token, navigate]);

        const handleFormSubmit = (e) => {
            e.preventDefault();
            const data = {
                fullName,
                email,
                password,
            };
            console.log(data);
            dispatch(handleRegistration(data));
        }
    return (
        <Paper sx={{
            padding: '50px'
        }}
        >
            <form
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            onSubmit={handleFormSubmit}
            >
                <h1>Registration</h1>
                <TextField 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
                type="text" 
                name="fullname" 
                helperText = {fullName.length < 5 ? 'too short' : ''}
                />
                <TextField 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}  
                type="email" 
                name="email" 
                />
                <TextField 
                value={password} onChange={(e) => setPassword(e.target.value)}  
                type="password" 
                name="password" 
                />
                <Button 
                type="submit"
                disabled={loading}
                sx={{ color: 'red' }}                
                >
                    Register
                </Button>
            </form>
        </Paper>
    )
}

export default Register;
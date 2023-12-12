import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}
        >
            <Outlet />
        </Box>
    )
}

export default Auth;
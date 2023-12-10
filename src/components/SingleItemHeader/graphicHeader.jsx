import React from 'react';
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GoogleIcon from '@mui/icons-material/Google';

export const dot = (
    <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    •
    </Box>
);

export const eye = (
    <Box
    component="icon"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.6)', color: 'white' }}
    >
    <VisibilityIcon />
    </Box>
)

export const googleIcon = (
    <Box
    component="icon"
    sx={{ display: 'inline-block', justifyContent: 'center', alignItems: 'center', mx: '2px', transform: 'scale(0.6)', color: 'white' }}
    >
    <GoogleIcon />
    </Box>
)
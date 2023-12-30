import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Button, Box, Avatar, Paper } from '@mui/material';
import { getAuth, updateProfile } from 'firebase/auth';
import addPictureStorage from './addPictureStorage';
import { TextField } from '@mui/material';
import WebFont from 'webfontloader';
import axios from 'axios';
import CountryFlag from 'react-country-flag';
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function Profile() {
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;
    const [profileImage, setProfileImage] = useState(user?.photoURL || "/static/images/avatar/2.jpg");
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingAvatar, setIsEditingAvatar] = useState(false);
    const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");
    const [userCountry, setUserCountry] = useState("");
    const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);


    const registrationDate = user.metadata.creationTime
        ? new Date(user.metadata.creationTime)
        : null;

    const lastSignInDate = user.metadata.lastSignInTime
        ? new Date(user.metadata.lastSignInTime)
        : null;

    const Alert = (props) => {
        const ref = useRef(null);
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    };

    useEffect(() => {
    const apiKey = '4a276817015d8e';
    axios.get(`https://ipinfo.io?token=${apiKey}`)
    .then(response => {
        setUserCountry(response.data.country);
    })
    .catch(error => {
        console.error('Error fetching user location:', error);
    });
}, [user]);

    const handleUploadAvatarToStorage = (e) => {
        const file = e.target.files[0];
        addPictureStorage(file)
        .then((downloadURL) => {
            setProfileImage(downloadURL);
            setIsUpdateSuccess(true);
            console.log('Image uploaded successfully. Download URL:', downloadURL);
        })
        .catch((error) => {
            console.error('Error uploading image:', error);
        });
    };

//   const handleUpdateDisplayName = () => {
//     const newDisplayName = prompt('Enter your new display name:');
//     if (newDisplayName) {
//       updateProfile(auth.currentUser, { displayName: newDisplayName })
//         .then(() => {
//           console.log('Display name updated successfully!');
//         })
//         .catch((error) => {
//           console.error('Error updating display name:', error.message);
//         });
//     }
//   };

    const handleUpdateDisplayName = () => {
        setIsEditingName(true);
    };

    const handleSaveDisplayName = () => {
        updateProfile(auth.currentUser, { displayName: newDisplayName })
        .then(() => {
            console.log('Display name updated successfully!');
            setIsEditingName(false);
            setSnackbarOpen(true);
        })
        .catch((error) => {
            console.error('Error updating display name:', error.message);
        });
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
        setIsUpdateSuccess(false);
    };

    const handleCancelEditName = () => {
        setIsEditingName(false);
    };

    const handleReload = () => {
        navigate('/profile');
    };

    useEffect(() => {
        WebFont.load({
            google: {
            families: ['Abel', 'Roboto', 'Nanum Gothic', 'Fjalla One'], 
        },
        });
    }, []);

    return (
        <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2, border: '2px red solid', backgroundColor: '#f5ebe0' }}>
            <Typography variant="h5" color="primary" sx={{ fontFamily: 'Nanum Gothic', textTransform: 'uppercase', color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Personal Information</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                <Avatar 
                // src={profileImage} 
                src={isEditingAvatar ? profileImage : profileImage}
                sx={{ width: 100, height: 100, mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" fontSize={24} mb={2} sx={{ fontFamily: 'Fjalla One' }}>
                {user.displayName}
                {userCountry && (
                <CountryFlag
                countryCode={userCountry}
                svg
                style={{
                    width: '0.7em',
                    height: '0.7em',
                    marginLeft: '0.5em',
                    marginRight: '0.5em',
                    marginBottom: '0.5em'
                }}
                />
                )}
                </Typography>
                {isEditingName ? (
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                    <TextField
                    label="New Display Name"
                    variant="outlined"
                    value={newDisplayName}
                    onChange={(e) => setNewDisplayName(e.target.value)}
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: 'red' },
                        '& .MuiOutlinedInput-root fieldset': { borderColor: 'black' },
                        '&:hover .MuiOutlinedInput-root fieldset': { borderColor: 'red' },
                    }}
                    />
                    <Button variant="outlined" size="small" onClick={handleSaveDisplayName} sx={{ color: 'red', borderColor: 'green', bgcolor: 'black' }}>
                    Save
                    </Button>
                    <Button variant="outlined" size="small" onClick={handleCancelEditName} sx={{ mt: 1, color: 'red', borderColor: 'red', bgcolor: 'black' }}>
                    Cancel
                    </Button>
                </Box>
                ) : (
                <Tooltip title="Edit Name" arrow>
                <Button variant="outlined" size="small" onClick={handleUpdateDisplayName} sx={{ color: 'red', borderColor: 'red', bgcolor: '#333533' }}>
                Change Name
                </Button>
                </Tooltip>
                  
                )}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                <Typography fontWeight="bold" mb={1}>Last Sign-In:</Typography>
                <Typography variant="subtitle1">
                {lastSignInDate ? lastSignInDate.toLocaleDateString() : 'N/A'}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                <Typography fontWeight="bold" mb={1}>Email:</Typography>
                <Typography variant="subtitle1">
                {user.email}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                <Typography fontWeight="bold" mb={1}>Registration Date:</Typography>
                <Typography variant="subtitle1">
                {registrationDate ? registrationDate.toLocaleDateString() : 'N/A'}
                </Typography>
                <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper elevation={3} sx={{ p: 2, mt: 2, border: '1px red solid', backgroundColor: '#e3d5ca' }}>
            <Typography fontSize={12} mb={2}>
                Would you like to add or change your profile avatar?
            </Typography>
            {/* <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleUploadAvatarToStorage} /> */}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <label htmlFor="avatar">
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleUploadAvatarToStorage} style={{ display: 'none' }} />
                <Button
                    variant="outlined"
                    size="small"
                    component="span"
                    sx={{ mt: 2, color: 'red', borderColor: 'red', bgcolor: '#323031', '&:hover': { borderColor: '', bgcolor: '' } }}
                >
                    Upload Avatar
                </Button>
                </label>
            <Button variant="outlined" size="small" onClick={handleReload} sx={{ mt: 2, color: 'red', borderColor: 'red', bgcolor: '#323031' }}>
                Refresh
            </Button>
            </Box>
            </Paper>
        </Grid>
            </Box>
            </Paper>
        </Grid>
        <Stack spacing={2} sx={{ width: '100%', position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                sx={{ width: '100%' }}
                action={
                    <Alert severity="success" sx={{ width: '100%' }} onClick={handleSnackbarClose}>
                        Display name updated successfully!
                    </Alert>
                }
            />
        </Stack>
        </Grid>
    );
}

export default Profile;
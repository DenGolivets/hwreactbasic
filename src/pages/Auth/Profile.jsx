import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Button, Box, Avatar, Paper } from '@mui/material';
import { getAuth, updateProfile } from 'firebase/auth';
import addPictureStorage from './addPictureStorage';
import { TextField } from '@mui/material';
import WebFont from 'webfontloader';

function Profile() {
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;
    const [profileImage, setProfileImage] = useState(user?.photoURL || "/static/images/avatar/2.jpg");

    const [isEditingName, setIsEditingName] = useState(false);
    const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");

    const registrationDate = user.metadata.creationTime
        ? new Date(user.metadata.creationTime)
        : null;

    const lastSignInDate = user.metadata.lastSignInTime
        ? new Date(user.metadata.lastSignInTime)
        : null;

    const handleUploadAvatarToStorage = (e) => {
        const file = e.target.files[0];
        addPictureStorage(file)
        .then((downloadURL) => {
            setProfileImage(downloadURL);
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
        })
        .catch((error) => {
            console.error('Error updating display name:', error.message);
        });
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
            <Paper elevation={3} sx={{ p: 2, border: '2px red solid' }}>
            <Typography variant="h5" color="primary" sx={{ fontFamily: 'Nanum Gothic', textTransform: 'uppercase', color: 'red', fontWeight: 'bold', textAlign: 'center' }}>Personal Information</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                <Avatar src={profileImage} sx={{ width: 100, height: 100, mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" fontSize={24} mb={2} sx={{ fontFamily: 'Fjalla One' }}>
                {user.displayName}
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
                <Button variant="outlined" size="small" onClick={handleUpdateDisplayName} sx={{ color: 'red', borderColor: 'red', bgcolor: 'black' }}>
                Change Name
                </Button>
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
            <Paper elevation={3} sx={{ p: 2, mt: 2, border: '1px red solid' }}>
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
                    sx={{ mt: 2, color: 'red', borderColor: 'red', bgcolor: 'black', '&:hover': { borderColor: '', bgcolor: '' } }}
                >
                    Upload Avatar
                </Button>
                </label>
            <Button variant="outlined" size="small" onClick={handleReload} sx={{ mt: 2, color: 'red', borderColor: 'red', bgcolor: 'black' }}>
                Refresh
            </Button>
            </Box>
            </Paper>
        </Grid>
            </Box>
            </Paper>
            
        </Grid>
        
        </Grid>
    );
}

export default Profile;
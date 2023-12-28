import { Grid, Typography, Button, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { getAuth, updateProfile } from 'firebase/auth';
import addPictureStorage from './addPictureStorage';

function Profile() {
const auth = getAuth();
const user = auth.currentUser;
console.log(user);

const registrationDate = user.metadata.creationTime
? new Date(user.metadata.creationTime)
: null;

const lastSignInDate = user.metadata.lastSignInTime
? new Date(user.metadata.lastSignInTime)
: null;

const handleUploadAvatarToStorage = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
    // addPictureStorage(file, user || {});
    addPictureStorage(file);
};

const handleReload = () => {
    window.location.reload();
};

const handleUpdateDisplayName = () => {
    const newDisplayName = prompt('Enter your new display name:');
    if (newDisplayName) {
        updateProfile(auth.currentUser, { displayName: newDisplayName })
        .then(() => {
            console.log('Display name updated successfully!');
        })
        .catch((error) => {
            console.error('Error updating display name:', error.message);
        });
    }
};

return (
    <Grid container alignContent="flex-start">
        <Grid sx={{ height: '40px', margin: '20px', padding: '10px' }}>
        <Typography variant="h5" sx={{ color: 'red', textTransform: 'uppercase'}}>Personal information</Typography>
        </Grid>
        <Grid
        container
        direction="column"
        sx={{ margin: '20px', backgroundColor: '#8d8a8ad2', padding: '10px' }}
        >
        {user.photoURL ? (
        <Avatar src={user.photoURL} sx={{ width: 100, height: 100, margin: '10px' }} />
        ) : (
        <Avatar src="/static/images/avatar/2.jpg" sx={{ width: 100, height: 100, margin: '10px' }} />
        )}
        <Typography variant="h6" style={{ margin: '10px', color: 'white', fontWeight: 'bold', fontSize: '24px'}}>
            {user.displayName}
        </Typography>
        <Button sx={{ 
            marginLeft: '10px', 
            color: 'red', 
            borderColor: 'red', 
            background: 'black',
            width: '80px',
            height: '30px',
            '&:hover': {
                borderColor: 'red',
                background: 'white',
            }}} 
            onClick={handleUpdateDisplayName} 
            variant="outlined" 
            size="small"
            >
        <Typography style={{ fontSize: '8px' }}>
            Change Name
        </Typography>
        </Button>
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
        }}
        >
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        }}
        >
        <Box sx={{  }}>
        <Typography style={{ margin: '10px 0', fontWeight: 'bold' }}>
            Last Sign-In :
        </Typography>
        <Typography variant="subtitle1" style={{ margin: '0 10px' }}>
            {lastSignInDate ? lastSignInDate.toLocaleDateString() : 'N/A'}
        </Typography>
        </Box>
        </Box>
        <Typography style={{ margin: '10px 10px 0', fontWeight: 'bold' }}>
            Email :
        </Typography>
        <Typography variant="subtitle1" style={{ margin: '0 10px' }}>
            {user.email}
        </Typography>
        <Typography style={{ margin: '10px 10px 0', fontWeight: 'bold' }}>
            Registration Date :
        </Typography>
        <Typography variant="subtitle1" style={{ margin: '0 10px' }}>
            {registrationDate ? registrationDate.toLocaleDateString() : 'N/A'}
        </Typography>
        </Box>
        <Typography style={{ margin: '20px 10px', fontSize: '12px' }}>
            Would you like to add or change your profile picture?
        </Typography>
        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onChange={handleUploadAvatarToStorage} />
        <Button sx={{
            marginTop: '5px',
            color: 'red', 
            borderColor: 'red', 
            background: 'black',
            '&:hover': {
                borderColor: 'red',
                background: 'white',
        }}} 
        onClick={handleReload} 
        variant="outlined" 
        size="small"
        >
            Reload
        </Button>

        
    </Grid>
    </Grid>
);
}

export default Profile;
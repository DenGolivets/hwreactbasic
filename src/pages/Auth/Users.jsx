import { getAuth, updateProfile } from "firebase/auth";

function Users(name) {
    const auth = getAuth();
    const userName = name;
    console.log(userName);

    updateProfile(auth.currentUser, {
    displayName: userName, 
    }).then(() => {
    // Profile updated!
    // ...
    }).catch((error) => {
    // An error occurred
    // ...
    });
}

export default Users;
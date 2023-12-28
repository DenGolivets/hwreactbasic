import { getAuth, updateProfile } from "firebase/auth";

function addPictureBase(picture) {
    const auth = getAuth();

    updateProfile(auth.currentUser, {
        photoURL: picture
    }).then(() => {
    // Profile updated!
    // ...
    }).catch((error) => {
    // An error occurred
    // ...
    });
}

export default addPictureBase;
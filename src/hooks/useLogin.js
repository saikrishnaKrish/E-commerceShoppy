import {
    getAuth,
    signInWithPopup,
    AuthErrorCodes,
    signInWithEmailAndPassword,
    GoogleAuthProvider
} from 'firebase/auth'
import auth from './config'
import { useState } from 'react'
import { firebaseApp } from "./services/firebase";

export const useLogin = () => {
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const provider = new GoogleAuthProvider();

    // initialised auth instance
    const auth = getAuth(firebaseApp);

    const login = async () => {
        setError(null);
        setIsPending(true);

        try {
            const res = await signInWithPopup(auth, provider);
            if (!res) {
                throw new Error('Could not complete signup');
            }
            const user = res.user;
            console.log(user);
            setIsPending(false);
        } catch (err) {
            if (
                err.code === AuthErrorCodes.INVALID_PASSWORD ||
                err.code === AuthErrorCodes.USER_DELETED
            ) {
                setError("The email address or password is incorrect");
            } else {
                console.log(err.code);
                alert(err.code);
            }
            setError(err);
            setIsPending(false);
        }
    };
    return { login, error, isPending }
}

// signInWithGoogle = () => {
//     auth.signInWithPopup(googleProvider).then((res) => {
//       console.log(res.user)
//     }).catch((error) => {
//       console.log(error.message)
//     })
// }



// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;

//     console.log(token,' +++',user)
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });



//   //for sign out
//   signOut(auth).then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   });



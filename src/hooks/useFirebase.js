import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }

    const registerNewUser = (email, password, name) => {
        console.log(name);
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                userName(name);
                // verifyEmail()
            })
            .catch(error => {
                setError('!!already registered');
            })
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError('not registered yet,please register to login');
            })
    }
    const userName = (name) => {
        // const auth = getAuth();
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
            .catch((error) => {
                // An error occurred
                // ...
            });
    }

    const logout = () => {
        signOut(auth)
            .then(() => { })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
        })
    }, [])
    return {
        user,
        signInUsingGoogle,
        registerNewUser,
        processLogin,
        error,
        setError,
        logout
    }
}
export default useFirebase;
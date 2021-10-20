import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const registerNewUser = (email, password, name) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        //     setError('');
        //     userName(name);
        //     // verifyEmail()
        // })
        // .catch(error => {
        //     setError('!!already registered');
        // })
    }

    const processLogin = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    // const userName = (name) => {
    //     // const auth = getAuth();
    //     updateProfile(auth.currentUser, { displayName: name })
    //         .then(result => {

    //         })
    //         .catch((error) => {
    //             // An error occurred
    //             // ...
    //         });
    // }

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [])
    return {
        user,
        signInUsingGoogle,
        registerNewUser,
        processLogin,
        isLoading,
        setIsLoading,
        auth,
        error,
        setError,
        logout
    }
}
export default useFirebase;
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

    //sign in using google
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    //registration using username and password

    const registerNewUser = (email, password, name) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login using username and password
    const processLogin = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    //logout the user
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }
    //auth state
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

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../firebase/firebase.init";

initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google sing in
    const googleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                setError(errorMessage)
            });

    }

    // observe user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            } else {
                setUser('')
            }
        });
    }, [])


    // sign out

    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
            setError(error.message)
        });

    }

    return {
        googleSignIn,
        user,
        logout
    }
}

export default useFirebase;
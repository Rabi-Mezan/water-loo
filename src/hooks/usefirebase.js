
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../firebase/firebase.init";

initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    // create new user by registering with email and password
    const registerUser = (name, email, password) => {
        // console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

            })
            .catch((error) => {

            });
    }


    //login with email password
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)

            })
            .catch((error) => {

            });
    }


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
        registerUser,
        user,
        login,
        logout
    }
}

export default useFirebase;

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../firebase/firebase.init";

initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [IsLoading, setIsLoading] = useState(true)
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
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    // google sing in
    const googleSignIn = () => {
        setIsLoading()
        return signInWithPopup(auth, googleProvider)


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
        logout,
        setIsLoading
    }
}

export default useFirebase;
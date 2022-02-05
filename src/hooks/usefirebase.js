
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../firebase/firebase.init";

initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [IsLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
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
                const newUser = { email, displayName: name }
                setUser(newUser);
                saveUser(email, name);

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


    //save user
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://arcane-anchorage-85397.herokuapp.com/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    // cheking admin or not
    useEffect(() => {
        fetch(`https://arcane-anchorage-85397.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    return {
        googleSignIn,
        registerUser,
        user,
        login,
        logout,
        saveUser,
        IsLoading,
        admin,
        setIsLoading
    }
}

export default useFirebase;
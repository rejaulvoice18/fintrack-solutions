import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile,  } from 'firebase/auth';
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();
   

    // creating user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user info
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo 
        });
    }

    // logout user
    const logOutUSer = () => {
        setLoading(true);
        return signOut(auth)
    }

    // setting on auth change and jwt
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                // get token and store client
                const userInfo = { email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token); 
                        // aikhane setLoading false dite hobe user login problem ariye cholar jonno
                        setLoading(false)
                    }
                })

            }
            else{
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                // user logout hoye gele token ta o remove kore felte hobe
                localStorage.removeItem('access-token');
                setLoading(false)
            }
            console.log('current user', currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        updateUserProfile,
        logOutUSer,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/Firebae.config";
import { useEffect } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]=useState(true)

    // create user
    const createUser =(email,password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
    // Auth state manage 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('User found',currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        };
    },[])
    // logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // login
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        user,
        createUser,
        login,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
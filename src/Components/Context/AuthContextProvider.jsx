import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../Firebase/Firebae.config";
import { useEffect } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser =(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('User found',currentUser);
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe()
        };
    },[])

    const authInfo = {
        user,
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
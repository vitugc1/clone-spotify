import { ReactNode, createContext, useState, useEffect, useCallback } from "react";
import { auth } from "../services/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

type User = {
    id: string;
    name: string;
    avatar: string;
    email: string | null;
}
  
type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({children}:AuthContextProviderProps){
    const [user, setUser] = useState<User>();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if(user) {
          const { displayName, photoURL, uid } = user;
  
          if(!displayName || !photoURL) {
            throw new Error('Missing information from google account');
          }
  
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
            email: user.email
          })
        }
      })
  
      return () => {
        unsubscribe();
      }
    }, [])
  
    const signInWithGoogle = useCallback(async () => {
      const provider = new GoogleAuthProvider()
      
      const result = await signInWithPopup(auth, provider);
        if(result.user) {
          const { displayName, photoURL, uid } = result.user;
  
          if(!displayName || !photoURL) {
            throw new Error('Missing information from google account');
          }
  
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
            email: result.user.email
          })
        }
      
    }, [])
    
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }} >
            {children}
        </AuthContext.Provider>
    );
}





import { ReactNode, createContext, useState, useEffect, useCallback } from "react";
import { auth } from "../services/firebase";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

interface IUser {
    id: string;
    name: string;
    avatar: string;
    email: string | null;
}

interface AuthContextType {
    user: IUser | undefined;
    signInWithGoogle: () => Promise<void>;
    signInWithFacebook: () => Promise<void>;
    sigInWithEmailAndSenha: (email: string, password: string) => Promise<void>;
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({children}:AuthContextProviderProps): JSX.Element {
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if(user) {
          const { uid, displayName, photoURL, email } = user;
  
          if(!displayName || !photoURL) {
            throw new Error('Missing information from google account');
          }
  
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
            email: email,
          });
      }})
  
      return () => {
        unsubscribe();
      }
    }, [])

    
  
    const signInWithGoogle = useCallback(async () => {
      const provider = new GoogleAuthProvider()
      
      const result = await signInWithPopup(auth, provider);
        if(result.user) {
          const { displayName, photoURL, uid, email } = result.user;
  
          if(!displayName || !photoURL) {
            throw new Error('Missing information from google account');
          }
  
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
            email: email
          })
        }
      
    }, []);

    const signInWithFacebook = useCallback(async() => {
      const provider = new FacebookAuthProvider()

      const result = await signInWithPopup(auth, provider);
        if(result.user) {
          const { displayName, photoURL, uid, email } = result.user;
  
          if(!displayName || !photoURL) {
            throw new Error('Missing information from google account');
          }
  
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
            email: email
          })
        }
    } , []);

    const sigInWithEmailAndSenha = useCallback(async (email: string, password: string) => {
      const provider = signInWithEmailAndPassword(auth, email, password);

      const result = await provider;
        if(result.user) {
          const { displayName, photoURL, uid, email } = result.user;
  
          if(!displayName || !photoURL) {
            throw new Error('Missing information from google account');
          }
  
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
            email: email
          })
        }
    }, []);
      
    
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle, signInWithFacebook, sigInWithEmailAndSenha }} >
            {children}
        </AuthContext.Provider>
    );
}





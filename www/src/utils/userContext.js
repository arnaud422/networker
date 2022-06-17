import { onAuthStateChanged } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../config/firebase";


export const uidContext = createContext()

export const getUid = () =>{
    onAuthStateChanged(auth, (user) =>{
        if(user){
            return user.uid
        }
        else{
            return null
        }
    })
}
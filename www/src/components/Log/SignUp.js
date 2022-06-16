import React, { useState } from "react";
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";


const SignUp = () => {
    const [password, setpassword] = useState("")
    const [rPassword, setrPassword] = useState("")
    const [mail, setmail] = useState("")
    const [msgError, setmsgError] = useState("")

    const signUpFireBase = (email, password) => createUserWithEmailAndPassword (auth, email, password)

    const handleData = (e) => {
        if(e.target.id === 'mail'){
            setmail(e.target.value)
        }

        if(e.target.id === 'rPassword'){
            setrPassword(e.target.value)
        }

        if(e.target.id === 'password'){
            setpassword(e.target.value)
        }
    }

    const userDataVerifie = async(e) => {
        e.preventDefault()
        if(mail && password && rPassword){
            if(password === rPassword){
                const cred = await signUpFireBase(mail,password)
                console.log(cred)
            }else{
                setmsgError("Vos mots de passe ne correspondent pas !")
                return 
            }
        }else{
            setmsgError("Veuillez remplir tous les champs !")
            return
        }
        
    }

  return (
    <div className="container-register">
      <input type="email" id="mail" placeholder="Adresse mail" required onChange={handleData} />
      <input type="password" id="password" placeholder="Mot de passe" required onChange={handleData}/>
      <input type="password" id="rPassword" placeholder="Mot de passe" required onChange={handleData}/>

      <button onClick={userDataVerifie}>Créer mon compte</button>

      <span className="text-error">{msgError}</span>
    </div>
  );
};

export default SignUp;

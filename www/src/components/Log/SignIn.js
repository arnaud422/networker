import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword} from "firebase/auth";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signInFireBase = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const handleForm = (e) => {
    if (e.target.id === "mail") {
      setemail(e.target.value);
    } else if (e.target.id === "password") {
      setpassword(e.target.value);
    }
  };

  const login = async () => {
    try {
      const cred = await signInFireBase(email, password);
      console.log("super");
    //////////////////////////////////////////////////////////////////
    //   changer la manière de récupérer le uid avec useContext     //
    //////////////////////////////////////////////////////////////////

    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       const uid = user.uid;
    //       console.log(uid);
    //     }
    //   });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-login">
      <input
        type="email"
        id="mail"
        placeholder="Adrese mail"
        onChange={handleForm}
      />
      <input
        type="password"
        id="password"
        placeholder="Mot de passe"
        onChange={handleForm}
      />

      <button type="submit" onClick={login}>
        Se connecter
      </button>
    </div>
  );
};

export default SignIn;

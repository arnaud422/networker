import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Log = (props) => {
  const [signInModal, setsignInModal] = useState(props.signin);
  const [signUpModal, setsignUpModal] = useState(props.signup);

  const handleForm = (e) => {
    console.log(e.target.id);
    if (e.target.id === "register") {
      setsignInModal(false);
      setsignUpModal(true);
    } else {
      setsignInModal(true);
      setsignUpModal(false);
    }
  };
  return (
    <div className="container-log text-init">
      <div className="connect">
        {signInModal && <SignIn />}
        {signUpModal && <SignUp />}
      </div>
      <br />
      <br />

      <div className="footer">

        {signInModal && !signUpModal ? (
          <button onClick={handleForm} id="register" className="pointer border">
            Vous n'avez pas de compte ?
          </button>
        ) : (
          <button onClick={handleForm} id="login" className="pointer">
            Se connecter
          </button>
        )}

      </div>
    </div>
  );
};

export default Log;

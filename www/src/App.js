import { useEffect, useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { uidContext } from './utils/userContext';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './config/firebase';


import Routes from './routes/index';
import './style/root/root.css';

function App() {

  const [uid, setUid] = useState(null)

  useEffect(()=>{
    const getUid = ()=>{
      onAuthStateChanged(auth, (user)=>{
        if(user){
          setUid(user.uid)
        }
      })
    }
    getUid()
  })

  return (
    <uidContext.Provider value={uid}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </uidContext.Provider>
  );
}

export default App;

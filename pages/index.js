
import firebase from 'firebase/app';
import 'firebase/auth';
import { app } from './firebase';
import axios from "axios"
import * as React from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';

const index = () => {

  const [myData, setData] = React.useState();
  

  const loadUsers = async (token) => {
    const result = await axios.get("http://127.0.0.1:3001/user/624d6e840494e4d2936a7abe", {
      headers: {
        Authorization:'Bearer ' + token +'nil'
      }
    });
    setData(result.data)
    setAuth(true)
    console.log(result)



  };

  const provider = new GoogleAuthProvider();
  const [auth, setAuth] = useState(false)
  const loginWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const user = result.user;
        if (user) {
          
          const token = await user.getIdToken()

          loadUsers(token);
        }
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }
  return (
    <>
      <div className='contentbody'>
        {
          auth ? (<h1>Dashboard</h1>) : (
            <button onClick={loginWithGoogle}>Login with Google</button>
          )
        }
                    {/* <button onClick={uploadExcelFile}>upload Sudents Excel file</button> */}

      </div>
    </>
  )
}

export default index

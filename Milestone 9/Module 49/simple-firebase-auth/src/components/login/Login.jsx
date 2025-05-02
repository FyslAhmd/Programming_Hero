import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setIsLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        setIsLogin(true);
      })
      .catch((error) => console.log(error));
  };
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsLogin(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>login please</h1>
      {isLogin ? (
        <button onClick={handleSignOut} className="btn btn-primary">
          Sign out
        </button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn} className="btn btn-primary">
            Sign in with Google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="btn btn-primary ml-10"
          >
            Sign in with Github
          </button>
        </>
      )}

      {user && isLogin && (
        <div>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;

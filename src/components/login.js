import React, { useState } from "react";
import { auth, firestore } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginLogoutRegistration = () => {
  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await firestore.collection("users").doc(user.uid).set({
        displayName,
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      ) : (
        <div>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
              Display Name:
              <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
            </label>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginLogoutRegistration;

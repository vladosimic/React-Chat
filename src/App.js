import React from "react";
import "./App.css";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./firebase/firebase";
import SignIn from "./components/signIn";
import SignOut from "./components/signOut";
import ChatRoom from "./components/chatRoom";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

export default App;

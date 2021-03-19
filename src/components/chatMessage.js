import React from "react";
import { auth } from "../firebase/firebase";

const ChatMessage = ({ message }) => {
  const { text, uid, photoURL, username } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
        <span>{username}</span>
      </div>
    </>
  );
};

export default ChatMessage;

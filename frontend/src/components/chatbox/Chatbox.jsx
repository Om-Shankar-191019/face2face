import React from "react";
import MessageList from "./MessageList";

const Chatbox = () => {
  return (
    <div className="h-screen w-full border-2 border-red-600 sm:flex sm:flex-1 flex-col">
      <MessageList />
    </div>
  );
};

export default Chatbox;

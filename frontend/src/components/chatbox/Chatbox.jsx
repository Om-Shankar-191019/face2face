import React from "react";
import MessageList from "./MessageList";
import ChatboxHeader from "./ChatboxHeader";
import { useSelector } from "react-redux";
import WelcomeChatbox from "./WelcomeChatbox";

const Chatbox = () => {
  const { selectedConversation } = useSelector((state) => state.chat);

  return (
    <>
      {selectedConversation ? (
        <div className="h-screen w-full  sm:flex sm:flex-1 flex-col">
          <ChatboxHeader
            profilePic={selectedConversation.profilePic}
            fullName={selectedConversation.fullName}
          />
          <MessageList />
        </div>
      ) : (
        <WelcomeChatbox />
      )}
    </>
  );
};

export default Chatbox;

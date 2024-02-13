import React from "react";
import useGetMessages from "../../hooks/useGetMessages";
import bgChatboxImage from "../../assets/bg-chatbox.png";
import Message from "./Message";

const MessageList = () => {
  const { loading, messages } = useGetMessages();

  return (
    <div className="bg-gray-200 flex-1 px-2 py-4">
      {messages.map((item, index) => (
        <Message key={item._id} messageItem={item} />
      ))}
    </div>
  );
};

export default MessageList;

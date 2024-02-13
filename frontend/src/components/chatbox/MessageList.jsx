import React from "react";
import useGetMessages from "../../hooks/useGetMessages";

const MessageList = () => {
  const { loading, messages } = useGetMessages();
  console.log(messages);
  return <div className="bg-gray-400">MessageList</div>;
};

export default MessageList;

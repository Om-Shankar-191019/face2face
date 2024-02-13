import React from "react";
import useGetMessages from "../../hooks/useGetMessages";

const MessageList = () => {
  const { loading, messages } = useGetMessages();
  console.log(messages);
  return <div>MessageList</div>;
};

export default MessageList;

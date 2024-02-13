import React from "react";
import useGetAllUsers from "../../hooks/useGetAllUsers";
import Conversation from "./Conversation";
import { useSelector } from "react-redux";

const ConversationList = () => {
  const { loading } = useGetAllUsers();
  const { conversations } = useSelector((state) => state.chat);

  return (
    <div>
      {conversations.map((user, index) => (
        <Conversation key={user._id} user={user} />
      ))}
    </div>
  );
};

export default ConversationList;

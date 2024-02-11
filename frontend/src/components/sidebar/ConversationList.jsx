import React from "react";
import useGetAllUsers from "../../hooks/useGetAllUsers";
import Conversation from "./Conversation";

const ConversationList = () => {
  const { loading, allUsers } = useGetAllUsers();

  return (
    <div>
      {allUsers.map((user, index) => (
        <Conversation
          key={user._id}
          user={user}
          lastIndex={index === allUsers.length - 1}
        />
      ))}
    </div>
  );
};

export default ConversationList;

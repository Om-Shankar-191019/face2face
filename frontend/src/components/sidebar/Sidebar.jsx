import React from "react";
import SearchConversation from "./SearchConversation";
import ConversationList from "./ConversationList";

const Sidebar = () => {
  return (
    <div>
      <SearchConversation />
      <ConversationList />
    </div>
  );
};

export default Sidebar;

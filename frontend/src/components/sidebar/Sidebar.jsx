import React from "react";
import SearchConversation from "./SearchConversation";
import ConversationList from "./ConversationList";

const Sidebar = () => {
  return (
    <div className="h-screen w-full sm:w-80 border-r border-slate-500 px-4 flex flex-col overflow-scroll">
      <div>
        <h2 className="py-1 font-semibold text-lg ">Chats</h2>
      </div>
      <SearchConversation />
      <ConversationList />
    </div>
  );
};

export default Sidebar;

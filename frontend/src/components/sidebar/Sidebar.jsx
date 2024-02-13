import React from "react";
import SearchConversation from "./SearchConversation";
import ConversationList from "./ConversationList";

const Sidebar = () => {
  return (
    <div className="h-screen w-full sm:w-80 border-r border-slate-500 px-1 flex flex-col overflow-auto">
      <div className="bg-themeColor sm:bg-white text-white sm:text-black">
        <h2 className=" py-2 px-2 font-semibold text-lg ">Chats</h2>
      </div>
      <SearchConversation />
      <ConversationList />
    </div>
  );
};

export default Sidebar;

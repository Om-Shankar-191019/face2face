import React from "react";

const ChatboxHeader = ({ fullName, profilePic }) => {
  return (
    <div
      className={`flex gap-2 items-center hover:bg-themeColor rounded hover:text-white px-2 py-2 cursor-pointer	`}
    >
      <div className={`avatar `}>
        <div className="w-12 rounded-full">
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <div>
            <p className="font-semibold text-sm ">{fullName}</p>
            <p className="text-[10px] text-themeColorHover ">status</p>
          </div>
          <span className="text-xs ">options</span>
        </div>
      </div>
    </div>
  );
};

export default ChatboxHeader;

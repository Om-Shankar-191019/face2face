import React from "react";
import { defaultAvatar } from "../../utils/constants";

const Conversation = ({ user, lastIndex }) => {
  const { profilePic, fullName, username } = user;
  const isSelected = false;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-themeColor rounded hover:text-white px-2 py-2 cursor-pointer	`}
      >
        <div className={`avatar `}>
          <div className="w-12 rounded-full">
            <img
              src={profilePic ? profilePic : defaultAvatar}
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <div>
              <p className="font-semibold text-sm ">{fullName}</p>
              <p className="text-[10px] text-themeColorHover ">{username}</p>
            </div>
            <span className="text-xs ">12:34 am</span>
          </div>
        </div>
      </div>

      {/* {!lastIdx && <div className="divider my-0 py-0 h-1" />} */}
    </>
  );
};

export default Conversation;

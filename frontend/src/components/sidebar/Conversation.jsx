import React from "react";
import { defaultAvatar } from "../../utils/constants";

const Conversation = ({ user, lastIndex }) => {
  const { profilePic, fullName, username } = user;
  const isSelected = false;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				
			`}
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
            <p className="font-bold text-gray-200">{fullName}</p>
            <span className="text-xl">12:34 am</span>
          </div>
        </div>
      </div>

      {/* {!lastIdx && <div className="divider my-0 py-0 h-1" />} */}
    </>
  );
};

export default Conversation;

import React from "react";
import { defaultAvatar } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedConversationReducer } from "../../redux/slices/chatSlice";

const Conversation = ({ user, lastIndex }) => {
  const dispatch = useDispatch();

  const { profilePic, fullName, username, _id } = user;

  return (
    <>
      <div
        onClick={() => dispatch(setSelectedConversationReducer(user))}
        className={`flex gap-2 items-center hover:bg-themeColor rounded hover:text-white px-2 py-2 cursor-pointer	`}
      >
        <div className={`avatar `}>
          <div className="w-10 rounded-full">
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

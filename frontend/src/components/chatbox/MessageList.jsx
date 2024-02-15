import React from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessage from "../../hooks/useListenMessage";
import { useSelector } from "react-redux";

const MessageList = () => {
  const { loading, messages } = useGetMessages();
  useListenMessage();
  const { selectedConversation } = useSelector((state) => state.chat);

  return (
    <div className="bg-gray-200 flex-1 px-2 py-4 overflow-auto">
      {loading &&
        [...Array(4)].map((_, index) => (
          <MessageSkeleton key={`msgSkeleton - ${index}`} />
        ))}

      {!loading &&
        messages.length > 0 &&
        messages.map((item) => {
          if (
            item.receiverId === selectedConversation._id ||
            item.senderId === selectedConversation._id
          ) {
            return <Message key={item._id} messageItem={item} />;
          }
        })}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-400">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default MessageList;

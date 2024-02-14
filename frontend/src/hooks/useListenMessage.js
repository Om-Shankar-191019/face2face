import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSocketContext } from "../context/SocketContext";
import { setMessagesReducer } from "../redux/slices/chatSlice";

const useListenMessage = () => {
  const { messages } = useSelector((state) => state.chat);
  const { socket } = useSocketContext();
  const dispatch = useDispatch();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      dispatch(setMessagesReducer([...messages, newMessage]));
    });

    return () => socket?.off("newMessage");
  }, [socket, messages, setMessagesReducer]);
};

export default useListenMessage;

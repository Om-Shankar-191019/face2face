import React, { useState } from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };
  return (
    <form className="px-2 py-2 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className=" text-sm rounded-lg block w-full p-2.5 outline-none bg-gray-200  "
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend className="text-themeColor" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

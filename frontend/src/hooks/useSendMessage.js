import { useState } from "react";
import { useSelector } from "react-redux";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation } = useSelector((state) => state.chat);
  const sendMessage = async (message) => {
    if (message.length === 0) return;
    setLoading(true);
    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;

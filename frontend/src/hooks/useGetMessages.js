import { useEffect, useState } from "react";
import toast from "react-hot-toast";


const useGetMessages = () => {
    const [messages,setMessages] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() =>{
        const getMessages = async () =>{
            setLoading(true);
            try {
                const res = await fetch("/api/messages/")
            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(true);
            }
        } 
    },[])
  return ;
}

export default useGetMessages
import toast from "react-hot-toast";

const useSeenMessage = () => {
  const markMessagesAsRead = async (conversation) => {
    try {
      const res = await fetch(`/api/messages/seen/${conversation._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

    } catch (error) {
      toast.error(error.message);
    }
  };

  return { markMessagesAsRead };
};

export default useSeenMessage;

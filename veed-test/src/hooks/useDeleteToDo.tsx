import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

const useDeleteToDo = () => {
  const queryClient = new QueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: number) => {
      return axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
    },
    onError: (error) => {
      console.error("Error deleting todo:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allToDos"] });
      console.log(`Todo deleted successfully`);
    },
  });

  return {
    deleteTodo: mutate,
    // data,
    // isError,
    // isSuccess,
  };
};

export default useDeleteToDo;

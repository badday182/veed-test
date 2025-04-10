import { IToDos } from "@/types";
import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

const useCreateToDo = () => {
  const queryClient = new QueryClient();
  const { mutate } = useMutation({
    mutationFn: (newTodo: Omit<IToDos, "userId">) => {
      return axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
    },
    onError: (error) => {
      console.error("Error creating todo:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allToDos"] });
      console.log("Todo created successfully");
    },
  });

  return {
    createTodo: mutate,
    // data,
    // isError,
    // isSuccess,
  };
};

export default useCreateToDo;

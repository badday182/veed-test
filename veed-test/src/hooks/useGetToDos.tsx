import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

const useGetToDos = (isEnable: boolean) => {
  const getAllToDos = async () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
  };

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["allToDos"],
    queryFn: getAllToDos,
    select: (data) => data.data,
    enabled: isEnable, // Зробити запит в жалежності від потреби
  });

  useEffect(() => {
    if (isError) {
      console.error("Error fetching todos:", isError);
    }
  }, [isError]);
  useEffect(() => {
    if (isSuccess) {
      console.log("Fetched todos successfully");
    }
  }, [isSuccess]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetToDos;

"use client";

import { Todo } from "@/types";
import useGetToDos from "@/hooks/useGetToDos";
import TodoCard from "@/components/todoCard/TodoCard";

const ToDosList = () => {
  const isEnableForListRender = true; // робити запит в жалежності від потреби
  const { data, isLoading, isError } = useGetToDos(isEnableForListRender); // окремо виніс логіку запиту у хук

  return (
    <div className="flex flex-col items-center space-y-4 p-4 w-full gap-4">
      {isLoading ? (
        <div className="text-center py-8">Loading...</div>
      ) : data?.length ? (
        data.map((todo: Todo) => <TodoCard {...todo} key={todo.id} />)
      ) : isError ? (
        <div className="text-center py-8">No tasks found</div>
      ) : null}
    </div>
  );
};

export default ToDosList;

"use client";

import { Todo } from "@/types";
import useGetToDos from "@/hooks/useGetToDos";
import TodoCard from "@/components/todoCard/TodoCard";
import TodoCardSkeleton from "@/components/todoCardSkeleton/TodoCardSkeleton";

const ToDosList = () => {
  const isEnableForListRender = true; // робити запит в жалежності від потреби
  const { data, isLoading, isError } = useGetToDos(isEnableForListRender); // окремо виніс логіку запиту у хук

  // массив для скелетон-карточек
  const skeletonCards = Array.from({ length: 5 }, (_, index) => (
    <TodoCardSkeleton key={`skeleton-${index}`} />
  ));

  return (
    <div className="flex flex-col items-center space-y-4 p-4 w-full gap-4">
      {isLoading ? (
        <>{skeletonCards}</>
      ) : data?.length ? (
        data.map((todo: Todo) => <TodoCard {...todo} key={todo.id} />)
      ) : isError ? (
        <div className="text-center py-8">No tasks found</div>
      ) : null}
    </div>
  );
};

export default ToDosList;

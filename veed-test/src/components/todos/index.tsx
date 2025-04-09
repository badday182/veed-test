"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import styles from "./index.module.css";
import clsx from "clsx";
import { Todo } from "@/types";
import useGetToDos from "@/hooks/useGetToDos";

const ToDosList = () => {
  const isEnableForListRender = true; // робити запит в жалежності від потреби
  const { data, isLoading, isError } = useGetToDos(isEnableForListRender); // окремо виніс логіку запиту у хук

  return (
    <div className="flex flex-col items-center space-y-4 p-4 w-full gap-4">
      {isLoading ? (
        <div className="text-center py-8">Loading...</div>
      ) : data?.length ? (
        data.map((todo: Todo) => (
          <Card
            key={todo.id}
            className={clsx(styles.brs, "shadow-md min-w-xs max-w-3xl w-full")}
          >
            <CardHeader className="pb-2 grow">
              <CardTitle className="text-lg flex gap-2 items-baseline  ">
                <Checkbox id={`todo-${todo.id}`} checked={todo.completed} />
                <span
                  className={
                    todo.completed ? "line-through text-muted-foreground" : ""
                  }
                >
                  {todo.title}
                </span>
              </CardTitle>
              <CardDescription>Task #{todo.id}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Badge variant={todo.completed ? "default" : "secondary"}>
                {todo.completed ? "Completed" : "Pending"}
              </Badge>
            </CardFooter>
          </Card>
        ))
      ) : isError ? (
        <div className="text-center py-8">No tasks found</div>
      ) : (
        "Unexpected error, call 911!"
      )}
    </div>
  );
};

export default ToDosList;

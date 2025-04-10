import {
  Card,
  //   CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash } from "lucide-react";

import { Todo } from "@/types";
import clsx from "clsx";
import useDeleteToDo from "@/hooks/useDeleteToDo";
import { QueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const TodoCard = ({ id, completed, title }: Todo) => {
  const { deleteTodo } = useDeleteToDo();
  const queryClient = new QueryClient();

  const handleDeleteToDo = () => {
    deleteTodo(id);
    queryClient.invalidateQueries({ queryKey: ["allToDos"] });
    toast("You deleted the following task:", {
      description: (
        <>
          <p>{JSON.stringify(title)}</p>
          <p>This functionality is not implemented on server</p>
        </>
      ),
    });
  };
  return (
    <Card key={id} className={clsx("shadow-md min-w-xs max-w-3xl w-full")}>
      <CardHeader className="pb-2 grow">
        <CardTitle className="text-lg flex gap-2 items-baseline  ">
          <Checkbox
            id={`todo-${id}`}
            checked={completed}
            onClick={() => {
              toast("This functionality is not implemented yet :)");
            }}
          />
          <span
            className={completed ? "line-through text-muted-foreground" : ""}
          >
            {title}
          </span>
        </CardTitle>
        {/* <CardDescription>Task #{id}</CardDescription> */}
      </CardHeader>
      <CardFooter>
        <Badge variant={completed ? "default" : "secondary"}>
          {completed ? "Completed" : "Pending"}
        </Badge>
        <Button
          className={clsx(
            "ml-auto shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          )}
          variant="destructive"
          onClick={handleDeleteToDo}
        >
          <Trash onClick={handleDeleteToDo} />
          Delete ToDo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;

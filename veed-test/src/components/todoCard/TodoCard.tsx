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

// const TodoCard = (todo: Todo) => {
const TodoCard = ({ id, completed, title }: Todo) => {
  return (
    <Card key={id} className={clsx("shadow-md min-w-xs max-w-3xl w-full")}>
      <CardHeader className="pb-2 grow">
        <CardTitle className="text-lg flex gap-2 items-baseline  ">
          <Checkbox id={`todo-${id}`} checked={completed} />
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
        <Trash className="ml-auto text-red-500" />
      </CardFooter>
    </Card>
  );
};

export default TodoCard;

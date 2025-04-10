"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useCreateToDo from "@/hooks/useCreateToDo";
import { useId } from "react";

const FormSchema = z.object({
  task: z.string().min(2, {
    message: "Task must be at least 2 characters.",
  }),
});

export function AddTodoForm() {
  const { createTodo } = useCreateToDo();
  const id = useId();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      task: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    createTodo({
      id: +id,
      title: data.task,
      completed: false,
    });
    toast("You added the following task:", {
      description: (
        <>
          <p>{JSON.stringify(data.task)}</p>
          <p>This functionality is not implemented on server</p>
        </>
      ),
    });
    form.reset();
  }

  return (
    <div className="min-w-xs max-w-3xl w-full min-h-40">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add New Task</FormLabel>
                <FormControl>
                  <Input placeholder="Text New Task" {...field} />
                </FormControl>
                {/* <FormDescription>Add New Task.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add</Button>
        </form>
      </Form>
    </div>
  );
}

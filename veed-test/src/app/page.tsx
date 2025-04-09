import ToDosList from "@/components/todos";
import QueryProvider from "@/components/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Home() {
  return (
    <QueryProvider>
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col w-full items-center">
          <ToDosList />
        </main>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  );
}

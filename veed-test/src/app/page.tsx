import Posts from "@/components/posts";
import QueryProvider from "@/components/QueryProvider";
// import { Button } from "@/components/ui/button";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Home() {
  return (
    <QueryProvider>
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <p>hello</p>
          <Posts />

          {/* <Button variant="primary">Click me</Button> */}
        </main>
        {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer> */}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  );
}

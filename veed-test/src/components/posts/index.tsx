"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Posts = () => {
  const getAllPosts = async () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
  };

  const { data, isLoading } = useQuery({
    queryKey: ["allPosts"],
    queryFn: getAllPosts,
    select: (data) => data.data,
  });

  return (
    <div>
      {isLoading
        ? "Loading..."
        : data?.length
        ? data.map((post: any) => <div key={post.id}>{post.title}</div>)
        : "No posts found"}
    </div>
  );
};

export default Posts;

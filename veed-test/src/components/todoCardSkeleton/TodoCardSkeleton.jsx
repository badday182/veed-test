const TodoCardSkeleton = () => {
  return (
    <div className="shadow-md min-w-xs max-w-3xl w-full bg-white rounded-lg h-38 flex flex-col">
      {/* CardHeader */}
      <div className="p-6 pb-2 grow mb-auto">
        {/* CardTitle with Checkbox and Title */}
        <div className="text-lg flex gap-2 items-baseline">
          {/* Checkbox placeholder */}
          <div className="h-4 w-4 rounded bg-gray-200 animate-pulse"></div>
          {/* Title placeholder */}
          <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      {/* CardFooter */}
      <div className="p-6 pt-2 flex items-center justify-between">
        {/* Badge placeholder */}
        <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>

        {/* Button placeholder */}
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse ml-auto"></div>
      </div>
    </div>
  );
};

export default TodoCardSkeleton;

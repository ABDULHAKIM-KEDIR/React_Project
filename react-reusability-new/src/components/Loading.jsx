import React from "react";

function Loading({ size = "md", message = "Loading..." }) {
  
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-4",
    lg: "w-16 h-16 border-4"
  };

  return (
    <div className="text-center p-8">
      <div
        className={`spinner ${sizeClasses[size]} border-gray-200 border-t-blue-500 rounded-full mx-auto animate-spin`}
      ></div>

      {message && (
        <p className="mt-4 text-gray-600 font-medium">{message}</p>
      )}
    </div>
  );
}

export default Loading;
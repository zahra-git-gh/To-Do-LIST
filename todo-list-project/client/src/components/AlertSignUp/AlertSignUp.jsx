import { useEffect, useState } from "react";

export function AlertSignUp({ isSuccess, alertMessage, isHide }) {
  const [isClose, setIsClose] = useState(false);
  useEffect(() => {
    setIsClose(false);
  }, [isHide]);
  return (
    <div
      id="alert-border-1"
      className={`${
        isSuccess
          ? "text-blue-800 bg-blue-50 border-blue-300 dark:border-blue-800 dark:text-blue-400 dark:bg-gray-800"
          : "text-red-800 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
      } ${isHide && "hidden"} 
          ${isClose ? "hidden" : "flex"}
        absolute shadow-md w-11/12 max-w-lg mt-4 m-auto z-50 items-center p-4 mb-4  border-t-4 top-0`}
      role="alert"
    >
      <svg
        className="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div className="ms-3 text-sm font-medium">{alertMessage}</div>
      <button
        onClick={() => {
          setIsClose(!isClose);
        }}
        type="button"
        className={`${
          isSuccess
            ? "hidden"
            : "bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
        } ms-auto -mx-1.5 -my-1.5 inline-flex items-center justify-center h-8 w-8 `}
        data-dismiss-target="#alert-border-1"
        aria-label="Close"
      >
        <span className="sr-only">Dismiss</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
      </button>
    </div>
  );
}

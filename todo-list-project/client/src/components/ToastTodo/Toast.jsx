export function Toast({ isHidden }) {
  return (
    <div
      id="toast-bottom-left"
      className={`${
        isHidden && "hidden"
      } fixed flex items-center w-full max-w-xs p-4 space-x-4  divide-x rtl:divide-x-reverse  rounded-lg  bottom-5 left-5 xl:left-56`}
      role="alert"
    >
      <div
        id="toast-success"
        className="flex items-center w-full max-w-sm p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ">
          <div className="bg-[url('/checklist_1.png')] w-8 h-8 bg-center bg-cover"></div>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">
          {"Todo added successfully."}
          <span className="block">{"Good luck :)"}</span>
        </div>
      </div>
    </div>
  );
}

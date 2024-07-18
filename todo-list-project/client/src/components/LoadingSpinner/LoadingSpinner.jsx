export function LoadingSpinner({ isLoading }) {
  return (
    <div
      className={`${
        !isLoading && "hidden"
      } w-8 h-8 md:w-10 md:h-10 spinner bg-center bg-cover bg-[url('/spinner-2.png')] animate-spin`}
    ></div>
  );
}

import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navgate = useNavigate();
  return (
    <section className="w-full h-screen bg-[url('/notfound.jpg')] bg-center bg-cover relative">
      <section className="absolute bg-[rgb(35,73,94)] w-full h-36 bottom-0 flex justify-center items-center">
        <button
          onClick={() => navgate("/")}
          className="bg-orange-400 py-3 px-4 rounded-lg text-white font-semibold text-lg hover:bg-orange-600"
        >
          Home Page
        </button>
      </section>
    </section>
  );
}

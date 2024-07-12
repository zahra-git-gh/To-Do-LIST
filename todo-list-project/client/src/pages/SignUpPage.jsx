import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import { SignUpHeader } from "../components/SignUpHeader/SignUpHeader";

export function SignUpPage() {
  return (
    <section className="w-full h-screen xl:overflow-y-hidden">
      <section className=" lg:flex lg:flex-row w-full h-full items-center">
        <section className="w-full flex flex-col items-center justify-center gap-y-20 h-full bg-blue-900 dark:bg-slate-800">
          <div className="dark w-full fixed top-0">
            <SignUpHeader />
          </div>
          <div className="">
            <h1 className="text-2xl text-white font-semibold">
              Sign up and come in
            </h1>
          </div>
          <div className="w-11/12 h-1/2 bg-[url('./light-mode-screen.jpeg')] dark:bg-[url('./dark-mode-screen.jpg')] bg-cover bg-center rounded-lg relative">
            <img
              className="absolute w-10 h-10 -top-6 rotate-12 left-3"
              src="./checklist_2.png"
            />
            <img
              className="absolute w-10 h-10 bottom-0 -rotate-12 left-16"
              src="./checklist_1.png"
            />
            <img
              className="absolute w-12 h-12 -top-16 rotate-12 left-36"
              src="./checklist_1.png"
            />
            <img
              className="absolute w-10 h-10 -bottom-20 rotate-6 right-64"
              src="./checklist_1.png"
            />
            <img
              className="absolute w-12 h-12 -top-20 -rotate-12 right-9"
              src="./checklist-3.png"
            />
            <img
              className="absolute w-10 h-10 -bottom-6 rotate-12 right-36"
              src="./checklist-4.png"
            />
            <img
              className="absolute w-14 h-14 -bottom-14 -rotate-90 left-32"
              src="./checklist-7.png"
            />
            <img
              className="absolute w-14 h-14 -top-14 rotate-12 right-52"
              src="./checklist-7.png"
            />
            <img
              className="absolute w-10 h-10 -bottom-6 -rotate-6 left-56"
              src="./checklist-6.png"
            />
          </div>
        </section>
        <SignUpForm />
      </section>
    </section>
  );
}

import { Link } from "react-router-dom";
import { useModal } from "../../hooks/ModalContext";

export function UncompletedTaskToday({ data, modalIDD }) {
  const { isModalOpen, modalID, closeModal } = useModal();
  if (isModalOpen && modalID === modalIDD) {
    return (
      <>
        <section
          onClick={() => closeModal()}
          className="z-10 fixed w-full h-full top-0 right-0"
        ></section>
        <div className="w-52 z-20 py-3 px-4 border border-slate-300  rounded-lg absolute right-0 bg-slate-100 xl:w-56 mt-3 dark:bg-slate-800">
          {data.length > 0 ? (
            <>
              <p className="text-xs font-semibold sm:text-sm xl:text-base dark:text-slate-200">
                You have {data.length} uncompleted tasks today:
              </p>
              <ul>
                {data.map((todo, i) => {
                  return (
                    <li
                      key={i}
                      className="py-2 sm:text-sm text-xs xl:text-base hover:text-red-500 text-slate-400 cursor-pointer dark:hover:text-slate-200"
                    >
                      <Link state={todo} to={`/task/${todo._id}`}>
                        {todo.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <p className="text-xs">nothig to show here</p>
          )}
        </div>
      </>
    );
  } else {
    return "";
  }
}

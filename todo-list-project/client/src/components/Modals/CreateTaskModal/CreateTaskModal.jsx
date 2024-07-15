import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../hooks/ModalContext";
import { CheckBox } from "../../CheckBox/CheckBox";
import "../EditTaskModal/EditTaskModal.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createTodo } from "../../../redux/todos.slice";
export function CreateTaskModal({ modalIDD }) {
  const { isModalOpen, closeModal, modalID } = useModal();
  //state for getting data of checkboxs
  const [isImportant, setIsImportant] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  //react hook form for handle our form create task
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  //
  //date today for add to our data and for date input validation
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  //create custom validation for date input
  //deadline of tasks should not be before
  function isBefore(date) {
    if (!date) {
      return false;
    }
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
    const today1 = Date.parse(formattedDate);
    const deadline = Date.parse(date);
    return deadline >= today1;
  }
  //helper text for show errors after inputs
  const helperText = {
    title: {
      required: "Title is required",
      maxLength: "Should be less than 30 letter",
    },
    deadline: {
      // June 12, 2016
      required: "Date is required",
      isBefore: `Hire date must be ${month} ${day}  ${year} or after.`,
    },
    description: {
      maxLength: "Should be less than 50 letter",
    },
  };
  //handle submit function form
  async function submitCreateTaskForm(value) {
    const task = {
      ...value,
      isCompleted,
      isImportant,
    };
    try {
      console.log(task);
      await dispatch(await createTodo({ token, data: task }));
    } catch (error) {
      console.log(error);
    }
    reset();
    closeModal();
    setIsCompleted(false);
    setIsImportant(false);
  }
  const directories = useSelector((state) => state.todo.directories);

  //check for open and close modal
  if (modalID !== modalIDD) {
    return null;
  }
  if (isModalOpen) {
    return (
      <>
        <div
          onClick={() => {
            reset();
            closeModal();
          }}
          className="w-full h-full  bg-slate-600/30 z-10 dark:z-10 fixed top-0 right-0 flex justify-center py-4"
        >
          <section
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-11/12  max-w-lg bg-slate-200 p-3 fixed rounded-lg dark:bg-slate-900 z-50"
          >
            <div className="flex w-full justify-between items-center">
              <h1 className="text-lg font-semibold text-slate-500 dark:text-slate-200 lg:text-2xl">
                Add a task
              </h1>
              <button
                onClick={(e) => {
                  reset();
                  closeModal();
                  e.stopPropagation();
                }}
                className="close w-6 h-6 bg-slate-600 dark:bg-slate-200"
              ></button>
            </div>
            <form onSubmit={handleSubmit(submitCreateTaskForm)}>
              <div className="flex flex-col gap-y-2 mt-5">
                <label
                  className="text-xs sm:text-sm text-slate-500 xl:text-base"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs sm:text-sm xl:text-base"
                  type="text"
                  id="title"
                  placeholder="e.g, study for the test"
                  {...register("title", { required: true, maxLength: 30 })}
                />
                {errors.title && (
                  <div className="text-sm text-red-500 font-thin">
                    {helperText.title[errors.title.type]}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-y-2 mt-5">
                <label
                  className="text-xs sm:text-sm text-slate-500 xl:text-base"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs sm:text-sm xl:text-base"
                  type="date"
                  id="date"
                  {...register("deadline", {
                    required: true,
                    validate: { isBefore },
                  })}
                />
                {errors.deadline && (
                  <div className="text-sm text-red-500 font-thin">
                    {helperText.deadline[errors.deadline.type]}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-y-2 mt-5">
                <label
                  className="text-xs sm:text-sm text-slate-500 xl:text-base"
                  htmlFor="description"
                >
                  Description (optional)
                </label>
                <textarea
                  className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-16 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none p-2 text-xs sm:text-sm xl:text-base"
                  id="description"
                  placeholder="e.g, study for the test"
                  {...register("description", { maxLength: 50 })}
                />
                {errors.description && (
                  <div className="text-sm text-red-500 font-thin">
                    {helperText.description[errors.description.type]}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-y-2 mt-5">
                <label
                  className="text-xs sm:text-sm text-slate-500 xl:text-base"
                  htmlFor="directory"
                >
                  Select a directory
                </label>
                <select
                  className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs text-slate-600 sm:text-sm xl:text-base"
                  id="directory"
                  {...register("directory")}
                >
                  {directories.map((directory, i) => {
                    return (
                      <option key={i} value={directory._id} selected={
                        directory.name==='Main' && "selected"
                      }>
                        {directory.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex items-center gap-x-2 mt-5">
                <CheckBox
                  defaultChecked={isImportant}
                  onClick={(e) => {
                    setIsImportant(e);
                  }}
                />
                <label className="text-xs text-slate-500 sm:text-sm xl:text-base">
                  Mark as important
                </label>
              </div>
              <div className="flex items-center gap-x-2 mt-4">
                <CheckBox
                  defaultChecked={isCompleted}
                  onClick={(e) => {
                    setIsCompleted(e);
                  }}
                />
                <label className="text-xs text-slate-500 sm:text-sm xl:text-base">
                  Mark as completed
                </label>
              </div>
              <button
                type="submit"
                className="mt-7 bg-[#333d91] text-white w-full px-4 py-3 rounded-lg hover:bg-[#5163ae] text-xs sm:text-sm xl:text-base"
              >
                Add a task
              </button>
            </form>
          </section>
        </div>
      </>
    );
  }
}

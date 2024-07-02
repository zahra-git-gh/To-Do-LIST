import '../EditTaskModal/EditTaskModal.css'
export function DeleteDirectoryModal() {
  return (
    <section className="w-screen h-screen fixed z-40 bg-slate-600/30 flex justify-center items-center px-2">
      <section className="w-full max-w-lg p-4 md:p-5 bg-slate-200 dark:bg-slate-900 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-semibold text-slate-500 dark:text-slate-200 md:text-2xl">
            Are you sure?
          </h1>
          <div className="close w-6 h-6 bg-slate-600 dark:bg-slate-200"></div>
        </div>
        <p className="text-xs sm:text-sm xl:text-base mt-5 text-slate-500">
        This directory and all its tasks will be deleted.
        </p>
        <div className="mt-6 flex justify-end gap-x-3 items-center">
          <button className="text-xs py-3 px-3 hover:text-red-500 sm:text-sm xl:text-base dark:text-slate-100 dark:hover:text-red-500">
            Cancle
          </button>
          <button className="text-xs bg-[#333d91] hover:bg-[#5163ae] text-slate-100 rounded-lg py-3 px-6 sm:text-sm xl:text-base">
            Confirm
          </button>
        </div>
      </section>
    </section>
  );
}
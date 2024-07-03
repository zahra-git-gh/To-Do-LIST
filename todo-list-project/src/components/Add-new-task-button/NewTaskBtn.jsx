import { useModal } from "../../hooks/ModalContext";

export function NewTaskBtn() {
  const {openModal:thirdModal}=useModal()

  return (
    <button onClick={()=>thirdModal(3)} className="btn bg-[#333d91] text-white w-full px-3 py-3 rounded-lg hover:bg-[#5163ae] text-xs sm:text-sm xl:text-base">
      Add new task
    </button>
  );
}

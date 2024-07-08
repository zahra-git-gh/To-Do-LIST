import { useModal } from "../../hooks/ModalContext";
import "./Menu.css";
export function Menu() {
  // console.log(useModal().openModal);
  const { openModal: firstModal, modalID } = useModal();
  console.log(modalID, "this is modalid");
  console.log(useModal());
  return (
    <div
      onClick={() => firstModal(1)}
      className="cursor-pointer dark:bg-slate-100 menu w-6 h-6 bg-slate-600 xl:hidden"
    ></div>
  );
}

import { useModal } from "../../hooks/ModalContext";
import "./Menu.css";
export function Menu() {
  const { openModal: firstModal } = useModal();
  return (
    <div
      onClick={() => firstModal(1)}
      className="cursor-pointer dark:bg-slate-100 menu w-6 h-6 bg-slate-600 xl:hidden"
    ></div>
  );
}

import { createContext, useContext, useState } from "react";
const ModalContext = createContext();
export function useModal() {
  return useContext(ModalContext);
}
export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalID, setModalID] = useState(null);
  function openModal(id) {
    setModalID(id);
    setIsModalOpen(true);
  }
  function closeModal() {
    setModalID(null);
    setIsModalOpen(false);
  }
  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, modalID }}
    >
      {children}
    </ModalContext.Provider>
  );
}

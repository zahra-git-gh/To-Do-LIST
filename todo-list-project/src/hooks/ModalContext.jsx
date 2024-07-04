import { createContext, useContext, useState } from "react";
const ModalContext = createContext();
export function useModal() {
  return useContext(ModalContext);
}
export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalID, setModalID] = useState(null);
  const [id, setID] = useState(null);
  function openModal(id) {
    setModalID(id);
    setIsModalOpen(true);
  }
  function closeModal() {
    setModalID(null);
    setIsModalOpen(false);
  }
  function setDataID(id) {
    setID(id);
  }
  function setDataIDNull() {
    setID(null);
  }
  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        modalID,
        id,
        setDataID,
        setDataIDNull,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

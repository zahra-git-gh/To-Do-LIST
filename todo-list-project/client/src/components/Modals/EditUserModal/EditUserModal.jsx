import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../hooks/ModalContext";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";
import { ProfileImages } from "../../ProfileImages/ProfileImages";
import { useEffect, useState } from "react";
import { editUser, setToken } from "../../../redux/user.slice";

export function EditUserModal({ modalIDD }) {
  const { isModalOpen, closeModal, modalID } = useModal();
  const isLoading = useSelector((state) => state.user.loading);
  const [isShow, setIsShow] = useState(false);
  const user = useSelector((state) => state.user.userData);
  console.log(user);
  const [userData, setUserData] = useState(user);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    setUserData(user);
  }, [user]);
  async function submitEdit(e) {
    e.preventDefault();
    try {
      console.log(userData);
      await dispatch(editUser({ token, data: userData }));
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }
  function logoutHandler() {
    localStorage.removeItem(token);
    dispatch(setToken(null));
    closeModal();
  }
  if (modalID !== modalIDD) {
    return null;
  }
  if (isModalOpen) {
    return (
      <section
        onClick={closeModal}
        className="w-full h-full fixed top-0 right-0 z-40 bg-slate-600/30 flex justify-center items-center px-2"
      >
        <section
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg p-3 sm:p-5 md:p-5 bg-slate-200 dark:bg-slate-900 rounded-lg"
        >
          <div className="flex justify-end items-center">
            <button
              onClick={() => {
                setIsShow(false);
                setUserData(user);
                closeModal();
              }}
              className="close w-6 h-6 bg-slate-600 dark:bg-slate-200"
            ></button>
          </div>
          <div className="w-full flex flex-row justify-center items-start  gap-x-2 relative">
            <div className="flex  flex-col items-center justify-center">
              <div
                onClick={() => {
                  setIsShow(!isShow);
                }}
                style={{ backgroundImage: `url("${userData.profile}")` }}
                className={`profile cursor-pointer w-20 h-20 rounded-full bg-center bg-cover `}
              ></div>
              <p className="dark:text-slate-400 text-base sm:text-lg xl:text-xl font-semibold text-blue-900">
                {` Hi, ${userData?.name}!`}
              </p>
            </div>

            <ProfileImages
              userProfile={userData.profile}
              isShow={isShow}
              setIsShow={(isShow) => {
                console.log(isShow);
                setIsShow(isShow);
              }}
              sendProfile={(newProfile) => {
                setUserData({ ...userData, profile: newProfile });
                console.log(userData);
              }}
            />
          </div>
          {/* {code for choosing profile} */}
          <form onSubmit={submitEdit}>
            <div className="flex flex-col gap-y-2 mt-5">
              <label
                className="text-xs sm:text-sm text-slate-500 xl:text-base"
                htmlFor="title"
              >
                Username
              </label>
              <input
                className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg focus:border-2 focus:border-blue-600 hover:border-2 hover:border-blue-600 focus:outline-none px-2 py-3 text-xs sm:text-sm xl:text-base"
                type="text"
                id="title"
                required
                defaultValue={userData?.name}
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
              />
            </div>
            <div className="mt-6 flex justify-start gap-x-3 items-center">
              <button
                type="submit"
                className="text-xs bg-[#333d91] hover:bg-[#5163ae] text-slate-100 rounded-lg py-3 px-6 sm:text-sm xl:text-base flex justify-center items-center"
              >
                <LoadingSpinner isLoading={isLoading} />
                {!isLoading && "Edit"}
              </button>
              <button
                onClick={logoutHandler}
                className="text-xs bg-slate-500 hover:bg-slate-400 text-slate-100 rounded-lg py-3 px-6 sm:text-sm xl:text-base flex justify-center items-center"
              >
                <LoadingSpinner isLoading={isLoading} />
                {!isLoading && "Logout"}
              </button>
            </div>
          </form>
        </section>
      </section>
    );
  }
}

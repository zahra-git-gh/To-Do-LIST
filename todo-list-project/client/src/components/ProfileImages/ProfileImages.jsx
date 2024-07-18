import { useEffect, useState } from "react";

export function ProfileImages({ isShow, setIsShow, userProfile, sendProfile }) {
  console.log(isShow);
  const [isShow2, setIsShow2] = useState(isShow);
  const [profile, setProfile] = useState(userProfile);
  console.log(isShow2);
  useEffect(() => {
    setIsShow2(isShow);
  }, [isShow]);
  useEffect(() => {
    setIsShow(isShow2);
  }, [isShow2]);
  useEffect(() => {
    setProfile(userProfile);
  }, [userProfile]);
  useEffect(() => {
    sendProfile(profile);
  }, [profile]);
  const profileLinks = [
    "/profile-1.jpg",
    "/profile-2.jpg",
    "/profile-3.jpg",
    "/profile-4.jpg",
    "/profile-5.jpg",
    "/profile-6.jpg",
    "/profile-7.jpg",
    "/default-profile.jpg",
  ];
  return (
    <div className={`${!isShow2 && "hidden"} w-2/6 relative`}>
      <div
        className={
          "w-full  h-60 bg-blue-900 absolute rounded-lg  overflow-auto grid grid-cols-1 justify-center px-2 py-1 min-[400px]:grid-cols-2 gap-x-2"
        }
      >
        {profileLinks.map((link, i) => {
          return (
            <div
              onClick={() => {
                setProfile(link);
                setIsShow2(false);
              }}
              key={i}
              className={`w-full h-12 mt-1 bg-yellow-400 rounded-lg bg-[url('${link}')] bg-center bg-cover cursor-pointer`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

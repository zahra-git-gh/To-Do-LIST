import { useNavigate } from "react-router-dom";

export function DirectoryCard({ dirName, id }) {
  const navigate=useNavigate()
  return (
    <section onClick={()=>navigate(`/directory/${id}`)} className="bg-red-100 hover:bg-red-200 cursor-pointer w-max me-6 text-xs text-red-500 px-4 py-1 rounded-t-md sm:text-sm md:text-base dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-red-600  place-self-end">
      {dirName}
    </section>
  );
}

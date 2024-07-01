import "./Darkmode.css";
export function Darkmode() {
  function handleClickDarkmode() {
    const html = document.getElementsByTagName("html")[0];
    const darkBtn = document.querySelector(".darkBtn1");
    if (html.classList.contains("dark")) {
      darkBtn.classList.remove("darkBtn");
      // html.classList.remove('dark')
      html.removeAttribute("class");
    } else {
      darkBtn.classList.add("darkBtn");
      // html.classList.add('dark')
      html.setAttribute("class", "dark");
    }
    // darkBtn.classList.toggle('darkBtn')
  }
  return (
    <section className="w-full mt-8">
      <button
        onClick={handleClickDarkmode}
        className="w-full flex justify-between"
      >
        <span className="text-xs sm:text-sm xl:text-base text-slate-500 dark:text-slate-100">
          Darkmode
        </span>
        <div className="w-10 h-5 bg-slate-200 rounded-full flex items-center dark:bg-slate-700/[.3] darkBtn1">
          <div className="w-4 h-4 rounded-full bg-blue-700"></div>
        </div>
      </button>
    </section>
  );
}

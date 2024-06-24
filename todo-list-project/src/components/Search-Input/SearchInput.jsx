import './SearchInput.css';
export function SearchInput() {
  return (
    <div className="bg-white rounded-xl w-full flex px-4 py-4">
      <input type="search" className="w-full focus:outline-none focus:border-none" placeholder="Search task" />
      <div className="w-6 searchIcon">
      </div>
    </div>
  );
}

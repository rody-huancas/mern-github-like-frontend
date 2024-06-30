import { BUTTONS_REPOS } from "../utils/constants";

export const SortRepos = ({ onSort, sortType }) => {
  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      {BUTTONS_REPOS.map((button) => (
        <button
          key={button.type}
          type="button"
          className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg ${
            sortType === button.type ? "border border-blue-600" : ""
          }`}
          onClick={() => onSort(button.type)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

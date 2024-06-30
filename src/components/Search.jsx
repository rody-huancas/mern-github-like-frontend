import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  return (
    <form
      className="max-w-xl mx-auto p-2"
      onSubmit={(e) => onSearch(e, username)}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none">
          <IoSearch className="w-5 h-5" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm rounded-lg bg-transparent focus:bg-transparent border border-gray-100/90"
          placeholder="Ejm: rody-huancas"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="absolute end-2.5 bottom-1.5 text-gray-900/90 bg-white py-2 px-5 rounded-lg"
        >
          Buscar
        </button>
      </div>
    </form>
  );
};

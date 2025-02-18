import { FaHeart } from "react-icons/fa";

export const LikesPage = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg my-10">
      <table className="w-full text-sm text-left rtl:text-right bg-glass overflow-hidden rounded-xl">
        <thead className="text-xs uppercase bg-gray-600/10">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">N°</div>
            </th>
            <th scope="col" className="px-6 py-3">
              Usuario
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-400/20">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <span>1</span>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center px-6 py-4 whitespace-nowrap "
            >
              <img
                className="w-10 h-10 rounded-full"
                src={
                  "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                }
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">rody-huancas</div>
              </div>
            </th>
            <td className="px-6 py-4">10/07/2024</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <FaHeart size={22} className="text-red-500 mx-2" />
                Te Sigue
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-gray-600/10 rounded-xl">
          <h1 className="text-xl font-bold md:text-2xl text-center">
            Crear cuenta
          </h1>
          <button
            type="button"
            className="text-white bg-[#101114] hover:bg-[#101114]/60 focus:ring-4
						focus:ring-[#101114]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full 
						text-center justify-center transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
            Inicia Sesión con GitHub
          </button>
          <p className="text-sm font-light text-gray-500">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/signup"
              className="font-medium text-primary-600 hover:underline text-blue-600"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

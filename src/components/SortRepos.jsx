export const SortRepos = () => {
  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
      >
        Más Recientes
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
      >
        Más Estrellas
      </button>
      <button
        type="button"
        className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
      >
        Más Forks
      </button>
    </div>
  );
};

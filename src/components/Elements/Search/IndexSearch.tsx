const IndexSearch = () => {
  return (
    <div className="flex justify-center mt-[70px]">
      <input
        className="px-8 py-1 border border-orange-500 rounded-l md:px-36 md:py-3  shadow-lg"
        placeholder="Mau cari apa ?"
      ></input>
      <button className="bg-orange-500 px-5 py-3 text-white rounded-r  shadow-lg">
        Cari
      </button>
    </div>
  );
};

export default IndexSearch;

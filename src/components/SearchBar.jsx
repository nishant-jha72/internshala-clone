export default function SearchBar() {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col md:flex-row gap-4">
      <input
        className="border p-2 rounded w-full md:w-64"
        placeholder="Search by profile"
      />
      <input
        className="border p-2 rounded w-full md:w-64"
        placeholder="Location"
      />
      <button className="bg-sky-500 text-white px-6 py-2 rounded hover:bg-sky-600 w-full md:w-auto">
        Search
      </button>
    </div>
  );
}

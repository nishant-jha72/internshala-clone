export default function FilterSidebar() {
  return (
    <div className="hidden lg:block bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-3">Filters</h3>

      <div className="space-y-2 text-sm">
        <label className="flex gap-2">
          <input type="checkbox" />
          Work from home
        </label>

        <label className="flex gap-2">
          <input type="checkbox" />
          Part-time
        </label>

        <label className="flex gap-2">
          <input type="checkbox" />
          Paid
        </label>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-12">
        <p>Created By Nishant Jha & team For College Minor Project !! </p>
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-700">
          InternPortal
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="w-full flex items-center justify-center py-16">
      <div className="bg-white w-full max-w-md p-8 rounded shadow">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Login to InternPortal
        </h2>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-3 rounded hover:bg-sky-600"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-sky-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}

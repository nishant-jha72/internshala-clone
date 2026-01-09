import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <section className="w-full flex items-center justify-center py-16">
      <div className="bg-white w-full max-w-md p-8 rounded shadow">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Create your account
        </h2>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded"
          />

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
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}


import Link from "next/link";

export default function LoginPage() {
  return (
    <form className="hero mt-20">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-2xl border p-4">
        <h3 className="text-red-500 font-bold text-center text-2xl mb-4">
          Login Form
        </h3>

        <label className="label text-base">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />

        <label className="label text-base mt-2">Password</label>
        <input
          type="password"
          className="input w-full mb-4"
          placeholder="Password"
        />

        <button className="btn btn-primary bg-red-500 text-white hover:bg-red-600 border-0 mt-4">
          Login
        </button>
        <div className="text-center">New Here? <Link href="/register" className="text-red-600">Register at our platform</Link> </div>
      </fieldset>
    </form>
  );
}

import Link from "next/link";

export default function RegisterPage() {
    return (
        <form className="hero mt-20">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-2xl border p-4">
            <h3 className="text-red-500 font-bold text-center text-2xl mb-4">
              Registration Form
            </h3>
    
            <label className="label text-base">Your Full Name</label>
            <input type="text" className="input w-full" placeholder="Name" />

            <label className="label text-base">Your Email Address</label>
            <input type="email" className="input w-full" placeholder="Email" />
    
            <label className="label text-base mt-2">Your Password</label>
            <input
              type="password"
              className="input w-full mb-4"
              placeholder="Password"
            />
    
            <button className="btn btn-primary bg-red-500 text-white hover:bg-red-600 border-0 mt-4">
              Login
            </button>
            <div className="text-center">Already registered? <Link href="/login" className="text-red-600">Login from here</Link> </div>
          </fieldset>
        </form>
      );
}
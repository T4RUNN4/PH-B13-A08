"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { name, email, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/login",
    });

    if(error) {
      alert(error.message);
    }
    if(res) {
      alert("Signup Successful");
    }
  };

  return (
    <form className="hero mt-20 px-6 lg:px-52" onSubmit={handleSubmit(handleRegister)}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border px-4">
        <h3 className="text-red-500 font-bold text-center text-2xl mb-4">
          Registration Form
        </h3>

        <label className="label text-base">Name</label>
        <input
          type="text"
          className="input w-full"
          {...register("name", { required: true })}
          placeholder="Name"
        />
        {errors.name && (
          <span className="text-red-400">This field is required</span>
        )}

        <label className="label text-base">Photo</label>
        <input
          type="text"
          className="input w-full"
          {...register("photo", { required: true })}
          placeholder="url"
        />
        {errors.photo && (
          <span className="text-red-400">This field is required</span>
        )}

        <label className="label text-base">Email</label>
        <input
          type="email"
          className="input w-full"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-400">This field is required</span>
        )}

        <label className="label text-base mt-2">Password</label>
        <input
          type="password"
          className="input w-full"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && (
          <span className="text-red-400">This field is required</span>
        )}

        <button
          type="submit"
          className="btn btn-primary bg-red-500 text-white hover:bg-red-600 border-0 mt-8"
        >
          Register
        </button>
        <div className="text-center">
          Already registered?{" "}
          <Link href="/register" className="text-red-600">
            Login from here
          </Link>{" "}
        </div>
      </fieldset>
    </form>
  );
}

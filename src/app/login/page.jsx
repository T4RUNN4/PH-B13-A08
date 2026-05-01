"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LogIn } from 'lucide-react';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });

    if(error){
      toast.error(error.message);
    }
  };

  return (
    <form className="hero mt-20 px-6 lg:px-52" onSubmit={handleSubmit(handleLogin)}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border px-6 py-8">
        <h3 className="text-red-500 font-bold text-center text-3xl mb-4">
          Login Form
        </h3>

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
          <LogIn /> Login
        </button>
        <div className="text-center mt-1.5">
          New Here?{" "}
          <Link href="/register" className="text-red-600">
            Register at our platform
          </Link>{" "}
        </div>
      </fieldset>
    </form>
  );
}

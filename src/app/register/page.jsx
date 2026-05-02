"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { UserRoundPlus } from "lucide-react";
import { toast } from "react-toastify";
import GoogleLogin from "@/components/GoogleLogin";

export default function RegisterPage() {
  const router = useRouter();
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
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("Signup Successful");
      router.push("/login");
    }
  };

  return (
    <form
      className="hero mt-20 px-6 lg:px-52"
      onSubmit={handleSubmit(handleRegister)}
    >
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border px-6 py-8">
        <h3 className="text-red-500 font-bold text-center text-3xl mb-4">
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
          <UserRoundPlus /> Register
        </button>
        <GoogleLogin className="mt-1" />
        <div className="text-center mt-1.5">
          Already registered?{" "}
          <Link href="/login" className="text-red-600">
            Login from here
          </Link>{" "}
        </div>
      </fieldset>
    </form>
  );
}

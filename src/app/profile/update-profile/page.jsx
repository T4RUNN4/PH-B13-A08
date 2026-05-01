"use client";

import { UserPen } from "lucide-react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfile() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    if (name) {
      await authClient.updateUser({
        name: name,
      });
      toast.success("Name successfully changed");
    }
    if (image) {
      await authClient.updateUser({
        image: image,
      });
      toast.success("Image successfully changed");
    }
  };

  return (
    <div className="py-20 flex flex-col items-center justify-center bg-base-200 px-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        Update Profile
      </h1>

      <form className="hero mt-4 px-6 lg:px-52" onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border px-6 py-8">
          <label className="label text-base">Name</label>
          <input
            type="text"
            className="input w-full"
            name="name"
            placeholder="name"
          />

          <label className="label text-base mt-2">Image</label>
          <input
            type="text"
            className="input w-full"
            name="image"
            placeholder="url"
          />

          <button
            type="submit"
            className="btn btn-primary bg-red-500 text-white hover:bg-red-600 border-0 mt-8"
          >
            <UserPen /> Update
          </button>
        </fieldset>
      </form>
    </div>
  );
}

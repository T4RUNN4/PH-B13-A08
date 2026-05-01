"use client";
import { authClient } from "@/lib/auth-client";
import { Image } from "next/image";
import { Link } from "next/link";
import { UserRoundPen } from "lucide-react";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <>
      <div className="py-20 flex flex-col items-center justify-center bg-base-200 px-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          My Profile
        </h1>
        <p className="mb-14 text-gray-700">
          Get more detailed info about your account
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
          <Image
            src={user.image}
            alt={user.name}
            height={500}
            width={500}
            className="rounded-md drop-shadow-xl"
          ></Image>
          <div className="flex flex-col gap-1.5">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-lg">{user.email}</p>

            <Link
              href="/profile/update-profile"
              className="btn btn-primary bg-red-500 border-0 text-white hover:bg-red-600 mt-2"
            >
              <UserRoundPen /> Update Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

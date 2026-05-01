"use client";
import { authClient } from "@/lib/auth-client";
import { UserPen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MyProfle() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="py-20 flex flex-col items-center justify-center bg-base-200 px-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        My Profile
      </h1>
      {isPending ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center mt-8 bg-white p-8 rounded-md">
          <Image
            src={user.image}
            alt={user.name}
            height={200}
            width={200}
            className="rounded-full drop-shadow-xl"
          ></Image>
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <h1 className="text-4xl font-bold">{user.name}</h1>
            <p className="text-lg">{user.email}</p>

            <Link href="/profile/update-profile"
              className="btn btn-primary bg-red-500 text-white hover:bg-red-600 border-0 mt-8"
            >
              <UserPen /> Update Profile
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import Link from "next/link";

export default function Logo () {
    return (
        <Link href="/" className="btn btn-ghost text-xl font-bold hidden md:flex">
            Qurbani <span className="text-red-600">Hat</span>
        </Link>
    )
}

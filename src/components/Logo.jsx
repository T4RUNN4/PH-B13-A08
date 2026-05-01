"use client";
import Link from "next/link";
import { Beef } from 'lucide-react';

export default function Logo () {
    return (
        <Link href="/" className="flex gap-2 items-center justify-center text-xl font-bold">
            <Beef /> Qurbani <span className="text-red-600">Hat</span>
        </Link>
    )
}

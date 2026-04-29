'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, text }) {
    const pathName = usePathname();
    const isActive = href === pathName;
    
    return (
        <Link href={href} className={`${isActive ? "text-red-600 font-bold" : ""}`}>{text}</Link>
    );
}
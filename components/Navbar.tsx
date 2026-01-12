"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"},
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center gap-8 border-b py-4">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`
                          transition-colors duration-200
                          ${
                            isActive
                                ? "font-bold text-blue-600"
                                : "text-shadow-white hover:text-blue-600 hover:font-bold"
                            }
                        `}
                    >
                    {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

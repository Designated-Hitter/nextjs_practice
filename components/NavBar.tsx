"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const pathname = usePathname();
    return <nav>
    <Link className={pathname === "/" ? "active" : ""} href="/">
    Home
    </Link>
    <Link className={pathname === "/about" ? "active" : ""} href="/about">
    About Us
    </Link>
    <style jsx global>{`
    nav {
        background: tomato;
    }
    a {
        text-decoration: none;
    }
    .active {
        color: white;
    }
    `}</style>
    </nav>
}
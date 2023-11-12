"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function NavBar() {
    const pathname = usePathname();
    return <nav>
    <Link style = {{color: pathname === "/" ? "red" : "blue"}} className='Hello' href="/">
    Home
    </Link>
    <Link style = {{color: pathname === "/about"? "red": "blue"}} href="/about">
    About Us
    </Link>
    </nav>
}
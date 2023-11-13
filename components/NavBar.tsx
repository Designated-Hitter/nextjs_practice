"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const pathname = usePathname();
    return <nav>
    {/* public 디렉토리에 있는 그림파일은 그냥 /만 써서 불러올 수 있다. */}
    <img src="/vercel.svg" />
    <Link className={pathname === "/" ? "active" : ""} href="/">
    Home
    </Link>
    <Link className={pathname === "/about" ? "active" : ""} href="/about">
    About
    </Link>
    <style jsx global>{`
    nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        a {
          font-weight: 600;
          font-size: 18px;
          text-decoration: none;
          display: inline;
          
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
    `}</style>
    </nav>
}
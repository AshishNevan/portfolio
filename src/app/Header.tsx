"use client";
import "./Header.css";
import {usePathname} from 'next/navigation'
import Link from 'next/link';

export default function Header() {
    const pathname = usePathname()
    return (
        <nav className="navbar h-16 flex space-x-4 items-center justify-between pr-4 pl-4">
            <p className="logo">Ashish Nevan</p>
            <div className="menu flex justify-evenly gap-x-4 p-4">
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
                <Link className={`link ${pathname === '/contacts' ? 'active' : ''}`} href="/contacts">Contacts</Link>
            </div>
        </nav>
    );
}
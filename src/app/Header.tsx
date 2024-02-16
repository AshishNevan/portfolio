// "use client";
import "./Header.css";
import Link from 'next/link';

export default function Header() {
    return (
        <nav className="navbar h-16 flex space-x-4 items-center justify-between pr-4 pl-4">
            <p className="logo">Ashish Nevan</p>
            <div className="menu flex justify-evenly gap-x-4 p-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contacts">Contacts</Link>
            </div>
        </nav>
    );
}
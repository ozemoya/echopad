import React from 'react';
import Link from 'next/link';

const links = [,
    { href: '/notes', label: 'Notes' },
    { href: '/login', label: 'Login' },
    { href: '/Get Started', label: 'Get Started' },
    
];

const Navbar = () => {
    return (
        <nav className="bg-white w-full p-4 shadow-md fixed top-0">
            <Link href="/">
                <div className="text-5xl font-semibold">EchoPad</div>
            </Link>
        <ul className="flex gap-5 justify-end ">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className="text-gray-600 hover:text-gray-800">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

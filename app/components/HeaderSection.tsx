'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    // Scroll shadow
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Apply saved theme on load
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const dark = storedTheme === 'dark' || (!storedTheme && prefersDark);
        setIsDarkMode(dark);
        document.documentElement.classList.toggle('dark', dark);
    }, []);

    // Toggle dark mode
    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        setMenuOpen(false);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', newMode);
    };

    // Close mobile menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    const links = [
        { href: '#/home', label: 'Home' },
        { href: '#/about', label: 'About' },
        { href: '#/skills', label: 'Skills' },
        { href: '#/projects', label: 'Projects' },
        { href: '#/contact', label: 'Contact' },
    ];

    return (
        <header className={`fixed z-80 w-full shadow-md backdrop-blur-sm ${scrolled
            ? 'bg-[var(--head-color)]/90'
            : 'bg-[var(--head-color)]/70'
            }`}>
            <nav className="container mx-auto px-6 py-7 flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="text-2xl font-bold text-[var(--primary-color)]"></a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center space-x-9">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
className="nav-link text-lg leading-8 font-semibold text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors"                        >
                            {link.label}
                        </a>
                    ))}
                    {/* Dark Mode Toggle */}
                    <div className="flex items-center">
                        <span className="material-symbols-outlined text-[var(--text-color)]">light_mode</span>
                        <label className="relative inline-flex items-center cursor-pointer mx-2">
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={toggleTheme}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--primary-color)]" />
                        </label>
                        <span className="material-symbols-outlined text-[var(--text-color)]">dark_mode</span>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-[var(--text-color)]">
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="md:hidden px-6 pb-4 space-y-1 text-center bg-[var(--bg-color)] shadow-lg"
                >
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 text-[var(--text-color)] hover:text-[var(--primary-color)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="flex items-center justify-center pt-2">
                        <span className="material-symbols-outlined text-[var(--text-color)]">light_mode</span>
                        <label className="relative inline-flex items-center cursor-pointer mx-2">
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={toggleTheme}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--primary-color)]" />
                        </label>
                        <span className="material-symbols-outlined text-[var(--text-color)]">dark_mode</span>
                    </div>
                </div>
            )}
        </header>
    );
}

'use client';
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const toggleVisible = () => setVisible(window.scrollY > 300);
        toggleVisible(); // Check scroll position on mount

        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    if (!mounted) return null;

    return visible ? (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 bg-[var(--primary-color)] text-[var(--bg-color)] p-3 rounded-full shadow-lg transition"
        >
            <ChevronUp />
        </button>
    ) : null;
}

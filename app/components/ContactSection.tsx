'use client';
import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <section className="py-20 md:py-32 bg-[var(--bg-color)]" id="/contact">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-[var(--text-color)] mb-4">Get In Touch</h2>
                <p className="max-w-2xl mx-auto text-[var(--text-color)] opacity-70 text-lg mb-8"> Thank you for visiting my
                    portfolio. For any queries or to connect, say hello by clicking the button below. </p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    className=" inline-block bg-[var(--primary-color)] text-[var(--bg-color)] font-bold py-4 px-8 rounded-lg text-lg"
                    href="mailto:varshil26chauhan11@gmail.com">
                    Say Hello
                </motion.a>
            </div>
        </section >

    );
}

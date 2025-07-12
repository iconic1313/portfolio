'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';


export default function HomeSection() {
    return (
        <section
            id="/home"
            className="min-h-screen flex items-center bg-[var(--bg-color)] pt-24 pb-16 md:py-32"
        >
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                    {/* Text Area */}
                    <motion.div
                        className="text-center md:text-left space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-[var(--text-color)] leading-tight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                          Chauhan Varshil
                        </motion.h1>

                        <motion.p
                            className="text-2xl font-bold md:text-3xl text-[var(--primary-color)] min-h-[56px]"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <Typewriter
                                words={['Fullstack Developer', 'AI/ML Enthusiast', 'Graphic Designer']}
                                loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={200}
                                deleteSpeed={100}
                                delaySpeed={2000}
                            />
                        </motion.p>

                        <motion.p
                            className="text-lg text-[var(--subtle-text-color)] max-w-xl mx-auto md:mx-0  text-2xl"
                            initial={{ opacity: 1, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
Full Stack Developer and AI/ML enthusiast with hands-on experience in building web apps using React and Python. Created projects like an AI-powered resume generator, JioCinema clone, and game hub. Skilled in both frontend and backend technologies with a strong grasp of Python, DSA, and problem-solving. 

                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                  href="#contact"
                                className="bg-[var(--primary-color)] text-[var(--bg-color)] font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300 text-center"
                            >
                                Contact Me
                            </motion.a>

                            <motion.a
                                whileHover={{ x: 5 }}
                                href="/VARSHIL RESUME.pdf"
                                target="_blank"
                                className="border border-[var(--primary-color)] text-[var(--primary-color)] font-semibold py-3 px-6 rounded-lg hover:bg-[var(--primary-color)] hover:text-[var(--bg-color)] transition-colors duration-300 flex items-center justify-center"
                            >
                                View Resume <span className="material-symbols-outlined ml-2">arrow_forward</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Image Area */}
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5, duration: 1.0 }}
                    >
                        <motion.div
                            className="relative group rounded-full w-80 h-80 lg:w-96 lg:h-96 overflow-hidden border-[6px] border-[var(--primary-color)]"
                            whileHover={{ scale: 1.2 }}
                        >
                            <Image
                                alt="chauhan varshil"
                                src="/svg/photo2.jpg"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-full p-1 object-cover transition-transform duration-500"
                            />
                    
                            <div className="absolute inset-0 bg-[var(--primary-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

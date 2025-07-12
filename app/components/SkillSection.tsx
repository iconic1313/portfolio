'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaAngular, FaReact,  FaBootstrap } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa6'; // Tailwind icon substitute

export default function SkillsSection() {
    const skills = [
        { icon: <FaHtml5 className="text-[#E34F26]" />, label: 'HTML' },
        { icon: <FaCss3Alt className="text-[#1572B6]" />, label: 'CSS' },
        { icon: <FaJsSquare className="text-[#F7DF1E]" />, label: 'JavaScript' },
        { icon: <FaDatabase className="text-[#47A248]" />, label: 'Python' },
        {
            icon: (
                <Image
                    src="/javadownload (1).jpg"
                    alt="JAVA"
                    width={36}
                    height={36}
                    className="w-9 h-9 svgIcons"
                />
            ),
            label: 'Java',
        },
        { icon: <FaAngular className="text-[#DD0031]" />, label: 'Angular' },
        { icon: <FaReact className="text-[#61DAFB]" />, label: 'React' },
        
         {
            icon: (
                <Image
                    src="/Cdownload.PNG"
                    alt="PHP"
                    width={36}
                    height={36}
                    className="w-9 h-9 svgIcons"
                />
            ),
            label: 'C,C++'
        },
         {
            icon: (
                <Image
                    src="/POSTdownload (1).jpg"
                    alt="PHP"
                    width={36}
                    height={36}
                    className="w-9 h-9 svgIcons"
                />
            ),
            label: 'POSTGRESQL'
        },
        {
            icon: (
                <Image
                    src="/phpdownload.jpg"
                    alt="Next.js"
                    width={36}
                    height={36}
                    className="w-9 h-9 svgIcons"
                />
            ),
            label: 'php'
        },
        { icon: <FaBootstrap className="text-[#7952B3]" />, label: 'CANVA' },
        {
            icon: (
                <Image
                    src="/svg/tailwind-icon.svg"
                    alt="Express"
                    width={36}
                    height={36}
                    className="w-9 h-9"
                />
            ),
            label: 'CSS'
        },
    ];

    return (
        <motion.section
            id="/skills"
            className="py-20 md:py-32 bg-[var(--bg-color)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-[var(--text-color)] mb-12">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.label}
                            className="skill-card bg-[var(--card-color)] p-6 rounded-lg flex items-center justify-center flex-col gap-3 text-center shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <div className="text-4xl">{skill.icon}</div>
                            <span className="font-semibold text-[var(--text-color)]">{skill.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

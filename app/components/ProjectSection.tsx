'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectSection() {
    const projects = [
        {
            title: 'ICONIC GAME HUB',
            description: 'In this Game hub there are games like TIC-TAC-TOE,CONNECT4,SNACK GAME, GUESSNUMBER,ROCK-PAPER-SCISOOR.',
            image: '/Screenshot (7).png',
            url: 'https://varshilrepoo.vercel.app/',
            logo: '/circle-logo.png',
            language: [
                { langname: 'Reactjs', color: 'bg-[#61DAFB]/20', text: 'text-[#61DAFB]' },
                { langname: 'javascript', color: 'bg-[#339933]/20', text: 'text-[#339933]' },
                { langname: 'HTML,Css', color: 'bg-[#47A248]/20', text: 'text-[#47A248]' },
            ],
        },
        {
            title: 'jioCinema Clone',
            description: 'Created personal project  called jiocienma clone to improve skills .',
            image: '/123.png',
            url: '',
            logo: '/circle-logo.png',
            language: [
                { langname: 'Next.js', color: 'bg-black/20', text: 'text-black dark:text-white' },
                { langname: 'Tailwind CSS', color: 'bg-[#38B2AC]/20', text: 'text-[#38B2AC]' },
                { langname: 'React', color: 'bg-black/20', text: 'text-black dark:text-white' },
            ],
        },
        {
            title: 'AI POWERED RESUME GENERATOR',
            description: 'Generate resume and coverletter and send to your email in pdf format by just sending details to my email.',
            image: '/ai images.jpg',
            url: 'https://mail.google.com/mail/u/0/#sent',
            logo: '/circle-logo.png',
            language: [
                { langname: 'GPT 4.1', color: 'bg-black/20', text: 'text-black dark:text-white' },
                { langname: 'OPENCV', color: 'bg-[#38B2AC]/20', text: 'text-[#38B2AC]' },
                { langname: 'PROMPTING', color: 'bg-black/20', text: 'text-black dark:text-white' },
            ],
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-[var(--secondary-color)]" id="/projects">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-16 text-[var(--text-color)]">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{
                                y: -8,
                                transition: {
                                    duration: 0.2,
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 20,
                                },
                            }}
                            className="bg-[var(--card-color)] rounded-xl shadow-xl overflow-hidden max-w-sm w-full group"
                        >

                            <div className="relative">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    width={600}
                                    height={300}
                                    priority
                                    className="w-full h-48 object-cover"
                                />
                                {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a
                                        href='https://varshilrepoo.vercel.app/'
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-sm font-semibold border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
                                    >
                                       
                                    </a>
                                </div> */}
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Image
                                        src={project.logo}
                                        alt="Project Logo"
                                        width={40}
                                        height={40}
                                        priority
                                        className="rounded-full bg-gray-800 p-1 border border-[var(--primary-color)]"
                                    />
                                    <h3 className="text-xl font-bold text-[var(--text-color)]  transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-[var(--subtle-text-color)] mb-4 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.language.map((lang, idx) => (
                                        <span
                                            key={idx}
                                            className={`py-1 px-3 text-xs font-semibold rounded-full ${lang.color} ${lang.text}`}
                                        >
                                            {lang.langname}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

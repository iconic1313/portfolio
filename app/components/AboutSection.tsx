'use client';

export default function AboutSection() {
    return (
        <section className="py-20 md:py-32 bg-[var(--secondary-color)]" id="/about">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-[var(--text-color)] mb-10">About Me</h2>
                <div className="text-center max-w-3xl mx-auto text-[var(--text-color)] text-lg mb-12 opacity-80">
                    <p className="mb-4">Hello! I&#39;m Varshil&#44; a Student in L.D college Of Enginnering Ahemdabad,Gujarat.Currently Pursuing my B.E in computer Engineering. </p>
                    <p className="mb-4">My journey into this  started with a simple &quot;Hello World&quot; and has grown into a full-fledged passion. I thrive on solving complex problems and continuously learning new technologies. I&#39;m always looking to expand my skill set and take on new challenges.</p>
                    <p >When I&#39;m not coding&#44; you can find me exploring new hiking trails&#44; experimenting with new tools and games; or getting lost in a good book.</p>
                </div>
                <h3 className="text-3xl font-bold text-center text-[var(--text-color)] mb-12">My Journey</h3>
                <div className="max-w-3xl mx-auto">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <h4 className="text-2xl font-semibold text-[var(--text-color)] mb-1">Started my journey</h4>
                        <h4 className="text-xl font-semibold text-[var(--text-color)] mb-1">Learning of Graphic Design</h4>
                        <p className="text-[var(--text-color)] opacity-70">
                            Embarked on the path of graphic design, learning the tools like canva,Adobe Photoshop to create various posters, menus and invitations cards for varrios clients.
                        </p>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <h4 className="text-xl font-semibold text-[var(--text-color)] mb-1">Full-stack Development</h4>
                        <p className="text-[var(--text-color)] opacity-70">
Proficient in full stack development, delivering scalable applications using React, Angular, PYTHON, and POSTERSQL with a strong focus on clean UI and efficient backend integration.                        </p>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <h4 className="text-xl font-semibold text-[var(--text-color)] mb-1">Exploration in AI/ML</h4>
                        <p className="text-[var(--text-color)] opacity-70">
Developing skills in AI/ML through hands-on projects focused on data analysis, classification, and predictive modeling using Python, Scikit-learn, and Pandas.

                        </p>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <h4 className="text-xl font-semibold text-[var(--text-color)] mb-1">Continuous Learning</h4>
                        <p className="text-[var(--text-color)] opacity-70">
                            Currently exploring advanced topics in DSA,AI/ML,Deep learning concepts and always eager to learn and adapt to new technologies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

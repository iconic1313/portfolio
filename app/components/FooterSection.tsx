export default function FooterSection() {
    return (
        <footer className="bg-[var(--secondary-color)] border-t border-[var(--primary-color)]/20">
            <div className="container mx-auto px-6 py-6 text-center text-[var(--text-color)] opacity-70">
                <div className="flex justify-center space-x-6 mb-4">
                    <a className="text-2xl hover:text-black transition-colors" href="https://github.com/iconic1313"
                        target="_blank"><i className="fab fa-github"></i></a>
                    <a className="text-2xl hover:text-[#0A66C2] transition-colors" href="https://linkedin.com/in/varshil-chauhan-5023a529"
                        target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a className="text-2xl hover:text-[#0A66C2] transition-colors" href="https://www.facebook.com/share/16uKm3FKjU/"
                        target="_blank"><i className="fab fa-facebook"></i></a>
                </div>
                <p>© 2025 chauhan varshil. Designed &amp; Built with ❤️.</p>
            </div>
        </footer>
    );
};

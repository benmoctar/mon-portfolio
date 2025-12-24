import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Server, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    const skills = {
        backend: ['Java', 'Spring Boot', 'Python', 'PHP', 'Laravel', 'C/C++', 'Kafka'],
        frontend: ['JavaScript', 'React.js', 'Vue.js', 'Angular'],
        database: ['SQL', 'MySQL', 'MongoDB', 'Oracle'],
        devops: ['Git', 'Docker', 'GitLab CI', 'AWS']
    };

    const projects = [
        { title: 'Réservation Vols', tech: 'Java • MySQL', description: 'Système de réservation de vols avec API REST et interface moderne', icon: '✈️', github: 'https://github.com/benmoctar/tp4-reservation-vols' },
        { title: 'Othello Game', tech: 'Java • Test • Game Logic', description: 'Implémentation du jeu de société Othello', icon: '🎮', github: 'https://github.com/benmoctar/othello-game-27' },
        { title: 'Mars Rover Challenge', tech: 'Java • Test • CI/CD', description: 'Simulation de navigation pour mars-rover', icon: '🚀', github: 'https://github.com/benmoctar/Mars-Rover-Bichara-Moctar-Cherif' },
        { title: 'Mini-Projet Complexité', tech: 'Algorithm • Data Structures', description: 'Analyse de complexité algorithmique', icon: '📊', github: 'https://github.com/benmoctar/Mini-Projets_complexite_2025' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'} border-b border-blue-500/20`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <button onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-110 transition-transform">
                            Moctar B.
                        </button>
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                                <button key={section} onClick={() => scrollToSection(section)} className={`capitalize hover:text-blue-400 transition-all relative group ${activeSection === section ? 'text-blue-400' : ''}`}>
                                    {section === 'home' ? 'Accueil' : section === 'about' ? 'À propos' : section === 'skills' ? 'Compétences' : section === 'projects' ? 'Projets' : 'Contact'}
                                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform transition-transform ${activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </button>
                            ))}
                        </div>
                        <button className="md:hidden hover:bg-gray-800 p-2 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-900/98 backdrop-blur-lg border-t border-blue-500/20">
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                                <button key={section} onClick={() => scrollToSection(section)} className={`block w-full text-left px-4 py-3 hover:bg-gray-800 rounded-lg capitalize transition-all ${activeSection === section ? 'bg-blue-900/30 text-blue-400' : ''}`}>
                                    {section === 'home' ? 'Accueil' : section === 'about' ? 'À propos' : section === 'skills' ? 'Compétences' : section === 'projects' ? 'Projets' : 'Contact'}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <div className={`text-center max-w-4xl relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="mb-8">
                        <div className="relative w-48 h-48 mx-auto mb-8 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full animate-spin-slow blur-md opacity-75"></div>
                            <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1.5 transform transition-transform group-hover:scale-110 duration-300">
                                <img src="/profile.jpg" alt="Moctar Bichara" className="w-full h-full rounded-full object-cover border-4 border-gray-900"
                                     onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }} />
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hidden items-center justify-center text-5xl font-bold border-4 border-gray-900">MB</div>
                            </div>
                            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900 animate-pulse"></div>
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Moctar Cherif BICHARA</h1>
                    <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">Développeur <span className="text-blue-400 font-semibold">Full-Stack</span></p>
                    <div className="flex flex-wrap gap-3 justify-center text-sm md:text-base mb-8">
                        <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full">Java</span>
                        <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full">Spring Boot</span>
                        <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">React</span>
                    </div>
                    <p className="text-lg text-blue-400 mb-12 flex items-center justify-center gap-2"><GraduationCap size={24} />Master 1 Ingénierie du Développement Logiciel</p>
                    <div className="flex flex-wrap gap-4 justify-center mb-12">
                        <button onClick={() => scrollToSection('projects')} className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center gap-2">
                            Voir mes projets<ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="border-2 border-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-full font-semibold transition-all hover:border-cyan-400 flex items-center gap-2">
                            <Mail size={20} />Me contacter
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
                        <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20">
                            <div className="text-3xl font-bold text-blue-400">4+</div><div className="text-sm text-gray-400">Projets</div>
                        </div>
                        <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/20">
                            <div className="text-3xl font-bold text-cyan-400">10+</div><div className="text-sm text-gray-400">Technologies</div>
                        </div>
                        <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20">
                            <div className="text-3xl font-bold text-purple-400">2</div><div className="text-sm text-gray-400">Ans d'exp</div>
                        </div>
                    </div>
                    <button onClick={() => scrollToSection('about')} className="animate-bounce hover:text-blue-400 transition-colors">
                        <ChevronDown size={40} className="text-blue-400" />
                    </button>
                </div>
            </section>

            <section id="about" className="min-h-screen flex items-center py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">À propos de moi</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all transform hover:-translate-y-2 duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-500/20 p-3 rounded-xl mr-4"><GraduationCap className="text-blue-400" size={32} /></div>
                                <h3 className="text-2xl font-bold">Formation</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="relative pl-6 border-l-2 border-blue-500/30">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                                    <p className="text-blue-400 font-semibold text-lg">Master Ingénierie du développement logiciel</p>
                                    <p className="text-gray-400">Aix Marseille Université | 2025-2027</p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-blue-500/30">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                                    <p className="text-blue-400 font-semibold text-lg">Licence Informatique</p>
                                    <p className="text-gray-400">Université Clermont Auvergne | 2024-2025</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all transform hover:-translate-y-2 duration-300">
                            <div className="flex items-center mb-6">
                                <div className="bg-cyan-500/20 p-3 rounded-xl mr-4"><Briefcase className="text-cyan-400" size={32} /></div>
                                <h3 className="text-2xl font-bold">Expérience</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="relative pl-6 border-l-2 border-cyan-500/30">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                                    <p className="text-cyan-400 font-semibold text-lg">Tuteur en Java</p>
                                    <p className="text-gray-400">ChadHubDigit | 2024-2025</p>
                                    <p className="text-sm text-gray-500 mt-2">Encadrement algorithmique, Java à distance</p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-cyan-500/30">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                                    <p className="text-cyan-400 font-semibold text-lg">Développeur Web</p>
                                    <p className="text-gray-400">ChadHubDigit | 2023-2024</p>
                                    <p className="text-sm text-gray-500 mt-2">Java, React.js, API REST, CI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-cyan-900/30 backdrop-blur-sm p-10 rounded-3xl border border-blue-500/20 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10 flex items-start gap-4">
                            <div className="text-4xl">💡</div>
                            <div>
                                <h4 className="text-2xl font-bold mb-4 text-blue-400">Mon profil</h4>
                                <p className="text-lg text-gray-300 leading-relaxed">Passionné par le développement logiciel, je recherche un <span className="text-blue-400 font-semibold">stage de 3 à 5 mois dès Mai 2026</span> et ouvert à <span className="text-cyan-400 font-semibold">l'alternance pour la rentrée de septembre 2026</span>. Fort d'une expérience en développement Full-Stack avec Java, Spring Boot et React.js, je suis prêt à contribuer à des projets innovants en environnement Agile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" className="min-h-screen flex items-center py-20 px-4 bg-gray-900/50">
                <div className="max-w-6xl mx-auto w-full">
                    <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Compétences Techniques</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            { name: 'Backend', icon: Server, color: 'blue', skills: skills.backend },
                            { name: 'Frontend', icon: Code, color: 'cyan', skills: skills.frontend },
                            { name: 'Database', icon: Database, color: 'purple', skills: skills.database },
                            { name: 'DevOps', icon: Server, color: 'green', skills: skills.devops }
                        ].map((category, idx) => (
                            <div key={idx} className={`bg-gradient-to-br from-${category.color}-900/50 to-${category.color}-800/50 p-6 rounded-2xl border border-${category.color}-500/30 hover:border-${category.color}-400 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-${category.color}-500/20`}>
                                <div className="flex items-center mb-4">
                                    <category.icon className={`text-${category.color}-400 mr-3`} size={28} />
                                    <h3 className="text-xl font-bold">{category.name}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span key={i} className={`bg-${category.color}-500/20 px-3 py-1 rounded-full text-sm hover:bg-${category.color}-500/30 transition-colors cursor-default`}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-800/50 p-6 rounded-2xl border border-blue-500/20 text-center hover:border-blue-500/40 transition-all">
                            <h4 className="text-lg font-bold mb-2 text-blue-400">Méthodologies</h4>
                            <p className="text-gray-300">Agile (Scrum) • TDD • CI/CD</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-2xl border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all">
                            <h4 className="text-lg font-bold mb-2 text-cyan-400">Outils</h4>
                            <p className="text-gray-300">Git • Docker • UML • JUnit</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-2xl border border-purple-500/20 text-center hover:border-purple-500/40 transition-all">
                            <h4 className="text-lg font-bold mb-2 text-purple-400">Langues</h4>
                            <p className="text-gray-300">Français • Anglais</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="min-h-screen flex items-center py-20 px-4">
                <div className="max-w-6xl mx-auto w-full">
                    <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projets Réalisés</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:-translate-y-2 duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{project.icon}</div>
                                <h3 className="text-2xl font-bold mb-3 text-blue-400 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                <p className="text-sm text-cyan-400 mb-4 font-mono bg-gray-900/50 px-3 py-1 rounded-lg inline-block">{project.tech}</p>
                                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold group-hover:gap-3">
                                        <Github size={20} /><span>Voir le code</span><ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="min-h-screen flex items-center py-20 px-4 bg-gray-900/50">
                <div className="max-w-4xl mx-auto w-full">
                    <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contactez-moi</h2>
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-blue-500/20">
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {[
                                { icon: Mail, label: 'Email', value: 'bicharamoctarcherif@gmail.com', href: 'mailto:bicharamoctarcherif@gmail.com', color: 'blue' },
                                { icon: Phone, label: 'Téléphone', value: '07 44 89 63 33', href: 'tel:0744896333', color: 'cyan' },
                                { icon: MapPin, label: 'Localisation', value: 'Marseille, France', color: 'purple', noLink: true },
                                { icon: Github, label: 'GitHub', value: 'benmoctar', href: 'https://github.com/benmoctar', color: 'gray' },
                            ].map((contact, idx) => (
                                contact.noLink ? (
                                    <div key={idx} className={`flex items-center p-5 bg-${contact.color}-900/30 rounded-2xl`}>
                                        <div className={`bg-${contact.color}-500/20 p-3 rounded-xl mr-4`}>
                                            <contact.icon className={`text-${contact.color}-400`} size={28} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                                            <p className="text-white font-semibold">{contact.value}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <a key={idx} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined} className={`flex items-center p-5 bg-${contact.color}-900/30 rounded-2xl hover:bg-${contact.color}-900/50 transition-all group hover:scale-105`}>
                                        <div className={`bg-${contact.color}-500/20 p-3 rounded-xl mr-4 group-hover:bg-${contact.color}-500/30 transition-colors`}>
                                            <contact.icon className={`text-${contact.color}-400 group-hover:scale-110 transition-transform`} size={28} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                                            <p className="text-white font-semibold break-all">{contact.value}</p>
                                        </div>
                                    </a>
                                )
                            ))}
                            <a href="https://www.linkedin.com/in/bichara-moctar-cherif-ambadi-248ba3223/" target="_blank" rel="noopener noreferrer" className="flex items-center p-5 bg-blue-900/30 rounded-2xl hover:bg-blue-900/50 transition-all group hover:scale-105 col-span-full">
                                <div className="bg-blue-500/20 p-3 rounded-xl mr-4 group-hover:bg-blue-500/30 transition-colors">
                                    <Linkedin className="text-blue-400 group-hover:scale-110 transition-transform" size={28} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
                                    <p className="text-white font-semibold">Bichara Moctar Cherif Ambadi</p>
                                </div>
                            </a>
                        </div>
                        <div className="text-center pt-8 border-t border-blue-500/20">
                            <p className="text-xl text-blue-400 font-semibold mb-2">Disponible pour un stage de 3 à 5 mois et ouvert à l'alternance pour la rentrée de septembre 2026</p>
                            <p className="text-gray-300">Dès Mai 2026 • Permis B</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 border-t border-blue-500/20 py-8 text-center">
                <p className="text-gray-400">© 2025 Moctar Cherif Bichara - Tous droits réservés</p>
            </footer>
        </div>
    );
}
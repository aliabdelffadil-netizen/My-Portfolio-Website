import { useState, useEffect } from 'react';
import {
  User,
  MapPin,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Shield,
  Terminal,
  Globe,
  Code2,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const SKILLS = [
  { icon: Terminal, label: 'Linux', desc: 'CLI, file systems, permissions, scripting' },
  { icon: Code2, label: 'Python Scripting', desc: 'Automation, basic tooling' },
  { icon: Globe, label: 'Web Technologies', desc: 'HTTP/S, REST APIs, browser security' },
];

type Project = {
  title: string;
  desc: string;
  tags: string[];
  github: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    title: 'Animal & Human Environmental Impact Analysis (1925–2125)',
    desc: 'Analyzes environmental and health changes affecting 100 animal species and humans over 200 years using ML and Streamlit.',
    tags: ['Python', 'Pandas', 'Scikit-Learn', 'Streamlit', 'Machine Learning'],
    github: 'https://github.com/aliabdelffadil-netizen/Animal-Human-Environmental-Impact-Analysis',
    demo: 'https://github.com/aliabdelffadil-netizen/Animal-Human-Environmental-Impact-Analysis',
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.toLowerCase());
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d1117]/95 backdrop-blur-sm border-b border-[#30363d]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="font-semibold text-[#e6edf3] tracking-wide select-none">
            ali<span className="text-[#58a6ff]">.</span>ahmed
          </span>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors duration-150 ${
                  activeSection === link.toLowerCase()
                    ? 'text-[#58a6ff] bg-[#58a6ff]/10'
                    : 'text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22]'
                }`}
              >
                {link}
              </button>
            ))}
          </nav>
          <button
            className="md:hidden text-[#8b949e] hover:text-[#c9d1d9] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#161b22] border-b border-[#30363d] px-4 pb-4 pt-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="block w-full text-left py-2.5 px-3 rounded-md text-sm text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#0d1117] transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#161b22_0%,_#0d1117_60%)] pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#30363d] bg-[#161b22] text-xs text-[#8b949e] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#58a6ff] animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e6edf3] mb-4 tracking-tight leading-none">
            Ali Ahmed
          </h1>
          <p className="text-xl sm:text-2xl text-[#58a6ff] font-medium mb-6">
            Cybersecurity Student
          </p>
          <p className="text-base sm:text-lg text-[#8b949e] leading-relaxed max-w-xl mx-auto mb-10">
            Passionate about ethical hacking, continuous learning, and building a solid foundation
            in network defense.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <button
              onClick={() => scrollTo('skills')}
              className="px-5 py-2.5 rounded-md bg-[#58a6ff] text-[#0d1117] text-sm font-semibold hover:bg-[#79c0ff] transition-colors duration-150"
            >
              My Current Focus
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 rounded-md border border-[#30363d] bg-[#161b22] text-[#c9d1d9] text-sm font-semibold hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors duration-150"
            >
              Contact Me
            </button>
          </div>

          {/* Social icon buttons */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/ali-ahmed-220905377/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-[#30363d] bg-[#161b22]/60 text-[#8b949e] hover:border-[#58a6ff]/60 hover:text-[#58a6ff] hover:bg-[#58a6ff]/5 transition-all duration-150"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="https://github.com/aliabdelffadil-netizen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-md border border-[#30363d] bg-[#161b22]/60 text-[#8b949e] hover:border-[#58a6ff]/60 hover:text-[#58a6ff] hover:bg-[#58a6ff]/5 transition-all duration-150"
            >
              <Github size={17} />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollTo('about')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#30363d] hover:text-[#58a6ff] transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={<User size={18} />}
            title="About Me"
            subtitle="A brief introduction about who I am and what drives me."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* LEFT — large card */}
            <div className="lg:col-span-2 bg-[#161b22] border border-[#30363d] rounded-xl p-7 flex flex-col justify-between hover:border-[#58a6ff]/40 transition-colors duration-300">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#58a6ff]/10 flex items-center justify-center mb-5">
                  <User size={18} className="text-[#58a6ff]" />
                </div>
                <p className="text-[#c9d1d9] text-sm sm:text-base leading-relaxed">
                  I am a 3rd-year Computer Science student at the{' '}
                  <span className="text-[#e6edf3] font-medium">
                    Egyptian Russian University (ERU)
                  </span>
                  , majoring in Cyber Security. I am highly motivated to build a strong foundation
                  in securing systems and networks, bridging academic knowledge with practical
                  application.
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-[#30363d] flex items-center gap-2 text-xs text-[#8b949e]">
                <span className="w-2 h-2 rounded-full bg-[#58a6ff]" />
                Currently studying — ERU, Cairo
              </div>
            </div>

            {/* RIGHT — 3 cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <BentoCard
                icon={<MapPin size={16} className="text-[#58a6ff]" />}
                title="Location"
                highlight="Cairo, Egypt"
                muted="Open to remote opportunities"
              />
              <BentoCard
                icon={<User size={16} className="text-[#58a6ff]" />}
                title="Profile"
                highlight="20 Years Old"
                muted="Driven professional"
              />
              <div className="sm:col-span-2 bg-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#58a6ff]/40 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-md bg-[#58a6ff]/10 flex items-center justify-center">
                    <GraduationCap size={15} className="text-[#58a6ff]" />
                  </div>
                  <span className="text-xs font-medium text-[#8b949e] uppercase tracking-wider">
                    Education
                  </span>
                </div>
                <p className="text-[#58a6ff] font-semibold text-base">Cyber Security Student</p>
                <p className="text-[#8b949e] text-sm mt-1">
                  Student in Egyptian Russian University (2024–2028)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-4 bg-[#161b22]/40">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={<Shield size={18} />}
            title="Skills"
            subtitle="Technologies and concepts I work with."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILLS.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="group bg-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#58a6ff]/50 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#58a6ff]/10 flex items-center justify-center shrink-0 group-hover:bg-[#58a6ff]/20 transition-colors">
                    <Icon size={17} className="text-[#58a6ff]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#e6edf3]">{label}</p>
                    <p className="text-xs text-[#8b949e] mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={<Code2 size={18} />}
            title="Projects"
            subtitle="A selection of things I've built or am building."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4 bg-[#161b22]/40">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={<Mail size={18} />}
            title="Contact"
            subtitle="Feel free to reach out — I'm always open to connecting."
          />
          <div className="mt-10 max-w-md mx-auto">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
              <p className="text-[#8b949e] text-sm text-center mb-8 leading-relaxed">
                Whether it's a project, opportunity, or just a conversation about cybersecurity —
                my inbox is open.
              </p>
              <div className="flex items-center justify-center gap-4">
                <ContactIconButton
                  href="mailto:ali.abdelffadil@gmail.com"
                  icon={<Mail size={20} />}
                  label="Email"
                />
                <ContactIconButton
                  href="https://github.com/aliabdelffadil-netizen"
                  icon={<Github size={20} />}
                  label="GitHub"
                  external
                />
                <ContactIconButton
                  href="https://www.linkedin.com/in/ali-ahmed-220905377/"
                  icon={<Linkedin size={20} />}
                  label="LinkedIn"
                  external
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-6 px-4 text-center">
        <p className="text-xs text-[#484f58]">
          &copy; {new Date().getFullYear()} Ali Ahmed. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col hover:border-[#58a6ff]/50 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="w-9 h-9 rounded-lg bg-[#58a6ff]/10 flex items-center justify-center shrink-0">
          <Code2 size={16} className="text-[#58a6ff]" />
        </div>
      </div>
      <h3 className="text-[#e6edf3] font-semibold text-base mb-2 leading-snug">{project.title}</h3>
      <p className="text-[#8b949e] text-sm leading-relaxed flex-1">{project.desc}</p>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full text-xs border border-[#30363d] bg-[#0d1117] text-[#8b949e]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action icons */}
      <div className="mt-4 pt-4 border-t border-[#30363d] flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on GitHub"
          className="text-[#8b949e] hover:text-[#58a6ff] transition-colors duration-150"
        >
          <Github size={16} />
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            className="text-[#8b949e] hover:text-[#58a6ff] transition-colors duration-150"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

function SectionHeader({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-md bg-[#58a6ff]/10 flex items-center justify-center text-[#58a6ff]">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-[#e6edf3]">{title}</h2>
      </div>
      <p className="text-sm text-[#8b949e] ml-9">{subtitle}</p>
      <div className="mt-4 ml-9 w-12 h-px bg-[#58a6ff]/40" />
    </div>
  );
}

function BentoCard({
  icon,
  title,
  highlight,
  muted,
}: {
  icon: React.ReactNode;
  title: string;
  highlight: string;
  muted: string;
}) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 hover:border-[#58a6ff]/40 transition-colors duration-300">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-md bg-[#58a6ff]/10 flex items-center justify-center">
          {icon}
        </div>
        <span className="text-xs font-medium text-[#8b949e] uppercase tracking-wider">{title}</span>
      </div>
      <p className="text-[#58a6ff] font-semibold text-base">{highlight}</p>
      <p className="text-[#8b949e] text-sm mt-1">{muted}</p>
    </div>
  );
}

function ContactIconButton({
  href,
  icon,
  label,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#30363d] bg-[#0d1117] text-[#8b949e] group-hover:border-[#58a6ff]/60 group-hover:text-[#58a6ff] group-hover:bg-[#58a6ff]/5 transition-all duration-150">
        {icon}
      </div>
      <span className="text-xs text-[#484f58] group-hover:text-[#8b949e] transition-colors">
        {label}
      </span>
    </a>
  );
}

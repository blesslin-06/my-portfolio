"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Hero from './homepage/Hero';
import About from './homepage/About';
import Skills from './homepage/Skills';
import Project from './homepage/Project';
import Contact from './homepage/Contact';
import Chatbot from './homepage/Chatbot';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Close mobile menu on scroll
      if (mobileMenuOpen) setMobileMenuOpen(false);

      const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact'];
      // Use 40% viewport height as the detection threshold so active state switches earlier
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#F0F6FC] font-sans selection:bg-[#00F2FE]/30 selection:text-white">
      {/* ───── Navbar ───── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#0D1117]/92 border-b border-[#30363D]/80 py-3 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-9 h-9 rounded-xl bg-[#161B22] border border-[#30363D] group-hover:border-[#00F2FE]/60 flex items-center justify-center text-[#00F2FE] font-mono text-sm font-bold shadow-sm transition-all duration-200 group-hover:shadow-[0_0_12px_rgba(0,242,254,0.3)]">
              BK
            </div>
            <span className="font-semibold text-base sm:text-lg text-[#F0F6FC] group-hover:text-[#00F2FE] transition-colors duration-200">
              Blesslin Kanagaraj
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-mono py-1.5 px-3 rounded-lg transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-[#00F2FE] font-bold bg-[#00F2FE]/8'
                    : 'text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#161B22]'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#00F2FE] rounded-full shadow-[0_0_8px_#00F2FE]" />
                )}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-2 text-xs font-mono font-bold rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#00C6FF] text-[#0D1117] hover:shadow-[0_0_20px_rgba(0,242,254,0.45)] hover:scale-[1.04] active:scale-95 transition-all duration-200 flex items-center gap-1.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={14} />
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2.5 text-[#8B949E] hover:text-[#F0F6FC] rounded-xl bg-[#161B22] border border-[#30363D] hover:border-[#00F2FE]/40 transition-all duration-200"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#161B22]/97 backdrop-blur-xl border-b border-[#30363D] px-4 pt-3 pb-4 space-y-1.5 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-mono transition-all duration-150 ${
                  activeSection === link.id
                    ? 'bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/30 font-bold'
                    : 'text-[#8B949E] hover:bg-[#0D1117] hover:text-[#F0F6FC]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center w-full px-4 py-3 text-xs font-mono font-bold rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#00C6FF] text-[#0D1117] shadow-md"
            >
              Get In Touch
            </a>
          </div>
        )}
      </header>

      {/* ───── Main Content ───── */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <Chatbot />

      {/* ───── Footer ───── */}
      <footer className="border-t border-[#30363D]/60 bg-[#0D1117] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#8B949E]">
          <p>© {new Date().getFullYear()} Blesslin Kanagaraj. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with{' '}
            <span className="text-[#00F2FE] font-semibold">Next.js</span>
            {' '}&amp;{' '}
            <span className="text-[#00F2FE] font-semibold">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

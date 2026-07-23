"use client";

import React from 'react';
import { Terminal, Download, ArrowRight, Sparkles, Mail, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import RevealOnScroll from './RevealOnScroll';

export default function Hero() {
  return (
    <section
      id="hero"
      /* hero-overflow-guard prevents floating badges from causing horizontal scroll */
      className="hero-overflow-guard relative pt-28 pb-20 md:pt-44 md:pb-32 flex flex-col justify-center min-h-[90vh]"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00F2FE]/12 via-[#0D1117] to-[#0D1117] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#00F2FE 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      {/* Large centered glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7928CA]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">

          {/* ── Left column ── */}
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll>
              {/* Status badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#161B22]/90 border border-[#00F2FE]/30 text-xs font-mono text-[#00F2FE] shadow-[0_0_20px_rgba(0,242,254,0.15)] hover:border-[#00F2FE]/60 transition-all w-fit">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inset-0 rounded-full bg-[#00F2FE] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F2FE]" />
                </span>
                <Sparkles size={13} className="text-[#00F2FE] shrink-0" />
                <span>Full Stack &amp; Embedded Systems Developer</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={80}>
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#F0F6FC] leading-[1.08]">
                Hi, I&apos;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#38BDF8] to-[#9333EA]">
                  Blesslin Kanagaraj
                </span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#8B949E] leading-relaxed max-w-xl">
                Computer Science student at Madras Christian College crafting responsive full-stack web applications, REST API integrations, and IoT embedded prototypes.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={220}>
              {/* Quick metrics */}
              <div className="grid grid-cols-3 gap-3 max-w-md">
                {[
                  { value: 'NTT DATA', label: 'Intern Experience', cyan: false },
                  { value: '4+', label: 'Featured Projects', cyan: true },
                  { value: '7.5', label: 'CGPA @ MCC', cyan: false },
                ].map(({ value, label, cyan }) => (
                  <div
                    key={label}
                    className="p-3 rounded-xl bg-[#161B22]/80 border border-[#30363D] hover:border-[#00F2FE]/40 transition-colors text-center"
                  >
                    <div className={`text-base sm:text-lg font-bold font-mono truncate ${cyan ? 'text-[#00F2FE]' : 'text-[#F0F6FC]'}`}>
                      {value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#8B949E] mt-0.5 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={290}>
              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#00C6FF] text-[#0D1117] font-semibold text-sm hover:shadow-[0_0_28px_rgba(0,242,254,0.45)] hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-2 group shadow-md"
                >
                  <span>View Projects</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="/BLESSLIN_RESUME.docx"
                  download="BLESSLIN_RESUME.docx"
                  className="px-5 py-3 rounded-xl bg-[#161B22] border border-[#30363D] text-[#F0F6FC] font-semibold text-sm hover:border-[#00F2FE]/60 hover:shadow-[0_0_18px_rgba(0,242,254,0.15)] hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-2"
                >
                  <Download size={16} className="text-[#00F2FE] shrink-0" />
                  <span>Download Resume</span>
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={360}>
              {/* Social row */}
              <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#30363D]/50">
                <span className="font-mono text-[11px] text-[#8B949E] uppercase tracking-widest shrink-0">Connect:</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://linkedin.com/in/blessly-n-kanagaraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2.5 rounded-xl bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#00F2FE] hover:border-[#00F2FE]/50 hover:shadow-[0_0_14px_rgba(0,242,254,0.2)] hover:scale-110 transition-all duration-200"
                  >
                    <LinkedinIcon size={17} />
                  </a>
                  <a
                    href="mailto:blesslinkanagaraj12@gmail.com"
                    aria-label="Send Email"
                    className="p-2.5 rounded-xl bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#00F2FE] hover:border-[#00F2FE]/50 hover:shadow-[0_0_14px_rgba(0,242,254,0.2)] hover:scale-110 transition-all duration-200"
                  >
                    <Mail size={17} />
                  </a>
                  <a
                    href="tel:+919962009181"
                    className="text-xs font-mono text-[#8B949E] hover:text-[#00F2FE] transition-colors ml-1"
                  >
                    +91 99620 09181
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* ── Right column — code window ── */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <RevealOnScroll delay={200}>
              {/* Outer glow halo — lives inside RevealOnScroll so it's positioned relative to the card */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#00F2FE]/25 to-[#7928CA]/20 rounded-3xl blur-2xl opacity-70" />

                {/* Code window card */}
                <div className="relative bg-[#161B22] border border-[#30363D] rounded-2xl shadow-2xl overflow-hidden hover:border-[#00F2FE]/50 transition-all duration-300 group">
                  {/* Title bar */}
                  <div className="bg-[#0D1117] border-b border-[#30363D] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
                    </div>
                    <div className="text-xs font-mono text-[#8B949E] flex items-center gap-2">
                      <Terminal size={13} className="text-[#00F2FE]" />
                      <span>developer.ts</span>
                    </div>
                    <div className="w-16" />
                  </div>

                  {/* Code body */}
                  <div className="p-5 font-mono text-xs leading-[1.8] overflow-x-auto">
                    <div className="text-[#636E7B] mb-1">// Developer Profile Object</div>
                    <div>
                      <span className="text-[#9333EA] font-semibold">const</span>{' '}
                      <span className="text-[#00F2FE]">developer</span>
                      {' = \u007B'}
                    </div>
                    {[
                      ['name', "'Blesslin Kanagaraj'"],
                      ['degree', "'B.Sc Computer Science'"],
                      ['college', "'Madras Christian College'"],
                      ['internship', "'NTT DATA Business Solutions'"],
                    ].map(([key, val]) => (
                      <div key={key} className="pl-4">
                        <span className="text-[#38BDF8]">{key}</span>
                        <span className="text-[#8B949E]">: </span>
                        <span className="text-[#A5D6FF]">{val}</span>
                        <span className="text-[#8B949E]">,</span>
                      </div>
                    ))}
                    <div className="pl-4">
                      <span className="text-[#38BDF8]">skills</span>
                      <span className="text-[#8B949E]">: [</span>
                      {["'React'", "'Next.js'", "'Python'", "'Arduino'"].map((s, i, a) => (
                        <span key={s}>
                          <span className="text-[#A5D6FF]">{s}</span>
                          {i < a.length - 1 && <span className="text-[#8B949E]">, </span>}
                        </span>
                      ))}
                      <span className="text-[#8B949E]">],</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#38BDF8]">availableForWork</span>
                      <span className="text-[#8B949E]">: </span>
                      <span className="text-[#9333EA] font-semibold">true</span>
                    </div>
                    <div className="text-[#F0F6FC]">{'\u007D;'}</div>

                    <div className="mt-4 pt-3 border-t border-[#30363D]/60 flex items-center gap-2 text-[11px] text-[#00F2FE]">
                      <CheckCircle2 size={13} className="shrink-0" />
                      <span>Ready to collaborate &amp; build high-impact apps</span>
                    </div>
                  </div>
                </div>

                {/* Floating badges — hidden on xs to prevent overflow */}
                <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-[#0D1117] border border-[#00F2FE]/50 px-3 py-2 rounded-2xl shadow-xl items-center gap-2 animate-float z-10">
                  <Code2 size={16} className="text-[#00F2FE]" />
                  <span className="text-xs font-mono text-[#F0F6FC] font-semibold">Full Stack Dev</span>
                </div>
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#0D1117] border border-[#9333EA]/60 px-3 py-2 rounded-2xl shadow-xl items-center gap-2 animate-float z-10" style={{ animationDelay: '2s' }}>
                  <Cpu size={16} className="text-[#9333EA]" />
                  <span className="text-xs font-mono text-[#F0F6FC] font-semibold">IoT &amp; Embedded</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}

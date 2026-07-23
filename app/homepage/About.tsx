"use client";

import React from 'react';
import { User, GraduationCap, Briefcase, Camera, Code2, Award } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#30363D]/50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00F2FE]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-[#00F2FE]/10 border border-[#00F2FE]/20 text-[#00F2FE] shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <User size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F0F6FC] tracking-tight">
                About Me
              </h2>
              <p className="text-xs font-mono text-[#8B949E] mt-0.5">Background, Education &amp; Experience</p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card */}
          <div className="lg:col-span-8">
            <RevealOnScroll delay={100}>
              <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 sm:p-8 hover:border-[#00F2FE]/50 hover:shadow-[0_10px_30px_-10px_rgba(0,242,254,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-[#C9D1D9] leading-relaxed">
                    I&apos;m <span className="text-[#00F2FE] font-semibold">Blesslin Kanagaraj</span>, a passionate Computer Science student at <span className="text-[#F0F6FC] font-medium">Madras Christian College</span> (2024–2027) with a CGPA of 7.5, pursuing my Bachelor&apos;s degree with a strong focus on web development and software engineering.
                  </p>
                  <p className="text-base sm:text-lg text-[#C9D1D9] leading-relaxed">
                    I gained valuable industry experience as a <span className="text-[#F0F6FC] font-medium">Full Stack Developer Intern</span> at <span className="text-[#00F2FE] font-medium">NTT DATA Business Solutions</span> in Chennai, where I built full-stack web applications, designed responsive user interfaces, and integrated REST API services.
                  </p>
                  <p className="text-base sm:text-lg text-[#C9D1D9] leading-relaxed">
                    I thrive on turning complex requirements into clean, user-friendly applications — spanning modern frontend web stacks to hardware-integrated Arduino IoT prototypes.
                  </p>
                  <p className="text-base sm:text-lg text-[#C9D1D9] leading-relaxed">
                    Beyond code, I cultivate a creative mindset through <span className="text-[#9333EA] font-medium">video editing, photography, and graphic design</span>, ensuring my applications are both technically sound and visually compelling.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#30363D]/60 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono text-[#8B949E]">Core Focus:</span>
                  {['Full-Stack Development', 'REST APIs', 'UI/UX Design', 'IoT Prototypes'].map((focus) => (
                    <span
                      key={focus}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-[#0D1117] border border-[#30363D] text-[#00F2FE] group-hover:border-[#00F2FE]/40 transition-colors"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Sidebar Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <RevealOnScroll delay={200}>
              <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 hover:border-[#00F2FE]/50 hover:shadow-[0_10px_25px_-5px_rgba(0,242,254,0.15)] hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#00F2FE]/10 text-[#00F2FE] group-hover:scale-110 transition-transform">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#F0F6FC]">Education</h3>
                    <p className="text-xs text-[#8B949E]">Degree Program</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-[#F0F6FC]">Madras Christian College</p>
                <p className="text-xs text-[#8B949E] mt-0.5">B.Sc Computer Science (2024–2027)</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00F2FE] bg-[#00F2FE]/10 border border-[#00F2FE]/30 px-3 py-1 rounded-lg">
                  <Award size={13} />
                  <span>CGPA: 7.5</span>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 hover:border-[#9333EA]/50 hover:shadow-[0_10px_25px_-5px_rgba(147,51,234,0.2)] hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#9333EA]/10 text-[#9333EA] group-hover:scale-110 transition-transform">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#F0F6FC]">Experience</h3>
                    <p className="text-xs text-[#8B949E]">Internship Role</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-[#F0F6FC]">NTT DATA Business Solutions</p>
                <p className="text-xs text-[#8B949E] mt-0.5">Full Stack Developer Intern (Chennai)</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 hover:border-[#00F2FE]/50 hover:shadow-[0_10px_25px_-5px_rgba(0,242,254,0.15)] hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#00F2FE]/10 text-[#00F2FE] group-hover:scale-110 transition-transform">
                    <Camera size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#F0F6FC]">Creative Pursuits</h3>
                    <p className="text-xs text-[#8B949E]">Interests &amp; Hobbies</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {['Video Editing', 'Photography', 'Graphic Design', 'IoT Circuits'].map((interest) => (
                    <span
                      key={interest}
                      className="text-xs font-mono text-[#C9D1D9] bg-[#0D1117] border border-[#30363D] px-2.5 py-1 rounded-md hover:border-[#00F2FE]/40 hover:text-[#00F2FE] transition-colors"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

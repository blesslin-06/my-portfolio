"use client";

import React from 'react';
import { Wrench, Code2, Database, Cpu, Users } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Responsive Design', 'Tailwind CSS'],
  Backend: ['Python', 'SQL', 'Java', 'REST APIs', 'Node.js Basics'],
  'Embedded Systems': ['Arduino', 'Embedded C/C++', 'Sensors & Relays', 'IoT Development'],
  'Soft Skills': ['Problem Solving', 'Teamwork', 'Project Management', 'Communication', 'Critical Thinking'],
};

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 size={22} className="text-[#00F2FE]" />,
  Backend: <Database size={22} className="text-[#9333EA]" />,
  'Embedded Systems': <Cpu size={22} className="text-[#00F2FE]" />,
  'Soft Skills': <Users size={22} className="text-[#9333EA]" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-[#30363D]/50 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7928CA]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-[#00F2FE]/10 border border-[#00F2FE]/20 text-[#00F2FE] shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <Wrench size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F0F6FC] tracking-tight">
                Technical Skills &amp; Competencies
              </h2>
              <p className="text-xs font-mono text-[#8B949E] mt-0.5">Languages, Frameworks &amp; Core Tools</p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <RevealOnScroll key={category} delay={index * 125}>
              <div
                className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 sm:p-8 hover:border-[#00F2FE]/60 hover:shadow-[0_12px_35px_-10px_rgba(0,242,254,0.2)] hover:-translate-y-1.5 transition-all duration-300 group h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#30363D]/60">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#0D1117] border border-[#30363D] group-hover:border-[#00F2FE]/40 group-hover:scale-110 transition-all duration-300">
                        {categoryIcons[category] || <Wrench size={22} className="text-[#00F2FE]" />}
                      </div>
                      <h3 className="text-xl font-bold text-[#F0F6FC] group-hover:text-[#00F2FE] transition-colors">
                        {category}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#8B949E] px-2.5 py-1 rounded-md bg-[#0D1117] border border-[#30363D]">
                      {items.length} Skills
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs sm:text-sm font-mono tracking-wide px-3.5 py-2 rounded-xl bg-[#0D1117] border border-[#30363D] text-[#C9D1D9] hover:text-[#00F2FE] hover:border-[#00F2FE] hover:bg-[#00F2FE]/10 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(0,242,254,0.35)] transition-all duration-300 cursor-default font-medium inline-block"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 text-[11px] font-mono text-[#8B949E] flex items-center justify-between">
                  <span>Proficiency: Practical &amp; Academic</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] group-hover:animate-ping"></span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

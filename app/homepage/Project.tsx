"use client";

import React from 'react';
import { Code2, ExternalLink, Lightbulb, ShieldAlert, Home, FolderGit2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const projects = [
  {
    title: 'Skill Gap Analyzer',
    type: 'Full-Stack Web Platform',
    description:
      'A web-based platform that identifies skill gaps between users\' current competencies and job role requirements, comparing inputs with industry standards to recommend personalized learning paths.',
    tech: ['HTML', 'CSS', 'JavaScript', 'REST APIs', 'UI/UX'],
    link: '#',
    icon: <Code2 size={24} className="text-[#00F2FE]" />,
    gradient: 'from-[#00F2FE]/25 via-[#00F2FE]/5 to-transparent',
  },
  {
    title: 'Smart LED Control System',
    type: 'Arduino IoT Workshop Project',
    description:
      'A digital LED control system with push-button input and micro-controller timing logic, demonstrating hands-on circuit design and embedded programming.',
    tech: ['Arduino', 'Embedded C/C++', 'Circuit Design', 'Breadboard'],
    link: '#',
    icon: <Lightbulb size={24} className="text-[#9333EA]" />,
    gradient: 'from-[#9333EA]/25 via-[#9333EA]/5 to-transparent',
  },
  {
    title: 'Obstacle Detection System',
    type: 'Real-time Hardware Prototype',
    description:
      'A real-time obstacle detection system using an HC-SR04 ultrasonic distance sensor with LED indicators and buzzer alerts for proximity warning.',
    tech: ['Arduino', 'Ultrasonic Sensor', 'Buzzer Alert', 'Embedded C'],
    link: '#',
    icon: <ShieldAlert size={24} className="text-[#00F2FE]" />,
    gradient: 'from-[#00F2FE]/25 via-[#00F2FE]/5 to-transparent',
  },
  {
    title: 'Smart Home Automation Prototype',
    type: 'IoT Home Automation',
    description:
      'A home automation system with dual manual and sensor-triggered relay control logic for automated household appliance management.',
    tech: ['Arduino', 'Relay Modules', 'Light Sensors', 'Embedded Logic'],
    link: '#',
    icon: <Home size={24} className="text-[#9333EA]" />,
    gradient: 'from-[#9333EA]/25 via-[#9333EA]/5 to-transparent',
  },
];

export default function Project() {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#30363D]/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00F2FE]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-[#00F2FE]/10 border border-[#00F2FE]/20 text-[#00F2FE] shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <FolderGit2 size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F0F6FC] tracking-tight">
                Featured Projects
              </h2>
              <p className="text-xs font-mono text-[#8B949E] mt-0.5">Web Platforms &amp; Embedded Hardware Prototypes</p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <RevealOnScroll key={project.title} delay={idx * 125}>
              <div
                className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 sm:p-8 hover:border-[#00F2FE]/60 hover:shadow-[0_15px_35px_-5px_rgba(0,242,254,0.25)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full"
              >
                {/* Subtle Ambient Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-[#0D1117] border border-[#30363D] group-hover:border-[#00F2FE]/50 group-hover:scale-110 transition-all duration-300 shadow-sm">
                      {project.icon}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0D1117] border border-[#00F2FE]/30 text-[#00F2FE] font-medium shadow-sm">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F0F6FC] mb-3 group-hover:text-[#00F2FE] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#C9D1D9] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#30363D]/60 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-[#0D1117] border border-[#30363D] text-[#8B949E] group-hover:border-[#00F2FE]/40 group-hover:text-[#00F2FE] group-hover:scale-105 transition-all duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#00F2FE] hover:text-white transition-colors group/link w-fit"
                  >
                    <span>View Project Details</span>
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

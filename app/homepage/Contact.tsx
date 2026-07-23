"use client";

import React, { useState } from 'react';
import { Mail, Phone, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import RevealOnScroll from './RevealOnScroll';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#30363D]/50 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-80 bg-gradient-to-t from-[#00F2FE]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2.5 rounded-xl bg-[#00F2FE]/10 border border-[#00F2FE]/20 text-[#00F2FE] shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <MessageSquare size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#F0F6FC] tracking-tight">
                Get In Touch
              </h2>
              <p className="text-xs font-mono text-[#8B949E] mt-0.5">Let&apos;s Connect, Discuss Opportunities &amp; Collaborate</p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <RevealOnScroll delay={100}>
              <a
                href="tel:+919962009181"
                className="p-5 rounded-2xl bg-[#161B22] border border-[#30363D] hover:border-[#00F2FE]/60 hover:bg-[#0D1117] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,242,254,0.2)] transition-all duration-300 group flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-[#0D1117] border border-[#30363D] text-[#00F2FE] group-hover:border-[#00F2FE]/40 group-hover:scale-110 transition-all shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#8B949E] block">Phone / WhatsApp</span>
                  <span className="text-sm sm:text-base font-bold text-[#F0F6FC] group-hover:text-[#00F2FE] transition-colors">
                    +91 99620 09181
                  </span>
                </div>
              </a>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <a
                href="mailto:blesslinkanagaraj12@gmail.com"
                className="p-5 rounded-2xl bg-[#161B22] border border-[#30363D] hover:border-[#00F2FE]/60 hover:bg-[#0D1117] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,242,254,0.2)] transition-all duration-300 group flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-[#0D1117] border border-[#30363D] text-[#00F2FE] group-hover:border-[#00F2FE]/40 group-hover:scale-110 transition-all shrink-0">
                  <Mail size={22} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-[#8B949E] block">Direct Email</span>
                  <span className="text-xs sm:text-sm font-bold text-[#F0F6FC] group-hover:text-[#00F2FE] transition-colors truncate block">
                    blesslinkanagaraj12@gmail.com
                  </span>
                </div>
              </a>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <a
                href="https://linkedin.com/in/blessly-n-kanagaraj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#161B22] border border-[#30363D] hover:border-[#9333EA]/60 hover:bg-[#0D1117] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(147,51,234,0.25)] transition-all duration-300 group flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-[#0D1117] border border-[#30363D] text-[#9333EA] group-hover:border-[#9333EA]/40 group-hover:scale-110 transition-all shrink-0">
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#8B949E] block">LinkedIn</span>
                  <span className="text-sm font-bold text-[#F0F6FC] group-hover:text-[#9333EA] transition-colors">
                    blessly-n-kanagaraj
                  </span>
                </div>
              </a>
            </RevealOnScroll>

            <RevealOnScroll delay={400}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#161B22] border border-[#30363D] hover:border-[#00F2FE]/60 hover:bg-[#0D1117] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,242,254,0.2)] transition-all duration-300 group flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-[#0D1117] border border-[#30363D] text-[#00F2FE] group-hover:border-[#00F2FE]/40 group-hover:scale-110 transition-all shrink-0">
                  <GithubIcon size={22} />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#8B949E] block">GitHub</span>
                  <span className="text-sm font-bold text-[#F0F6FC] group-hover:text-[#00F2FE] transition-colors">
                    View Code &amp; Repositories
                  </span>
                </div>
              </a>
            </RevealOnScroll>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={200}>
              <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 sm:p-8 hover:border-[#00F2FE]/40 transition-all duration-300 shadow-xl">
                <h3 className="text-xl font-bold text-[#F0F6FC] mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-sm text-[#8B949E] mb-6">
                  Have a job opportunity, project idea, or question? Send a note directly to Blesslin.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-[#0D1117] border border-[#00F2FE]/40 text-center space-y-2 animate-in fade-in duration-300">
                    <CheckCircle2 size={36} className="text-[#00F2FE] mx-auto animate-bounce" />
                    <h4 className="text-base font-bold text-[#F0F6FC]">Message Sent Successfully!</h4>
                    <p className="text-xs text-[#8B949E]">Thank you for reaching out. Blesslin will respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-[#8B949E] mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#0D1117] border border-[#30363D] rounded-xl px-4 py-3 text-sm text-[#F0F6FC] placeholder-[#8B949E] focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#8B949E] mb-1.5">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#0D1117] border border-[#30363D] rounded-xl px-4 py-3 text-sm text-[#F0F6FC] placeholder-[#8B949E] focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#8B949E] mb-1.5">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Blesslin, I would like to discuss..."
                        className="w-full bg-[#0D1117] border border-[#30363D] rounded-xl px-4 py-3 text-sm text-[#F0F6FC] placeholder-[#8B949E] focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#00C6FF] text-[#0D1117] font-bold text-sm hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}

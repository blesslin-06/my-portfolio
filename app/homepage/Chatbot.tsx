"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hi! I'm Blesslin's Portfolio Assistant. Ask me anything about Blesslin's skills, experience, or projects!",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    'What are your main skills?',
    'Tell me about your experience',
    'What projects have you built?',
    'How can I contact you?',
  ];

  const getBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('skill') || q.includes('stack') || q.includes('tech')) {
      return "Blesslin specializes in Frontend (HTML, CSS, JS, Responsive Web Design), Backend (Python, SQL, Java), Embedded Systems (Arduino, Embedded C/C++, IoT), and Soft Skills like Problem Solving and Teamwork!";
    }
    if (q.includes('experience') || q.includes('intern') || q.includes('work') || q.includes('ntt')) {
      return "Blesslin worked as a Full Stack Developer Intern at NTT DATA Business Solutions in Chennai, developing full-stack web apps, responsive UIs, and integrating REST APIs.";
    }
    if (q.includes('project') || q.includes('portfolio') || q.includes('built') || q.includes('arduino')) {
      return "Key projects include: Skill Gap Analyzer (web platform), Smart LED Control System (IoT), Obstacle Detection System (real-time distance measurement), and Smart Home Automation Prototype.";
    }
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
      return "You can reach Blesslin by Email at blesslinkanagaraj12@gmail.com, Phone at +91 99620 09181, or via LinkedIn at linkedin.com/in/blessly-n-kanagaraj.";
    }
    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('mcc')) {
      return "Blesslin is pursuing B.Sc Computer Science at Madras Christian College (2024–2027) with a CGPA of 7.5.";
    }
    return "Blesslin is a Computer Science student at MCC & Full Stack Developer with experience in web apps and IoT systems. Ask about skills, experience, or projects!";
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    if (!textToSend) setInput('');

    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 chatbot-safe">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#00C6FF] text-[#0D1117] shadow-[0_0_25px_rgba(0,242,254,0.45)] hover:scale-110 hover:shadow-[0_0_35px_rgba(0,242,254,0.65)] transition-all duration-300 active:scale-95"
          aria-label="Open Chatbot"
        >
          <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9333EA] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#9333EA]"></span>
          </span>
        </button>
      )}

      {/* Chat Box Window */}
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] max-w-[22rem] sm:w-96 h-[min(460px,75vh)] bg-[#161B22]/97 backdrop-blur-xl border border-[#30363D] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#0D1117] border-b border-[#30363D] p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/30">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F0F6FC]">Blesslin Assistant</h3>
                <p className="text-[11px] text-[#00F2FE] flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#8B949E] hover:text-[#F0F6FC] p-1.5 rounded-lg hover:bg-[#30363D]/50 transition-colors"
              aria-label="Close Chatbot"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                    msg.sender === 'user'
                      ? 'bg-[#9333EA] text-white'
                      : 'bg-[#00F2FE]/10 text-[#00F2FE] border border-[#00F2FE]/30'
                  }`}
                >
                  {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div
                  className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[82%] ${
                    msg.sender === 'user'
                      ? 'bg-[#9333EA] text-white rounded-tr-none shadow-md'
                      : 'bg-[#0D1117] border border-[#30363D] text-[#F0F6FC] rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-[#0D1117]/60 border-t border-[#30363D]/40 flex gap-2 overflow-x-auto no-scrollbar">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="text-[11px] font-mono whitespace-nowrap px-2.5 py-1 rounded-full bg-[#161B22] border border-[#30363D] text-[#C9D1D9] hover:text-[#00F2FE] hover:border-[#00F2FE]/60 transition-all shrink-0"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#0D1117] border-t border-[#30363D] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-[#161B22] border border-[#30363D] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[#F0F6FC] placeholder-[#8B949E] focus:outline-none focus:border-[#00F2FE]/60 transition-colors"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#00C6FF] text-[#0D1117] hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all disabled:opacity-50 shrink-0"
              disabled={!input.trim()}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

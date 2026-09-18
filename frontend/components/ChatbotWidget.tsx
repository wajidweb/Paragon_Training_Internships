"use client";

import React, { useState, useRef, useEffect } from "react";
import { useChatStore } from "@/store/useChatStore";

export default function ChatbotWidget() {
  const {
    isOpen,
    messages,
    isLoading,
    toggleChat,
    sendMessage,
    clearChat,
  } = useChatStore();

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested questions based strictly on websitecontent.md
  const suggestions = [
    "What internship programs do you offer?",
    "How does the application process work?",
    "What housing accommodation is available?",
    "How can I contact the support team?",
  ];

  // Auto-scroll on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    setInput("");
    await sendMessage(messageText);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end">
      
      {/* 1. FLOATING CHATBOT WIDGET WINDOW */}
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col mb-4 transition-all duration-300 transform scale-100 origin-bottom-right">
          
          {/* Header with PG Internships branding */}
          <div className="bg-[#0B192C] p-4 text-white flex items-center justify-between border-b border-[#C5A059]">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full inline-block" />
                <div>
                  <h3 className="font-extrabold text-sm tracking-wide text-white">PG Assistant</h3>
                  <span className="text-[10px] text-slate-300 font-semibold block">Active Advisor</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Reset/Clear Chat Button */}
              <button
                onClick={clearChat}
                className="text-slate-300 hover:text-[#C5A059] transition-colors text-sm focus:outline-none"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                ↺
              </button>
              {/* Close Button */}
              <button
                onClick={toggleChat}
                className="text-slate-300 hover:text-white transition-colors text-lg font-bold focus:outline-none"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-xl text-sm leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-[#C5A059] text-white rounded-br-none"
                      : "bg-white text-[#0B192C] border border-slate-100 rounded-bl-none font-medium"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-400 font-bold mt-1 px-1">
                  {msg.sender === "user" ? "You" : "Advisor"}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex flex-col items-start">
                <div className="bg-white border border-slate-100 rounded-xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
                <span className="text-[9px] text-slate-400 font-bold mt-1 px-1">PG Advisor is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions block (only shown when not loading to avoid clutter) */}
          {!isLoading && messages.length <= 2 && (
            <div className="px-4 py-2 bg-slate-50/50 border-t border-slate-100 flex flex-col gap-1.5 select-none">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 pl-1">Suggested Questions</span>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-[11px] font-bold text-[#C5A059] border border-[#C5A059]/25 hover:border-[#C5A059] bg-white rounded-full px-3 py-1 hover:bg-[#C5A059]/5 transition-all text-left truncate max-w-full"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 border-t border-slate-100 bg-white flex items-center gap-2">
            <input
              type="text"
              className="flex-1 px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-[#C5A059] text-sm text-[#0B192C]"
              placeholder="Ask a question here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-all shadow-md ${
                input.trim() && !isLoading
                  ? "bg-[#C5A059] hover:bg-[#A18247] hover:scale-105"
                  : "bg-slate-200 cursor-not-allowed shadow-none"
              }`}
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>

        </div>
      )}

      {/* 2. FLOATING ACTION ACTION BUTTON (TOGGLE) */}
      <button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none z-50 ${
          isOpen ? "bg-[#0B192C] rotate-90" : "bg-[#C5A059] hover:bg-[#A18247]"
        }`}
        aria-label={isOpen ? "Close AI Advisor" : "Open PG AI Advisor"}
      >
        {isOpen ? (
          <span className="text-xl font-bold">✕</span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

    </div>
  );
}

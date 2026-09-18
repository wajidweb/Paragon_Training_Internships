import { create } from "zustand";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  sendMessage: (text: string) => Promise<void>;
  clearChat: () => void;
}

const getApiUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
};

export const useChatStore = create<ChatState>((set, get) => ({
  isOpen: false,
  messages: [
    {
      sender: "bot",
      text: "Hi! I'm the PG Internships AI assistant. I can help you learn about our internship programs, accommodation, destinations, eligibility, and how to apply in Malta! How can I help you today?",
    },
  ],
  isLoading: false,
  error: null,

  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  openChat: () => set({ isOpen: true }),
  closeChat: () => set({ isOpen: false }),

  sendMessage: async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    // Append user message
    const userMessage: Message = { sender: "user", text: trimmed };
    const currentMessages = get().messages;
    
    set({
      messages: [...currentMessages, userMessage],
      isLoading: true,
      error: null,
    });

    try {
      const response = await fetch(`${getApiUrl()}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          conversation: get().messages, // Send existing history to backend
        }),
      });

      const res = await response.json();

      if (response.ok && res.success) {
        set((state) => ({
          messages: [
            ...state.messages,
            { sender: "bot", text: res.message },
          ],
          isLoading: false,
        }));
      } else {
        const fallbackErr = "Sorry, I'm having trouble responding right now. Please try again in a moment or contact our support team directly at info@paragonglobalinternships.eu!";
        set((state) => ({
          messages: [
            ...state.messages,
            { sender: "bot", text: fallbackErr },
          ],
          isLoading: false,
        }));
      }
    } catch (e: unknown) {
      console.error("Chat API connection error:", e);
      const fallbackErr = "Sorry, I'm having trouble responding right now. Please try again in a moment or contact our support team directly at info@paragonglobalinternships.eu!";
      set((state) => ({
        messages: [
          ...state.messages,
          { sender: "bot", text: fallbackErr },
        ],
        isLoading: false,
      }));
    }
  },

  clearChat: () =>
    set({
      messages: [
        {
          sender: "bot",
          text: "Hi! I'm the PG Internships AI assistant. I can help you learn about our internship programs, accommodation, destinations, eligibility, and how to apply in Malta! How can I help you today?",
        },
      ],
      isLoading: false,
      error: null,
    }),
}));

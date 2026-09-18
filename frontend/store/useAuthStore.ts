import { create } from "zustand";

interface AdminUser {
  email: string;
  role: string;
}

interface AuthState {
  isLoggedIn: boolean;
  admin: AdminUser | null;
  token: string | null;
  error: string | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  admin: null,
  token: null,
  error: null,

  initialize: () => {
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("admin_logged_in") === "true";
      const token = localStorage.getItem("admin_token");
      const savedAdmin = localStorage.getItem("admin_user");
      
      if (isLoggedIn && token) {
        set({
          isLoggedIn: true,
          token,
          admin: savedAdmin ? JSON.parse(savedAdmin) : { email: "admin@pginternship.com", role: "Administrator" },
        });
      }
    }
  },

  login: async (email, password) => {
    set({ error: null });
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const res = await response.json();

      if (response.ok && res.success) {
        if (typeof window !== "undefined") {
          localStorage.setItem("admin_logged_in", "true");
          localStorage.setItem("admin_token", res.token);
          localStorage.setItem("admin_user", JSON.stringify(res.admin));
        }

        set({
          isLoggedIn: true,
          admin: res.admin,
          token: res.token,
          error: null,
        });

        return { success: true };
      } else {
        const errMsg = res.message || "Invalid credentials";
        set({ error: errMsg });
        return { success: false, message: errMsg };
      }
    } catch (e: unknown) {
      const err = e as Error;
      const errMsg = err.message || "Failed to connect to authentication server";
      set({ error: errMsg });
      return { success: false, message: errMsg };
    }
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_logged_in");
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_user");
    }
    set({
      isLoggedIn: false,
      admin: null,
      token: null,
      error: null,
    });
  },
}));

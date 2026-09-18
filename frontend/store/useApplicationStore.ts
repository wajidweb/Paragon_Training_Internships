import { create } from "zustand";
import { ApplicationData } from "@/components/apply-now/types";

interface Submission extends ApplicationData {
  id: string;
  submittedAt: string;
  status: "Pending" | "Approved" | "Reviewed" | "Rejected";
}

interface ApplicationState {
  submissions: Submission[];
  isLoading: boolean;
  error: string | null;
  fetchApplications: () => Promise<void>;
  submitApplication: (data: ApplicationData) => Promise<{ success: boolean; message?: string }>;
  updateApplicationStatus: (id: string, status: "Pending" | "Approved" | "Reviewed" | "Rejected") => Promise<boolean>;
  deleteApplication: (id: string) => Promise<boolean>;
}

const getApiUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
};

export const useApplicationStore = create<ApplicationState>((set) => ({
  submissions: [],
  isLoading: false,
  error: null,

  fetchApplications: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${getApiUrl()}/api/applications`);
      const res = await response.json();
      
      if (response.ok && res.success) {
        set({ submissions: res.data, isLoading: false });
      } else {
        set({ error: res.message || "Failed to load applications", isLoading: false });
      }
    } catch (e: unknown) {
      const err = e as Error;
      set({ error: err.message || "Failed to connect to server", isLoading: false });
    }
  },

  submitApplication: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${getApiUrl()}/api/applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (response.ok && res.success) {
        set({ isLoading: false });
        return { success: true };
      } else {
        const errMsg = res.message || "Failed to submit application";
        set({ error: errMsg, isLoading: false });
        return { success: false, message: errMsg };
      }
    } catch (e: unknown) {
      const err = e as Error;
      const errMsg = err.message || "Failed to connect to server";
      set({ error: errMsg, isLoading: false });
      return { success: false, message: errMsg };
    }
  },

  updateApplicationStatus: async (id, status) => {
    try {
      const response = await fetch(`${getApiUrl()}/api/applications/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const res = await response.json();

      if (response.ok && res.success) {
        // Sync local submissions list state
        set((state) => ({
          submissions: state.submissions.map((sub) =>
            sub.id === id ? { ...sub, status } : sub
          ),
        }));
        return true;
      }
      return false;
    } catch (e) {
      console.error("Failed to update status on server:", e);
      return false;
    }
  },

  deleteApplication: async (id) => {
    try {
      const response = await fetch(`${getApiUrl()}/api/applications/${id}`, {
        method: "DELETE",
      });

      const res = await response.json();

      if (response.ok && res.success) {
        // Sync local submissions list state
        set((state) => ({
          submissions: state.submissions.filter((sub) => sub.id !== id),
        }));
        return true;
      }
      return false;
    } catch (e) {
      console.error("Failed to delete application on server:", e);
      return false;
    }
  },
}));

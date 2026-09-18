"use client";

import React, { useState } from "react";
import { ApplicationData } from "./types";

interface StepProps {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step4Dates({ data, updateData, onNext, onBack }: StepProps) {
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const arrival = new Date(data.arrivalDate);
    const departure = new Date(data.departureDate);

    if (departure <= arrival) {
      setError("Departure Date must be after your Arrival Date.");
      return;
    }

    setError("");
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-b border-[var(--border-color)] pb-4 mb-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Internship Dates</h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1">Step 4 of 7: Input your planned dates of stay in Malta.</p>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 p-4 rounded-md text-sm font-semibold border border-red-200 dark:border-red-900/50">
          ⚠️ {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="arrivalDate">
            Arrival Date in Malta *
          </label>
          <input
            required
            type="date"
            id="arrivalDate"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            value={data.arrivalDate || ""}
            onChange={(e) => updateData({ arrivalDate: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="departureDate">
            Departure Date from Malta *
          </label>
          <input
            required
            type="date"
            id="departureDate"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            value={data.departureDate || ""}
            onChange={(e) => updateData({ departureDate: e.target.value })}
          />
          <span className="block text-xs text-[var(--text-muted)] mt-1">Must be after your Arrival Date</span>
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 border border-[var(--border-color)] hover:border-[#C5A059] text-[var(--text-secondary)] font-semibold rounded-md transition-all"
        >
          ← Back
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-[#C5A059] hover:bg-[#A18247] text-white font-bold rounded-md transition-all shadow-md"
        >
          Next Step →
        </button>
      </div>
    </form>
  );
}

"use client";

import React from "react";
import { ApplicationData } from "./types";

interface StepProps {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Institution({ data, updateData, onNext, onBack }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-b border-[var(--border-color)] pb-4 mb-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Institution Details</h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1">Step 3 of 7: Provide information about your home university or sending body.</p>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="sendingInstitution">
          Name of Sending Institution *
        </label>
        <input
          required
          type="text"
          id="sendingInstitution"
          className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
          placeholder="e.g. University of Copenhagen"
          value={data.sendingInstitution || ""}
          onChange={(e) => updateData({ sendingInstitution: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="coordinatorName">
            Name of Coordinator *
          </label>
          <input
            required
            type="text"
            id="coordinatorName"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. Prof. Jane Hansen"
            value={data.coordinatorName || ""}
            onChange={(e) => updateData({ coordinatorName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="coordinatorEmail">
            Coordinator Email
          </label>
          <input
            type="email"
            id="coordinatorEmail"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="coordinator@institution.com"
            value={data.coordinatorEmail || ""}
            onChange={(e) => updateData({ coordinatorEmail: e.target.value })}
          />
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

"use client";

import React from "react";
import { ApplicationData } from "./types";

interface StepProps {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step7HealthEnglish({ data, updateData, onNext, onBack }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-b border-[var(--border-color)] pb-4 mb-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Health &amp; English Level</h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1">Step 7 of 8: Disclose medical details and select your English level.</p>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="medicalConditions">
          Any Health &amp; Medical Conditions (Optional)
        </label>
        <textarea
          id="medicalConditions"
          rows={3}
          className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
          placeholder="Please disclose any medical conditions, allergies or disabilities we should be aware of. Leave blank if none."
          value={data.medicalConditions || ""}
          onChange={(e) => updateData({ medicalConditions: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="englishLevel">
          Level of English *
        </label>
        <select
          required
          id="englishLevel"
          className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
          value={data.englishLevel || ""}
          onChange={(e) => updateData({ englishLevel: e.target.value })}
        >
          <option value="">Select your English proficiency</option>
          <option value="A1">A1 (Beginner)</option>
          <option value="A2">A2 (Elementary)</option>
          <option value="B1">B1 (Intermediate)</option>
          <option value="B2">B2 (Upper Intermediate)</option>
          <option value="C1">C1 (Advanced)</option>
          <option value="C2">C2 (Proficient)</option>
        </select>
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

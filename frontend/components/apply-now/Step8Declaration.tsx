"use client";

import React from "react";
import { ApplicationData } from "./types";

interface StepProps {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export default function Step8Declaration({ data, updateData, onSubmit, onBack }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.declarationAgree) {
      alert("You must check the agreement box to submit your application.");
      return;
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-b border-[var(--border-color)] pb-4 mb-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Declaration &amp; Acknowledgement</h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1">Step 8 of 8: Review the final terms and sign your digital signature.</p>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/10 p-6 rounded-md border border-[var(--border-color)] space-y-4">
        <h3 className="font-bold text-sm text-[var(--text-primary)] uppercase tracking-wider">Please read carefully before submitting your application:</h3>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          I acknowledge that I have read, understood, and agreed to all information provided in this application form, including PG Internships&apos; terms, conditions, policies, and applicable prices. I confirm that the information I have submitted is accurate and complete. By typing my full legal name below, I voluntarily consent to its use as my electronic signature and understand that it carries the same intent and authorization as a handwritten signature.
        </p>
        
        <label className="flex items-start gap-3 cursor-pointer select-none pt-2">
          <input
            required
            type="checkbox"
            id="declarationAgree"
            className="mt-1 text-[#C5A059] focus:ring-[#C5A059] h-4 w-4 rounded border-[var(--border-color)]"
            checked={!!data.declarationAgree}
            onChange={(e) => updateData({ declarationAgree: e.target.checked })}
          />
          <span className="text-sm font-semibold text-[var(--text-primary)]">Yes, I agree *</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="signatureName">
            Full Name as Signature *
          </label>
          <input
            required
            type="text"
            id="signatureName"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="Type your full name as your digital signature"
            value={data.signatureName || ""}
            onChange={(e) => updateData({ signatureName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="signatureDate">
            Date of Signature *
          </label>
          <input
            required
            type="date"
            id="signatureDate"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            value={data.signatureDate || ""}
            onChange={(e) => updateData({ signatureDate: e.target.value })}
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
          className="px-10 py-3 bg-[#C5A059] hover:bg-[#A18247] text-white font-bold rounded-md transition-all shadow-md"
        >
          Submit Application ✓
        </button>
      </div>
    </form>
  );
}

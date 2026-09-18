"use client";

import React from "react";
import { ApplicationData } from "./types";

interface StepProps {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Address({ data, updateData, onNext, onBack }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-b border-[var(--border-color)] pb-4 mb-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Address &amp; Nationality</h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1">Step 2 of 7: Provide your origin and residence details.</p>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="address">
          Home Address (Street name, house/apartment number) *
        </label>
        <input
          required
          type="text"
          id="address"
          className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
          placeholder="e.g. 123 Luxury Avenue, Apt 4B"
          value={data.address || ""}
          onChange={(e) => updateData({ address: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="cityZip">
          City &amp; Zip Code *
        </label>
        <input
          required
          type="text"
          id="cityZip"
          className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
          placeholder="e.g. London, SW1A 1AA"
          value={data.cityZip || ""}
          onChange={(e) => updateData({ cityZip: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="country">
            Country *
          </label>
          <input
            required
            type="text"
            id="country"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. United Kingdom"
            value={data.country || ""}
            onChange={(e) => updateData({ country: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="nationality">
            Nationality *
          </label>
          <input
            required
            type="text"
            id="nationality"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. British"
            value={data.nationality || ""}
            onChange={(e) => updateData({ nationality: e.target.value })}
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

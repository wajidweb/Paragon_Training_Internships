"use client";

import React from "react";
import { ApplicationData } from "./types";

interface StepProps {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step5Accommodation({ data, updateData, onNext, onBack }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-b border-[var(--border-color)] pb-4 mb-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Accommodation Preferences</h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1">Step 5 of 7: Select your student living and housing choices.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="accommodationType">
            Type of Accommodation *
          </label>
          <select
            required
            id="accommodationType"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            value={data.accommodationType || ""}
            onChange={(e) => {
              const val = e.target.value;
              const nextFields: Partial<ApplicationData> = { accommodationType: val };
              if (val === "Self-Catering Apartment") {
                nextFields.mealPlan = "Not Applicable";
              }
              updateData(nextFields);
            }}
          >
            <option value="">Select accommodation type</option>
            <option value="Self-Catering Apartment">Self-Catering Apartment</option>
            <option value="Host Family">Host Family</option>
            <option value="Hotel">Hotel</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="roomType">
            Room Type *
          </label>
          <select
            required
            id="roomType"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            value={data.roomType || ""}
            onChange={(e) => updateData({ roomType: e.target.value })}
          >
            <option value="">Select room type</option>
            <option value="Shared Room">Shared Room</option>
            <option value="Single Room">Single Room</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="mealPlan">
          Meal Plan (Not applicable for Self-Catering Apartments) *
        </label>
        <select
          required
          disabled={data.accommodationType === "Self-Catering Apartment"}
          id="mealPlan"
          className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)] disabled:opacity-50"
          value={data.accommodationType === "Self-Catering Apartment" ? "Not Applicable" : (data.mealPlan || "")}
          onChange={(e) => updateData({ mealPlan: e.target.value })}
        >
          {data.accommodationType === "Self-Catering Apartment" ? (
            <option value="Not Applicable">Not Applicable</option>
          ) : (
            <>
              <option value="">Select meal plan</option>
              <option value="Half Board">Half Board</option>
              <option value="Full Board">Full Board</option>
              <option value="Not Applicable">Not Applicable</option>
            </>
          )}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="dietaryRequirements">
          Special Dietary Requirements *
        </label>
        <select
          required
          id="dietaryRequirements"
          className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
          value={data.dietaryRequirements || ""}
          onChange={(e) => updateData({ dietaryRequirements: e.target.value })}
        >
          <option value="">Select dietary requirements</option>
          <option value="None">None</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Halal">Halal</option>
          <option value="Lactose Free">Lactose Free</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {data.dietaryRequirements === "Other" && (
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="dietaryOtherText">
            Please Specify Other Dietary Requirements *
          </label>
          <input
            required
            type="text"
            id="dietaryOtherText"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="Please detail your dietary needs..."
            value={data.dietaryOtherText || ""}
            onChange={(e) => updateData({ dietaryOtherText: e.target.value })}
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="accommodationRequests">
          Accommodation Requests
        </label>
        <textarea
          id="accommodationRequests"
          rows={3}
          className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
          placeholder="Any special requests or roommates preferences..."
          value={data.accommodationRequests || ""}
          onChange={(e) => updateData({ accommodationRequests: e.target.value })}
        />
        <span className="block text-xs text-[var(--text-muted)] mt-1">We will try our best to accommodate your request but it is not guaranteed or promised</span>
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

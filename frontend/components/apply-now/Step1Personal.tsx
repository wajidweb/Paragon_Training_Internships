"use client";

import React from "react";
import { ApplicationData } from "./types";

interface StepProps {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
  onNext: () => void;
}

export default function Step1Personal({ data, updateData, onNext }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-b border-[var(--border-color)] pb-4 mb-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Personal Information</h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1">Step 1 of 7: Start with your general details.</p>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="email">
          Email Address *
        </label>
        <input
          required
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
          placeholder="e.g. john@example.com"
          value={data.email || ""}
          onChange={(e) => updateData({ email: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="appCode">
          Application Reference Code
        </label>
        <input
          type="text"
          id="appCode"
          className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
          placeholder="e.g. REF-2026-X"
          value={data.appCode || ""}
          onChange={(e) => updateData({ appCode: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          I am applying as a *
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer bg-[var(--bg-primary)] px-4 py-3 rounded-md border border-[var(--border-color)] flex-1 hover:border-[#C5A059] transition-all">
            <input
              required
              type="radio"
              name="applicantType"
              value="Student"
              checked={data.applicantType === "Student"}
              onChange={() => updateData({ applicantType: "Student" })}
              className="text-[#C5A059] focus:ring-[#C5A059]"
            />
            <span className="text-sm font-medium">Student</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer bg-[var(--bg-primary)] px-4 py-3 rounded-md border border-[var(--border-color)] flex-1 hover:border-[#C5A059] transition-all">
            <input
              required
              type="radio"
              name="applicantType"
              value="Teacher"
              checked={data.applicantType === "Teacher"}
              onChange={() => updateData({ applicantType: "Teacher" })}
              className="text-[#C5A059] focus:ring-[#C5A059]"
            />
            <span className="text-sm font-medium">Teacher</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="firstName">
            First Name *
          </label>
          <input
            required
            type="text"
            id="firstName"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="John"
            value={data.firstName || ""}
            onChange={(e) => updateData({ firstName: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="surname">
            Surname (Family Name) *
          </label>
          <input
            required
            type="text"
            id="surname"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="Doe"
            value={data.surname || ""}
            onChange={(e) => updateData({ surname: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="gender">
            Gender *
          </label>
          <select
            required
            id="gender"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            value={data.gender || ""}
            onChange={(e) => updateData({ gender: e.target.value })}
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="dob">
            Date of Birth *
          </label>
          <input
            required
            type="date"
            id="dob"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            value={data.dob || ""}
            onChange={(e) => updateData({ dob: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="phone">
            Mobile Number (Calls) — including Country Code *
          </label>
          <input
            required
            type="tel"
            id="phone"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. +45 12 34 56 78"
            value={data.phone || ""}
            onChange={(e) => updateData({ phone: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="whatsapp">
            Mobile Number (WhatsApp) — including Country Code *
          </label>
          <input
            required
            type="tel"
            id="whatsapp"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. +45 12 34 56 78"
            value={data.whatsapp || ""}
            onChange={(e) => updateData({ whatsapp: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2" htmlFor="nextOfKinPhone">
          Next of Kin / Legal Guardian&apos;s Phone Number *
        </label>
        <input
          required
          type="tel"
          id="nextOfKinPhone"
          className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
          placeholder="e.g. +45 87 65 43 21"
          value={data.nextOfKinPhone || ""}
          onChange={(e) => updateData({ nextOfKinPhone: e.target.value })}
        />
      </div>

      <div className="pt-4 flex justify-end">
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

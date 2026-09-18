"use client";

import React from "react";
import { ApplicationData } from "./types";

interface StepProps {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step6WorkPlacement({ data, updateData, onNext, onBack }: StepProps) {
  const isTeacher = data.applicantType === "Teacher";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-b border-[var(--border-color)] pb-4 mb-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Work Placement Preferences</h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1">Step 6 of 7: Detail your desired career sectors and daily operations.</p>
      </div>

      {isTeacher ? (
        <div className="bg-blue-50 dark:bg-blue-950/20 text-[#0B192C] dark:text-[#FAF9F6] p-4 rounded-md text-sm border border-blue-200 dark:border-blue-900/50 leading-relaxed font-medium">
          ℹ️ <strong>Note for Teachers:</strong> This section is for Students only. Since you are applying as a Teacher, please leave this section blank and continue to the next section by clicking <strong>&quot;Next Step&quot;</strong>.
        </div>
      ) : (
        <div className="bg-slate-50 dark:bg-slate-800/10 text-[var(--text-secondary)] p-4 rounded-md text-sm border border-[var(--border-color)] leading-relaxed">
          💼 This section is for Students only. If you are a Teacher, please leave this section blank and continue to the next section.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="workPreference1">
            Work Placement — Preference 1
          </label>
          <input
            type="text"
            id="workPreference1"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. Administration"
            value={data.workPreference1 || ""}
            onChange={(e) => updateData({ workPreference1: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="workPreference2">
            Work Placement — Preference 2
          </label>
          <input
            type="text"
            id="workPreference2"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. Marketing"
            value={data.workPreference2 || ""}
            onChange={(e) => updateData({ workPreference2: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="workPreference3">
            Work Placement — Preference 3
          </label>
          <input
            type="text"
            id="workPreference3"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. IT"
            value={data.workPreference3 || ""}
            onChange={(e) => updateData({ workPreference3: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="tasksDesired1">
            Tasks Desired — Preference 1
          </label>
          <input
            type="text"
            id="tasksDesired1"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. filing, reception"
            value={data.tasksDesired1 || ""}
            onChange={(e) => updateData({ tasksDesired1: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="tasksDesired2">
            Tasks Desired — Preference 2
          </label>
          <input
            type="text"
            id="tasksDesired2"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. social media"
            value={data.tasksDesired2 || ""}
            onChange={(e) => updateData({ tasksDesired2: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="tasksDesired3">
            Tasks Desired — Preference 3
          </label>
          <input
            type="text"
            id="tasksDesired3"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. coding"
            value={data.tasksDesired3 || ""}
            onChange={(e) => updateData({ tasksDesired3: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="maxWorkingHours">
            Maximum Working Hours Per Week
          </label>
          <input
            type="number"
            id="maxWorkingHours"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. 40"
            value={data.maxWorkingHours || ""}
            onChange={(e) => updateData({ maxWorkingHours: e.target.value })}
          />
          <span className="block text-xs text-[var(--text-muted)] mt-1">This must match your insurance policy</span>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="workUntilTime">
            I can only work until (time)
          </label>
          <input
            type="text"
            id="workUntilTime"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            placeholder="e.g. 20:00 hours"
            value={data.workUntilTime || ""}
            onChange={(e) => updateData({ workUntilTime: e.target.value })}
          />
          <span className="block text-xs text-[var(--text-muted)] mt-1">As per your insurance policy</span>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="workDays">
            I can only work on
          </label>
          <select
            id="workDays"
            className="w-full px-4 py-3 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all bg-[var(--bg-primary)] text-[var(--text-primary)]"
            value={data.workDays || ""}
            onChange={(e) => updateData({ workDays: e.target.value })}
          >
            <option value="">Select available days</option>
            <option value="Weekdays Only">Weekdays Only</option>
            <option value="Weekends Only">Weekends Only</option>
            <option value="Weekdays and Weekends">Weekdays and Weekends</option>
          </select>
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

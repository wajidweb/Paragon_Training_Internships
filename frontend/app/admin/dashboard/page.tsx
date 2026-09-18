"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { useApplicationStore } from "@/store/useApplicationStore";

// Types matching ApplicationData for rigorous type-safety
import { ApplicationData } from "@/components/apply-now/types";

interface Submission extends ApplicationData {
  id: string;
  submittedAt: string;
  status: "Pending" | "Approved" | "Reviewed" | "Rejected";
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const { submissions, fetchApplications, updateApplicationStatus, deleteApplication } = useApplicationStore();
  const [activeTab, setActiveTab] = useState<"new-applies" | "enrolled">("new-applies");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Auth guard validation
    const isLoggedIn = localStorage.getItem("admin_logged_in");
    if (isLoggedIn !== "true") {
      router.push("/admin");
      return;
    }

    // Theme initialization forced to light mode
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");

    // Fetch submissions dynamically from proper backend API
    fetchApplications();
  }, [router, fetchApplications]);

  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/admin");
  };

  const handleUpdateStatus = async (id: string, newStatus: "Pending" | "Approved" | "Reviewed" | "Rejected") => {
    const success = await updateApplicationStatus(id, newStatus);
    if (success && selectedSubmission && selectedSubmission.id === id) {
      setSelectedSubmission((s) => s ? { ...s, status: newStatus } : null);
    }
  };

  const handleDeleteSubmission = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this application?")) {
      return;
    }
    const success = await deleteApplication(id);
    if (success && selectedSubmission && selectedSubmission.id === id) {
      setSelectedSubmission(null);
    }
  };

  // Filter Submissions based on Active Tab:
  // - "new-applies": Includes Pending, Reviewed, and Rejected submissions
  // - "enrolled": Includes Approved submissions only
  const tabFilteredSubmissions = submissions.filter((sub) => {
    if (activeTab === "enrolled") {
      return sub.status === "Approved";
    } else {
      return sub.status === "Pending" || sub.status === "Reviewed" || sub.status === "Rejected";
    }
  });

  // Apply Search Query & Role Filters on top of the tab filtered list
  const finalSubmissions = tabFilteredSubmissions.filter((sub) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      sub.firstName.toLowerCase().includes(query) ||
      sub.surname.toLowerCase().includes(query) ||
      sub.email.toLowerCase().includes(query) ||
      sub.sendingInstitution.toLowerCase().includes(query) ||
      sub.id.toLowerCase().includes(query);

    const matchesRole = filterRole === "All" || sub.applicantType === filterRole;

    return matchesSearch && matchesRole;
  });

  // Metric counts
  const newAppliesCount = submissions.filter((s) => s.status !== "Approved").length;
  const enrolledCount = submissions.filter((s) => s.status === "Approved").length;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] flex transition-colors duration-300 relative overflow-hidden font-sans">
      
      {/* Visual Backdrop Overlay for Mobile viewports */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/45 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
        />
      )}

      {/* 1. LEFT SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-[var(--bg-card)] border-r border-[var(--border-color)] flex flex-col justify-between z-40 transition-transform duration-300 lg:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:static lg:h-screen h-full`}>
        
        {/* Sidebar Header */}
        <div className="p-6 border-b border-[var(--border-color)] flex justify-between items-center">
          <Link className="flex items-center" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="PG Internships"
              src="/cropped-Paragon-re-logo.png"
              style={{ height: "48px", width: "auto", objectFit: "contain" }}
            />
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-lg focus:outline-none hover:text-[#C5A059] text-[var(--text-primary)]"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-4 flex-1 space-y-2">
          <button
            onClick={() => {
              setActiveTab("new-applies");
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-md font-bold text-sm tracking-wide transition-all ${
              activeTab === "new-applies"
                ? "bg-[#C5A059] text-white shadow-sm"
                : "hover:bg-[var(--bg-primary)] text-[var(--text-secondary)]"
            }`}
          >
            <span className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>New Applies</span>
            </span>
            {newAppliesCount > 0 && (
              <span className={`px-2 py-0.5 text-xs rounded-full font-extrabold ${
                activeTab === "new-applies" ? "bg-white text-[#C5A059]" : "bg-[#C5A059]/10 text-[#C5A059]"
              }`}>
                {newAppliesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              setActiveTab("enrolled");
              setIsSidebarOpen(false);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-md font-bold text-sm tracking-wide transition-all ${
              activeTab === "enrolled"
                ? "bg-[#C5A059] text-white shadow-sm"
                : "hover:bg-[var(--bg-primary)] text-[var(--text-secondary)]"
            }`}
          >
            <span className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
              </svg>
              <span>Enrolled</span>
            </span>
            {enrolledCount > 0 && (
              <span className={`px-2 py-0.5 text-xs rounded-full font-extrabold ${
                activeTab === "enrolled" ? "bg-white text-[#C5A059]" : "bg-[#C5A059]/10 text-[#C5A059]"
              }`}>
                {enrolledCount}
              </span>
            )}
          </button>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-[var(--border-color)]">
          <button
            onClick={handleLogout}
            className="w-full py-2.5 border border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 dark:text-red-400 font-bold text-sm rounded-md transition-all flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area Wrapper */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* 2. RIGHT TOP BAR */}
        <header className="h-16 bg-[var(--bg-card)] border-b border-[var(--border-color)] px-6 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger Burger menu */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-[var(--bg-primary)] text-[var(--text-primary)]"
              aria-label="Open sidebar"
            >
              ☰
            </button>
            <h1 className="text-lg font-extrabold tracking-tight capitalize text-[var(--text-primary)]">
              {activeTab === "new-applies" ? "New Applies" : "Enrolled Students"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Profile Avatar Badge */}
            <div className="flex items-center gap-2 pl-2">
              <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm border border-[var(--border-color)] bg-[var(--bg-primary)] flex items-center justify-center font-bold text-xs">
                AD
              </div>
              <span className="hidden sm:inline text-xs font-bold text-[var(--text-secondary)]">Admin Portal</span>
            </div>
          </div>
        </header>

        {/* 3. DYNAMIC CONTENT CONTAINER */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          
          {/* Active Tab Page Description */}
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-[var(--text-primary)]">
              {activeTab === "new-applies" ? "Placement Submissions" : "Admitted Candidates"}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              {activeTab === "new-applies" 
                ? "Review and approve new incoming Erasmus+ student mobility applications."
                : "Manage finalized corporate placements and premium accommodation packages in Malta."}
            </p>
          </div>

          {/* Search/Filters stripe */}
          <div className="bg-[var(--bg-card)] p-4 rounded-md border border-[var(--border-color)] shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="w-full sm:w-1/2 relative">
              <input
                type="text"
                placeholder={`Search ${activeTab === "new-applies" ? "new applies" : "enrolled students"} by ID, name, email...`}
                className="w-full pl-9 pr-4 py-2.5 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute left-3.5 top-3 text-[var(--text-muted)] text-sm">🔍</span>
            </div>

            <div className="w-full sm:w-auto">
              <select
                className="w-full px-4 py-2.5 rounded-md border border-[var(--border-color)] focus:outline-none focus:border-[#C5A059] bg-[var(--bg-primary)] text-[var(--text-primary)] text-sm transition-all"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
              >
                <option value="All">All Roles</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>
          </div>

          {/* Database Table Card */}
          <div className="bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] shadow-sm overflow-hidden mb-12">
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[var(--bg-primary)] border-b border-[var(--border-color)] text-[var(--text-muted)] font-bold">
                    <th className="py-4 px-6">ID</th>
                    <th className="py-4 px-6">Applicant Name</th>
                    <th className="py-4 px-6">Applying As</th>
                    <th className="py-4 px-6">Sending University</th>
                    <th className="py-4 px-6">Arrival Date</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-color)]">
                  {finalSubmissions.length > 0 ? (
                    finalSubmissions.map((sub) => (
                      <tr key={sub.id} className="hover:bg-[var(--bg-primary)]/40 transition-colors">
                        <td className="py-4 px-6 font-mono text-xs font-semibold">{sub.id}</td>
                        <td className="py-4 px-6 font-semibold">
                          {sub.firstName} {sub.surname}
                          <span className="block text-xs font-normal text-[var(--text-muted)]">{sub.email}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`px-2.5 py-0.5 text-xs rounded-full font-semibold ${
                            sub.applicantType === "Student"
                              ? "bg-[#C5A059]/10 text-[#C5A059]"
                              : "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
                          }`}>
                            {sub.applicantType}
                          </span>
                        </td>
                        <td className="py-4 px-6 max-w-[220px] truncate" title={sub.sendingInstitution}>
                          {sub.sendingInstitution}
                        </td>
                        <td className="py-4 px-6 font-mono text-xs">{sub.arrivalDate}</td>
                        <td className="py-4 px-6">
                          <span className={`px-2.5 py-1 text-xs rounded-md font-bold ${
                            sub.status === "Approved"
                              ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400"
                              : sub.status === "Reviewed"
                              ? "bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                              : sub.status === "Rejected"
                              ? "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400"
                              : "bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400"
                          }`}>
                            {sub.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                          <button
                            onClick={() => setSelectedSubmission(sub)}
                            className="px-3 py-1.5 bg-[#C5A059]/10 hover:bg-[#C5A059]/20 text-[#C5A059] font-bold text-xs rounded-md transition-all"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => handleDeleteSubmission(sub.id)}
                            className="px-2.5 py-1.5 hover:bg-red-50 dark:hover:bg-red-950/20 text-red-600 dark:text-red-400 font-bold text-xs rounded-md transition-all"
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="py-12 px-6 text-center text-[var(--text-muted)] font-semibold">
                        No submissions found in {activeTab === "new-applies" ? "new applies" : "enrolled"}.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {/* 4. DETAILS DRAWER PANEL (Overlaid details modal for all 8 steps) */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-black/45 backdrop-blur-sm transition-opacity duration-300">
          <div className="w-full max-w-2xl bg-[var(--bg-card)] h-full overflow-y-auto shadow-2xl flex flex-col border-l border-[var(--border-color)]">
            
            {/* Drawer Header */}
            <div className="bg-[var(--bg-primary)] p-6 border-b border-[var(--border-color)] flex justify-between items-center sticky top-0 z-10">
              <div>
                <span className="font-mono text-xs text-[#C5A059] font-bold">{selectedSubmission.id}</span>
                <h3 className="text-xl font-extrabold text-[var(--text-primary)]">
                  {selectedSubmission.firstName} {selectedSubmission.surname}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-lg hover:border-[#C5A059] transition-all"
              >
                ✕
              </button>
            </div>

            {/* Drawer Body - Showing all 8 steps data */}
            <div className="p-8 space-y-8 flex-1">
              
              {/* Application Status Actions */}
              <div className="bg-[var(--bg-primary)] p-4 rounded-md border border-[var(--border-color)] flex flex-wrap gap-4 items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[var(--text-muted)] uppercase block mb-1">Application Status</span>
                  <span className={`px-2.5 py-1 text-xs rounded-md font-bold ${
                    selectedSubmission.status === "Approved"
                      ? "bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400"
                      : selectedSubmission.status === "Reviewed"
                      ? "bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400"
                      : selectedSubmission.status === "Rejected"
                      ? "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400"
                      : "bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400"
                  }`}>
                    {selectedSubmission.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdateStatus(selectedSubmission.id, "Approved")}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-md transition-all"
                  >
                    Approve / Enroll
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedSubmission.id, "Reviewed")}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-md transition-all"
                  >
                    Review
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedSubmission.id, "Rejected")}
                    className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-md transition-all"
                  >
                    Reject
                  </button>
                </div>
              </div>

              {/* 1. Personal Information */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider border-b border-[var(--border-color)] pb-1.5">1. Personal Information</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-[var(--text-muted)] block text-xs">Role:</span> <strong className="font-semibold">{selectedSubmission.applicantType}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Reference Code:</span> <strong className="font-mono text-xs">{selectedSubmission.appCode || "(none)"}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Gender:</span> <strong>{selectedSubmission.gender}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Date of Birth:</span> <strong className="font-mono text-xs">{selectedSubmission.dob}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Email:</span> <strong>{selectedSubmission.email}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Phone (Calls):</span> <strong className="font-mono text-xs">{selectedSubmission.phone}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">WhatsApp:</span> <strong className="font-mono text-xs">{selectedSubmission.whatsapp}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Next of Kin Phone:</span> <strong className="font-mono text-xs">{selectedSubmission.nextOfKinPhone}</strong></div>
                </div>
              </div>

              {/* 2. Address & Nationality */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider border-b border-[var(--border-color)] pb-1.5">2. Address &amp; Nationality</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="col-span-2"><span className="text-[var(--text-muted)] block text-xs">Home Address:</span> <strong>{selectedSubmission.address}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">City &amp; Zip Code:</span> <strong>{selectedSubmission.cityZip}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Country:</span> <strong>{selectedSubmission.country}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Nationality:</span> <strong>{selectedSubmission.nationality}</strong></div>
                </div>
              </div>

              {/* 3. Institution Details */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider border-b border-[var(--border-color)] pb-1.5">3. Institution Details</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="col-span-2"><span className="text-[var(--text-muted)] block text-xs">Sending Institution:</span> <strong>{selectedSubmission.sendingInstitution}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Coordinator Name:</span> <strong>{selectedSubmission.coordinatorName}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Coordinator Email:</span> <strong>{selectedSubmission.coordinatorEmail || "(none)"}</strong></div>
                </div>
              </div>

              {/* 4. Internship Dates */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider border-b border-[var(--border-color)] pb-1.5">4. Internship Dates</h4>
                <div className="grid grid-cols-2 gap-4 text-sm font-mono text-xs">
                  <div><span className="text-[var(--text-muted)] block text-sm font-sans">Arrival Date:</span> <strong className="text-sm">{selectedSubmission.arrivalDate}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-sm font-sans">Departure Date:</span> <strong className="text-sm">{selectedSubmission.departureDate}</strong></div>
                </div>
              </div>

              {/* 5. Accommodation Preferences */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider border-b border-[var(--border-color)] pb-1.5">5. Accommodation Preferences</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-[var(--text-muted)] block text-xs">Accommodation Type:</span> <strong>{selectedSubmission.accommodationType}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Room Type:</span> <strong>{selectedSubmission.roomType}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Meal Plan:</span> <strong>{selectedSubmission.mealPlan}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Dietary Requirements:</span> <strong>{selectedSubmission.dietaryRequirements} {selectedSubmission.dietaryOtherText ? `(${selectedSubmission.dietaryOtherText})` : ""}</strong></div>
                  <div className="col-span-2"><span className="text-[var(--text-muted)] block text-xs">Special Accommodation Requests:</span> <strong className="font-normal italic text-[var(--text-secondary)]">{selectedSubmission.accommodationRequests || "(none)"}</strong></div>
                </div>
              </div>

              {/* 6. Work Placement Preferences */}
              {selectedSubmission.applicantType === "Student" ? (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider border-b border-[var(--border-color)] pb-1.5">6. Work Placement Preferences</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div><span className="text-[var(--text-muted)] block text-xs">Preference 1:</span> <strong>{selectedSubmission.workPreference1 || "(none)"}</strong></div>
                    <div><span className="text-[var(--text-muted)] block text-xs">Preference 2:</span> <strong>{selectedSubmission.workPreference2 || "(none)"}</strong></div>
                    <div><span className="text-[var(--text-muted)] block text-xs">Preference 3:</span> <strong>{selectedSubmission.workPreference3 || "(none)"}</strong></div>
                    <div className="col-span-3"><span className="text-[var(--text-muted)] block text-xs">Tasks Desired:</span> <strong>1. {selectedSubmission.tasksDesired1 || "(none)"} / 2. {selectedSubmission.tasksDesired2 || "(none)"} / 3. {selectedSubmission.tasksDesired3 || "(none)"}</strong></div>
                    <div><span className="text-[var(--text-muted)] block text-xs">Max Hours / Week:</span> <strong>{selectedSubmission.maxWorkingHours || "(none)"}</strong></div>
                    <div><span className="text-[var(--text-muted)] block text-xs">Work Until:</span> <strong>{selectedSubmission.workUntilTime || "(none)"}</strong></div>
                    <div><span className="text-[var(--text-muted)] block text-xs">Available Days:</span> <strong>{selectedSubmission.workDays || "(none)"}</strong></div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider border-b border-[var(--border-color)] pb-1.5">6. Work Placement Preferences</h4>
                  <p className="text-xs text-[var(--text-muted)] italic">Left blank (Not applicable for Teacher applications).</p>
                </div>
              )}

              {/* 7. Health & English Level */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider border-b border-[var(--border-color)] pb-1.5">7. Health &amp; English Level</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="col-span-2"><span className="text-[var(--text-muted)] block text-xs">Medical Conditions:</span> <strong>{selectedSubmission.medicalConditions || "None disclosed."}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Level of English:</span> <strong className="font-mono text-sm">{selectedSubmission.englishLevel}</strong></div>
                </div>
              </div>

              {/* 8. Declaration & Acknowledgement */}
              <div className="space-y-4 pb-12">
                <h4 className="text-sm font-bold text-[#C5A059] uppercase tracking-wider border-b border-[var(--border-color)] pb-1.5">8. Declaration &amp; Acknowledgement</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="col-span-2"><span className="text-[var(--text-muted)] block text-xs">Declaration Status:</span> <strong className="text-emerald-600 dark:text-emerald-400">✓ YES, AGREED</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Signature Name:</span> <strong>{selectedSubmission.signatureName}</strong></div>
                  <div><span className="text-[var(--text-muted)] block text-xs">Signature Date:</span> <strong className="font-mono text-xs">{selectedSubmission.signatureDate}</strong></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

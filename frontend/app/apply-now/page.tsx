"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ApplyNowNavbar from "@/components/ApplyNowNavbar";
import FooterSection from "@/components/FooterSection";

// Types
import { ApplicationData } from "@/components/apply-now/types";
import { useApplicationStore } from "@/store/useApplicationStore";

// Step components
import Step1Personal from "@/components/apply-now/Step1Personal";
import Step2Address from "@/components/apply-now/Step2Address";
import Step3Institution from "@/components/apply-now/Step3Institution";
import Step4Dates from "@/components/apply-now/Step4Dates";
import Step5Accommodation from "@/components/apply-now/Step5Accommodation";
import Step6WorkPlacement from "@/components/apply-now/Step6WorkPlacement";
import Step7HealthEnglish from "@/components/apply-now/Step7HealthEnglish";
import Step8Declaration from "@/components/apply-now/Step8Declaration";

export default function ApplyNowPage() {
  const [theme, setTheme] = useState("light");
  const { submitApplication } = useApplicationStore();
  
  // Unified wizard form state with strict types
  const [formData, setFormData] = useState<ApplicationData>({
    // Step 1: Personal
    email: "",
    appCode: "",
    applicantType: "",
    firstName: "",
    surname: "",
    gender: "",
    dob: "",
    phone: "",
    whatsapp: "",
    nextOfKinPhone: "",
    
    // Step 2: Address
    address: "",
    cityZip: "",
    country: "",
    nationality: "",
    
    // Step 3: Institution
    sendingInstitution: "",
    coordinatorName: "",
    coordinatorEmail: "",
    
    // Step 4: Dates
    arrivalDate: "",
    departureDate: "",
    
    // Step 5: Accommodation
    accommodationType: "",
    roomType: "",
    mealPlan: "",
    dietaryRequirements: "",
    dietaryOtherText: "",
    accommodationRequests: "",
    
    // Step 6: Placement (Students only)
    workPreference1: "",
    workPreference2: "",
    workPreference3: "",
    tasksDesired1: "",
    tasksDesired2: "",
    tasksDesired3: "",
    maxWorkingHours: "",
    workUntilTime: "",
    workDays: "",
    
    // Step 7 & 8: Health, English & Declaration
    medicalConditions: "",
    englishLevel: "",
    declarationAgree: false,
    signatureName: "",
    signatureDate: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 1. Initial hydration and loading from LocalStorage
  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem("theme") || "light";
    setTimeout(() => {
      setTheme(savedTheme);
    }, 0);
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Form data and step restoration (wrapped in setTimeout to bypass sync state transition rule)
    const savedData = localStorage.getItem("apply_now_data");
    const savedStep = localStorage.getItem("apply_now_step");

    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData) as ApplicationData;
        setTimeout(() => {
          setFormData(parsedData);
        }, 0);
      } catch (e) {
        console.warn("Failed to parse saved application data:", e);
      }
    }

    if (savedStep) {
      const stepNum = parseInt(savedStep, 10);
      if (stepNum >= 1 && stepNum <= 8) {
        setTimeout(() => {
          setCurrentStep(stepNum);
        }, 0);
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  // 2. Synchronized data update & storage helper
  const updateData = (fields: Partial<ApplicationData>) => {
    setFormData((prev) => {
      const nextData = { ...prev, ...fields };
      localStorage.setItem("apply_now_data", JSON.stringify(nextData));
      return nextData;
    });
  };

  // 3. Navigation controls with LocalStorage persistence
  const handleNext = () => {
    setCurrentStep((prev) => {
      const nextStep = prev + 1;
      localStorage.setItem("apply_now_step", nextStep.toString());
      return nextStep;
    });
    // Scroll smoothly to form header
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handleBack = () => {
    setCurrentStep((prev) => {
      const nextStep = prev - 1;
      localStorage.setItem("apply_now_step", nextStep.toString());
      return nextStep;
    });
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  // 4. Submit handler (clears localStorage upon final completion)
  const handleSubmit = async () => {
    const result = await submitApplication(formData);
    if (result.success) {
      setIsSubmitted(true);
      localStorage.removeItem("apply_now_data");
      localStorage.removeItem("apply_now_step");
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else {
      alert(result.message || "Failed to submit application to the server. Please try again.");
    }
  };

  const steps = [
    { number: 1, name: "Profile" },
    { number: 2, name: "Address" },
    { number: 3, name: "Academy" },
    { number: 4, name: "Timeline" },
    { number: 5, name: "Housing" },
    { number: 6, name: "Placement" },
    { number: 7, name: "Health" },
    { number: 8, name: "Signature" },
  ];

  // 5. Dynamic wizard renderer
  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Personal
            data={formData}
            updateData={updateData}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <Step2Address
            data={formData}
            updateData={updateData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <Step3Institution
            data={formData}
            updateData={updateData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <Step4Dates
            data={formData}
            updateData={updateData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 5:
        return (
          <Step5Accommodation
            data={formData}
            updateData={updateData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 6:
        return (
          <Step6WorkPlacement
            data={formData}
            updateData={updateData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 7:
        return (
          <Step7HealthEnglish
            data={formData}
            updateData={updateData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 8:
        return (
          <Step8Declaration
            data={formData}
            updateData={updateData}
            onSubmit={handleSubmit}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <ApplyNowNavbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6 pt-36 w-full max-w-7xl">
        <div className="bg-[var(--bg-card)] rounded-lg p-8 md:p-12 shadow-md border border-[var(--border-color)]">
          {!isSubmitted ? (
            <>
              {/* Form Title & Progress bar */}
              <div className="mb-8">
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
                  Paragon Global Internships
                </span>
                <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  Application Form 2026–2027
                </h1>
                
                {/* Progress Indicators */}
                <div className="mt-8 mb-10 overflow-x-auto pb-4 scrollbar-none">
                  <div className="flex items-center justify-between min-w-[768px] md:min-w-0 md:w-full px-2">
                    {steps.map((step, idx) => {
                      const isCompleted = step.number < currentStep;
                      const isActive = step.number === currentStep;
                      
                      return (
                        <React.Fragment key={step.number}>
                          {/* Step Item */}
                          <div className="flex flex-col items-center flex-1 relative">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 z-10 ${
                                isCompleted
                                  ? "bg-[#C5A059] border-[#C5A059] text-white"
                                  : isActive
                                  ? "bg-[#0B192C] border-[#0B192C] text-white ring-4 ring-[#C5A059]/20"
                                  : "bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-muted)]"
                              }`}
                            >
                              {isCompleted ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              ) : (
                                step.number
                              )}
                            </div>
                            <span
                              className={`text-xs font-bold mt-2 text-center transition-colors duration-300 max-w-[140px] px-1 block ${
                                isActive
                                  ? "text-[#0B192C] dark:text-[#FAF9F6]"
                                  : isCompleted
                                  ? "text-[#C5A059]"
                                  : "text-[var(--text-muted)]"
                              }`}
                            >
                              {step.name}
                            </span>
                          </div>

                          {/* Connective Line */}
                          {idx < steps.length - 1 && (
                            <div
                              className={`flex-1 h-[2px] -mt-10 transition-colors duration-300 ${
                                step.number < currentStep ? "bg-[#C5A059]" : "bg-[var(--border-color)]"
                              }`}
                            ></div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Dynamic Step Component */}
              {renderStepComponent()}
            </>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 bg-[#C5A059]/10 rounded-md flex items-center justify-center mx-auto text-[#C5A059]">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">
                Application Submitted!
              </h1>
              <p className="text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-[var(--text-primary)]">{formData.firstName} {formData.surname}</span>! Your corporate placement application has been successfully received. One of our student advisors will email you at <span className="font-bold text-[var(--text-primary)]">{formData.email}</span> within 24-48 hours.
              </p>
              <div className="pt-6">
                <Link
                  href="/"
                  className="inline-block px-8 py-3 bg-[#0B192C] text-white hover:bg-[#1E293B] font-bold rounded-md transition-all shadow-md"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <FooterSection />
    </div>
  );
}

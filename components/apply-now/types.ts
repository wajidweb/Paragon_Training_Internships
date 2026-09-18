export interface ApplicationData {
  // Step 1: Personal
  email: string;
  appCode: string;
  applicantType: string;
  firstName: string;
  surname: string;
  gender: string;
  dob: string;
  phone: string;
  whatsapp: string;
  nextOfKinPhone: string;

  // Step 2: Address
  address: string;
  cityZip: string;
  country: string;
  nationality: string;

  // Step 3: Institution
  sendingInstitution: string;
  coordinatorName: string;
  coordinatorEmail: string;

  // Step 4: Dates
  arrivalDate: string;
  departureDate: string;

  // Step 5: Accommodation
  accommodationType: string;
  roomType: string;
  mealPlan: string;
  dietaryRequirements: string;
  dietaryOtherText?: string;
  accommodationRequests: string;

  // Step 6: Placement (Students only)
  workPreference1: string;
  workPreference2: string;
  workPreference3: string;
  tasksDesired1: string;
  tasksDesired2: string;
  tasksDesired3: string;
  maxWorkingHours: string;
  workUntilTime: string;
  workDays: string;

  // Step 7: Declaration
  medicalConditions: string;
  englishLevel: string;
  declarationAgree: boolean;
  signatureName: string;
  signatureDate: string;
}

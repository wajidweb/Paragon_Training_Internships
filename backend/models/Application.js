const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  appCode: {
    type: String,
    default: ""
  },
  applicantType: {
    type: String,
    required: true,
    enum: ["Student", "Teacher"]
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  surname: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  whatsapp: {
    type: String,
    required: true
  },
  nextOfKinPhone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cityZip: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  sendingInstitution: {
    type: String,
    required: true
  },
  coordinatorName: {
    type: String,
    required: true
  },
  coordinatorEmail: {
    type: String,
    default: ""
  },
  arrivalDate: {
    type: String,
    required: true
  },
  departureDate: {
    type: String,
    required: true
  },
  accommodationType: {
    type: String,
    required: true,
    enum: ["Self-Catering Apartment", "Host Family", "Hotel"]
  },
  roomType: {
    type: String,
    required: true,
    enum: ["Shared Room", "Single Room"]
  },
  mealPlan: {
    type: String,
    required: true
  },
  dietaryRequirements: {
    type: String,
    required: true
  },
  dietaryOtherText: {
    type: String,
    default: ""
  },
  accommodationRequests: {
    type: String,
    default: ""
  },
  workPreference1: {
    type: String,
    default: ""
  },
  workPreference2: {
    type: String,
    default: ""
  },
  workPreference3: {
    type: String,
    default: ""
  },
  tasksDesired1: {
    type: String,
    default: ""
  },
  tasksDesired2: {
    type: String,
    default: ""
  },
  tasksDesired3: {
    type: String,
    default: ""
  },
  maxWorkingHours: {
    type: String,
    default: ""
  },
  workUntilTime: {
    type: String,
    default: ""
  },
  workDays: {
    type: String,
    default: ""
  },
  medicalConditions: {
    type: String,
    default: ""
  },
  englishLevel: {
    type: String,
    required: true
  },
  declarationAgree: {
    type: Boolean,
    required: true,
    default: false
  },
  signatureName: {
    type: String,
    required: true
  },
  signatureDate: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
    enum: ["Pending", "Approved", "Reviewed", "Rejected"]
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-validate hook to generate unique Application ID if not present
ApplicationSchema.pre("validate", async function () {
  if (!this.id) {
    this.id = `APP-${Date.now().toString().slice(-6)}`;
  }
});

module.exports = mongoose.model("Application", ApplicationSchema);

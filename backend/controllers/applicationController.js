// Controller file following MVC pattern
// Fully operational handlers for Applications API actions connecting to Mongoose & MongoDB Atlas
const Application = require("../models/Application");

// @desc    Get all applications
// @route   GET /api/applications
// @access  Private/Admin
exports.getApplications = async (req, res, next) => {
  try {
    const apps = await Application.find().sort({ submittedAt: -1 });
    res.status(200).json({
      success: true,
      count: apps.length,
      data: apps
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new application
// @route   POST /api/applications
// @access  Public
exports.createApplication = async (req, res, next) => {
  try {
    const newApp = new Application(req.body);
    await newApp.save();
    
    res.status(201).json({
      success: true,
      message: "Application submitted successfully to MongoDB Atlas database",
      data: newApp
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update application status
// @route   PATCH /api/applications/:id/status
// @access  Private/Admin
exports.updateApplicationStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Please provide a status field"
      });
    }

    const updated = await Application.findOneAndUpdate(
      { id: req.params.id },
      { status },
      { new: true, runValidators: true }
    );
    
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Application not found with id ${req.params.id}`
      });
    }

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete application submission
// @route   DELETE /api/applications/:id
// @access  Private/Admin
exports.deleteApplication = async (req, res, next) => {
  try {
    const deleted = await Application.findOneAndDelete({ id: req.params.id });
    
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: `Application not found with id ${req.params.id}`
      });
    }

    res.status(200).json({
      success: true,
      message: "Application deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};

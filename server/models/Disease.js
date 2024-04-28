const mongoose = require("mongoose");

const diseaseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    symptoms: { type: String },
    medicine: { type: String },
    medical_store: { type: String },
    location: { type: String },
  },
  {
    timestamps: true,
  }
);

const Disease = mongoose.model("Disease", diseaseSchema);

module.exports = Disease;

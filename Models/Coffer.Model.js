const mongoose = require("mongoose");

const cofferSchema = mongoose.Schema(
  {
    end_year: { type: String },
    intensity: { type: String },
    sector: { type: String },
    topic: { type: String },
    insight: { type: String },
    url: { type: String },
    region: { type: String },
    start_year: { type: String },
    impact: { type: String },
    added: { type: String },
    published: { type: String },
    country: { type: String },
    relevance: { type: String },
    pestle: { type: String },
    source: { type: String },
    title: { type: String },
    likelihood: { type: String },
  },
  {
    versionKey: false,
  }
);

const CofferModel = mongoose.model("coffer", cofferSchema);

module.exports = { CofferModel };

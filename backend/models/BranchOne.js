//BranchOne.js
// after make changes in master
// after second commit
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BranchOne = new Schema({
  branchName: { type: String },
  createdAt: { type: Date }
});

const branch = mongoose.model("braanchOne", BranchOne);
module.exports = branch;

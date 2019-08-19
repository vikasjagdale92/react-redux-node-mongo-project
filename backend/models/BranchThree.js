//BranchThree.js
// second commit on branch-2 ----------> woooooooow
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BranchThree = new Schema({
  branchName: {
    type: String
  },
  createdAt: {
    type: Date
  }
});

const branchName = mongoose.BranchThree("BranchThree", BranchThree);
module.exports = branchName;

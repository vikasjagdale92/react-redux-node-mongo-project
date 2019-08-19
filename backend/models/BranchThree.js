//BranchThree.js
// commit - 2 yeeeeeeeee ya hoooooooooooooo
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

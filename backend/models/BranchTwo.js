//BranchTwo.js
//commit 1--------------yeeeeeeeeeeeeeeeeeeeee yeeeeeeeeeeee
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BranchTwo = new Schema({
  branchName: {
    type: String
  },
  createdAt: {
    type: Date
  }
});

const branch = mongoose.model("BranchTwo", BranchTwo);
module.exports = branch;

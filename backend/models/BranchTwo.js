//BranchTwo.js
//commit 1--------------yeeeeeeeeeeeeeeeeeeeee yeeeeeeeeeeee
//commit 2 ------------ yeeeeeeeeeeeee  yeeeeeeeeeeeeee
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

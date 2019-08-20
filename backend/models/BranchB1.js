//BranchB1.js
//First Commit
//2nd Commit.
//------------|||---------------
//new second commit
//3rd commit
//----------------
//----------------================---------------|||||||||-------------------==============-----------
// 3rd new commit
//----------------================---------------|||||||||-------------------==============-----------
// 4th commit
//----------------================---------------|||||||||-------------------==============-----------
// 5th commit
//----------------================---------------|||||||||-------------------==============-----------

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BranchB1 = new Schema({
  branchName: {
    type: String
  }
});

const branchB1 = mongoose.model("branchB1", BranchB1);
module.exports(branchB1);

// EmpProfile.js
//wow This is awesome man !!!
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpProfileSchema = new Schema({
  empFirstName: {
    type: String
    // required: true
  },
  empLastName: {
    type: String
    // required: true
  },
  empFullName: {
    type: String
  },
  empMobileNum: {
    type: Number
    // required: true
  },
  empDOB: {
    type: Date
    // required: true
  },
  empID: {
    type: Number
    // required: true
  },
  empDOJ: {
    type: Date
    // required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const EmpProfile = mongoose.model("empProfiles", EmpProfileSchema);

module.exports = EmpProfile;

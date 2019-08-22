// empProfile.js

const express = require("express");
const router = express.Router();

const EmpProfile = require("../models/EmpProfile");

router.post("/empAddData", (req, res) => {
  // console.log("req body --------> ", req.body.empFirstName);
  EmpProfile.findOne({
    empMobileNum: req.body.empMobileNum
  }).then(emp => {
    console.log("emp from server -----> ", emp);
    if (emp && !req.body._id) {
      return res.status(400).json({
        empMobileNum: "Mobile already exists"
      });
    } else if (req.body._id) {
      EmpProfile.updateOne(
        { _id: req.body._id },
        {
          $set: {
            empFirstName: req.body.empFirstName,
            empLastName: req.body.empLastName,
            empFullName: req.body.empFullName,
            empMobileNum: req.body.empMobileNum,
            empDOB: req.body.empDOB,
            empID: req.body.empID,
            empDOJ: req.body.empDOJ
          }
        }
      ).then(empUpdate => {
        res.json(empUpdate);
      });
    } else {
      const newEmp = new EmpProfile({
        empFirstName: req.body.empFirstName,
        empLastName: req.body.empLastName,
        empFullName: req.body.empFullName,
        empMobileNum: req.body.empMobileNum,
        empDOB: req.body.empDOB,
        empID: req.body.empID,
        empDOJ: req.body.empDOJ
      });
      newEmp.save().then(emp => {
        res.json(emp);
      });
    }
  });
});

// get all employee data
router.get("/empShowData", (req, res) => {
  EmpProfile.find({}).then(empData => {
    res.json(empData);
  });
});

//delete selected employee
router.post("/empRemove", (req, res) => {
  EmpProfile.deleteOne({ _id: req.body.emp_Id }).then(removeEmp => {
    res.json(removeEmp);
  });
});

//edit employee
router.post("/empEdit", (req, res) => {
  console.log("id -----> ", req.body.empId);
  EmpProfile.findOne({ _id: req.body.empId }).then(data => {
    console.log("data ----->", data);
    res.json(data);
  });
});

//Search employee
router.post("/searchEmp", (req, res) => {
  // console.log("search value -----------> ", req.body.searchValue);
  EmpProfile.find(
    {
      $text: { $search: "+" + req.body.searchValue + '"' }
    },
    { score: { $meta: "textScore" } }
  )
    .sort({ score: { $meta: "textScore" } })
    .then(searchData => {
      console.log("searchValue afetr query ---> ", searchData);
      res.json(searchData);
    });
});

module.exports = router;

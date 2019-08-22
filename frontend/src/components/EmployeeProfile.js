import React, { Component } from "react";
import { connect } from "react-redux";
import { empProfile } from "../actions/authentication";
import moment from "moment";
import Swal from "sweetalert2";
// import PropTypes from "prop-types";
import ListOfEmployees from "./ListOfEmployees";

class EmployeeProfile extends Component {
  state = {
    empFirstName: "",
    empLastName: "",
    empFullName: "",
    empMobileNum: "",
    empDOB: "",
    empID: "",
    empDOJ: "",
    _id: "",
    newData: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addEmployeeData = event => {
    event.preventDefault();
    const empFullName = this.state.empFirstName + " " + this.state.empLastName;
    this.props.empProfile({ ...this.state, empFullName: empFullName });
    Swal.fire({
      title: "Saved!!!",
      text: "Thank you! data save successfully.",
      type: "success",
      showCancelButton: false,
      confirmButtonText: "Ok",
      cancelButtonText: false
    });
    this.setState({
      empFirstName: "",
      empLastName: "",
      empMobileNum: "",
      empDOB: "",
      empID: "",
      empDOJ: "",
      newData: true
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.editEmpData._id) {
      this.setState({
        empFirstName: nextProps.editEmpData.empFirstName,
        empLastName: nextProps.editEmpData.empLastName,
        empMobileNum: nextProps.editEmpData.empMobileNum,
        empDOB: moment(nextProps.editEmpData.empDOB).format("YYYY-MM-DD"),
        empID: nextProps.editEmpData.empID,
        empDOJ: moment(nextProps.editEmpData.empDOJ).format("YYYY-MM-DD"),
        _id: nextProps.editEmpData._id
      });
    } else {
      this.setState({
        empFirstName: "",
        empLastName: "",
        empMobileNum: "",
        empDOB: "",
        empID: "",
        empDOJ: "",
        _id: ""
      });
    }
  }

  fun = val => {
    console.log("search Value is --------> ", val);
  };

  render() {
    const Empwrap = {
      margin: "auto"
    };
    return (
      <div className="col-lg-12">
        <div className="emp-form-wrap col-lg-6" style={Empwrap}>
          <form onSubmit={this.addEmployeeData}>
            <input
              type="text"
              name="empFirstName"
              className="form-control form-control-lg"
              placeholder="enter first name"
              value={this.state.empFirstName}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="empLastName"
              className="form-control form-control-lg"
              placeholder="enter last name"
              value={this.state.empLastName}
              onChange={this.handleChange}
            />

            <input
              type="number"
              name="empMobileNum"
              className="form-control form-control-lg"
              placeholder="enter mobile number"
              value={this.state.empMobileNum}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="empID"
              className="form-control form-control-lg"
              placeholder="enter employee ID"
              value={this.state.empID}
              onChange={this.handleChange}
            />

            <input
              type="date"
              name="empDOB"
              className="form-control form-control-lg"
              placeholder="select date of birth"
              value={this.state.empDOB}
              onChange={this.handleChange}
            />

            <input
              type="date"
              name="empDOJ"
              className="form-control form-control-lg"
              value={this.state.empDOJ}
              onChange={this.handleChange}
            />

            <button
              type="submit"
              className="form-control form-control-lg btn btn-primary"
            >
              {this.state._id ? "Update" : "Submit"}
            </button>
          </form>
        </div>
        <br />
        <br />
        <br />
        <ListOfEmployees xxx={this.fun} data={this.state.newData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.auth.editEmpData) {
    return {
      editEmpData: state.auth.editEmpData
    };
  } else {
    const blankData = {
      empFirstName: "",
      empLastName: "",
      empMobileNum: "",
      empDOB: "",
      empID: "",
      empDOJ: ""
    };
    return {
      editEmpData: blankData
    };
  }
};
// const mapDispatchToProps = dispatch => {
//   return {
//     empProfile: data => dispatch(empProfile(data))
//   };
// };
export default connect(
  mapStateToProps,
  //   mapDispatchToProps
  { empProfile }
)(EmployeeProfile);

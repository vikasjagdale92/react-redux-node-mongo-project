import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { deleteEmployee } from "../actions/authentication";
import { editEmployee, searchEmployee } from "../actions/authentication";

class ListOfEmployees extends Component {
  state = {
    empDataArray: [],
    noData: "Loading...",
    updateComponent: false,
    searchValue: ""
  };

  submitSearchVal = event => {
    event.preventDefault();
    // console.log(this.state.searchValue);
    this.props.searchEmployee(this.state.searchValue);
    this.props.xxx("wow");
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateComponent = res => {
    this.setState({
      updateComponent: res
    });
  };

  componentDidMount() {
    axios
      .get("/api/empProfiles/empShowData")
      .then(res =>
        res.data.length > 0
          ? this.setState({
              empDataArray: res.data
            })
          : this.setState({
              noData: "Nothing to Display"
            })
      )
      .catch(err => {
        console.log("err--->", err);
      });
  }

  //Edit employee
  editEmployee = empId => {
    this.props.editEmployee(empId);
  };
  // delete employee
  deleteEmployee = emp_Id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this record",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        this.props.deleteEmployee(emp_Id);
        Swal.fire("Deleted!", "Data has been removed.", "success");
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your record is safe :)", "error");
      }
    });
  };
  xxx = () => {
    console.log("wow i am inside xxx function");
  };
  componentWillReceiveProps(nextProps) {
    console.log("nextProps --------> ", nextProps.data);
    this.xxx();
  }
  render() {
    let empDataArray;
    if (this.props.empData.length > 0) {
      empDataArray = this.props.empData;
    } else {
      empDataArray = this.state.empDataArray;
    }
    return (
      <div>
        <form className="example" onSubmit={this.submitSearchVal}>
          <input
            type="text"
            placeholder="Search.."
            name="searchValue"
            value={this.state.searchValue}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sr #</th>
              <th>Employee Name</th>
              <th>Mobile #</th>
              <th>Employee ID</th>
              <th>Date of Birth</th>
              <th>Date of Joining</th>
              <th>Action</th>
            </tr>
          </thead>
          {empDataArray.length > 0 ? (
            <tbody>
              {empDataArray.map((empData, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {empData.empFirstName} {empData.empLastName}
                    </td>
                    <td>{empData.empMobileNum}</td>
                    <td>{empData.empID}</td>
                    <td>{moment(empData.empDOB).format("DD-MM-YYYY")}</td>
                    <td>{moment(empData.empDOJ).format("DD-MM-YYYY")}</td>
                    <td>
                      <button
                        onClick={() => this.editEmployee(empData._id)}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                      &nbsp;&nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteEmployee(empData._id)}
                        title="click to delete"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td
                  colSpan="7"
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "18px"
                  }}
                >
                  {this.state.noData}
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    empData: state.auth.empData
  };
};
export default connect(
  mapStateToProps,
  { deleteEmployee, editEmployee, searchEmployee }
)(ListOfEmployees);

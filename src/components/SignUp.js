import React, { useEffect, useState } from "react";
import "./signup.css";
import { connect } from "react-redux";
import store from "../store/index";
import { loadUsers } from "../reducers/profile";
import { Types } from "../constants/actionTypes";
import { ActionCreators } from "../actions/actionCreators";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const SignUp = (props) => {
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    aadharNumber: "",
    panNumber: "",
    userName: "",
    password: "",
    confirmPassword: "Home",
    mailId: "",
    phoneNumber: "",
    nationality: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    postalCode: "",
    captcha: "",
    notes: "",
    agreed: false,
  });

  const params = useParams();

  const navigate = useNavigate();
  // const location = useLocation();
  // console.log("users filtered: ", users);
  // console.log("location", location.state);
  // console.log("Params : ", params);

  useEffect(() => {
    const users = props.users.find(
      (element) => element.id === parseInt(params.id)
    );
    console.log("USeEffect users filtered: ", users);
    if (users) {
      setUser(users);
    }
    if (params.id) {
      setEdit(true);
    }
    console.log("UseEffect user: ", user);
  }, []);

  const submitForm = (params) => {
    console.log("edit status:", edit);
    if (edit) {
      props.updateUser(user);
    } else {
      props.addUser(user);
    }

    // navigate("/");
  };
  //  submitForm = () => {
  //   this.props.addUser();
  // };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom,gray,#adc7c7)",

        height: "1100px",
      }}
    >
      <h2>User Registration</h2>
      <div className="container">
        <div className="row py-1">
          <div className="col-md-3">
            <label className="form-label">First Name</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              value={user.firstName}
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
              }}
              type="text"
            ></input>
          </div>
        </div>
        <div className="row py-1">
          <div className="col-md-3">
            {" "}
            <label className="form-label">Last Name</label>{" "}
          </div>
          <div className="col-md-6">
            {" "}
            <input
              value={user.lastName}
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
              }}
              className="form-control"
              type="text"
            ></input>
          </div>
        </div>
        <div className="row py-1">
          <div className="col-md-3">
            <label className="form-label">DOB</label>{" "}
          </div>

          <div className="col-md-6">
            <input
              type="date"
              value={user.dob}
              onChange={(e) => {
                setUser({ ...user, dob: e.target.value });
              }}
              className="form-control"
            ></input>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-3">
            <label className="form-label">Gender</label>{" "}
          </div>
          <div className="col-md-6 " styel={{ position: "relative" }}>
            <select
              className="form-control"
              style={{
                position: "absolute",
                left: "356px",
                width: "258px",
                top: "245px",
              }}
              id="gender"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* <div className="col-md-6">
            <input
              type="date"
              value={user.gender}
              onChange={(e) => {
                setUser({ ...user, gender: e.target.value });
              }}
              className="form-control"
            ></input>
          </div> */}
        </div>
        <div className="row py-1">
          <div className="col-md-3">
            {" "}
            <label className="form-label">Aadhar Number</label>{" "}
          </div>

          <div className="col-md-6">
            <input
              value={user.aadharNumber}
              onChange={(e) => {
                setUser({ ...user, aadharNumber: e.target.value });
              }}
              className="form-control"
              type="text"
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">PAN Number</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.panNumber}
              onChange={(e) => {
                setUser({ ...user, panNumber: e.target.value });
              }}
              className="form-control"
              type="text"
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            {" "}
            <label className="form-label">User Name</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.userName}
              onChange={(e) => {
                setUser({ ...user, userName: e.target.value });
              }}
              className="form-control"
              type="text"
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">Password</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              className="form-control"
              type="password"
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">Confirm Password</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.confirmPassword}
              onChange={(e) => {
                setUser({ ...user, confirmPassword: e.target.value });
              }}
              className="form-control"
              type="password"
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">Mail Id</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.mailId}
              onChange={(e) => {
                setUser({ ...user, mailId: e.target.value });
              }}
              className="form-control"
              type="email"
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">Phone Number</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.phoneNumber}
              onChange={(e) => {
                setUser({ ...user, phoneNumber: e.target.value });
              }}
              className="form-control"
              type="text"
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">Nationality</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.nationality}
              onChange={(e) => {
                setUser({ ...user, nationality: e.target.value });
              }}
              className="form-control"
              type=""
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">Address 1</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.address1}
              onChange={(e) => {
                setUser({ ...user, address1: e.target.value });
              }}
              className="form-control"
              type=""
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">Address 2</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.address2}
              onChange={(e) => {
                setUser({ ...user, address2: e.target.value });
              }}
              className="form-control"
              type=""
            ></input>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-3">
            <label className="form-label">State</label>{" "}
          </div>
          <div className="col-md-6 " styel={{ position: "relative" }}>
            <select
              className="form-control"
              style={{
                width: "258px",
              }}
              id="state"
            >
              <option value="Male">Kerala</option>
              <option value="Female">Tamil Nadu</option>
              <option value="Female">Karnataka</option>
              <option value="Female">Andra Pradesh</option>
              <option value="Female">Haryana</option>
              <option value="Female">Punjab</option>
              <option value="Female">Assam</option>
              <option value="Female">Rajasthan</option>
              <option value="Female">Gujarath</option>
            </select>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">City</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.city}
              onChange={(e) => {
                setUser({ ...user, city: e.target.value });
              }}
              className="form-control"
              type=""
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">Postal Code</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.postalCode}
              onChange={(e) => {
                setUser({ ...user, postalCode: e.target.value });
              }}
              className="form-control"
              type=""
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">Captcha</label>{" "}
          </div>
          <div className="col-md-6">
            <input
              value={user.captcha}
              onChange={(e) => {
                setUser({ ...user, captcha: e.target.value });
              }}
              className="form-control"
              type=""
            ></input>
          </div>
        </div>
        <div className="row py-1">
          {" "}
          <div className="col-md-3">
            <label className="form-label">Notes</label>{" "}
          </div>
          <div className="col-md-6">
            <textarea
              rows="4"
              cols="50"
              value={user.notes}
              onChange={(e) => {
                setUser({ ...user, notes: e.target.value });
              }}
              className="form-control"
              type=""
            ></textarea>
          </div>
        </div>
        <div className="row py-1" style={{ position: "relative" }}>
          {" "}
          <div
            className="col-md-12 form-check"
            style={{ position: "absolute" }}
          >
            <input
              style={{ position: "absolute", left: "321px" }}
              className="form-check-input"
              type="checkbox"
              value=""
            ></input>
            <label
              style={{ position: "absolute", left: "321px" }}
              className="form-check-label"
            >
              I agree that the above information is correct
            </label>
          </div>
        </div>
        <div className="row">
          <button
            style={{
              position: "absolute",
              left: "555px",
              top: "1106px",
              borderRadius: "7px",
              backgroundColor: "#fc0505",
              fontWeight: "700",
              color: "#384a34",
            }}
            className="col-md-1"
            onClick={() => {
              submitForm();
            }}
          >
            {edit ? "Update User" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => {
    // dispatch(ActionCreators.addProfile());
    // console.log(user);
    // dispatch({ type: "ADD_USER", payload: user });
    dispatch(ActionCreators.addUser(user));
  },
  updateUser: (user) => {
    dispatch(ActionCreators.updateUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

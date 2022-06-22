import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right,#444f4f,#adc7c7)",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          top: "300px",
          left: "450px",
          width: "600px",
          backgroundColor: "black",
          height: "300px",
        }}
      >
        <div
          className="row"
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              color: "white",
            }}
          >
            User Name
          </label>
          <input
            style={{ fontWeight: "800", color: "#11485e" }}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div
          className="row"
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label
            style={{
              color: "white",
            }}
          >
            Password
          </label>
          <input
            style={{ fontWeight: "800", color: "#11485e" }}
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/list");
            }}
            style={{
              backgroundColor: "blue",
              width: "100px",
              fontWeight: "1000",
              borderRadius: "5px",
            }}
          >
            Login
          </button>
        </div>
        <div>
          <h5 style={{ color: "gray" }}>Not a member ?</h5>
          <button
            onClick={() => navigate("/signup")}
            style={{ backgroundColor: "pink" }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

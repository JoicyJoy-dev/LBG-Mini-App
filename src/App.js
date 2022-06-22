import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Hello from "./Hello";
import SignUp from "./components/SignUp";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import RegisteredUsers from "./components/RegisteredUsers";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}>
          <Route path=":id" element={<SignUp />}></Route>
        </Route>
        <Route path="/list" element={<RegisteredUsers />} />
        <Route path="/add" element={<h2>I am add component</h2>}></Route>
        <Route
          path="/edit/:id"
          element={<h2>Start editing user details</h2>}
        ></Route>

        <Route path="/welcome/*" element={<Welcome />}>
          <Route path="hello" element={<Hello></Hello>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

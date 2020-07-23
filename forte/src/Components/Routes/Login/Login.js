import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { DataContext } from "../../../App";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const { activeUser, setActiveUser } = useContext(DataContext);
  const [input, setInput] = useState("");
  const [invalidEntry, setInvalidEntry] = useState("");
  const handleChange = (e) => {
    const email = e.target.value;
    console.log("Event", email);
    setInput(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const getStudent = async () => {
      try {
        const response = await axios(
          `http://localhost:4000/api/students/email/${input}`
        );
        if (response.data[0]) {
          setActiveUser(response.data);
          setInput("");
        }
      } catch (err) {
        console.error(err);
      }
    };
    getStudent();

    const getTeacher = async () => {
      try {
        const response = await axios(
          `http://localhost:4000/api/teachers/email/${input}`
        );
        console.log("Response activeUser: ", response);
        if (response.data[0]) {
          setActiveUser(response.data);
          setInput("");
        } else {
          setInvalidEntry("Invalid Credentials");
          setInput("");
        }
      } catch (err) {
        console.error(err);
      }
    };
    getTeacher();
  };

  if (activeUser.length > 0) {
    return <Redirect to="/dashboard" />;
  }

  console.log(activeUser);

  return (
    <div>
      <h2>Login</h2>
      <h3>{invalidEntry}</h3>
      <form onSubmit={handleSubmit}>
        <label>Login with Email</label>
        <input
          placeholder="Email"
          name="email"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>

        <Link to={"/"}>
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
}

import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import "./EditProfile.css";
import { DataContext } from '../../../App';
import apiUrl from '../../../apiConfig';

const EditProfile = (props) => {
    const dataContext = useContext(DataContext);
    const activeUser = dataContext.activeUser;
    const [ clickedDelete, setIsClickedDelete ] = useState(false);
    const [teacherStudent, setTeacherStudent] = useState("");
    const [teacherSubmitted, setTeacherSubmitted] = useState(false);
    const [studentSubmitted, setStudentSubmitted] = useState(false);

    if (activeUser[0] !== undefined) {
      if (activeUser[0].teacher === true) {
        setTeacherStudent('Teacher');
      } else if (activeUser[0].student === true) {
        setTeacherStudent('Student');
      }
    }
  
    const [teacherInput, setTeacherInput] = useState({
      firstName: "",
      lastName: "",
      email: "",
      idiom1: "",
      idiom2: "",
      idiom3: "",
      language: "",
      location: "",
      rate: "",
      teachingStyle: "",
      teacher: true,
    });
  
    const [studentInput, setStudentInput] = useState({
      firstName: "",
      lastName: "",
      email: "",
      idiom: "",
      language: "",
      location: "",
      other: "",
      student: true,
    });

    // if delete is clicked Go to DeleteProfile.js
    const showDiv = (event) => {
      setIsClickedDelete(true);
    }
  
    const handleTeacherChange = (e) => {
      const field = e.target.value;
      console.log("field", field);
      setTeacherInput({
        ...teacherInput,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleStudentChange = (e) => {
      const field = e.target.value;
      console.log("Field", field);
      setStudentInput({
        ...studentInput,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleTeacherSubmit = (e) => {
      e.preventDefault();
      console.log("handle teacher submit");
      axios({
        // url: `http://localhost:4000/api/students/${userId}`,
        url: `http://localhost:4000/api/students`,
        method: "POST",
        data: teacherInput,
      })
        .then((res) => {
          props.history.push("/login");
          console.log(res);
        })
        .catch(console.error);
    };
  
    const handleStudentSubmit = (e) => {
      e.preventDefault();
      console.log("handle student submit");
      axios({
        url: `http://localhost:4000/api/students/`,
        // url: `http://localhost:4000/api/students/${userId}`,
        method: "POST",
        data: studentInput,
      })
        .then((res) => {
          props.history.push("/login");
          console.log(res);
        })
        .catch(console.error);
    };
  
    // if (teacherSubmitted) {
    //   return <Redirect to="/login" />;
    // }
    if (teacherStudent === "Teacher") {
      return (
        <>
          <h3>Teacher Sign-Up</h3>
          <form onSubmit={handleTeacherSubmit}>
            <label>First Name:</label>
            <input
              onChange={handleTeacherChange}
              name="firstName"
              value={teacherInput.firstName}
            />
            <label>Last Name:</label>
  
            <input
              onChange={handleTeacherChange}
              name="lastName"
              value={teacherInput.lastName}
            />
            <label>Email:</label>
            <input
              onChange={handleTeacherChange}
              name="email"
              value={teacherInput.email}
            />
            <label>Primary Instrument:</label>
  
            <input
              onChange={handleTeacherChange}
              name="idiom1"
              value={teacherInput.idiom1}
            />
            <label>Secondary Instrument:</label>
  
            <input
              onChange={handleTeacherChange}
              name="idiom2"
              value={teacherInput.idiom2}
            />
            <label>Other Instrument:</label>
  
            <input
              onChange={handleTeacherChange}
              name="idiom3"
              value={teacherInput.idiom3}
            />
            <label>Language:</label>
            <input
              onChange={handleTeacherChange}
              name="language"
              value={teacherInput.language}
            />
            <label>Location (City, State):</label>
  
            <input
              onChange={handleTeacherChange}
              name="location"
              value={teacherInput.location}
            />
            <label>Rate/hr:</label>
            <input
              onChange={handleTeacherChange}
              name="rate"
              value={teacherInput.rate}
            />
            <label>Teaching Style:</label>
            <input
              onChange={handleTeacherChange}
              name="teachingStyle"
              value={teacherInput.teachingStyle}
            />
            <input type="submit" />
          </form>
          <button onClick={() => setTeacherStudent("")}>Back</button>

          { clickedDelete ? <Redirect to='/deleteprofile' /> : null}
          <button type='button' onClick={showDiv} >Delete Profile</button>
        </>
      );
    }

    if (teacherStudent === "Student") {
      return (
        <>
          <h3>Student Sign-Up</h3>
          <form onSubmit={handleStudentSubmit}>
            <label>First Name:</label>
            <input
              onChange={handleStudentChange}
              name="firstName"
              value={studentInput.firstName}
            />
            <label>Last Name:</label>
            <input
              onChange={handleStudentChange}
              name="lastName"
              value={studentInput.lastName}
            />
            <label>Email:</label>
            <input
              onChange={handleStudentChange}
              name="email"
              value={studentInput.email}
            />
            <label>Instrument:</label>
            <input
              onChange={handleStudentChange}
              name="idiom"
              value={studentInput.idiom}
            />
            <label>Language</label>
            <input
              onChange={handleStudentChange}
              name="language"
              value={studentInput.language}
            />
            <label>Location:</label>
            <input
              onChange={handleStudentChange}
              name="location"
              value={studentInput.location}
            />
            <label>Other:</label>
            <input
              onChange={handleStudentChange}
              name="other"
              value={studentInput.other}
            />
            <input type="submit" />
          </form>
          <button onClick={() => setTeacherStudent("")}>Back</button>

          { clickedDelete ? <Redirect to='/deleteprofile' /> : null}
          <button type='button' onClick={showDiv} >Delete Profile</button>
        </>
      );
    }
    if (teacherStudent === "") {return <h3>Loading...</h3>}
  }
  

export default EditProfile;

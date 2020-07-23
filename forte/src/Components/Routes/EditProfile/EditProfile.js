import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./EditProfile.css";
import { DataContext } from "../../../App";
import apiUrl from "../../../apiConfig";

const EditProfile = (props) => {
  const dataContext = useContext(DataContext);
  const activeUser = dataContext.activeUser;
  const setActiveUser = dataContext.setActiveUser;

  // console.log('setactive', setActiveUser)
  // const { activeUser, setActiveUser } = useContext(DataContext);
  const [clickedDelete, setIsClickedDelete] = useState(false);

  // console.log("edit profile active user -", activeUser);

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
  };

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
      url: `http://localhost:4000/api/teachers/${activeUser[0]._id}`,
      method: "PUT",
      data: teacherInput,
    })
      .then((req, res) => {
        console.log('res.body', res.body)
        console.log('req.body', req.body)
        // console.log('req.body', req.body)
        // // setActiveUser(res.body);
        // props.history.push("/login");
        // console.log('res', req);

        // axios({
        //   url: `http://localhost:4000/api/teachers/${activeUser[0].email}`,
        //   method: "GET",
        //   data: teacherInput,
        // })
        // .then((req, res) => {
        //   console.log('res.body2', res.body)
        //   console.log('req.body2', req.body)
        //   // // setActiveUser(res.body);
        //   // props.history.push("/login");
        //   // console.log('res', req);
        // })
      })
      .catch(console.error);
  };

  // const handleTeacherSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("handle teacher submit");
  //   const updateTeacher = async () => {
  //     try {
  //       const response = await axios({
  //         url: `http://localhost:4000/api/teachers/${activeUser[0]._id}`,
  //         method: "PUT",
  //         data: teacherInput,
  //       });
  //       if (response.data[0]) {
  //         console.log('response.body', response.body)
  //         setActiveUser(response.body);
  //         props.history.push("/login");
  //         console.log('response', response);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   updateTeacher();
  // }







  const handleStudentSubmit = (e) => {
    e.preventDefault();
    console.log("handle student submit");
    axios({
      url: `http://localhost:4000/api/students/${activeUser[0]._id}`,
      method: "POST",
      data: studentInput,
    })
      .then((res) => {
        console.log('res.body', res.body)
        // setActiveUser(res.body);
        props.history.push("/login");
        console.log('res', res);
      })
      .catch(console.error);
  };





  if (activeUser[0] !== undefined) {
    if (activeUser[0].teacher === true) {
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
          <button>Back</button>

          {clickedDelete ? <Redirect to="/deleteprofile" /> : null}
          <button type="button" onClick={showDiv}>
            Delete Profile
          </button>
        </>
      );
    }

    if (activeUser[0].teacher === true) {
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
          <button>Back</button>

          {clickedDelete ? <Redirect to="/deleteprofile" /> : null}
          <button type="button" onClick={showDiv}>
            Delete Profile
          </button>
        </>
      );
    }
  } else {
    return <h3>Loading...</h3>;
  }
};

export default EditProfile;

import React, { useState } from "react";
import TeacherForm from "../../Shared/TeacherForm/TeacherForm";
import StudentForm from "../../Shared/StudentForm/StudentForm";
import apiUrl from '../../../apiConfig';
import axios from "axios";
import "./SignUp.css";

export default function SignUp(props) {
  const [teacherStudent, setTeacherStudent] = useState("");

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
      url: `${apiUrl}/teachers`,
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
      url: `${apiUrl}/students`,
      method: "POST",
      data: studentInput,
    })
      .then((res) => {
        props.history.push("/login");
        console.log(res);
      })
      .catch(console.error);
  };

  if (teacherStudent === "Teacher") {
    return (
      <>
        <h3>Teacher Sign-Up</h3>
        <TeacherForm
          handleTeacherChange={handleTeacherChange}
          handleTeacherSubmit={handleTeacherSubmit}
          teacherInput={teacherInput}
        />
        <button onClick={() => setTeacherStudent("")}>Back</button>
      </>
    );
  }

  if (teacherStudent === "Student") {
    return (
      <>
        <h3>Student Sign-Up</h3>
        <StudentForm
          handleStudentChange={handleStudentChange}
          handleStudentSubmit={handleStudentSubmit}
          studentInput={studentInput}
        />
        <button onClick={() => setTeacherStudent("")}>Back</button>
      </>
    );
  }
  if (teacherStudent === "") {
    return (
      <div>
        <h3>Do you want to...</h3>
        <button onClick={() => setTeacherStudent("Teacher")}>Teach</button>
        <button onClick={() => setTeacherStudent("Student")}>Learn</button>
      </div>
    );
  }
}

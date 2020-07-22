import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import ProfileCard from "../ProfileCard/ProfileCard";
import apiUrl from "../../../apiConfig";

export default function Matches() {
  // const dataContext = useContext(activeUser);
  const [activeUser, setActiveUser] = useState({});
  const [thisIsaTeacher, setThisIsaTeacher] = useState(false);
  const [allTeachers, setAllTeachers] = useState([]);
  const [allStudents, setAllStudents] = useState([]);

  // make an array of all the teachers
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/teachers`);
        setAllTeachers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  // make an array of all the students
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/students`);
        setAllStudents(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  // set the active user (eventually we'll get this from state)
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/teachers/Silverfish`);
        setActiveUser(response.data[0]);
        if (response.data[0].teacher === true) {
          setThisIsaTeacher(true);
        }
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  if (activeUser === undefined) {
    console.log("waiting for data");
    return <p>No activeUser yet</p>;
  } else if (thisIsaTeacher === false) {
    // if a student, find all teachers who match instrument
    let matches = allTeachers.filter((teacher) => {
      return (
        teacher.idiom1 === activeUser.idiom ||
        teacher.idiom2 === activeUser.idiom ||
        teacher.idiom3 === activeUser.idiom
      );
    });
    console.log(matches);
    return (
      <div className="matches">
        <h3>Student's Matches:</h3>
        {matches.map((match) => {
          let url = `/profile/${match.email}`;
          return (
            <Link to={url}>
              <h4>
                {match.firstName} {match.lastName}
              </h4>
            </Link>
          );
        })}
      </div>
    );
  } else {
        // if a teacher, find all students who match an idiom
    let matches = allStudents.filter((student) => {
      return (
        activeUser.idiom1 === student.idiom ||
        activeUser.idiom2 === student.idiom ||
        activeUser.idiom3 === student.idiom
      );
    });
    console.log(matches);
    return (
      <div className="matches">
        <h3>Teacher's matches</h3>
        {matches.map((match) => {
          let url = `/profile/${match.email}`;
          return (
            <Link to={url}>
              <h4>
                {match.firstName} {match.lastName}
              </h4>
            </Link>
          );
        })}
      </div>
    );
  }
}

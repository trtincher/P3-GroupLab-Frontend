import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../../App";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfileCard from "../ProfileCard/ProfileCard";
import apiUrl from "../../../apiConfig";

export default function Matches() {
  const dataContext = useContext(DataContext);
  const activeUser = dataContext.activeUser[0];
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

  if (activeUser === undefined) {
    console.log("waiting for data");
    return <p>No activeUser yet</p>;
  } else if (activeUser.teacher === false) {
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
              <ProfileCard key={match._id} person={match} />
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
    return (
      <div className="matches">
        <h3>Teacher's matches</h3>
        {matches.map((match) => {
          let url = `/profile/${match.email}`;
          return (
            <Link to={url}>
              <ProfileCard key={match._id} person={match} />
            </Link>
          );
        })}
      </div>
    );
  }
}

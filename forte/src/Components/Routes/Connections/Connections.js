import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Connections() {
  // const dataContext = useContext(activeUser);
  const [activeUser, setActiveUser] = useState({});
  const [thisIsaTeacher, setThisIsaTeacher] = useState(false);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `http://localhost:4000/api/teachers/Adebayoer`
        );
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
  if (thisIsaTeacher === false) {
    return (
      <div className="connections">
        <h1>{activeUser.firstName} {activeUser.lastName}'s Teachers</h1>
        {activeUser.myTeachers ? (
          activeUser.myTeachers.map((teacher) => {
            return (
              <div className="connection-card">
                <h3>
                  {teacher.firstName} {teacher.lastName}
                </h3>
                <h4>Price/hr</h4>
                <p>{teacher.rate} smackeroo's, y'all.</p>
                <h4>Location</h4>
                <p>{teacher.location}</p>
                <h4>Instrument(s)/Discipline(s)</h4>
                <ul>
                  <li>{teacher.idiom1}</li>
                  <li>{teacher.idiom2}</li>
                  <li>{teacher.idiom3}</li>
                </ul>
              </div>
            );
          })
        ) : (
            <li>nothing yet</li>
          )}
      </div>
    );
  } else {
    return (
      <div className="connections">
        <h1>{activeUser.firstName} {activeUser.lastName}'s Students</h1>
        {activeUser.studentRoster ? (
          activeUser.studentRoster.map((student) => {
            return (
              <div className="connection-card">
                <h3>
                  {student.firstName} {student.lastName}
                </h3>
                <h4>Location</h4>
                <p>{student.location}</p>
                <h4>Instrument/Discipline</h4>
                <ul>
                  <li>{student.idiom}</li>
                </ul>
              </div>
            );
          })
        ) : (
            <li>nothing yet</li>
          )}
      </div>
    )
  }
}

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Connections() {
  // const dataContext = useContext(activeUser);
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `http://localhost:4000/api/students/Robinson`
        );
        setActiveUser(response.data[0]);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  return (
    <div className="connections">
      <h1>Connections</h1>
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
}

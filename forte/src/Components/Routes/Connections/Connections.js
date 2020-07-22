import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "../ProfileCard/ProfileCard";
import apiUrl from "../../../apiConfig";

export default function Connections() {
  // const dataContext = useContext(activeUser);
  const [activeUser, setActiveUser] = useState({});
  const [thisIsaTeacher, setThisIsaTeacher] = useState(false);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/students/Robinson`);
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

  if (activeUser.firstName === undefined) {
    console.log("waiting for data");
    return <p>No activeUser yet</p>;
  } else if (thisIsaTeacher === false) {
    return (
      <div className="connections">
        <h1>
          {activeUser.firstName} {activeUser.lastName}'s Teachers
        </h1>
        <div className="connection-wrapper">
          {activeUser.myTeachers.map((teacher) => (
            <ProfileCard key={teacher._id} person={teacher} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="connections">
        <h1>
          {activeUser.firstName} {activeUser.lastName}'s Students
        </h1>
        <div className="connection-wrapper">
          {activeUser.studentRoster.map((student) => (
            <ProfileCard key={student._id} person={student} />
          ))}
        </div>
      </div>
    );
  }
}

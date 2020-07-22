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
        const response = await axios(
          `${apiUrl}/teachers/Ferguson`
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

  // activeUser.firstName ? console.log(activeUser.firstName) : console.log("nothing yet");

  if (activeUser === undefined) {
    console.log("waiting for data")
    return <p>No activeUser yet</p>
  } else if (thisIsaTeacher === false) {
    return (
      <div className="connections">
        <h1>
          {activeUser.firstName} {activeUser.lastName}'s Teachers
        </h1>
        <ProfileCard activeUser={activeUser}/>
      </div>
    );
  } else {
    return (
      <div className="connections">
        <h1>
          {activeUser.firstName} {activeUser.lastName}'s Students
        </h1>
        <ProfileCard activeUser={activeUser} />
      </div>
    );
  }
}

import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../../App";
import ProfileCard from "../ProfileCard/ProfileCard";

export default function Connections() {
  const dataContext = useContext(DataContext);
  const activeUser = dataContext.activeUser[0];

  if (activeUser === undefined) {
    console.log("waiting for data");
    return <p>No activeUser yet</p>;

  } else if (activeUser.teacher === false) {
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

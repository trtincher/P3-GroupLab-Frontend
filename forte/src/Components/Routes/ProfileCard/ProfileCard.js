import React from "react";

const ProfileCard = ({ activeUser }) => {
  if (activeUser !== undefined && activeUser.student === false) {
    return (
      <div className="connection-wrapper">
        {activeUser.studentRoster.map((student) => {
          return (
            <div className="connection-card">
              <h4>
                {student.firstName} {student.lastName}
              </h4>
              <h5>Location</h5>
              <p>{student.location}</p>
              <h5>Instrument</h5>
              <p>{student.idiom}</p>
              <h5>Other</h5>
              <p>{student.other}</p>
            </div>
          );
        })}
      </div>
    );
  } else if (activeUser !== undefined && activeUser.student === true) {
    return (
      <div className="connection-wrapper">
        {activeUser.myTeachers.map((teacher) => {
          return (
            <div className="connection-card">
              <h4>
                {teacher.firstName} {teacher.lastName}
              </h4>
              <h5>Location</h5>
              <p>{teacher.location}</p>
              <h5>Instrument(s)</h5>
              <ul>
                <li>{teacher.idiom1}</li>
                <li>{teacher.idiom2}</li>
                <li>{teacher.idiom3}</li>
              </ul>
              <h5>Teaching Style</h5>
              <p>{teacher.teachingStyle}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <p></p>;
  }
};

export default ProfileCard;

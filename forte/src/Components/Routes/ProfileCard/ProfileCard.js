import React from "react";


const ProfileCard = ({ person }) => {
  if (person !== undefined && person.student === true) {
    return (
      <div className="connection-card">
        <h4>
          {person.firstName} {person.lastName}
        </h4>
        <h5>Location</h5>
        <p>{person.location}</p>
        <h5>Instrument</h5>
        <p>{person.idiom}</p>
        <h5>Other</h5>
        <p>{person.other}</p>
      </div>
    );
  } else if (person !== undefined && person.student === false) {
    return (
      <div className="connection-card">
        <h4>
          {person.firstName} {person.lastName}
        </h4>
        <h5>Location</h5>
        <p>{person.location}</p>
        <h5>Instrument(s)</h5>
        <ul>
          <li>{person.idiom1}</li>
          <li>{person.idiom2}</li>
          <li>{person.idiom3}</li>
        </ul>
        <h5>Teaching Style</h5>
        <p>{person.teachingStyle}</p>

      </div>
    );
  } else {
    return <p></p>;
  }
};

export default ProfileCard;

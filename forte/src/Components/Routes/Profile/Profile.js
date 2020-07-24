import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Profile.scss";
import { DataContext } from "../../../App";
import apiUrl from "../../../apiConfig";

const Profile = (props) => {
  const { activeUser, setActiveUser } = useContext(DataContext);
  const [userProfile, setUserProfile] = useState([]);

  let wholePath = props.location.pathname;
  let path = wholePath
    .split("")
    .splice(9, wholePath.length - 1)
    .join("");

  // this is to set userProfile
  useEffect(() => {
    const makeTeacherAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/teachers/email/${path}`);
         console.log("Response userProfile teacher: ", response);
        if (response.data.length > 0) setUserProfile(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    const makeStudentAPICall = async () => {
      try {
        const response = await axios(`${apiUrl}/students/email/${path}`);
        console.log("Response userProfile student: ", response);
        if (response.data.length > 0) setUserProfile(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    makeTeacherAPICall();
    makeStudentAPICall();
  }, []);

  console.log("userprofile = ", userProfile)

  // handle the "Connect!" button
  const handleConnectClick = () => {
    let connection = userProfile[0];
    if (connection !== undefined) {
      if (connection.student === true) {

        // add connection to activeUser's studentRoster
        const addToRoster = async () => {
          const response = await axios({
            url: `${apiUrl}/teachers/${activeUser[0]._id}/addStudent/${connection._id}`,
            method: "PUT",
          });
        };

        // add activeUser to connection's myTeachers
        const addToTeachers = async () => {
          const response = await axios({
            url: `${apiUrl}/students/${connection._id}/addTeacher/${activeUser[0]._id}`,
            method: "PUT",
          });
        };

        // re-assign activeUser
        const getTeacher = async () => {
          try {
            const response = await axios(
              `${apiUrl}/teachers/email/${activeUser[0].email}`
            );
            console.log("Profile getStudent: ", response);
            if (response.data.length > 0) {
              setActiveUser(response.data);
            }
          } catch (err) {
            console.error(err);
          }
        };
        const allTheThings = async () => {
          await addToRoster();
          await addToTeachers();
          await getTeacher();
        };
        allTheThings();
      } else {
        // add connection to activeUser's myTeachers
        const addToTeachers = async () => {
          const response = await axios({
            url: `${apiUrl}/students/${activeUser[0]._id}/addTeacher/${connection._id}`,
            method: "PUT",
          });
        };

        // add activeUser to connection's studentRoster
        const addToRoster = async () => {
          const response = await axios({
            url: `${apiUrl}/teachers/${connection._id}/addStudent/${activeUser[0]._id}`,
            method: "PUT",
          });
        };

        // re-assign activeUser
        const getStudent = async () => {
          try {
            const response = await axios(
              `${apiUrl}/students/email/${activeUser[0].email}`
            );
            if (response.data.length > 0) {
              setActiveUser(response.data);
            }
          } catch (err) {
            console.error(err);
          }
        };
        const allTheThings = async () => {
          await addToRoster();
          await addToTeachers();
          await getStudent();
        };
        allTheThings();
      }
    }
    alert(`Added ${userProfile[0].firstName} to your connections.`);
  };

  // console.log("apiUrl", apiUrl);
  // console.log("userProf - ", `${apiUrl}/teachers/email/${path}`);
  // console.log("user - ", userProfile);

  if (userProfile[0] && activeUser[0] !== undefined) {
    const firstName = userProfile[0].firstName;
    const lastName = userProfile[0].lastName;
    const location = userProfile[0].location;
    const rate = userProfile[0].rate;
    const lang = userProfile[0].language;
    const contact = userProfile[0].email;
    const other = userProfile[0].other;
    const teachStyle = userProfile[0].teachingStyle;
    const idiom = userProfile[0].idiom;
    const idiomList = [
      userProfile[0].idiom1,
      userProfile[0].idiom2,
      userProfile[0].idiom3,
    ];

    idiomList.forEach((element, i) => {
      if (element === "") {
        idiomList.splice(i, 1);
      }
    });

    return (
      <div id="profile-wrapper">
        <h1>
          {firstName} {lastName}
        </h1>
        {/* <img src='activeUser[0].imgUrl' alt='userImg' /> */}

        <h2 className="profile-h2">Location</h2>
        <h3 className="profile-h3">{location}</h3>

        <h2 className="profile-h2">
          {userProfile[0].teacher === true ? "Price" : null}
        </h2>
        <h3 className="profile-h3">
          {userProfile[0].teacher === true ? rate : null}/hr
        </h3>

        <h2 className="profile-h2">Instruments</h2>
        <h3 className="profile-h3">
          {userProfile[0].student === true ? idiom : idiomList.join(", ")}
        </h3>

        <h2 className="profile-h2">Language</h2>
        <h3 className="profile-h3">{lang}</h3>

        <h2 className="profile-h2">Contact</h2>
        <h3 className="profile-h3">{contact}</h3>

        <h2 className="profile-h2">Other</h2>
        <h3 className="profile-h3">{other}</h3>

        <h2 className="profile-h2">Teaching Style</h2>
        <h3 className="profile-h3">{teachStyle}</h3>

        <Link to="/editprofile">
          {path === activeUser[0].email ? "Edit Profile" : null}
        </Link>

        {activeUser[0].email !== userProfile[0].email ? (
          <button onClick={handleConnectClick}>Connect!</button>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Profile;

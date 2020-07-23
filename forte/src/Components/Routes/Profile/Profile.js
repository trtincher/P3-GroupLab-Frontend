import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Profile.css";
import { DataContext } from '../../../App';
import apiUrl from '../../../apiConfig';

const Profile = (props) => {

  const dataContext = useContext(DataContext);
  const activeUser = dataContext.activeUser;
  console.log('active user - ', activeUser)
  const [ userProfile, setUserProfile ] = useState([]);
  const [ isUser, setIsUser ] = useState(false);

  let wholePath = props.location.pathname;
  let path = wholePath.split("").splice(9,wholePath.length-1).join("");
  console.log('path', path)


    // this is to set userProfile
    useEffect(() => {
     const makeAPICall = async () => {
       try {
         const response = await axios(`${apiUrl}/teachers/email/${path}`);
         console.log("Response userProfile: ", response);
         if (response !== undefined) setUserProfile(response.data)
       } catch (err) {
         console.error(err);
       }
     };
     makeAPICall();
      }, []);

      useEffect(() => {
        const makeAPICall = async () => {
          try {
            const response = await axios(`${apiUrl}/students/email/${path}`);
            console.log("Response userProfile: ", response);
            if (response !== undefined) setUserProfile(response.data)
          } catch (err) {
            console.error(err);
          }
        };
        makeAPICall();
         }, []);

      console.log('apiUrl', apiUrl)
      console.log('userProf - ', `${apiUrl}/teachers/email/${path}`)
      console.log('user - ', userProfile)


    if (userProfile[0] && activeUser[0] !== undefined) {
    
    const firstName = userProfile[0].firstName;
    const lastName = userProfile[0].lastName;
    const location = userProfile[0].location;
    const rate = userProfile[0].rate;
    const lang = userProfile[0].language;
    const contact = userProfile[0].email;
    const idiom = userProfile[0].idiom;
    const idiomList = [userProfile[0].idiom1, userProfile[0].idiom2, userProfile[0].idiom3]
    
    idiomList.forEach( (element,i) => {
        if(element === "") {
            idiomList.splice(i,1)
        } 
    });


    return (
      <div>
        <h1>{firstName} {lastName}</h1>
        {/* <img src='activeUser[0].imgUrl' alt='userImg' /> */}

        <h2>Location</h2>
        <h2>{location}</h2>

        <h2>{userProfile[0].teacher === true ? 'Price/hr' : null}</h2>
        <h2>{userProfile[0].teacher === true ? rate : null}</h2>

        <h2>Instruments</h2>
        <h2>{userProfile[0].student === true ? idiom : idiomList.join(', ')}</h2>

        <h2>Language</h2>
        <h2>{lang}</h2>

        <h2>Contact</h2>
        <h2>{contact}</h2>
        <Link to='/editprofile'>{path === activeUser[0].email ? 'Edit Profile' : null}</Link>

      </div>
    )   
  } else {return <h1>Loading...</h1>}
}

export default Profile
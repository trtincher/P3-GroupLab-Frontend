import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Profile.css";

const Dashboard = () => {

  // const dataContext = useContext(activeUser);
  const [ activeUser, setActiveUser ] = useState([]);
  const [ userProfile, setUserProfile ] = useState([]);
  const [ isUser, setIsUser ] = useState(false);

  // if (activeUser.email === undefined) {
  //   const firstName = activeUser[0].firstName;
  //   // const lastName = activeUser[0].lastName;
  // } 
  
  let wholePath = props.location.pathname;
  // haha I think I just spent too much time I might not even need on this. if the path is /email/:email then whole path can be used in the API call instead of path
  let path = wholePath.split("").splice(9,wholePath.length-1).join("");
  

    /// this is to test userProfile === teacher
    // it will be deleted once useContext is set up!
    useEffect(() => {
     const makeAPICall = async () => {
       try {
         const response = await axios(`https://p3-forte-backend.herokuapp.com/api/teachers/email${path}`);
        //  const response = await axios(`https://p3-forte-backend.herokuapp.com/api/students/Dubrov`);
         console.log("Response userProfile: ", response);
         setUserProfile(response.data);
       } catch (err) {
         console.error(err);
       }
     };
     makeAPICall();
      }, []);


      useEffect(() => {
        const makeAPICall = async () => {
          try {
           //  const response = await axios(`https://p3-forte-backend.herokuapp.com/api/teachers/email${rjfdklajfklads}`);
            const response = await axios(`https://p3-forte-backend.herokuapp.com/api/students/Dubrov`);
            console.log("Response userProfile: ", response);
            setActiveUser(response.data);
          } catch (err) {
            console.error(err);
          }
        };
        makeAPICall();
         }, []);





    if (userProfile[0] && activeUser[0] !== undefined) {
    

      // if(userProfile[0].email === activeUser[0].email) {
      //   setIsUser(true);
      // }

      // console.log(isUser, 'isUser')

    const firstName = userProfile[0].firstName;
    const lastName = userProfile[0].lastName;
    const location = userProfile[0].location;
    const rate = userProfile[0].rate;
    const lang = userProfile[0].language;
    const contact = userProfile[0].email;
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
        {/* <h2>Price/hr</h2>
        <h2>{rate}</h2> */}

        <h2>Instruments</h2>
        {/* <h2>{idiomList.join(', ')}</h2> */}
        <h2>Language</h2>
        <h2>{lang}</h2>
        <h2>Contact</h2>
        <h2>{contact}</h2>
        {/* <Link to='/editprofile'>{ isUser ? 'Edit Profile' : }</Link> */}

      </div>
    )   
  } else {return <h1>Loading...</h1>}





  // if (userProfile[0] !== undefined && userProfile[0].teacher === true) {
  //   const firstName = userProfile[0].firstName;
  //   const lastName = userProfile[0].lastName;
  //   const location = userProfile[0].location;
  //   const rate = userProfile[0].rate;
  //   const lang = userProfile[0].language;
  //   const contact = userProfile[0].email;
  //   const idiomList = [userProfile[0].idiom1, userProfile[0].idiom2, userProfile[0].idiom3]

  //   idiomList.forEach( (element,i) => {
  //       if(element === "") {
  //           idiomList.splice(i,1)
  //       } 
  //   });


  //   return (
  //     <div>
  //       <h1>profile for teacher</h1>
  //       <h1>{firstName} {lastName}</h1>
  //       {/* <img src='activeUser[0].imgUrl' alt='userImg' /> */}
  //       <h2>Location</h2>
  //       <h2>{location}</h2>
  //       <h2>Price/hr</h2>
  //       <h2>{rate}</h2>

  //       <h2>Instruments</h2>
  //       <h2>{idiomList.join(', ')}</h2>
  //       <h2>Language</h2>
  //       <h2>{lang}</h2>
  //       <h2>Contact</h2>
  //       <h2>{contact}</h2>
  //       {/* <Link to='/editprofile'>{isUser ? Edit profile : }</Link> */}

  //     </div>
  //   )   
  // } 
  //   else if (userProfile[0] !== undefined && userProfile[0].student === true) {
  //     const firstName = userProfile[0].firstName;
  //     const lastName = userProfile[0].lastName;
  //     const location = userProfile[0].location;
  //     const idiom = userProfile[0].idiom;
  //     const lang = userProfile[0].language;
  //     const contact = userProfile[0].email;
  
  //     return (
  //       <div>
  //         <h1>profile for student</h1>
  //         <h1>{firstName} {lastName}</h1>
  //         {/* <img src='activeUser[0].imgUrl' alt='userImg' /> */}
  //         <h2>Location</h2>
  //         <h2>{location}</h2>
  //         <h2>Instrument</h2>
  //         <h2>{idiom}</h2>
  //         <h2>Language</h2>
  //         <h2>{lang}</h2>
  //         <h2>Contact</h2>
  //         <h2>{contact}</h2>
  
  //       </div>
  //     )   
  // } else {return <h1>Loading...</h1>}


}

export default Dashboard
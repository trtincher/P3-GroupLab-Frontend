import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Dashboard.css";
import { DataContext } from '../../../App';
import apiUrl from '../../../apiConfig';

const Dashboard = () => {

	const dataContext = useContext(DataContext);
	const activeUser = dataContext.activeUser;
	const [ studentMatches, setStudentMatches] = useState({})
	const [ teacherMatches, setTeacherMatches] = useState({})


	  // this gets all the students for the teacher dash
	  useEffect(() => {
		const makeAPICall = async () => {
		  try {
			const response = await axios(`${apiUrl}/students`);
			console.log("Response students: ", response);
			setStudentMatches(response.data);
		  } catch (err) {
			console.error(err);
		  }
		};
		makeAPICall();
	  }, []);

	  // this gets all the teachers for the student dash
	  useEffect(() => {
		const makeAPICall = async () => {
		  try {
			const response = await axios(`${apiUrl}/teachers`);
			console.log("Response teachers: ", response);
			setTeacherMatches(response.data);
		  } catch (err) {
			console.error(err);
		  }
		};
		makeAPICall();
	  }, []);



	  // this returns the teacher dash
	  if (activeUser[0] && studentMatches[0] && teacherMatches[0] !== undefined && activeUser[0].teacher === true) {
	
		const email = '/profile/'+activeUser[0].email;
		const userName = activeUser[0].firstName;
		const idiomList = [activeUser[0].idiom1, activeUser[0].idiom2, activeUser[0].idiom3]

		idiomList.forEach( (element,i) => {
			if(element === "") {
				idiomList.splice(i,1)
			} 
		});


		let matchCounterTeach = 0
		for (let i=0; i<studentMatches.length; i++) {
			idiomList.forEach( (el, index) => {
				if( el === studentMatches[i].idiom) {
					matchCounterTeach++
				}
			})
		}


		console.log('matchCounter - ', matchCounterTeach)


		return (
			  <div>
				<h3>Welcome back {userName}!</h3>
				{/* <img src='activeUser[0].imgUrl' alt='userImg' /> */}
				<h2>Students</h2>
				<Link to='/connections'>{activeUser[0].studentRoster.length}</Link>

				<h2>Matches</h2>
				<Link to='/matches'>{matchCounterTeach}</Link>

				<h2>Instruments</h2>
				<h2>{idiomList.length}</h2>

				<Link to={email} >View your profile</Link>

				{/* adding this because I need to test if you can see other profiles aside from the one you're logged into */}
				<Link to='/profile/adubrov1248@gmail.com'>Dubrov the students email</Link>
			  </div>
		  )
	  } 

	  // this returns the student dash
	  else if (activeUser[0] && studentMatches[0] && teacherMatches[0] !== undefined && activeUser.student === true) {

		const userName = activeUser[0].firstName;
		const email = '/profile/'+activeUser[0].email;

		let matchCounterStudent = 0
		for (let i=0; i<teacherMatches.length; i++) {
			if( activeUser[0].idiom === teacherMatches[i].idiom1) {
				matchCounterStudent++
			} if ( activeUser[0].idiom === teacherMatches[i].idiom2) {
				matchCounterStudent++
			} if ( activeUser[0].idiom === teacherMatches[i].idiom3) {
				matchCounterStudent++
			}
		}

		// students only ever have 1 or 0 instruments
		let idiomCount = 0
		if (activeUser[0].idiom.length > -1) {
			idiomCount++
		}
		

		return (
			<div>
				<h3>Welcome back {userName}!</h3>
				{/* <img src='activeUser[0].imgUrl' alt='userImg' /> */}
				<h2>Teachers</h2>
				<Link to='/connections'>{activeUser[0].myTeachers.length}</Link>

				<h2>Matches</h2>
				<Link to='/matches'>{matchCounterStudent}</Link>

				<h2>Instruments</h2>
				<h2>{idiomCount}</h2>

				<Link to={email} >View your profile</Link>
				
				{/* adding this because I need to test if you can see other profiles aside from the one you're logged into */}
				<Link to='/profile/adubrov1248@gmail.com'>Dubrov the students email</Link>
		  </div>
		  );
	  } else { return <h1>Loading...</h1>}
};

export default Dashboard;


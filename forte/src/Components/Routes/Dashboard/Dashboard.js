import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Dashboard.css";

const Dashboard = () => {

	// const dataContext = useContext(activeUser);
	const [ activeUser, setActiveUser ] = useState({});
	const [ studentMatches, setStudentMatches] = useState({})



	console.log('student matches - ', studentMatches)
	// console.log('matchesss - ', studentMatches[0].idiom)

	useEffect(() => {
		const makeAPICall = async () => {
		  try {
			// const response = await axios(`https://p3-forte-backend.herokuapp.com/api/teachers`);
			const response = await axios(`http://localhost:4000/api/teachers/Ferguson`);
			console.log("Response activeUser: ", response);
			setActiveUser(response.data);
		  } catch (err) {
			console.error(err);
		  }
		};
		makeAPICall();
	  }, []);


	  useEffect(() => {
		const makeAPICall = async () => {
		  try {
			const response = await axios(`https://p3-forte-backend.herokuapp.com/api/students`);
			console.log("Response students: ", response);
			setStudentMatches(response.data);
		  } catch (err) {
			console.error(err);
		  }
		};
		makeAPICall();
	  }, []);



	  if (activeUser[0] && studentMatches[0] !== undefined || null && activeUser.teacher === true) {
	
		const userName = activeUser[0].firstName;
		const idiomList = [activeUser[0].idiom1, activeUser[0].idiom2, activeUser[0].idiom3]

		idiomList.forEach( (element,i) => {
			if(element === "") {
				idiomList.splice(i,1)
			} 
		});


		let matchCounter = 0
		for (let i=0; i<studentMatches.length; i++) {
			idiomList.forEach( (el, index) => {
				if( el === studentMatches[i].idiom) {
					matchCounter++
				}
			})
		}


		console.log('matchCounter - ', matchCounter)


		return (
			  <div>
				<h3>Welcome back {userName}!</h3>
				{/* <img src='activeUser.imgUrl' alt='userImg' /> */}
				<h2>Students</h2>
				<Link to='/connections'>{activeUser[0].studentRoster.length}</Link>

				<h2>Matches</h2>
				<Link to='/matches'>{matchCounter}</Link>

				<h2>Instruments</h2>
				<h2>{idiomList.length}</h2>
			  </div>
		  )
	  } 
	  else if (activeUser[0] && studentMatches[0] !== undefined || null && activeUser.student === true) {

		const userName = activeUser[0].firstName;
		const idiomList = [activeUser[0].idiom1, activeUser[0].idiom2, activeUser[0].idiom3]

		idiomList.forEach( (element,i) => {
			if(element === "") {
				idiomList.splice(i,1)
			} return idiomList
		});


		console.log('matchesss - ', studentMatches.length)

		let matchCounter = 0
		for (let i=0; i<studentMatches.length; i++) {
			idiomList.forEach( (el, index) => {
				if( el === studentMatches[i].idiom) {
					matchCounter++
				}
			})
		}



		return (
			<div>
				<h3>Welcome back {userName}!</h3>
				{/* <img src='activeUser.imgUrl' alt='userImg' /> */}
				<h2>Teachers</h2>
				<Link to='/connections'>{activeUser[0].teacherRoster.length}</Link>

				<h2>Matches</h2>
				<Link to='/matches'></Link>

				<h2>Instruments</h2>
				<h2>{idiomList.length}</h2>
		  </div>
		  );
	  } else { return <h1>Loading...</h1>}
};

export default Dashboard;


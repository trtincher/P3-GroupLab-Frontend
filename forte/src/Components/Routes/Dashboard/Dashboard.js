import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Dashboard.css";

const Dashboard = () => {

	// const dataContext = useContext(activeUser);
	const [ activeUser, setActiveUser ] = useState({});
	const [ studentMatches, setStudentMatches] = useState({})
	const [ teacherMatches, setTeacherMatches] = useState({})



	// console.log('student matches - ', studentMatches)
	// console.log('matchesss - ', studentMatches[0].idiom)

	// /// this is to test activeUser === teacher
	// // it will be deleted once useContext is set up!
	// useEffect(() => {
	// 	const makeAPICall = async () => {
	// 	  try {
	// 		const response = await axios(`https://p3-forte-backend.herokuapp.com/api/teachers/Adebayoer`);
	// 		console.log("Response activeUser: ", response);
	// 		setActiveUser(response.data);
	// 	  } catch (err) {
	// 		console.error(err);
	// 	  }
	// 	};
	// 	makeAPICall();
	//   }, []);

	/// this is to test activeUser === student
	// it will be deleted once useContext is set up!
	useEffect(() => {
		const makeAPICall = async () => {
		  try {
			const response = await axios(`https://p3-forte-backend.herokuapp.com/api/students/Dubrov`);
			console.log("Response activeUser: ", response);
			setActiveUser(response.data);
		  } catch (err) {
			console.error(err);
		  }
		};
		makeAPICall();
	  }, []);

	  // this gets all the students for the teacher dash
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

	  // this gets all the teachers for the student dash
	  useEffect(() => {
		const makeAPICall = async () => {
		  try {
			const response = await axios(`https://p3-forte-backend.herokuapp.com/api/teachers`);
			// const response = await axios(`http://localhost:4000/api/teachers`);
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
	

		console.log('testing activeuser - ', activeUser[0].teacher)

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
			  </div>
		  )
	  } 

	  // this returns the student dash
	  else if (activeUser[0] && studentMatches[0] && teacherMatches[0] !== undefined || null && activeUser.student === true) {

		const userName = activeUser[0].firstName;

		console.log('student')

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
		  </div>
		  );
	  } else { return <h1>Loading...</h1>}
};

export default Dashboard;


import React, { useState, createContext } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import Landing from './Components/Routes/Landing/Landing';
import About from './Components/Routes/About/About';
import MeetTheTeam from './Components/Routes/MeetTheTeam/MeetTheTeam';

import SignUp from './Components/Routes/SignUp/SignUp';
import Login from './Components/Routes/Login/Login';
import DeleteProfile from './Components/Routes/DeleteProfile/DeleteProfile';
import EditProfile from './Components/Routes/EditProfile/EditProfile';
import Connections from './Components/Routes/Connections/Connections';
import Profile from './Components/Routes/Profile/Profile';
import Matches from './Components/Routes/Matches/Matches';
import Dashboard from './Components/Routes/Dashboard/Dashboard';

export const DataContext = createContext();

const App = () => {
	
	const [ activeUser, setActiveUser ] = useState({});

	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route exact path="/about" component={About} />
			<Route exact path="/meetTheTeam" component={MeetTheTeam} />

			<DataContext.Provider value={{ activeUser, setActiveUser }}>
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/deleteProfile" component={DeleteProfile} />
				<Route exact path="/editProfile" component={EditProfile} />
				<Route exact path="/connections" component={Connections} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/matches" component={Matches} />
				<Route exact path="/dashboard" component={Dashboard} />
			</DataContext.Provider>
		</Switch>
	);
};

export default withRouter(App);

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./EditProfile.css";
import { DataContext } from '../../../App';
import apiUrl from '../../../apiConfig';

const EditProfile = () => {
  const dataContext = useContext(DataContext);
  const activeUser = dataContext.activeUser;
  const [ clickedDelete, setIsClickedDelete ] = useState(false);
  
  const showDiv = (event) => {
    setIsClickedDelete(true);
  }

  return (
    <div>
      <div>
        <h1>{ clickedDelete ? 'You clicked delete!?!' : null}</h1>
      </div>
      <button type='button' onClick={showDiv} >Delete Profile</button>
    </div>
  )
}

export default EditProfile;

import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
      { clickedDelete ? <Redirect to='/deleteprofile' /> : null}
      
      <button type='button' onClick={showDiv} >Delete Profile</button>
    </div>
  )
}

export default EditProfile;

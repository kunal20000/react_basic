import React,{ useContext } from 'react';
import { useAuth } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navigate = useNavigate();
  
    const {user} = useAuth();
    console.log("user", user);
  return (
    <section>
        <h3>Profile</h3>
        <p>Full Name: {user.username}</p>
        <p>User Name: {user.fullname}</p>
        <p>Dob: {user.dob}</p>
    </section>
  );
}



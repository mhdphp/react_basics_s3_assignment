import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
  return (
    <div className='UserInput'>
      <label>User: </label>
      <input 
      id="userName" 
      type="text"
      onChange={props.changed} 
      value={props.userName}/>        
    </div>
  );
};

export default UserInput;
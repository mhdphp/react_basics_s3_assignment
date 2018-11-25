import React from 'react';
import './UserOutput.css';

const UserOutput = (props) =>{
  return (
    <div className='UserOutput'>
      <p><b>Task:</b> {props.taskName}</p>
      <p><b>Responsible: </b>{props.userName}</p>
      <p>This should be executed: {props.priority}</p>
    </div>
  )
};

export default UserOutput;
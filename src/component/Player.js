import React from 'react'
import { useLocation } from 'react-router-dom';

function Player() {

    const location = useLocation();
  const { formData } = location.state || {};
    // const { formData, setData } = Userform();
  return (
    <div>
      <h1>welcome, {formData.name}</h1>
    </div>
  )
}

export default Player


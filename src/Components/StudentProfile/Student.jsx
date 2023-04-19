import React from 'react'
import { useHistory } from 'react-router-dom';

const Student = () => {
  const history = useHistory();
  const auther = JSON.parse(localStorage.getItem("isAuthenticated"));
  if (!auther)
  {
    return history.push("/");
  }
  return (
    <div>Student</div>
  )
}

export default Student
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import "../Login/Login.css"

import Footer from '../Footer/Footer';
import { loginSuccess } from '../../redux/authSlice';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = {
    test: { password: 'test', type: 'student' },
    teacher: { password: 'teacher', type: 'teacher' },
    admin: { password: 'admin', type: 'IQAC' },
    HoD:{password : "hod" , type : "HoD"}, 
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter a username and password.');
      return;
    }

    if (!users[username] || users[username].password !== password) {
      setError('Invalid username or password.');
      return;
    }

    dispatch(loginSuccess(users[username].type));
    localStorage.setItem('isAuthenticated', true);
    switch (users[username].type) {
      case 'student':
        history.push('/student');
        break;
      case 'teacher':
        history.push('/teacher');
        break;
      case 'IQAC':
        history.push('/IQAC');
        break;
      case 'HoD':
        history.push("/HoD");
        break;
      default:
        setError('Invalid user type.');
        break;
    }
  };

  if (isAuthenticated) {
    history.push('/student');
  }

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow className="text-center">
        <MDBCol col="4" className="mb-5">
          <div className="d-flex flex-column ms-3">
            <div className="text-center">
              <img src="https://sairamgroup.in/wp-content/themes/sairamgroup/images/Loading.gif" style={{ width: '185px' }} alt="logo" />
              <h4 className="mt-5 mb-5 pb-1">Event Manager</h4>
            </div>
            <p>Please login to your account</p>
          <div style={{display: "flex",textAlign : "center", justifyContent: "center",alignItems: "center" , marginTop : "1rem"}}>
            <form onSubmit={handleLogin} className='forme'>
              <MDBInput
                style={{ minWidth: '25vw' }}
                wrapperClass="mb-4"
                label="User Name"
                id="form1"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <MDBInput
                style={{ minWidth: '25vw' }}
                wrapperClass="mb-4 "
                label="Password"
                id="form2"
                className="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ minWidth: '25vw' }} className="text-center pt-1 mb-5 pb-1">
                <MDBBtn
                  className=" mb-4 w-100  gradient-custom-2"
                  style={{ height: '3rem', fontSize: '1rem', fontWeight: '500' }}
                  type="submit"
                >
                  Sign in
                </MDBBtn>
                <a className="text-muted" href="/forgotPassword">Forgot password?</a>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
            </form>
          </div>
          </div>
        </MDBCol>
      </MDBRow>
      <Footer />
    </MDBContainer>
  );
};

export default Login;

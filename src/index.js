/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from './Components/Login/Login';
import teacher from "./Components/TeacherProfile/teacher"
import Student from './Components/StudentProfile/Student';
import HoD from './Components/HoD/HoD';
import IQAC from "./Components/IQAC/IQAC"
import PrivateRoute from './Components/PrivateROute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login}/>
        <PrivateRoute exact={true} path="/student" component={Student}/>
        <PrivateRoute exact={true} path="/teacher" component={teacher}/>
        <PrivateRoute exact={true} path="/Hod" component={HoD}/>
        <PrivateRoute exact={true} path="/IQAC" component={IQAC}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

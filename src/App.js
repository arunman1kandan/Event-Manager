import React, { useState , useEffect} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Student from './components/Student/Student';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');
  const history = useHistory();

  useEffect(() =>{
    const checkAuth = localStorage.getItem('isAuthenticated');
    if(!checkAuth)
    {
      history.push("/");
    }
  },[history]);

  const handleLogin = (type) => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType('');
    localStorage.removeItem('isAuthenticated')
  };

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated && userType === 'stud' ? (
            <Component {...props} handleLogout={handleLogout} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
  };

  return (
    <Router>
      <div>
        <Route exact path="/">
          {isAuthenticated && userType === 'stud' ? (
            <Redirect to="/student" />
          ) : (
            <Login handleLogin={handleLogin} />
          )}
        </Route>
        <ProtectedRoute exact path="/student" component={Student} />
      </div>
    </Router>
  );
}

export default App;

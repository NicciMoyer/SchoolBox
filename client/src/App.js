import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard"
import TeacherDashboard from "./pages/TeacherDashboard"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import UserContext from "./contexts/UserContext"
import ClassPage from "./pages/ClassPage"
import AssignmentPage from "./pages/AssignmentPage"

function App() {
  const [userState, setUserState] =useState({
    userName: "",
    prefix: "",
    firstName: "",
    lastName: "",
    userId: "",
    isTeacher: false
  })
  return (
    <UserContext.Provider value={userState}>
    <Router>
    <div className="App">

      <Route exact path = "/" ><Signup setUserState={setUserState}/></Route>
      <Route exact path = "/login"><Login setUserState={setUserState}/></Route>
      <Route exact path= "/studentdashboard" component={StudentDashboard}/>
      <Route exact path= "/teacherdashboard" component={TeacherDashboard}/>
      <Route exact path= "/classes/:id" component={ClassPage}/>
      <Route exact path= "/assignments/:assignmentid/:classid" component={AssignmentPage}/>
    </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

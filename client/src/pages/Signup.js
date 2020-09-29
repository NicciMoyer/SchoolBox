import React, { useState, useContext } from "react"
import { Input, PasswordInput, FormBtn, YesNo } from "../components/Form";
import { Link, Redirect } from "react-router-dom";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import axios from "axios"
import UserContext from "../contexts/UserContext"

function Signup(props){
    const{id, prefix, firstName, lastName, userName, isTeacher} =useContext(UserContext)
    const [formObject, setFormObject] = useState({})
    const [errState, setErrState]= useState("")
    const [loginSuccess, setLoginSuccess] =useState(false)


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

      function handleFormSubmit(event) {
        event.preventDefault();
        setErrState("");
        if (formObject.email && formObject.userName && formObject.firstName &&formObject.lastName && formObject.password && formObject.password2) {
          if(formObject.password !== formObject.password2){
                setErrState("Passwords do not match")
            }else{
              if(formObject.isTeacher==="Teacher"){
                formObject.isTeacher=true;
              }else{
                formObject.isTeacher=false;
              }
            }
            const newObject={...formObject}
            axios.post("/api/signup", newObject)
            .then((res) => {
              props.setUserState({userName: res.data.userName, prefix: res.data.prefix, firstName: res.data.firstName, lastName: res.data.lastName, userId: res.data.id, isTeacher: res.data.isTeacher})
              setLoginSuccess(true)
            })
            .catch(err => {
              console.log(err)
            })
            
        }
      };

    return(
        <Container>
          {loginSuccess ? isTeacher ? <Redirect to ="/teacherdashboard" />: <Redirect to ="/studentdashboard"/> :
        <>
        <Jumbotron>
        <h1>Sign Up</h1>
        <h2>or</h2>
        <h1><Link to="/login">Log in</Link></h1>
      </Jumbotron>
      <form>
            <Input
            onChange={handleInputChange}
            name="email"
            placeholder="email (required)"
            label="Email Address"
            />
            <Input
            onChange={handleInputChange}
            name="userName"
            placeholder="username"
            label="User Name"
            />
            <Input
            onChange={handleInputChange}
            name="firstName"
            placeholder="First Name"
            label="First Name"
            />
            <Input
            onChange={handleInputChange}
            name="lastName"
            placeholder="Last Name"
            label="Last Name"
            />
            <Input
            onChange={handleInputChange}
            name="prefix"
            placeholder="Prefix (ex. Mr. Mrs, etc.)"
            label="Prefix"
            />
            <YesNo
            option1="Student"
            option2="Teacher"
            onChange={handleInputChange}
            name="isTeacher"
            label="Student or teacher?"
            />
            <PasswordInput
            onChange={handleInputChange}
            name="password"
            placeholder="password"
            label="Enter a password"
            />
            <PasswordInput
            onChange={handleInputChange}
            name="password2"
            placeholder="enter password again"
            label="Enter password again"
            />
            <FormBtn
                disabled={!(formObject.email && formObject.userName && formObject.firstName &&formObject.lastName  && formObject.password && formObject.password2)}
                onClick={handleFormSubmit}
              >Sign Up</FormBtn>
      
      <div className="errorBox">{errState}</div>
      </form></>}
      </Container>
    
    )

}

export default Signup;
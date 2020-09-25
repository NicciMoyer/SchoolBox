import React, { useState, useEffect } from "react";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import coloredPencilsBottom from "../images/colored-pencils-bottom.jpg";
import Roster from "../roster"



function teacherLanding() {
  return (
    <div styles={{ backgroundImage: `url(${coloredPencilsBottom})` }}>

      <h1>Welcome, Ms. Frizzle!</h1>


      <row>
        <col className="classcol" size="col-md-2 col-12">

          <h3>My Classes</h3>
          <br></br>
          <ul>
            <li>Biology</li>
            <li>Anatomy</li>
            <li>Biology II</li>

          </ul>
        </col>
        <col className="Studentscol" size="col-md-5 col-12">
          <Roster></Roster>
          
        </col>
        <col className="assignmentscol" size="col-md-5 col-12">

          
        </col>
      </row>
    </div>
  );
}
export default teacherLanding;




// function students() {
// Setting our component's initial state
// const [Students, setStudents] = useState([])
// const [formObject, setFormObject] = useState({})
// // Load all students and store them with setStudents
// useEffect(() => {
//   loadStudents()
// }, [])

// // Loads all students and sets them to students
// function loadStudents() {
//   API.getStudents()
//     .then(res => 
//       setStudents(res.data)
//     )
//     .catch(err => console.log(err));
// };

// Deletes a student from the database with a given id, then reloads students from the db
// function deleteStudent(id) {
// API.deleteStudent(id)
//   .then(res => loadStudents())
//   .catch(err => console.log(err));
// }

// Handles updating component state when the user types into the input field
// function handleInputChange(event) {
// const { name, value } = event.target;
// setFormObject({...formObject, [name]: value})
// };

// When the form is submitted, use the API.saveStudent method to save the student data
// Then reload students from the database
// function handleFormSubmit(event) {
// event.preventDefault();
// if (formObject.title && formObject.author) {
//   API.saveStudent({
//     title: formObject.title,
//     author: formObject.author,
//     synopsis: formObject.synopsis
//   })
//     .then(res => loadStudents())
//     .catch(err => console.log(err));
// }
// };
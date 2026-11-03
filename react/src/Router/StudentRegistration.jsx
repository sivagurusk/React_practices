import "react";
import {useState} from "react";
import Login from "./Login.jsx";
function StudentRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  

  return (
    <div>
      <h2>Student Registration Form</h2>

      <label>Name: </label>
      <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
      <br /><br />

      <label>Email: </label>
      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br /><br />

      <label>Course: </label>
      <select value={course} onChange={(e) => setCourse(e.target.value)}>
        <option>Select Course</option>
        <option>BCA</option>
        <option>B.E CSE</option>
        <option>B.Sc CS</option>
      </select>
      <br /><br />

      
      <button onClick={Login}>Register</button>
    </div>
  );
}

export default StudentRegistration;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;






// import { useState } from "react";
// import {
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   FormLabel,
//   Button,
//   Box,
//   Typography,
// } from "@mui/material";

// function App() {
//   const [course, setCourse] = useState("");
//   const [gender, setGender] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form Submitted");
//     console.log("Course:", course);
//     console.log("Gender:", gender);
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f5f5f5",
//       }}
//     >
//       <Box
//         component="form"
//         onSubmit={handleSubmit}
//         sx={{
//           width: 400,
//           backgroundColor: "white",
//           padding: 4,
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         {/* Heading */}
//         <Typography
//           variant="h5"
//           textAlign="center"
//           fontWeight="bold"
//           mb={3}
//         >
//           Student Registration
//         </Typography>

//         {/* Name */}
//         <TextField
//           label="Name"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//         />

//         {/* Email */}
//         <TextField
//           label="Email"
//           type="email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//         />

//         {/* Mobile */}
//         <TextField
//           label="Mobile"
//           type="tel"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//         />

//         {/* Course */}
//         <FormControl fullWidth margin="normal">
//           <InputLabel>Course</InputLabel>

//           <Select
//             value={course}
//             label="Course"
//             onChange={(e) => setCourse(e.target.value)}
//           >
//             <MenuItem value="React">React</MenuItem>
//             <MenuItem value="Java">Java</MenuItem>
//             <MenuItem value="Python">Python</MenuItem>
//             <MenuItem value="MERN">MERN Stack</MenuItem>
//           </Select>
//         </FormControl>

//         {/* Gender */}
//         <FormControl margin="normal">
//           <FormLabel>Gender</FormLabel>

//           <RadioGroup
//             row
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//           >
//             <FormControlLabel
//               value="Male"
//               control={<Radio />}
//               label="Male"
//             />

//             <FormControlLabel
//               value="Female"
//               control={<Radio />}
//               label="Female"
//             />
//           </RadioGroup>
//         </FormControl>

//         {/* Register Button */}
//         <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           sx={{ mt: 3 }}
//         >
//           Register
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default App;






































// // function App() {
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
// //       <div className="w-80 bg-white rounded-xl shadow-lg p-6">
        
   
// //         <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
// //           Student Profile
// //         </h1>

// //         <div className="space-y-3">
// //           <p className="text-gray-700">
// //             <span className="font-semibold">Name:</span> Arun
// //           </p>

// //           <p className="text-gray-700">
// //             <span className="font-semibold">Course:</span> React
// //           </p>

// //           <p className="text-gray-700">
// //             <span className="font-semibold">Email:</span> arun@gmail.com
// //           </p>
// //         </div>

       
// //         <button
// //           className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg 
// //                      hover:bg-blue-700 transition duration-300"
// //         >
// //           View Profile
// //         </button>

// //       </div>

// //     </div>
// //   );
// // }

// // export default App;
























































// // import Container from "@mui/material/Container";
// // import TextField from "@mui/material/TextField";
// // import Button from "@mui/material/Button";
// // import Typography from "@mui/material/Typography";
// // import Stack from "@mui/material/Stack";
// // function App() {
// //   return (
// //     <Container maxWidth="sm">
// //       <Typography variant="h4">
// //         Login
// //       </Typography>
// //       <Stack spacing={2} sx={{ marginTop: 3 }}>
// //         <TextField
// //           label="Username"
// //           variant="outlined"
// //         />
// //         <TextField
// //           label="Password"
// //           type="password"
// //           variant="outlined"
// //           color="success"
// //         />
// //         <Button variant="contained" color="info">
// //           Login
// //         </Button>
// //         <Button variant="contained" color="error">
// //           Contained
// //         </Button>
// //         <Button variant="contained" color="success">
// //           Outlined
// //       </Button>


// //       </Stack>
// //     </Container>
// //   );
// // }
// // import '../node-modules/bootstrap/dist/css/bootstrap.min.css';
// // import { useSelector, useDispatch } from "react-redux";
// // function App() {
// //   const count = useSelector((state) => state);
// //   const dispatch = useDispatch();
// //   function increase() {
// //     dispatch({
// //       type: "INCREMENT"
// //     });
// //   }
// //   function decrease() {
// //     dispatch({
// //       type: "DECREMENT"
// //     });
// //   }
// //   return (
// //     <div>
// //       <h1>Redux Counter</h1>
// //       <h2>Count: {count}</h2>
// //       <button onClick={increase}>
// //         Increase
// //       </button>
// //       <button onClick={decrease}>
// //         Decrease
// //       </button>
// //     </div>
// //   );
// // }
// // export default App;





































// // import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// // function Home() {
// //   return <h1>Home Page</h1>;
// // }

// // function Students() {
// //   return <h1>Students Page</h1>;
// // }

// // function Courses() {
// //   return <h1>Courses Page</h1>;
// // }

// // function Contact() {
// //   return <h1>Contact Page</h1>;
// // }

// // function App() {
// //   return (
// //     <BrowserRouter>

// //       <nav>
// //         <Link to="/">Home</Link> |{" "}
// //         <Link to="/students">Students</Link> |{" "}
// //         <Link to="/courses">Courses</Link> |{" "}
// //         <Link to="/contact">Contact</Link>
// //       </nav>

// //       <hr />

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/students" element={<Students />} />
// //         <Route path="/courses" element={<Courses />} />
// //         <Route path="/contact" element={<Contact />} />
// //       </Routes>

// //     </BrowserRouter>
// //   );
// // }

// // export default App;


























































// // // //import { useState } from "react";
// // // // import {BrowserRouter,Route,Routes} from 'react-router-dom';
// // // // import Login from './Router/Login';
// // // // import Task from'./Router/Task';

// // // import Student from "./Student";
// // // import "./index.css";

// // // function App() {
// // //    return(
// // //         // <BrowserRouter>
// // //         //     <Routes>
// // //         //         <Route path='/Task' element={<Task/>}></Route>
// // //         //         <Route path='/' element={<Login/>}></Route>
// // //         //     </Routes>
// // //         // </BrowserRouter>
// // //         <Student/>
// // //     );
// // // }
// // // export default App;
// // // // import { useState } from "react";

// // // // function Student({ name, course }) {
// // // //   return (
// // // //     <div>
// // // //       <h3>Name: {name}</h3>
// // // //       <p>Course: {course}</p>
// // // //       <hr />
// // // //     </div>
// // // //   );
// // // // }

// // // // function App() {
// // // //   const [students, setStudents] = useState([
// // // //     { id: 1, name: "Arun", course: "React" },
// // // //     { id: 2, name: "Kumar", course: "Java" },
// // // //     { id: 3, name: "Guru", course: "Python" },
// // // //     { id: 4, name: "SK", course: "MERN" }
// // // //   ]);

// // // //   function addStudent() {
// // // //     const newStudent = {
// // // //       id: students.length + 1,
// // // //       name: "SivaGuru",
// // // //       course: "Spring Boot"
// // // //     };

// // // //     setStudents([...students, newStudent]);
// // // //   }

// // // //   return (
// // // //     <div>
// // // //       <h1>Student List Manager</h1>

// // // //       <button onClick={addStudent}>Add Student</button>

// // // //       <h2>Student List</h2>

// // // //       {students.map((student) => (
// // // //         <Student
// // // //           key={student.id}
// // // //           name={student.name}
// // // //           course={student.course}
// // // //         />
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;










// // //   // const [count, setCount] = useState([
// // //   //   {
// // //   //     id: 1,
// // //   //     name: "Guru",
// // //   //     course: "Front-End",
// // //   //     count: 0,
// // //   //   },
// // //   //   {
// // //   //     id: 2,
// // //   //     name: "Siva",
// // //   //     course: "Back-End",
// // //   //     count: 0,
// // //   //   },
// // //   //   {
// // //   //     id: 3,
// // //   //     name: "SK",
// // //   //     course: "Java",
// // //   //     count: 0,
// // //   //   },
// // //   // ]);

// // //   // function changes(id) {
// // //   //   const update = count.map((list) => {
// // //   //     if (list.id === id) {
// // //   //       return {
// // //   //         ...list,
// // //   //         count: list.count + 1
// // //   //       }
// // //   //     }

// // //   //     return list;
// // //   //   });

// // //   //   setCount(update);
// // //   // }

// // //   // return (
// // //   //   <>
// // //   //     {count.map((list) => (
// // //   //       <div key={list.id}>
// // //   //         <p>Name: {list.name}</p>
// // //   //         <p>Course: {list.course}</p>
// // //   //         <p>Count: {list.count}</p>
// // //   //         <button onClick={() => changes(list.id)}> + </button>
// // //   //         <hr/>
// // //   //       </div>
// // //   //     ))}
// // //   //   </>
// // // //   );
// // // // }


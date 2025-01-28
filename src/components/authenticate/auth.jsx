// import React, { useEffect, useState } from 'react';
// import { Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import Home from '../interface/home';
// import Login from '../interface/Login';
// import Register from '../interface/Register';
// import Profile from '../interface/Profile';
// import Help from "../interface/Help";

// import "./auth.css"

// // const styles = {
// //   appContainerLight: { backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh' },
// //   appContainerDark: { backgroundColor: '#333333', color: '#ffffff', minHeight: '100vh' },
// //   navbar: { marginBottom: '20px', padding: '10px 20px', backgroundColor: '#000000', color: 'white' },
// //   navLink: { color: '#ffffff', textDecoration: 'none', padding: '10px 15px', margin: '0 10px' },
// //   content: { padding: '20px' },
// //   toggleButton: {
// //     borderRadius: '50%',
// //     width: '40px',
// //     height: '40px',
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     border: '2px solid #ccc',
// //     cursor: 'pointer',
// //   },
// // };

// function App1() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       validateToken(token.replace(/^"|"$/g, ''));
//     } else {
//       navigate('/login'); // Redirect to login if no token is present
//     }
//   }, [navigate]);

//   const validateToken = async (token) => {
//     try {
//       const response = await fetch('http://localhost:3001/profile', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Token validation successful:', data);
//         setIsAuthenticated(true); // Mark as authenticated
//       } else {
//         const error = await response.text();
//         console.error('Token validation error:', error);
//         alert('Session expired. Please log in again.');
//         localStorage.removeItem('token'); // Remove invalid token
//         navigate('/login'); // Redirect to login
//       }
//     } catch (error) {
//       console.error('Token validation failed:', error);
//       alert('An error occurred while validating the token.');
//       localStorage.removeItem('token');
//       navigate('/login');
//     }
//   };

//   const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

//   if (!isAuthenticated) return null; // Prevent rendering until authentication is confirmed

//   return (
//     <div style={isDarkMode ? styles.appContainerDark : styles.appContainerLight}>
//       <AppNavbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
//       <div style={styles.content}>
//         <Routes>
//           <Route path="/auth" element={<Home />} />
//           <Route path="/help" element={<Help />} />
//           <Route path="/chat" element={<Help />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// function AppNavbar({ toggleTheme, isDarkMode }) {
//   const location = useLocation();

//   const hideNavbar = ['/login', '/register','/chat'].includes(location.pathname);

//   return (
//     !hideNavbar && (
//       <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} style={styles.navbar}>
//         <Container>
//           <Navbar.Brand as={Link} to="/">
//             Gemini AI
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto">
//               <Nav.Item>
//                 <Link to="/auth" style={styles.navLink}>Home</Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Link to="/help" style={styles.navLink}>Help</Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Link to="/chat" style={styles.navLink}>Chat</Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Link to="/profile" style={styles.navLink}>Profile</Link>
//               </Nav.Item>
//             </Nav>
//             <Button variant={isDarkMode ? 'outline-light' : 'outline-dark'} onClick={toggleTheme} style={styles.toggleButton}>
//               Toggle
//             </Button>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     )
//   );
// }

// const styles = {
//   appContainerLight: {
//     display: 'flex',
//     flexDirection: 'column',
//     maxHeight: '100vh',
//     backgroundColor: '#000000',
//     color: 'Gold',
//   },

//   appContainerDark: {
//     display: 'flex',
//     flexDirection: 'column',
//     maxHeight: '100vh',

//     backgroundColor: '#333',
//     color: '#000000',
//   },
//   navbar: {
//     marginBottom: '20px',
//     padding: '10px 20px',
//     backgroundColor: "#000000",
//     color: " white"
//   },
//   Container: {
//     padding: '0px'
//   },
//   navContainer: {
//     padding: '20px'
//   },

//   navBrand: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     padding: '60px 0px',
//     position : "relative",
//     top : "20px",
//     left:"40px"
//   },
//   navItems: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     padding: '0px'

//   },
//   navLink: {
//     color: '#ffffff',
//     textDecoration: 'none',
//     padding: '10px 15px',
//     margin: '0 10px',
//     fontSize : "16px"
//   },
//   navLinkHover: {
//     color: 'black',
//     textDecoration: 'underline',
//   },
//   content: {
//     flex: 0,
//     padding: '0px',
//   },
//   projectContent: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//     width: '100%',
//     color: "#fff"
//   },
//   imageContainer: {
//     flex: 1,
//     marginRight: '20px',
//   },
//   projectImage: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   projectInfo: {
//     maxWidth: '600px',
//     fontSize: '16px',
//     lineHeight: '1.6',
//     color: 'white'
//   },
//   toggleButton: {
//     position: 'absolute',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     zIndex: '1000',
//     borderRadius: '50%',
//     width: '50px',
//     height: '45px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',

//     border: '3px solid #ccc',
//     cursor: 'pointer',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//     transition: 'transform 0.3s ease',
//   },

// }

// export default App1;

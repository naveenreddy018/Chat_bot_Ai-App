// import React, { useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';



// import Hello from './components/main/Hello';

// import Home from './components/interface/Home';
// import Login from './components/interface/Login';
// import Register from './components/interface/Register';
// import Profile from './components/interface/Profile';
// import ImageComponent from './components/ImageComponent/image';
// import { assets } from './assets/assets';
// import AboutGeminiAI from './components/interface/project';

// import Help from './components/interface/Help';



// function App1() {
//   const [isDarkMode, setIsDarkMode] = useState(false);


//   const toggleTheme = () => {
//     setIsDarkMode(prevMode => !prevMode);
//   };

//   return (
//     <div style={isDarkMode ? styles.appContainerDark : styles.appContainerLight}>
//       <Router>
//         <AppNavbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
//         <div style={styles.content}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             {/* <Route path="/history" element={<History />} /> */}
//             <Route path="/Help" element={<Help />} />
//             <Route path="/chat" element={<div style={styles.content}><Hello /></div>} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/about" element={<AboutGeminiAI />} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }

// function AppNavbar({ toggleTheme, isDarkMode }) {
//   const location = useLocation();

//   // Hide Navbar on specific routes, including '/history'
//   const hideNavbar = 
//     location.pathname === '/login' || 
//     location.pathname === '/register' || 
//     location.pathname === '/chat' || 
//     location.pathname === '/Help'; 

//   return (
//     <>
//       {!hideNavbar && (
//         <Navbar bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} style={styles.navbar}>
//           <Container style={styles.Container}>
//             <Navbar.Brand as={Link} to="/" className='gemini-name' style={styles.navBrand}>Gemini Ai</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" style={styles.hamburger} >
//               <span className="custom-bar"></span>
//               <span className="custom-bar"></span>
//               <span className="custom-bar"></span>
//             </Navbar.Toggle>
//             <Navbar.Collapse id="basic-navbar-nav" className='hamburger' style={styles.navContainer}>
//               <Nav className="ml-auto auto" style={styles.navItems}>
//                 <Nav.Item>
//                   <Link to="/" className="nav-link" style={styles.navLink}>Home</Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Link to="/login" className="nav-link" style={styles.navLink}>Login</Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Link to="/register" className="nav-link" style={styles.navLink}>Register</Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Link to="/profile" className="nav-link" style={styles.navLink}>Profile</Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Link to="/chat" className="nav-link" style={styles.navLink}>Chat</Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Link to="/about" className="nav-link" style={styles.navLink}>About</Link>
//                 </Nav.Item>
//               </Nav>
//               <Button variant={isDarkMode ? "outline-light" : "outline-dark"} onClick={toggleTheme} className='toggle' style={styles.toggleButton}>
//                 <ImageComponent src={assets.toggle} style={{ width: 40, borderRadius: '300px' }} />
//               </Button>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       )}
//     </>
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


// };

// export default App1;
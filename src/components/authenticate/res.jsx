import React, { useState, useEffect } from 'react';
import './res.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Profile from '../interface/Profile';
import AboutGeminiAI from '../interface/project';
import Help from '../interface/Help';
import Hello from '../main/Hello';
import Home from "../interface/Home";
import zIndex from '@mui/material/styles/zIndex';

function App3() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div style={isDarkMode ? styles.appContainerDark : styles.appContainerLight}>
      <AppNavbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Home />
      <div style={styles.content}>
        <Routes>
          <Route path="/auth" element={<App3 />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/chat" element={<div style={styles.content}><Hello /></div>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutGeminiAI />} />
        </Routes>
      </div>
    </div>
  );
}
function AppNavbar({ toggleTheme, isDarkMode }) {
  const [profile, setProfile] = useState(false);
  const [open, setIsOpen] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const hideNavbar =
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/chat' ||
    location.pathname === '/Help';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleProfile = () => {
    setProfile((prev) => !prev);
  };

  return (
    <>
      {!hideNavbar && (
        <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} style={styles.navbar} >
          <Container style={styles.Container}>
            <Navbar.Brand as={Link} className="gemini-name" style={styles.navBrand}>
              Gemini Ai
            </Navbar.Brand>

            {/* Hamburger Icon (Nav Toggle) */}
            <div className="nav-toggle" onClick={() => setIsOpen(!open)} >
              <span className={`bar ${open ? 'open' : ''}`}></span>
              <span className={`bar ${open ? 'open' : ''}`}></span>
              <span className={`bar ${open ? 'open' : ''}`}></span>
            </div>

            {/* Mobile Navigation */}
            <div className={`mobile-nav ${open ? 'open' : ''}`}  >
              <Navbar.Collapse id="basic-navbar-nav" className="hamburger" style={styles.navContainer}>
                <Nav className="ml-auto auto" style={styles.navItems}>
                  <Nav.Item>
                    <Link to="/auth" className="nav-link" style={styles.navLink}>
                      Home
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/chat" className="nav-link" style={styles.navLink}>
                      Chat
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/about" className="nav-link" style={styles.navLink}>
                      About
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant="link" className="dropdown-menu" style={styles.navLink} onClick={handleProfile}>
                      <img
                        src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
                        width="60px"
                        alt="User Avatar"
                      />
                    </Button>

                    {profile && (
                      <div className="dropdown-menu" style={styles.profileMenu}>
                        <Button variant="link" className="dropdown-item" onClick={handleLogout} style={styles.profileItem}>
                          Logout
                        </Button>
                      </div>
                    )}
                  </Nav.Item>
                </Nav>
                <Button
                  variant={isDarkMode ? 'outline-light' : 'outline-dark'}
                  title="Toggle button"
                  onClick={toggleTheme}
                  className="toggle"
                  style={styles.toggleButton}
                >
                  {isDarkMode ? '🌙' : '🌞'}
                </Button>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      )}
      <style>
        {`
          @media (max-width: 425px) {
            /* Display the hamburger icon */
            .nav-toggle {
              display: flex;
              flex-direction: column;
              cursor: pointer;
              z-index: 1001;
    margin-bottom: 6px
            }

            /* Styling for each bar */
            .bar {
              background-color: white;
              width: 30px;
              height: 4px;
              margin: 5px 0;
              transition: 0.3s ease-in-out;
            }

            .dropdown-menu {
              display: ${open ? 'block' : 'none'};
            }
             

            /* Mobile nav container */
            .mobile-nav {
              position: absolute;
              top: 0;
              left: 0;
              right: -60%;
              width: 100%;
              height: 100vh;
              display: ${open ? 'block' : 'none'};
              flex-direction: column;
              align-items: center;
              justify-content: center;
              transition: transform 0.3s ease-in-out;
              z-index: 999;
            }

            /* Slide in the mobile menu when open */
            .mobile-nav.open {
              transform: translateX(0%);
            }
          }
        `}
      </style>
    </>
  );
}


const styles = {
  appContainerLight: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
    backgroundColor: '#000000',
    color: '#000',
    zIndex : "1000"
  },

  appContainerDark: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
    backgroundColor: '#333',
    color: '#ffffff',
  },

  navbar: {
    marginBottom: '20px',
    padding: '10px 20px',
    // backgroundColor: '#000',
    color: 'white',
  },

  Container: {
    padding: '0px',
    width: "100%",


  },

  navContainer: {
    padding: '20px',
  },

  navBrand: {
    fontSize: '24px',
    fontWeight: 'bold',
    padding: '60px 0px',
    position: 'relative',
    top: '60px',
    left: '40px',
  },

  navItems: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px',
  },

  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    padding: '10px 15px',
    margin: '0 10px',
    fontSize: '22px',
    fontWeight: 400,
  },

  toggleButton: {
    position: 'absolute',
    backgroundColor: 'black',
    border: 'none',
    top: '10%',
    right: '30%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1000',
    borderRadius: '50%',
    width: '50px',
    height: '45px',
    display: 'flex',
    fontSize: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',

    transition: 'transform 0.3s ease',
  },

  content: {
    flex: 0,
    padding: '0px',
  },

  profileMenu: {
    backgroundColor: 'black',
    padding: '0px !important',
    minWidth: '10px',
    border: 'none',
    top: '-10%',
  },

  profileItem: {
    color: 'white',
    padding: '10px 15px',
    fontSize: '1.5rem',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'gray',
    fontFamily: 'Times New Roman, Times, serif',
    fontWeight: "800",
  },

  '@media (max-width: 768px)': {
    navBrand: {
      fontSize: '18px',
      padding: '30px 0px',
      left: '20px',
    },

    toggleButton: {
      top: '10%',
      right: '5%',
      width: '40px',
      height: '35px',
      fontSize: '25px',
    },

    navItems: {
      flexDirection: 'column',
      textAlign: 'center',
    },

    navLink: {
      fontSize: '18px',
      padding: '8px 10px',
    },
  },

  

};

export default App3;

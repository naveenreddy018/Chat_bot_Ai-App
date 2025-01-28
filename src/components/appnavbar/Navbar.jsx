import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function AppNavbar({ toggleTheme, isDarkMode }) {
      const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();
  
    const hideNavbar = ['/login', '/register','/chat','/help'].includes(location.pathname);
  
    return (
      !hideNavbar && (
        <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} style={styles.navbar}>
  <Container>
    <Navbar.Brand as={Link} to="/" style={{ color: isDarkMode ? '#fff' : '#000' }}>
      Gemini AI
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Link
            to="/"
            style={{
              ...styles.navLink,
              ':hover': styles.navLinkHover, 
            }}
          >
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/help" style={styles.navLink}>
            Help
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/chat" style={styles.navLink}>
            Chat
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/profile" style={styles.navLink}>
            Profile
          </Link>
        </Nav.Item>
      </Nav>
      <Button
        variant={isDarkMode ? 'outline-light' : 'outline-dark'}
        onClick={toggleTheme}
        style={styles.toggleButton}
      >
        Toggle
      </Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
      )
    );
  }
  const styles = {
    navbar: {
      marginBottom: '20px',
      padding: '10px 20px',
      backgroundColor: '#000000', 
      color: 'white',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    },
    navLink: {
      color: '#ffffff', 
      textDecoration: 'none', 
      padding: '10px 15px',
      margin: '0 10px',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'color 0.3s', 
    },
    navLinkHover: {
      color: '#00A1E1', 
    },
    toggleButton: {
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #ccc',
      cursor: 'pointer',
      backgroundColor: 'transparent', 
      color: isDarkMode ? '#fff' : '#000', 
    },
  };
  
  
  export  default AppNavbar;
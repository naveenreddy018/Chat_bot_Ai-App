import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

function AppNavbar({ toggleTheme, isDarkMode }) {
    const [profile, setProfile] = useState(false);
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
          <Navbar bg={isDarkMode ? 'dark' : 'light'} variant={isDarkMode ? 'dark' : 'light'} style={styles.navbar}>
            <Container style={styles.Container}>
              <Navbar.Brand as={Link} className="gemini-name" style={styles.navBrand}>
                Gemini Ai
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" style={styles.hamburger}>
                <span className="custom-bar"></span>
                <span className="custom-bar"></span>
                <span className="custom-bar"></span>
              </Navbar.Toggle>
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
            </Container>
          </Navbar>
        )}
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
      backgroundColor: '#000',
      color: 'white',
    },
  
    Container: {
      padding: '0px',
    },
  
    navContainer: {
      padding: '20px',
    },
  
    navBrand: {
      fontSize: '24px',
      fontWeight: 'bold',
      padding: '60px 0px',
      position: 'relative',
      top: '20px',
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
      backgroundColor: 'red',
      fontFamily: 'Times New Roman, Times, serif',
      fontWeight: 800,
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
  
    '@media (max-width: 480px)': {
      toggleButton: {
        top: '5%',
        right: '5%',
        width: '40px',
        height: '35px',
        fontSize: '25px',
      },
  
      navLink: {
        fontSize: '16px',
      },
  
      navBrand: {
        fontSize: '16px',
        left: '15px',
      },
    },
  };
  
  export default AppNavbar;
  
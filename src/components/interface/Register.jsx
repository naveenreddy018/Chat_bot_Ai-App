import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const baseUrl = 'https://render-back-end-4.onrender.com';

  const validateInputs = () => {
    const newErrors = {};
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    if (!username.trim()) {
      newErrors.username = 'Username is required.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must include at least one uppercase letter and one special symbol.';
    }
    if (!otp) {
      newErrors.otp = 'OTP is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      const res = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log(data); 

  
      if (data.message === 'resgistered successfully') {
        alert('You have registered successfully!');
        navigate('/'); 
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('An error occurred while registering.');
    }
  };

  const handleOtpClick = async () => {
    if (!username.trim()) {
      setErrors({ username: 'Username is required to get OTP.' });
      return;
    }

    try {
      const res = await fetch(`${baseUrl}/getotp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });

      const data = await res.json();
      setOtp(data.otp);
      alert('OTP sent successfully.');
    } catch (error) {
      alert('An error occurred while sending OTP.');
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.container}>
      <div style={styles.registerSection}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input
            id="username"
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
          {errors.username && <span style={styles.error}>{errors.username}</span>}

          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          {errors.password && <span style={styles.error}>{errors.password}</span>}

          <button type="button" onClick={handleOtpClick} style={styles.otpBtn}>Get OTP</button>

          <input
            type="text"
            id="otp"
            value={otp}
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
            style={styles.input}
          />
          {errors.otp && <span style={styles.error}>{errors.otp}</span>}

          <button type="submit" style={styles.submitBtn}>Register</button>
        </form>

        <div style={styles.buttonsSection}>
         
          <button onClick={() => handleNavigate('/')} style={styles.loginBtn}>Login</button>
        </div>
      </div>
    </div>
  );
};



const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
  },
  registerSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '350px',
    padding: '30px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'red',
  },
  input: {
    padding: '12px',
    marginBottom: '15px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#333',
    color: '#fff',
  },
  otpBtn: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#FF5722',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  submitBtn: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#00A1E1',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
  buttonsSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px',
  },
  homeBtn: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#00A1E1',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  loginBtn: {
    padding: '12px 70px',
    fontSize: '16px',
    backgroundColor: '#FF5722',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Register;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Username = [];

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate('/profile'); 
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username === "" || password === "") {
            setError("Please enter both username and password.");
            return;
        }

        setError('');

        Username.push(username);

        try {
            const res = await fetch("https://render-back-end-4.onrender.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", JSON.stringify(data.token1));
                navigate('/profile');
            } else {
                setError(data.message || 'Login failed');
            }

        } catch (error) {
            setError("An error occurred while logging in.");
            console.error("Login error:", error);
        }
    };

    const handleRegisterClick = () => {
        navigate("/register");
    };

    const handleGuestLogin = () => {
        Username.push("guest");
        navigate('/auth');
    };

    return (
        <div style={styles.container}>
            <form id="login" onSubmit={handleSubmit} style={styles.form}>
                <label htmlFor="name" style={styles.label}>Username</label>
                <input 
                    id="name"
                    type="text"
                    value={username}
                    placeholder='ENTER USERNAME'
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
                <label htmlFor="pass" style={styles.label}>Password</label>
                <input 
                    id="pass"
                    type="password"
                    placeholder='ENTER PASSWORD'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <input type="submit" value="Login" style={styles.submitBtn} />
            </form>

            {error && <div style={{color : "red", fontSize : "20px"}}>{error}</div>}

            <div style={styles.buttonContainer}>
                <button onClick={handleRegisterClick} style={styles.button}>Register</button>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <p style={styles.pTag} > LOGIN AS GUEST: </p>
                <button onClick={handleGuestLogin} style={styles.guestButton}>Guest User</button>
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
        color: '#fff',
        padding: '20px',
        flexDirection: 'column', 
        backgroundImage: 'url(https://images.unsplash.com/photo-1636690424408-4330adc3e583?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your image URL
        backgroundSize: 'cover',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
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
    submitBtn: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#00A1E1',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '300px', 
        marginTop: '20px',
    },
    button: {
        padding: '12px ',
        textAlign: 'center',
        fontSize: '16px',
        backgroundColor: '#FF5722',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        width: '68%', 
    },
    pTag : {
        fontSize:"1.5rem",
        padding : "10px",
        color : "white"
    },
    guestButton : {
        backgroundColor : "#4CAF50",
        padding : "10px",
        color:'#FFFFFF',
        borderRadius : "5px"
    }
};

export default Login;
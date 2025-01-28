import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/interface/Login';
import Register from './components/interface/Register';
import App3 from './components/authenticate/res';
import Hello from './components/main/Hello';
import AboutGeminiAI from './components/interface/project';
import Help from './components/interface/Help';
import Settings from './components/interface/setting';
import Profile from './components/interface/Profile';



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/register" element={<Register />} />
 
        <Route path="/about" element={<AboutGeminiAI/>} />

        <Route path="/" element={<Login />} />
         <Route path="/chat" element={<div ><Hello /></div>} />
        <Route path="/auth" element={<div ><App3 /></div>} />
            <Route path="/Help" element={<Help />} />
            <Route path="/settings" element={<Settings /> }/>
            <Route path="/profile" element={<Profile/> }/>

      </Routes>
    </Router>
  );
}

export default App;

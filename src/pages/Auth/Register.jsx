import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './register.css';
import Users from './Users';

function Register() {
    const auth = getAuth();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeForm, setActiveForm] = useState('login');

    const handleTabClick = (formType) => {
        setActiveForm(formType);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;
          Users(fullName);
          console.log(fullName);
          navigate("/");
            
        } catch (error) {
            const errorMessage = error.message;
            window.alert(errorMessage);
        }
    };

    const handleFormLogin = (e) => {
        e.preventDefault();
        console.log(e);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert(errorMessage);
            });
    };

    return (
        <div className="reg_main">
          <div className={`veen ${activeForm}`}>
            <div className="login-btn splits" onClick={() => handleTabClick('login')}>
              <p>Already an user?</p>
              <button className={activeForm === 'login' ? 'active' : ''}>Login</button>
            </div>
            <div className="rgstr-btn splits" onClick={() => handleTabClick('register')}>
              <p>Don't have an account?</p>
              <button className={activeForm === 'register' ? 'active' : ''}>Register</button>
            </div>
            <div className={`wrapper ${activeForm === 'register' ? 'move' : ''}`}>
              <form id="login" tabIndex="500" style={{ display: activeForm === 'login' ? 'block' : 'none' }} onSubmit={handleFormLogin}>
                <h3 style={{ color: 'red', textTransform: 'uppercase', fontWeight: 'bold' }}>Login</h3>
                <div className="mail">
                  <TextField onChange={(e) => setEmail(e.target.value)} type="email" label="Email" />
                  <label style={{ marginTop: '20px', fontSize: '16px' }}>Email</label>
                </div>
                <div className="passwd">
                  <TextField onChange={(e) => setPassword(e.target.value)} type="password" label="Password" />
                  <label style={{ marginTop: '20px', fontSize: '16px' }}>Password</label>
                </div>
                <div className="submit">
                  <Button className="dark" type="submit">Login</Button>
                </div>
              </form>
              <form id="register" tabIndex="502" style={{ display: activeForm === 'register' ? 'block' : 'none' }} onSubmit={handleFormSubmit}>
                <h3 style={{ color: 'red', textTransform: 'uppercase', fontWeight: 'bold' }}>Register</h3>
                <div className="name">
                  <TextField value={fullName} onChange={(e) => setFullName(e.target.value)}  helperText = {fullName.length < 5 ? 'too short' : ''} type="text" label="fullname"/>
                  <label style={{ marginTop: '20px', fontSize: '16px' }}>Full Name</label>
                </div>
                <div className="mail">
                  <TextField value={email} onChange={(e) => setEmail(e.target.value)} type="email" label="Email" />
                  <label style={{ marginTop: '20px', fontSize: '16px' }}>Email</label>
                </div>
                {/* <div className="uid">
                  <TextField type="text" label=""/>
                  <label>User Name</label>
                </div> */}
                <div className="passwd">
                  <TextField value={password} onChange={(e) => setPassword(e.target.value)} type="password" label="Password" />
                  <label style={{ marginTop: '20px', fontSize: '16px' }}>Password</label>
                </div>
                <div className="submit">
                  <Button type="submit" className="dark">
                    Register
                    </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
  }
  
  export default Register;
/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import { Button, Drawer, Space } from 'antd';
import Select from "react-select";
import axios from "axios";
import pic from "../paperflite_logo.png";
 import image from "../Fishing-2.jpg";
import 'antd/dist/antd.css';
import "./Home.scss"


const Home = () => {

  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };
  const splitPassword = () => {
    setShowPassword(!showPassword);
  };


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email Id!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className='limiter'>
    <div  style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:"center" }} className="container wrapper">
      <Row> 
        <h1></h1> 
     </Row>
      <Row className='form' >
        <Row className='logo'> <img className="pic" src={pic} /></Row>
        <Row> <h1>Please Login To continue</h1></Row>
        <Row className='details' >
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
             <i className={`${showPassword ? 'fa fa-unlock-alt' : 'fa fa-lock'} unlock-signup`} onClick={splitPassword}></i>
          </div>
          <p>{formErrors.password}</p>
          <div className='forget-pass'>Forget Password?</div>
          <button className="fluid ui button blue" onClick={handleSubmit}>Continue</button>
        </Row>
        <Row>
          <div className='sign'>Don't have an account? <span className='signup'>Sign Up</span></div>
        </Row>
      </Row>
    </div>
    </div>
  );
};

export default Home;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Userform = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    dob: "",
    battingstyle:"",
    bowlingstyle:""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming formData is already defined and populated
    console.log(formData);

    // Redirect to the /Player endpoint
    navigate("/Player", { state: { formData } });
};

  const handleReset = () => {
    setFormData({
      name: '',
      role: '',
      dob: '',
      batingstyle: '',
      bowlingstyle: ''
    });
  };

  return (
    <div className="container">
      <h2>Player Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <select className="form-select" id="role" name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="Batsman">Batsman</option>
            <option value="Bowler">Bowler</option>
            <option value="All-rounder">All-rounder</option>
            <option value="Wicket-keeper">Wicket-keeper</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Batting style</label>
          <select className="form-select" id="battingstyle" name="battingstyle" value={formData.battingstyle} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="Right-handed">Right-handed</option>
            <option value="Left-handed">Left-handed</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Bowling style</label>
          <select className="form-select" id="bowlingstyle" name="bowlingstyle" value={formData.bowlingstyle} onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="Right-arm fast">Right-arm fast</option>
            <option value="Left-arm fast">Left-arm fast</option>
            <option value="Right-arm spin">Right-arm spin</option>
            <option value="Left-arm spin">Left-arm spin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        
        <button type="reset" className="btn btn-danger ml-5" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default Userform;
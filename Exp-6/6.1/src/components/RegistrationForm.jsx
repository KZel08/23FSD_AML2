import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    skills: [],
    address: '',
    state: ''
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle DOB day, month, year changes
    if (name === 'dobDay' || name === 'dobMonth' || name === 'dobYear') {
      const newDob = { ...dob, [name === 'dobDay' ? 'day' : name === 'dobMonth' ? 'month' : 'year']: value };
      setDob(newDob);
      
      // Clear error when user selects a date
      if (errors.dob) {
        setErrors({
          ...errors,
          dob: ''
        });
      }
      return;
    }

    if (type === 'checkbox') {
      if (name === 'skills') {
        const updatedSkills = checked
          ? [...formData.skills, value]
          : formData.skills.filter(skill => skill !== value);
        
        setFormData({
          ...formData,
          skills: updatedSkills
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // State for day, month, year selection
  const [dob, setDob] = useState({ day: '', month: '', year: '' });

  // Format date to dd-mm-yyyy
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // DOB validation
    if (!dob.day || !dob.month || !dob.year) {
      newErrors.dob = 'Date of birth is required';
    }

    // Gender validation
    if (!formData.gender) {
      newErrors.gender = 'Please select your gender';
    }

    // Skills validation
    if (formData.skills.length === 0) {
      newErrors.skills = 'Please select at least one skill';
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    // State validation
    if (!formData.state) {
      newErrors.state = 'Please select your state';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Show all details in alert message
      const formattedDob = `${dob.day}-${dob.month}-${dob.year}`;
      const alertMessage = `
Registration Details:
---------------------
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Date of Birth: ${formattedDob}
Gender: ${formData.gender}
Skills: ${formData.skills.join(', ')}
Address: ${formData.address}
State: ${formData.state}
      `.trim();
      
      alert(alertMessage);
      
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        skills: [],
        address: '',
        state: ''
      });
      setDob({ day: '', month: '', year: '' });
    }
  };

  // Handle cancel button
  const handleCancel = () => {
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      skills: [],
      address: '',
      state: ''
    });
    setDob({ day: '', month: '', year: '' });
    setErrors({});
  };

  return (
    <div className="form-container">
      <h2>User Registration Form</h2>
      <p className="form-subtitle">Fill in your details below</p>

      <form onSubmit={handleSubmit} className="registration-form">
        {/* First Name - Textarea */}
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <textarea
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : ''}
            placeholder="Enter first name"
            rows="1"
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        {/* Last Name - Textarea */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <textarea
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
            placeholder="Enter last name"
            rows="1"
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>

        {/* Date of Birth - Day, Month, Year Dropdowns (1990-2012) */}
        <div className="form-group">
          <label>Date of Birth *</label>
          <div className="dob-selector">
            <select
              name="dobDay"
              value={dob.day}
              onChange={handleChange}
              className={errors.dob ? 'error' : ''}
            >
              <option value="">Day</option>
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                <option key={day} value={String(day).padStart(2, '0')}>{day}</option>
              ))}
            </select>
            <select
              name="dobMonth"
              value={dob.month}
              onChange={handleChange}
              className={errors.dob ? 'error' : ''}
            >
              <option value="">Month</option>
              {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map((month, index) => (
                <option key={month} value={month}>
                  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][index]}
                </option>
              ))}
            </select>
            <select
              name="dobYear"
              value={dob.year}
              onChange={handleChange}
              className={errors.dob ? 'error' : ''}
            >
              <option value="">Year</option>
              {Array.from({ length: 23 }, (_, i) => 2012 - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          {errors.dob && <span className="error-message">{errors.dob}</span>}
        </div>

        {/* Gender - Radio Buttons */}
        <div className="form-group">
          <label>Gender *</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === 'Other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>

        {/* Skills - Checkboxes */}
        <div className="form-group">
          <label>Skills *</label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="skills"
                value="HTML"
                checked={formData.skills.includes('HTML')}
                onChange={handleChange}
              />
              HTML
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="skills"
                value="CSS"
                checked={formData.skills.includes('CSS')}
                onChange={handleChange}
              />
              CSS
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="skills"
                value="JavaScript"
                checked={formData.skills.includes('JavaScript')}
                onChange={handleChange}
              />
              JavaScript
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="skills"
                value="React"
                checked={formData.skills.includes('React')}
                onChange={handleChange}
              />
              React
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="skills"
                value="Node.js"
                checked={formData.skills.includes('Node.js')}
                onChange={handleChange}
              />
              Node.js
            </label>
          </div>
          {errors.skills && <span className="error-message">{errors.skills}</span>}
        </div>

        {/* Address - Textarea */}
        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? 'error' : ''}
            placeholder="Enter your address"
            rows="4"
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        {/* State - Dropdown */}
        <div className="form-group">
          <label htmlFor="state">State *</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={errors.state ? 'error' : ''}
          >
            <option value="">Select a state</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Delhi">Delhi</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="Lakshadweep">Lakshadweep</option>
          </select>
          {errors.state && <span className="error-message">{errors.state}</span>}
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="button-group">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

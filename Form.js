import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Form = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    countryCode: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) err[key] = "This field is required";
    });
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);

    if (Object.keys(err).length === 0) {
      navigate("/details", { state: form });
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/** FIRST NAME */}
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        {/** LAST NAME */}
        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        {/** USERNAME */}
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        {/** EMAIL */}
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/** PASSWORD */}
        <input
          name="password"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
        />
        <button
          type="button"
          className="show-btn"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        {errors.password && <p className="error">{errors.password}</p>}

        {/** PHONE */}
        <input
          name="countryCode"
          placeholder="Country Code"
          value={form.countryCode}
          onChange={handleChange}
        />
        {errors.countryCode && <p className="error">{errors.countryCode}</p>}

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        {/** COUNTRY */}
        <input
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
        />
        {errors.country && <p className="error">{errors.country}</p>}

        {/** CITY */}
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
        />
        {errors.city && <p className="error">{errors.city}</p>}

        {/** PAN */}
        <input
          name="pan"
          placeholder="PAN"
          value={form.pan}
          onChange={handleChange}
        />
        {errors.pan && <p className="error">{errors.pan}</p>}

        {/** AADHAAR */}
        <input
          name="aadhaar"
          placeholder="Aadhaar"
          value={form.aadhaar}
          onChange={handleChange}
        />
        {errors.aadhaar && <p className="error">{errors.aadhaar}</p>}

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

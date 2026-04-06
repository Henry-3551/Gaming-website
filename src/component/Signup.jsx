import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    displayName: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
       "https://xgbackend.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert("Account created successfully!");
      console.log(data);

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="position-relative min-vh-100 d-flex justify-content-center align-items-center px-3"
      style={{
        background: 'radial-gradient(circle at center, #000 10%, #1BBE1C 50%, #22251E 100%)',
        overflow: 'hidden',
      }}
    >

      <div
        className="position-absolute d-none d-md-block"
        style={{
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '400px',
          zIndex: 0,
        }}
      >
        <img
          src="/images/simonghost.png"
          alt="Ghost"
          className="img-fluid"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <div
        className="bg-black text-white p-4 rounded-4 shadow-lg text-center w-100"
        style={{ maxWidth: '460px', zIndex: 2 }}
      >

        <img className="mb-2" src="/images/wwlogo.png" alt="Logo" width="55" />
        <br />
        <img className="mb-4" src="/images/join.png" alt="Login Text" width="220" />

        <form onSubmit={handleSubmit} className="text-start">

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-control bg-dark text-white border-secondary"
              placeholder="Username"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Display Name</label>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="form-control bg-dark text-white border-secondary"
              placeholder="Display Name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control bg-dark text-white border-secondary"
              placeholder="Email"
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control bg-dark text-white border-secondary"
              placeholder="Password"
            />
          </div>

          <div className="text-end mb-3">
            <Link to="#" className="small text-light text-decoration-none">
              Forgot your password?
            </Link>
          </div>

          <p className='dx'>
            By signing up you agree to our Terms and Conditions.
          </p>

          <div className="text-center">
            <button type="submit" className="btn btn-light w-50">
              Sign up
            </button>
          </div>

          <p className="dx text-center mt-4 mb-0 small">
            Already have an XG Account?{" "}
            <Link to="/login" className="text-white text-decoration-underline fw-bold">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Signup;

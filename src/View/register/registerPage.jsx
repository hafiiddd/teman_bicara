import "../register/registerPage.css";
import logo from "../../Assets/Logu-green.png"; // Use import for static assets
// import { useUser } from '../../../src/context/globalUserContext.jsx';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axiosClient from '../../axiosClient.js';

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    const value = event.target.value;

    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        setErrorMessage("Password and Confirm Password do not match.");
        return;
      }
    try {
        await axiosClient.post('register', {
            email: email,
            password: password,
            phone_number: phoneNumber
        });
        setErrorMessage('');
        navigate('/login');
    } catch (error) {
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container-fluid min-vh-100 d-flex justify-content-center p-0">
        <div className="row w-100">
          <div className="col-xs-12 col-md-4 p-0 d-flex flex-column align-items-center justify-content-center logo-column">
            <img src={logo} alt="Logo" />
          </div>
          <div className="col-md-8 p-0 d-flex align-items-center justify-content-center content-column">
            <div className="row d-flex align-items-center justify-content-center w-50">
              <form onSubmit={handleRegister} method="post">
                <div className="text-center mb-5">
                  <p className="display-1 h1 fw-bolder">Sign Up</p>
                </div>
                <div className="input-group mb-3">
                  <input
                    id="email"
                    type="email"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Email address"
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    id="no_telp"
                    type="text"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Phone number"
                    onChange={handlePhoneNumber}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    id="pass"
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    id="rePass"
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Confirm password"
                    onChange={handleConfirmPassChange}
                    required
                  />
                </div>
                <div className="text-danger fw-bold">{errorMessage}</div>
                <div className="input-group my-3 d-flex justify-content-center mt-5">
                  <button className="btn btn-lg fw-bold" type="submit">
                    Daftar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;

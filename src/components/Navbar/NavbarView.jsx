import '../Navbar/navBar.css';
import logo from "../../assets/Logo-container.png";
import { NavLink} from 'react-router-dom';
import { useState } from 'react';

function NavBarView() {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg custom-collapse ${isOpen ? 'custom-navbar-open' : ''} `}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen(!isOpen)} // Toggle the state on button click
            data-bs-toggle="collapse"
            data-bs-target="#basic-navbar-nav"
            aria-controls="basic-navbar-nav"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand custom-margin-right" to="/">
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </NavLink>
          <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="basic-navbar-nav">
            <ul className="navbar-nav align-items-center text-center">
              <li className="nav-item">
                <NavLink className="nav-link text-white mx-3 fw-bold" to="/artikel">
                  Artikel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white mx-3 fw-bold" to="/quiz">
                  Quiz & Test
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white mx-3 fw-bold" to="/about">
                  Tentang
                </NavLink>
              </li>
            </ul>
            <NavLink className="btn btn-login mx-2" to="/login">
              Masuk
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarView;

import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Collapse } from "bootstrap";
import logo from "../assets/Logo.png";
import "../index.css";
import {
  PersonCircle,
  BoxArrowInRight,
  PersonPlusFill,
} from "react-bootstrap-icons";

export default function Navbar() {
  const collapseRef = useRef(null);
  const togglerRef = useRef(null);

  function closeMenu() {
    if (collapseRef.current) {
      const collapseInstance =
        Collapse.getInstance(collapseRef.current) ||
        new Collapse(collapseRef.current, { toggle: false });
      collapseInstance.hide();
    }
    if (togglerRef.current) {
      togglerRef.current.setAttribute("aria-expanded", "false");
    }
  }

  function navClass({ isActive }) {
    return "nav-link mx-2" + (isActive ? " nav-link-active" : "");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow p-2 navbar-enter">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="City Trans Fes" width="60" height="60" />
        </NavLink>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={togglerRef}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={collapseRef}
        >
          {/* Left side */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item nav-item-stagger" style={{ "--i": 1 }}>
              <NavLink to="/" className={navClass} onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li className="nav-item nav-item-stagger" style={{ "--i": 2 }}>
              <NavLink to="/Tickets" className={navClass} onClick={closeMenu}>
                Tickets
              </NavLink>
            </li>

            <li className="nav-item nav-item-stagger" style={{ "--i": 3 }}>
              <NavLink to="/News" className={navClass} onClick={closeMenu}>
                News
              </NavLink>
            </li>

            <li className="nav-item nav-item-stagger" style={{ "--i": 4 }}>
              <NavLink to="/Contact" className={navClass} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>

            {/* About (now normal link) */}
            <li className="nav-item nav-item-stagger" style={{ "--i": 5 }}>
              <NavLink to="/About" className={navClass} onClick={closeMenu}>
                About
              </NavLink>
            </li>
          </ul>

          {/* Right side */}
          <ul
            className="navbar-nav ms-auto align-items-lg-center nav-item-stagger"
            style={{ "--i": 6 }}
          >
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle mx-2 account-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                tabIndex="0"
              >
                <PersonCircle size={22} className="account-icon" />
                <span className="d-lg-none ms-2">Account</span>
              </span>

              <ul className="dropdown-menu dropdown-menu-end dropdown-animated">
                <li>
                  <NavLink
                    to="/Login"
                    className="dropdown-item d-flex align-items-center gap-2"
                    onClick={closeMenu}
                  >
                    <BoxArrowInRight className="text-primary" /> Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Register"
                    className="dropdown-item d-flex align-items-center gap-2"
                    onClick={closeMenu}
                  >
                    <PersonPlusFill className="text-success" /> Register
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Collapse } from "bootstrap";
import logo from "../assets/Logo.png";
import "../index.css";
import {
  BuildingsFill,
  BusFrontFill,
  TrainFreightFrontFill,
  PersonCircle,
  BoxArrowInRight,
  PersonPlusFill,
} from "react-bootstrap-icons";

export default function Navbar() {
  /* ref to the collapse div so we can close it on mobile after a click */
  const collapseRef = useRef(null);

  /* ref to the toggler button to sync aria-expanded */
  const togglerRef = useRef(null);

  /* close the mobile menu when a link is clicked */
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

  /* NavLink gives className as a function — we use it to add "active" */
  function navClass({ isActive }) {
    return "nav-link mx-2" + (isActive ? " nav-link-active" : "");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow p-2 navbar-enter">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="City Trans Fes" width="50" height="50" />
        </NavLink>

        {/* Mobile toggle button */}
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

        {/* Nav links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={collapseRef}
        >
          {/* Left side links */}
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

            {/* About dropdown — hover on desktop, click on mobile */}
            <li
              className="nav-item dropdown nav-item-stagger"
              style={{ "--i": 5 }}
            >
              <span
                className="nav-link dropdown-toggle mx-2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                tabIndex="0"
              >
                About
              </span>
              <ul className="dropdown-menu dropdown-animated">
                <li>
                  <NavLink
                    to="/About/Bus"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    <BusFrontFill className="me-2 text-primary" /> Bus
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/About/Tram"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    <TrainFreightFrontFill className="me-2 text-primary" /> Tram
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/About/TransportScolaire"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    <BuildingsFill className="me-2 text-primary" /> Transport
                    Scolaire
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right side — account dropdown */}
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
                {/* Icon + label on mobile, icon only on desktop */}
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

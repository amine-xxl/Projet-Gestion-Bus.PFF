import { useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../index.css";
import { BuildingsFill, BusFrontFill, TrainFreightFrontFill } from "react-bootstrap-icons";

export default function Navbar() {

  /* ref to the collapse div so we can close it on mobile after a click */
  const collapseRef = useRef(null);

  /* close the mobile menu when a link is clicked */
  function closeMenu() {
    if (collapseRef.current && collapseRef.current.classList.contains("show")) {
      collapseRef.current.classList.remove("show");
    }
  }

  /* NavLink gives className as a function — we use it to add "active" */
  function navClass({ isActive }) {
    return "nav-link mx-2" + (isActive ? " nav-link-active" : "");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm p-2">
      <div className="container-fluid">

        {/* Logo */}
        <NavLink to="/Home" className="navbar-brand">
          <img src={logo} alt="City Trans Fes" width="50" height="50" />
        </NavLink>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink to="/" className={navClass} onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Tickets" className={navClass} onClick={closeMenu}>
                Tickets
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/News" className={navClass} onClick={closeMenu}>
                News
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Contact" className={navClass} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>

            {/* About dropdown — hover on desktop, click on mobile (Bootstrap default) */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle mx-2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/About/Bus" className="dropdown-item" onClick={closeMenu}>
                    <BusFrontFill/> Bus
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/About/Tram" className="dropdown-item" onClick={closeMenu}>
                    <TrainFreightFrontFill/> Tram
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/About/TransportScolaire" className="dropdown-item" onClick={closeMenu}>
                    <BuildingsFill/> Transport Scolaire
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

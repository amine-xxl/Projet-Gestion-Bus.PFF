import logo from "../assets/Logo.png"
import "../index.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top blur blur-10 shadow p-2">
        <div className="container-fluid">
          <Link to={"/Home"} className="navbar-brand" ><img src={logo} alt="logo" width="50" height="50" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/Home"} className="nav-link mx-2" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/Tickets"} className="nav-link mx-2" >Tickets</Link>
              </li>
              <li className="nav-item">
                <Link to={"/News"} className="nav-link mx-2" >News</Link>
              </li>
              <li className="nav-item">
                <Link to={"/Contact"} className="nav-link mx-2" >Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to={"/About"} className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to={"/About/Bus"} className="dropdown-item" >Bus</Link></li>
                  <li><Link to={"/About/Tram"} className="dropdown-item" >Tram</Link></li>
                  <li><Link to={"/About/TransportScolaire"} className="dropdown-item" >Transport Scolaire</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
};
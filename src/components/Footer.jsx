import { Link } from "react-router-dom";
import {
    BusFrontFill, Discord, EnvelopeFill,
    Facebook, GeoAltFill, Instagram, Linkedin,
    TelephoneFill, TwitterX, Youtube
} from "react-bootstrap-icons";
import "../index.css";

/* Social links — replace href with your real URLs when ready */
const socialLinks = [
    { icon: <Facebook />,   href: "#", label: "Facebook"  },
    { icon: <Instagram />,  href: "#", label: "Instagram" },
    { icon: <Youtube />,    href: "#", label: "YouTube"   },
    { icon: <Linkedin />,   href: "#", label: "LinkedIn"  },
    { icon: <TwitterX />,   href: "#", label: "Twitter/X" },
    { icon: <Discord />,    href: "#", label: "Discord"   },
];

export default function Footer() {
    return (
        <footer className="footer-root bg-body-tertiary p-4 mt-3">
            <div className="container">
                <div className="row text-center text-md-start">

                    {/* ── Branding ── */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold mb-2">City Trans Fes</h5>
                        <p className="small text-secondary">
                            <BusFrontFill className="me-1" />
                            Le Futur du Transport Public à Fès
                        </p>
                    </div>

                    {/* ── Quick Links + About ── */}
                    <div className="col-md-4 mb-4">
                        <div className="row">

                            {/* Quick Links */}
                            <div className="col-6">
                                <h6 className="fw-bold mb-2">Quick Links</h6>
                                <ul className="list-unstyled mb-0">
                                    <li><Link to="/Home"    className="footer-link">Home</Link></li>
                                    <li><Link to="/Tickets" className="footer-link">Tickets</Link></li>
                                    <li><Link to="/News"    className="footer-link">News</Link></li>
                                    <li><Link to="/Contact" className="footer-link">Contact</Link></li>
                                </ul>
                            </div>

                            {/* About */}
                            <div className="col-6">
                                <h6 className="fw-bold mb-2">About</h6>
                                <ul className="list-unstyled mb-0">
                                    <li><Link to="/About/Bus"              className="footer-link">Bus</Link></li>
                                    <li><Link to="/About/Tram"             className="footer-link">Tram</Link></li>
                                    <li><Link to="/About/TransportScolaire" className="footer-link">Transport Scolaire</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* ── Contact ── */}
                    <div className="col-md-4 mb-4">
                        <h6 className="fw-bold mb-2">Contact</h6>
                        <p className="small mb-1">
                            <GeoAltFill className="me-1 text-primary" />
                            ISTA Hay Al Adarissa - Fès
                        </p>
                        <p className="small mb-1">
                            <TelephoneFill className="me-1 text-primary" />
                            +212 612 345 678
                        </p>
                        <p className="small mb-0">
                            <EnvelopeFill className="me-1 text-primary" />
                            <a href="mailto:contact@citytransfes.ma" className="footer-link">
                                contact@citytransfes.ma
                            </a>
                        </p>
                    </div>

                </div>

                <hr className="my-3" />

                {/* ── Bottom bar: copyright + social icons ── */}
                <div className="d-flex justify-content-between align-items-center flex-column flex-md-row gap-2">

                    <p className="mb-0 small text-secondary">
                        &copy; 2026 City Trans Fes. Projet Fin Formation.
                    </p>

                    {/* Social icons — uses social-link class now */}
                    <div className="d-flex gap-3">
                        {socialLinks.map(({ icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                className="social-link"
                                aria-label={label}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
}

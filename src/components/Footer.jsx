import React from 'react'
import { Link } from "react-router-dom";
import {
    BusFrontFill, Discord, EnvelopeFill,
    Facebook, GeoAltFill, Instagram, Linkedin,
    TelephoneFill, TwitterX, Youtube
} from "react-bootstrap-icons";
import "../index.css"

export default function Footer() {
    return (
        <div>
            <footer className="foter footer-expand-lg bg-body-tertiary p-4 mt-3">
                <div className="container">
                    <div className="row text-center text-md-start">
                        {/* Branding */}
                        <div className="col-md-4 mb-3">
                            <h5 className="fw-bold">City Trans Fes</h5>
                            <p className="small"> <BusFrontFill /> Le Futur de Transport Public à Fes </p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="row">
                                <div className="col-12 col-sm-6 mb-3 mb-sm-0">
                                    <h6 className="fw-bold">Quick Links</h6>
                                    <ul className="list-unstyled">
                                        <li><Link to={'/Home'} className="footer-link">Home</Link></li>
                                        <li><Link to={'/Tickets'} className="footer-link">Tickets</Link></li>
                                        <li><Link to={'/News'} className="footer-link">News</Link></li>
                                        <li><Link to={'/Contact'} className="footer-link">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <h6 className="fw-bold">About</h6>
                                    <ul className="list-unstyled">
                                        <li><Link to={'/About/Bus'} className="footer-link">Bus</Link></li>
                                        <li><Link to={'/About/Tram'} className="footer-link">Tram</Link></li>
                                        <li><Link to={'/About/TransportScolaire'} className="footer-link">Transport Scolaire</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Contact */}
                        <div className="col-md-4 mb-3">
                            <h6 className="fw-bold">Contact</h6>
                            <p className="small mb-1"> <GeoAltFill /> ISTA Hay Al Adarissa - Fes</p>
                            <p className="small mb-1"> <TelephoneFill /> +212 612 345 678</p>
                            <p className="small"><EnvelopeFill /> <a href="mailto:contact@citytransfes.ma"> contact@citytransfes.ma</a></p>
                        </div>
                    </div>
                    <hr className="my-3" />
                    <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
                        <p className="mb-0 small">&copy; 2026 City Trans Fes. Projet Fin Formation.</p>
                        <div className="social-icons mt-2 mt-md-0">
                            <Link to={''} className="footer-link me-2"><Facebook /></Link>
                            <Link to={''} className="footer-link me-2"><Instagram /></Link>
                            <Link to={''} className="footer-link me-2"><Youtube /></Link>
                            <Link to={''} className="footer-link me-2"><Linkedin /></Link>
                            <Link to={''} className="footer-link me-2"><TwitterX /></Link>
                            <Link to={''} className="footer-link me-2"><Discord /></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
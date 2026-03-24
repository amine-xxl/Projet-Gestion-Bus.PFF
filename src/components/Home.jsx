import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightCircleFill,
  BusFrontFill,
  GeoAltFill,
  ClockFill,
  ShieldFillCheck,
  PeopleFill,
  StarFill,
  StarHalf,
  ThermometerSnow,
  PersonWheelchair,
  Wifi,
  Leaf,
} from "react-bootstrap-icons";
import "../index.css"; /* home-specific styles are at the bottom of this file */

export default function Home() {

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        rel="stylesheet"
      />

      {/* ====================================================
          SECTION 1 — HERO
      ==================================================== */}
      <section className="home-hero d-flex align-items-center position-relative">

        {/* White glass wash — arabesque bg still visible behind */}
        <div className="home-hero-overlay" />

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">

            {/* Left: title + buttons */}
            <div className="col-lg-5">

              {/* Badge */}
              <span className="home-badge mb-3 d-inline-block">
                <BusFrontFill className="me-2" /> Transport Urbain - FES
              </span>

              {/* Title */}
              <h1 className="home-title mb-3">
                Voyagez <span className="text-primary">Mieux</span>,<br />
                Se Déplacer <span className="text-primary">Mieux</span>.<br />
                Connectez‑vous<br />à Fès.
              </h1>

              {/* Description */}
              <p className="text-secondary fs-6 lh-lg mb-4">
                City Trans Fes modernise le transport public — bus, tram
                et transport scolaire — pour une mobilité fluide, sûre
                et accessible à tous les habitants de Fès.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap gap-3">
                <Link to="/Tickets" className="btn-ctf-primary">
                  Acheter un Ticket <ArrowRightCircleFill />
                </Link>
                <Link to="/About" className="btn-ctf-ghost">
                  En Savoir Plus
                </Link>
              </div>

            </div>

            {/* Right: bus image */}
            <div className="col-lg-7">
              <div className="position-relative">

                {/* Main bus photo */}
                <img
                  src="busfes2.webp"
                  alt="Bus City Trans Fes"
                  className="w-100 rounded-4 d-block home-bus-img"
                />

                {/* "En Service" badge */}
                <div className="home-live-badge">
                  <span className="home-green-dot" />
                  En Service
                </div>

                {/* Departure pill */}
                <div className="home-departure-pill">
                  <div className="home-departure-icon">
                    <BusFrontFill />
                  </div>
                  <div>
                    <div className="fw-bold" style={{ fontSize: 13 }}>Ligne - 15 · Centre Ville</div>
                    <div className="text-secondary" style={{ fontSize: 11, marginTop: 2 }}>
                      Prochain départ : <b className="text-primary">3 min</b>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ====================================================
          SECTION 2 — STATS BAND
      ==================================================== */}
      <section className="home-stats py-5">
        <div className="container">
          <div className="row g-3 text-center text-white">

            <div className="col-6 col-md-3">
              <div className="fs-3 mb-2"><BusFrontFill /></div>
              <div className="home-stat-number">120+</div>
              <div className="home-stat-label">Autobus Actifs</div>
            </div>

            <div className="col-6 col-md-3">
              <div className="fs-3 mb-2"><GeoAltFill /></div>
              <div className="home-stat-number">65</div>
              <div className="home-stat-label">Lignes Couvertes</div>
            </div>

            <div className="col-6 col-md-3">
              <div className="fs-3 mb-2"><PeopleFill /></div>
              <div className="home-stat-number">50K+</div>
              <div className="home-stat-label">Passagers / Jour</div>
            </div>

            <div className="col-6 col-md-3">
              <div className="fs-3 mb-2"><ClockFill /></div>
              <div className="home-stat-number">18H</div>
              <div className="home-stat-label">Service Quotidien</div>
            </div>

          </div>
        </div>
      </section>


      {/* ====================================================
          SECTION 3 — ABOUT BUS
      ==================================================== */}
      <section className="home-section py-5">
        <div className="container py-4">
          <div className="row align-items-center g-5">

            {/* Left: text */}
            <div className="col-lg-5">
              <span className="home-section-label">Notre Flotte</span>
              <h2 className="home-section-title mt-2 mb-3">
                Des Bus Modernes<br />pour Fès
              </h2>
              <p className="text-secondary lh-lg mb-3">
                City Trans Fes opère une flotte de <strong>120+ autobus</strong> de
                dernière génération. Chaque véhicule est régulièrement inspecté
                pour garantir le confort et la sécurité de tous les passagers.
              </p>
              <p className="text-secondary lh-lg mb-4">
                Nos bus desservent <strong>35 lignes</strong>, de la médina historique
                aux nouveaux quartiers, avec des passages toutes les{" "}
                <strong>8 minutes</strong> aux heures de pointe.
              </p>

              {/* Feature tags */}
              <div className="d-flex flex-wrap gap-2">
                {[
                  [<ThermometerSnow />, "Climatisé"],
                  [<PersonWheelchair />, "PMR Accessible"],
                  [<Wifi />, "WiFi à Bord"],
                  [<Leaf />, "Éco-Friendly"],
                ].map(([icon, label], i) => (
                  <span key={i} className="home-tag">
                    {icon} {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: bus image + floating cards */}
            <div className="col-lg-7">
              <div className="position-relative">

                {/* Second bus photo */}
                <img
                  src="busfes1.webp"
                  alt="Bus City Trans Fes vue de côté"
                  className="w-100 rounded-4 d-block home-bus-img"
                />

                {/* Floating card — fleet count */}
                <div className="home-float-card-white">
                  <div className="text-primary fs-5 mb-1"><BusFrontFill /></div>
                  <div className="home-float-number text-primary">120+</div>
                  <div className="home-float-label">Autobus en flotte</div>
                </div>

                {/* Floating card — satisfaction */}
                <div className="home-float-card-blue">
                  <div className="text-warning fs-5 mb-1">
                    <StarFill /><StarFill /><StarFill /><StarFill /><StarHalf />
                  </div>
                  <div className="home-float-number">4.7/5</div>
                  <div className="home-float-label">Satisfaction des clients</div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ====================================================
          SECTION 4 — VIDEO + RATING
      ==================================================== */}
      <section className="home-section py-5">
        <div className="container pb-4">
          <div className="row align-items-stretch g-4">

            {/* Left: video */}
            <div className="col-lg-7">
              <div className="home-video-wrapper position-relative rounded-4 overflow-hidden">
                {/* Replace src with your video — or use a YouTube <iframe> */}
                <video
                  src="yutong.mp4"
                  autoPlay muted loop playsInline
                  className="w-100 h-100 object-fit-cover d-block"
                />
                {/* Video label */}
                <div className="home-video-label">
                  <span className="home-red-dot" />
                  Nos City Bus
                </div>
              </div>
            </div>

            {/* Right: rating panel */}
            <div className="col-lg-5 d-flex flex-column">
              <div className="home-rating-panel flex-fill p-4 rounded-4">

                {/* Global score */}
                <div className="d-flex align-items-center gap-4 pb-3 mb-3 border-bottom">

                  {/* Big score number */}
                  <div className="text-center" style={{ minWidth: 80 }}>
                    <div className="home-big-score text-primary">4.7</div>
                    <div className="text-warning" style={{ fontSize: 14 }}>
                      <StarFill /><StarFill /><StarFill /><StarFill /><StarHalf />
                    </div>
                    <div className="text-secondary" style={{ fontSize: 10, marginTop: 4 }}>sur 5 · 1 240 avis</div>
                  </div>

                  {/* Star bars */}
                  <div className="flex-fill">
                    {[
                      { star: 5, pct: 68 },
                      { star: 4, pct: 22 },
                      { star: 3, pct: 7  },
                      { star: 2, pct: 2  },
                      { star: 1, pct: 1  },
                    ].map(({ star, pct }) => (
                      <div key={star} className="d-flex align-items-center gap-2 mb-1">
                        <span className="text-secondary" style={{ fontSize: 10, width: 6 }}>{star}</span>
                        <StarFill size={9} className="text-warning" />
                        <div className="flex-fill rounded-pill bg-light overflow-hidden" style={{ height: 6 }}>
                          <div className="rounded-pill bg-warning" style={{ height: "100%", width: `${pct}%` }} />
                        </div>
                        <span className="text-secondary" style={{ fontSize: 10, width: 24, textAlign: "right" }}>{pct}%</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Reviews label */}
                <h6 className="fw-bold text-uppercase mb-3" style={{ fontSize: 12, letterSpacing: 1.5 }}>
                  Avis Récents
                </h6>

                {/* Review 1 */}
                <div className="home-review-card mb-2">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-bold" style={{ fontSize: 13, color: "#1e3a5f" }}>Mehdi S.</span>
                    <span className="text-warning" style={{ fontSize: 12 }}><StarFill /><StarFill /><StarFill /><StarFill /><StarFill /></span>
                  </div>
                  <p className="mb-0 text-secondary" style={{ fontSize: 12, lineHeight: 1.6 }}>
                    Service impeccable, bus toujours à l'heure. Je recommande vivement !
                  </p>
                </div>

                {/* Review 2 */}
                <div className="home-review-card mb-2">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-bold" style={{ fontSize: 13, color: "#1e3a5f" }}>Karim B.</span>
                    <span className="text-warning" style={{ fontSize: 12 }}><StarFill /><StarFill /><StarFill /><StarHalf /></span>
                  </div>
                  <p className="mb-0 text-secondary" style={{ fontSize: 12, lineHeight: 1.6 }}>
                    Très bon confort, chauffeurs courtois. Légère amélioration souhaitée aux heures de pointe.
                  </p>
                </div>

                {/* Review 3 */}
                <div className="home-review-card">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-bold" style={{ fontSize: 13, color: "#1e3a5f" }}>Nadia M.</span>
                    <span className="text-warning" style={{ fontSize: 12 }}><StarFill /><StarFill /><StarFill /><StarFill /><StarHalf /></span>
                  </div>
                  <p className="mb-0 text-secondary" style={{ fontSize: 12, lineHeight: 1.6 }}>
                    Le WiFi à bord est un vrai plus. Fès méritait ce niveau de transport !
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ====================================================
          SECTION 5 — FEATURES GRID
      ==================================================== */}
      <section className="home-section py-5">
        <div className="container py-3">

          {/* Header */}
          <div className="text-center mb-5">
            <span className="home-section-label">Pourquoi Nous Choisir</span>
            <h2 className="home-section-title mt-2">Un Service d'Excellence</h2>
          </div>

          <div className="row g-4">
            {[
              { icon: <ShieldFillCheck size={26} />, title: "Sécurité Garantie",  desc: "Véhicules inspectés régulièrement, chauffeurs formés aux normes les plus strictes." },
              { icon: <ClockFill size={26} />,        title: "Ponctualité",        desc: "Réseau optimisé, horaires respectés et suivi en temps réel de chaque ligne." },
              { icon: <GeoAltFill size={26} />,       title: "Couverture Totale",  desc: "Du centre-ville aux quartiers périphériques, toute Fès est connectée." },
              { icon: <StarFill size={26} />,         title: "Confort Moderne",    desc: "Bus climatisés, accessibles PMR, avec WiFi à bord sur les lignes principales." },
            ].map((card, i) => (
              <div key={i} className="col-sm-6 col-lg-3">
                <div
                  className={`home-feature-card h-100 ${hoveredCard === i ? "home-feature-card--hovered" : ""}`}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-primary fs-3 mb-3">{card.icon}</div>
                  <h4 className="fw-bold mb-2" style={{ fontSize: "0.98rem" }}>{card.title}</h4>
                  <p className="text-secondary mb-0" style={{ fontSize: "0.86rem", lineHeight: 1.7 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ====================================================
          SECTION 6 — CTA BANNER (Zellige style)

          Put your zellige photo at: public/zellige.jpg
          Change src="zellige.jpg" to your filename.
      ==================================================== */}
      <section className="home-cta position-relative text-center overflow-hidden">

        {/* Zellige background image — replace src with your photo */}
        <img
          src="zellige.jpg"
          alt=""
          className="home-cta-bg"
        />

        {/* Dark overlay on top of the image */}
        <div className="home-cta-overlay" />

        {/* Moorish arch — top */}
        <div className="home-arch home-arch--top" />

        {/* Moorish arch — bottom */}
        <div className="home-arch home-arch--bottom" />

        {/* Corner diamonds */}
        <div className="home-diamond home-diamond--tl" />
        <div className="home-diamond home-diamond--tr" />
        <div className="home-diamond home-diamond--bl" />
        <div className="home-diamond home-diamond--br" />

        {/* Text content */}
        <div className="container position-relative py-5" style={{ zIndex: 3 }}>

          <div className="home-cta-stars mb-3">✦ ✦ ✦</div>

          <span className="home-cta-subtitle d-inline-block mb-3">
            Bienvenue dans la Ville Millénaire
          </span>

          <h2 className="home-cta-title mb-3">
            Prêt à Voyager<br />
            <em className="home-cta-em">à travers Fès ?</em>
          </h2>

          <p className="home-cta-desc mx-auto mb-4">
            De la médina antique aux boulevards modernes, City Trans Fes
            vous transporte avec élégance et fiabilité.
          </p>

          {/* Gold divider */}
          <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
            <div className="home-divider-line" />
            <div className="home-divider-diamond" />
            <div className="home-divider-line" />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Link to="/Tickets" className="btn-cta-gold">
              Acheter un Ticket <ArrowRightCircleFill />
            </Link>
            <Link to="/Contact" className="btn-cta-ghost">
              Nous Contacter
            </Link>
          </div>

          <div className="home-cta-dots mt-4">◆ ◇ ◆</div>

        </div>
      </section>

    </div>
  );
}

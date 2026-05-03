import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  BusFrontFill,
  TrainFront,
  ArrowRightCircleFill,
  PeopleFill,
  ShieldFillCheck,
  LightningChargeFill,
  GeoAltFill,
  StarFill,
} from "react-bootstrap-icons";

/* ─────────────────────────────────────────
   Hook : scroll reveal (copié de News.jsx)
───────────────────────────────────────── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────
   Données — Services
───────────────────────────────────────── */
const services = [
  {
    id: "bus",
    icon: <BusFrontFill size={36} />,
    title: "Bus",
    subtitle: "Réseau urbain",
    description:
      "Un réseau de bus moderne couvrant l'ensemble de la ville de Fès, avec des horaires réguliers, des arrêts accessibles et des véhicules climatisés pour votre confort.",
    color: "#8DC63F",
    link: "/About/Bus",
    stats: [
      { label: "Lignes actives", value: "24" },
      { label: "Arrêts", value: "180+" },
      { label: "Voyageurs/jour", value: "50 000" },
    ],
    image: "bus1.jpg",
  },

  {
    id: "tram",
    icon: <TrainFront size={36} />,   // ✅ بدل TramFrontFill
    title: "Tram",
    subtitle: "Ligne rapide",
    description:
      "Le tramway de Fès relie les grands axes de la ville avec rapidité et ponctualité. Zéro émission, zéro embouteillage — le futur du déplacement urbain.",
    color: "#2563eb",
    link: "/About/Tram",
    stats: [
      { label: "Km de voie", value: "14" },
      { label: "Stations", value: "22" },
      { label: "Fréquence", value: "8 min" },
    ],
    image: "",
  },

  {
    id: "scolaire",
    icon: <BusFrontFill size={36} />,
    title: "Transport Scolaire",
    subtitle: "Sécurité avant tout",
    description:
      "Des navettes dédiées pour accompagner les élèves en toute sécurité de leur domicile à leur établissement scolaire.",
    color: "#f59e0b",
    link: "/About/TransportScolaire",
    stats: [
      { label: "Établissements", value: "38" },
      { label: "Élèves/jour", value: "6 500" },
      { label: "Chauffeurs formés", value: "120" },
    ],
    image: "",
  },
];

/* Valeurs de l'entreprise */
const values = [
  { icon: <ShieldFillCheck size={28} />, title: "Sécurité", desc: "Contrôles rigoureux, chauffeurs certifiés, maintenance régulière de chaque véhicule.", color: "#2563eb" },
  { icon: <LightningChargeFill size={28} />, title: "Ponctualité", desc: "Des horaires respectés grâce à un suivi GPS en temps réel sur toute la flotte.", color: "#8DC63F" },
  { icon: <PeopleFill size={28} />, title: "Accessibilité", desc: "Tarifs adaptés, arrêts PMR, et application mobile pour tous les profils d'usagers.", color: "#f59e0b" },
  { icon: <GeoAltFill size={28} />, title: "Couverture", desc: "Du centre historique à la périphérie, chaque quartier de Fès est desservi.", color: "#db2777" },
];

/* Chiffres clés globaux */
const keyNumbers = [
  { value: "1994", label: "Année de fondation" },
  { value: "56 000+", label: "Voyageurs quotidiens" },
  { value: "200+", label: "Véhicules en service" },
  { value: "30 ans", label: "D'expérience locale" },
];

/* ═══════════════════════════════════════
   COMPOSANT PRINCIPAL
═══════════════════════════════════════ */
export default function About() {
  const [heroRef, heroVisible]     = useScrollReveal(0.05);
  const [missionRef, missionVisible] = useScrollReveal(0.1);
  const [statsRef, statsVisible]   = useScrollReveal(0.1);
  const [servicesRef, servicesVisible] = useScrollReveal(0.05);
  const [valuesRef, valuesVisible] = useScrollReveal(0.1);
  const [ctaRef, ctaVisible]       = useScrollReveal(0.1);

  return (
    <>
      {/* ── CSS ── */}
      <style>{`
        /* ════════════ HÉRO ════════════ */
        .about-hero {
          min-height: 480px;
          background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0f2d1a 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 1rem 4rem;
        }
        .about-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 20% 60%, rgba(141,198,63,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 80% 30%, rgba(37,99,235,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        /* Grille déco */
        .about-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(141,198,63,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(141,198,63,0.07) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .about-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(141,198,63,0.15);
          border: 1px solid rgba(141,198,63,0.35);
          color: #8DC63F;
          border-radius: 999px;
          padding: 6px 18px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .about-hero-title {
          font-family: 'Syne', 'Segoe UI', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.25rem;
        }
        .about-hero-title span {
          color: #8DC63F;
        }
        .about-hero-sub {
          color: rgba(255,255,255,0.6);
          font-size: 1.05rem;
          max-width: 560px;
          line-height: 1.8;
          margin: 0 auto 2rem;
        }
        .about-scroll-indicator {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.25);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          animation: about-bounce 2s ease-in-out infinite;
        }
        @keyframes about-bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* ════════════ MISSION ════════════ */
        .about-mission {
          background: #fff;
          padding: 5rem 0;
        }
        .about-section-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #8DC63F;
          border-left: 3px solid #8DC63F;
          padding-left: 10px;
          margin-bottom: 1rem;
        }
        .about-section-title {
          font-family: 'Syne', 'Segoe UI', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin-bottom: 1.25rem;
        }
        .about-mission-text {
          color: #475569;
          font-size: 1.05rem;
          line-height: 1.9;
        }
        /* Timeline déco */
        .about-timeline {
          position: relative;
          padding-left: 2rem;
        }
        .about-timeline::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #8DC63F, #2563eb, transparent);
          border-radius: 2px;
        }
        .about-timeline-item {
          position: relative;
          padding: 0.75rem 0 0.75rem 1.5rem;
        }
        .about-timeline-item::before {
          content: "";
          position: absolute;
          left: -0.42rem;
          top: 1.2rem;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #8DC63F;
          border: 2px solid #fff;
          box-shadow: 0 0 0 3px rgba(141,198,63,0.25);
        }
        .about-timeline-year {
          font-size: 11px;
          font-weight: 700;
          color: #8DC63F;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .about-timeline-text {
          font-size: 14px;
          color: #475569;
          margin: 0;
        }

        /* ════════════ STATS ════════════ */
        .about-stats {
          background: linear-gradient(135deg, #0f172a 0%, #1a2f1a 100%);
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }
        .about-stats::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 80% at 50% 50%, rgba(141,198,63,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-stat-card {
          text-align: center;
          padding: 2rem 1rem;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform 0.3s, background 0.3s;
        }
        .about-stat-card:hover {
          transform: translateY(-4px);
          background: rgba(141,198,63,0.08);
          border-color: rgba(141,198,63,0.25);
        }
        .about-stat-value {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #8DC63F;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .about-stat-label {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* ════════════ SERVICES ════════════ */
        .about-services {
          background: #f8fafc;
          padding: 5rem 0;
        }
        .about-service-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          transition: transform 0.3s, box-shadow 0.3s;
          height: 100%;
        }
        .about-service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.10);
        }
        .about-service-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .about-service-img-placeholder {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          background: #f1f5f9;
          color: #cbd5e1;
        }
        .about-service-body {
          padding: 1.75rem;
        }
        .about-service-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .about-service-title {
          font-family: 'Syne', 'Segoe UI', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 4px;
        }
        .about-service-subtitle {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .about-service-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }
        .about-service-stats {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 12px;
          margin-bottom: 1.25rem;
        }
        .about-service-stat {
          flex: 1;
          text-align: center;
        }
        .about-service-stat-val {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem;
          font-weight: 800;
          color: #0f172a;
          display: block;
        }
        .about-service-stat-lbl {
          font-size: 10px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .about-service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: gap 0.2s;
        }
        .about-service-link:hover { gap: 12px; }

        /* ════════════ VALEURS ════════════ */
        .about-values {
          background: #fff;
          padding: 5rem 0;
        }
        .about-value-card {
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          height: 100%;
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .about-value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.07);
        }
        .about-value-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .about-value-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }
        .about-value-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.75;
          margin: 0;
        }

        /* ════════════ CTA ════════════ */
        .about-cta {
          background: linear-gradient(135deg, #0f172a, #1a3a1a);
          padding: 5rem 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .about-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 70% at 50% 50%, rgba(141,198,63,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-cta-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
        }
        .about-cta-sub {
          color: rgba(255,255,255,0.55);
          font-size: 1rem;
          margin-bottom: 2.5rem;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ════════════ BOUTON (cohérent avec Contact.jsx) ════════════ */
        .btn-ctf-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #8DC63F;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 28px;
          border-radius: 999px;
          text-decoration: none;
          border: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(141,198,63,0.35);
          cursor: pointer;
        }
        .btn-ctf-primary:hover {
          background: #76aa30;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(141,198,63,0.45);
        }
        .btn-ctf-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #8DC63F;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 28px;
          border-radius: 999px;
          text-decoration: none;
          border: 2px solid rgba(141,198,63,0.5);
          transition: all 0.2s;
        }
        .btn-ctf-outline:hover {
          background: rgba(141,198,63,0.1);
          border-color: #8DC63F;
          color: #8DC63F;
        }

        /* ════════════ SCROLL REVEAL ════════════ */
        .scroll-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .scroll-reveal.revealed { opacity: 1; transform: translateY(0); }
        .reveal-up { animation: rev-up 0.7s ease both; }
        @keyframes rev-up { from { opacity:0; transform:translateY(30px);} to { opacity:1; transform:translateY(0);} }
        .reveal-left { animation: rev-left 0.7s ease both; }
        @keyframes rev-left { from { opacity:0; transform:translateX(-30px);} to { opacity:1; transform:translateX(0);} }
        .feature-card-stagger { opacity: 0; animation: rev-up 0.6s ease both; animation-delay: calc(var(--fi, 0) * 0.1s); }
        .scroll-reveal.revealed .feature-card-stagger { opacity: 1; }
      `}</style>

      {/* ══════════════════════════════════════
          1. HÉRO
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="about-hero"
      >
        <div className="container position-relative text-center" style={{ zIndex: 1 }}>
          <div className={`reveal-up`} style={{ animationDelay: "0s" }}>
            <span className="about-hero-badge">
              <StarFill size={12} /> À propos de nous
            </span>
          </div>
          <h1 className="about-hero-title reveal-up" style={{ animationDelay: "0.1s" }}>
            City Trans Fes —<br />
            <span>Le Futur du Transport</span><br />
            Public à Fès
          </h1>
          <p className="about-hero-sub reveal-up" style={{ animationDelay: "0.2s" }}>
            Depuis plus de 30 ans, nous connectons les habitants de Fès
            avec des services de mobilité sûrs, modernes et accessibles à tous.
          </p>
          <div
            className="d-flex align-items-center justify-content-center gap-3 reveal-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/Contact" className="btn-ctf-primary">
              Nous contacter <ArrowRightCircleFill />
            </Link>
            <Link to="/Tickets" className="btn-ctf-outline">
              Voir les tickets
            </Link>
          </div>
        </div>
        <div className="about-scroll-indicator">
          <span>Découvrir</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. MISSION
      ══════════════════════════════════════ */}
      <section className="about-mission">
        <div className="container">
          <div
            ref={missionRef}
            className={`row g-5 align-items-center scroll-reveal ${missionVisible ? "revealed" : ""}`}
          >
            {/* Texte */}
            <div className="col-lg-6">
              <span className="about-section-label">Notre mission</span>
              <h2 className="about-section-title">
                Relier chaque quartier de Fès avec dignité et efficacité
              </h2>
              <p className="about-mission-text">
                City Trans Fes est née d'une conviction simple : chaque habitant
                mérite un transport public digne, ponctuel et abordable. Nous gérons
                le réseau de bus urbain, le tramway et le transport scolaire de la
                ville de Fès, avec une flotte modernisée et des équipes formées à
                l'excellence du service.
              </p>
            </div>

            {/* Timeline */}
            <div className="col-lg-6">
              <div className="about-timeline">
                {[
                  { year: "1994", text: "Création de City Trans Fes, première ligne de bus urbain." },
                  { year: "2010", text: "Inauguration du tramway — 14 km de voie ferrée urbaine." },
                  { year: "2018", text: "Lancement du transport scolaire sécurisé à grande échelle." },
                  { year: "2024", text: "Déploiement du suivi GPS en temps réel sur toute la flotte." },
                  { year: "2026", text: "Lancement de l'application mobile City Trans Fes." },
                ].map((item, i) => (
                  <div className="about-timeline-item" key={i}>
                    <div className="about-timeline-year">{item.year}</div>
                    <p className="about-timeline-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. CHIFFRES CLÉS
      ══════════════════════════════════════ */}
      <section className="about-stats">
        <div className="container">
          <div
            ref={statsRef}
            className={`row g-3 scroll-reveal ${statsVisible ? "revealed" : ""}`}
          >
            {keyNumbers.map((stat, i) => (
              <div
                key={i}
                className="col-6 col-md-3 feature-card-stagger"
                style={{ "--fi": i }}
              >
                <div className="about-stat-card">
                  <div className="about-stat-value">{stat.value}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. NOS SERVICES
      ══════════════════════════════════════ */}
      <section className="about-services">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-section-label">Nos services</span>
            <h2 className="about-section-title">
              Trois modes, une seule mission : vous déplacer
            </h2>
          </div>

          <div
            ref={servicesRef}
            className={`row g-4 scroll-reveal ${servicesVisible ? "revealed" : ""}`}
          >
            {services.map((s, i) => (
              <div
                key={s.id}
                className="col-md-4 feature-card-stagger"
                style={{ "--fi": i }}
              >
                <div className="about-service-card">
                  {/* 
                    ─────────────────────────────────────────────────────────
                    📸 ICI : l'image du service.
                    Si vous avez votre propre photo, importez-la en haut du
                    fichier et remplacez la valeur de `image` dans le tableau
                    `services` au début de ce fichier.
                    Ex: import busPic from "../assets/bus.jpg"
                    ─────────────────────────────────────────────────────────
                  */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className="about-service-img"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="about-service-img-placeholder" style={{ display: "none" }}>
                    <span style={{ color: s.color }}>{s.icon}</span>
                  </div>

                  <div className="about-service-body">
                    <div
                      className="about-service-icon"
                      style={{
                        background: `${s.color}18`,
                        color: s.color,
                      }}
                    >
                      {s.icon}
                    </div>

                    <div
                      className="about-service-subtitle"
                      style={{ color: s.color }}
                    >
                      {s.subtitle}
                    </div>
                    <h3 className="about-service-title">{s.title}</h3>
                    <p className="about-service-desc">{s.description}</p>

                    <div className="about-service-stats">
                      {s.stats.map((st, j) => (
                        <div className="about-service-stat" key={j}>
                          <span className="about-service-stat-val">{st.value}</span>
                          <span className="about-service-stat-lbl">{st.label}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={s.link}
                      className="about-service-link"
                      style={{ color: s.color }}
                    >
                      En savoir plus <ArrowRightCircleFill />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. NOS VALEURS
      ══════════════════════════════════════ */}
      <section className="about-values">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-section-label">Nos valeurs</span>
            <h2 className="about-section-title">
              Ce qui guide chacune de nos décisions
            </h2>
          </div>

          <div
            ref={valuesRef}
            className={`row g-4 scroll-reveal ${valuesVisible ? "revealed" : ""}`}
          >
            {values.map((v, i) => (
              <div
                key={i}
                className="col-sm-6 col-lg-3 feature-card-stagger"
                style={{ "--fi": i }}
              >
                <div
                  className="about-value-card"
                  style={{ borderTopColor: v.color, borderTopWidth: 3 }}
                >
                  <div
                    className="about-value-icon"
                    style={{ background: `${v.color}18`, color: v.color }}
                  >
                    {v.icon}
                  </div>
                  <h4 className="about-value-title">{v.title}</h4>
                  <p className="about-value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. CTA FINAL
      ══════════════════════════════════════ */}
      <section className="about-cta" ref={ctaRef}>
        <div className={`container position-relative scroll-reveal ${ctaVisible ? "revealed" : ""}`} style={{ zIndex: 1 }}>
          <BusFrontFill size={40} color="#8DC63F" className="mb-3 reveal-up" />
          <h2 className="about-cta-title reveal-up" style={{ animationDelay: "0.1s" }}>
            Prêt à voyager avec nous ?
          </h2>
          <p className="about-cta-sub reveal-up" style={{ animationDelay: "0.2s" }}>
            Achetez vos tickets en ligne, suivez les horaires en temps réel
            et restez informé des dernières actualités du réseau.
          </p>
          <div
            className="d-flex justify-content-center gap-3 flex-wrap reveal-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/Tickets" className="btn-ctf-primary">
              Acheter un ticket <ArrowRightCircleFill />
            </Link>
            <Link to="/News" className="btn-ctf-outline">
              Voir les actualités
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
import { useState, useEffect } from "react";
import axios from "axios";
 
export default function Login({ show, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
 
  // Smooth enter / exit animation
  useEffect(() => {
    if (show) {
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
    }
  }, [show]);
 
  if (!show) return null;
 
  const handleLogin = async () => {
    setError("");
 
    if (!email.trim() || !password) {
      setError("Amlaa email w kalimet lmror.");
      return;
    }
 
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
 
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
 
      onClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
      setError("Email aw kalimet lmror khati'in. 3awd jreb.");
    } finally {
      setLoading(false);
    }
  };
 
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
    if (e.key === "Escape") onClose();
  };
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@400;500&display=swap');
 
        .lp-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(10, 10, 15, 0);
          backdrop-filter: blur(0px);
          transition: background 0.3s ease, backdrop-filter 0.3s ease;
        }
        .lp-overlay.lp-visible {
          background: rgba(10, 10, 15, 0.55);
          backdrop-filter: blur(6px);
        }
 
        .lp-modal {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: #0f0f13;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 0;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px) scale(0.97);
          transition: opacity 0.35s ease, transform 0.35s ease;
          box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04);
        }
        .lp-overlay.lp-visible .lp-modal {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
 
        /* Top accent strip */
        .lp-accent {
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
        }
 
        .lp-body {
          padding: 2.5rem 2rem 2rem;
        }
 
        .lp-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.5);
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s, color 0.15s;
          line-height: 1;
        }
        .lp-close:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }
 
        .lp-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(37,99,235,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
 
        .lp-title {
          font-family: 'Syne', sans-serif;
          font-size: 26px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 6px;
          letter-spacing: -0.5px;
        }
 
        .lp-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          margin: 0 0 2rem;
        }
 
        .lp-label {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }
 
        .lp-field {
          margin-bottom: 1.25rem;
        }
 
        .lp-input {
          width: 100%;
          box-sizing: border-box;
          height: 46px;
          padding: 0 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .lp-input::placeholder { color: rgba(255,255,255,0.2); }
        .lp-input:focus {
          border-color: rgba(37,99,235,0.7);
          background: rgba(37,99,235,0.08);
          box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
        }
 
        .lp-forgot {
          text-align: right;
          margin-top: 6px;
        }
        .lp-forgot a {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(99,138,255,0.8);
          text-decoration: none;
          cursor: pointer;
        }
        .lp-forgot a:hover { color: #638aff; }
 
        .lp-error {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #f87171;
          background: rgba(248,113,113,0.08);
          border: 1px solid rgba(248,113,113,0.2);
          border-radius: 8px;
          padding: 10px 14px;
          margin-bottom: 1rem;
        }
 
        .lp-btn {
          width: 100%;
          height: 48px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.02em;
          transition: opacity 0.15s, transform 0.12s, box-shadow 0.15s;
          box-shadow: 0 4px 20px rgba(37,99,235,0.35);
          margin-top: 0.5rem;
        }
        .lp-btn:hover:not(:disabled) {
          opacity: 0.9;
          box-shadow: 0 6px 28px rgba(37,99,235,0.5);
        }
        .lp-btn:active:not(:disabled) { transform: scale(0.98); }
        .lp-btn:disabled { opacity: 0.55; cursor: not-allowed; }
 
        .lp-divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 1.5rem 0;
        }
        .lp-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.07);
        }
        .lp-divider-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.25);
        }
 
        .lp-register {
          text-align: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          padding-bottom: 0.25rem;
        }
        .lp-register a {
          color: #8DC63F;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
        }
        .lp-register a:hover { text-decoration: underline; }
 
        /* Spinner */
        .lp-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: lp-spin 0.6s linear infinite;
          display: inline-block;
          vertical-align: middle;
          margin-right: 8px;
        }
        @keyframes lp-spin { to { transform: rotate(360deg); } }
      `}</style>
 
      <div
        className={`lp-overlay ${visible ? "lp-visible" : ""}`}
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onKeyDown={handleKeyDown}
      >
        <div className="lp-modal" role="dialog" aria-modal="true" aria-label="Login">
          {/* Top gradient accent */}
          <div className="lp-accent" />
 
          <div className="lp-body">
            {/* Close button */}
            <button className="lp-close" onClick={onClose} aria-label="Close">✕</button>
 
            {/* Icon */}
            <div className="lp-icon-wrap">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#8DC63F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
 
            <h2 className="lp-title">Welcome</h2>
            <p className="lp-sub">log in to your account</p>
 
            {/* Email */}
            <div className="lp-field">
              <label className="lp-label">Email</label>
              <input
                className="lp-input"
                type="email"
                placeholder="exemple@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="email"
              />
            </div>
 
            {/* Password */}
            <div className="lp-field">
              <label className="lp-label">Mot de passe</label>
              <input
                className="lp-input"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="current-password"
              />
              <div className="lp-forgot">
                <a>Forget password?</a>
              </div>
            </div>
 
            {/* Error */}
            {error && <div className="lp-error">{error}</div>}
 
            {/* Submit */}
            <button
              className="lp-btn"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading && <span className="lp-spinner" />}
              {loading ? "Kaydkhel..." : "Se connecter"}
            </button>
 
            {/* Divider */}
            <div className="lp-divider">
              <div className="lp-divider-line" />
              <span className="lp-divider-text">aw</span>
              <div className="lp-divider-line" />
            </div>
 
            {/* Register */}
            <p className="lp-register">
              D'ont have account <a onClick={onClose}>Ssjel daba</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
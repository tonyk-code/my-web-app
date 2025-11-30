import "./LandingHeader.css";

export default function LandingHeader() {
  return (
    <>
      <header className="landing-header">
        <nav className="header-nav">
          <div className="nav-left">
            <button className="nav-btn">
              Features <span className="nav-btn-count">+3</span>
            </button>
            <button className="nav-btn">Pricing</button>
            <button className="nav-btn">Reports</button>
            <button className="nav-btn">
              Blog <span className="nav-btn-status">online</span>
            </button>
          </div>
          <div className="nav-right">
            <button className="login-btn">Login</button>
          </div>
        </nav>
      </header>
    </>
  );
}

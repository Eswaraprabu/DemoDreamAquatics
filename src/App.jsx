import './style.css';

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge pulse">Happy New Year</div>
        <h1 className="title">
          Welcome to <span className="highlight">Dream Aquatics</span>
        </h1>
        <p className="lede">We are opening shortly — Stay Tuned.</p>
        <div className="subtext">
          <h2>Exclusive and Exotics</h2>
          <p>
            Welcome to the wonderful world of fish keeping. Your trusted source for exotic aquarium
            fishes with expert advice and nationwide shipping.
          </p>
        </div>
        <div className="social">
          <span className="social-label">Follow us on Instagram</span>
          <a
            className="social-link"
            href="https://www.instagram.com/dreamaquatics23/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            instagram.com/dreamaquatics23
          </a>
        </div>
        <div className="glow-lines" aria-hidden />
      </section>
      <div className="reef-shadow" aria-hidden />
    </main>
  );
}

export default App;

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
        <div className="glow-lines" aria-hidden />
      </section>
      <div className="reef-shadow" aria-hidden />
    </main>
  );
}

export default App;

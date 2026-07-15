function HeroSection() {
  return (
    <main id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-label">Cloud-based study management</p>

        <h1>Plan your studies with confidence</h1>

        <p className="hero-description">
          Organize your courses, study sessions and academic tasks in one place.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#courses">
            View courses
          </a>

          <a className="secondary-button" href="#tasks">
            View tasks
          </a>
        </div>
      </div>
    </main>
  )
}

export default HeroSection
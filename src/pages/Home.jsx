import WeatherWidget from '../components/WeatherWidget';

export default function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mt-4 mb-4">
            <h1 className="display-4 mb-3">Manika Gupta</h1>
            <h3 className="text-muted mb-4">Technology Consultant</h3>

            <p className="lead">
              I am a third-year Bachelor of Applied Computer Science student at Dalhousie University,
              with a keen interest in technology. I possess a strong proficiency in Python, Java
              (including Object-Oriented Programming concepts), CSS, HTML, JavaScript, and database SQL.
              My academic journey spans both computer science and management, reflecting my commitment
              to a holistic approach. As a passionate problem solver and adaptable learner, I thrive
              in collaborative environments.
            </p>

            <a
              href="https://www.linkedin.com/in/manika1b0a6a247/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg mt-3"
            >
              Visit My LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-lg-6 col-md-8">
          <h4 className="mb-3 text-center">Current Weather</h4>
          <WeatherWidget />
        </div>
      </div>
    </div>
  );
}
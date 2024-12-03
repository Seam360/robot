import Navbar from "../../components/layout/navbar/Navbar";
import "./home.scss";
import video from "../../assets/video/-cbdd-4d17-b3eb-547afa894685.mp4";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="hero-container">
          <video autoPlay loop muted className="hero-video">
            <source src={video} type="video/mp4" />
          </video>

          {/* Clear glass overlays */}
          <Navbar />
          <div className="hero-content">
            <span className="small-title">
              [ 001// Redefining AI Solutions for Tomorrow’s Challenges. ]
            </span>
            <br />
            <h1>
              Automate Your Business With Custom{" "}
              <span style={{ color: "#12C6D8" }}>
                Artificial Intelligence Solutions
              </span>
            </h1>
            <p>
              From Advanced AI Solutions, to Predictive Data Analytics,
              insightful AI Consulting, AI Training, and even AI Compliance, our
              arsenal has all the AI tools you need to disrupt your industry.
            </p>

            <div className="button-container">
              <button className="corner-button">
                <span>Get Started</span>
              </button>
            </div>
          </div>

          <div className="glass-overlay top-glass"></div>
          <div className="glass-overlay bottom-glass"></div>
        </div>
      </header>
    </>
  );
};

export default Home;

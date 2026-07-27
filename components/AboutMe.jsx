import '../styles/AboutMe.css';
import Mahlettt from '../assets/Mahlettt.png';

export default function AboutMe() {
  return (
    <section id="about" className="about-section">
      <div className="profile-image">
        <img src={Mahlettt} alt="Mahlet Chanie" />
      </div>
      <div className="about-me">
        <h1 className="section-heading">ABOUT ME</h1>
        <p>
          I am a first-year pre-engineering student from Addis Ababa. I am also a beginner
          graphic designer and front-end developer. I love combining technical work with
          creative visual design to build high-quality and engaging digital projects. I enjoy
          learning new technologies and improving my skills in both design and development.
        </p>
      </div>
    </section>
  );
}
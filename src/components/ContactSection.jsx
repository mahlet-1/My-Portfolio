import '../styles/ContactSection.css';
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>WANT TO REACH ME OUT?</h2>
      <div className="contact-links">
        <div className="contact-item">
          <span>Email: </span>
          <a href="mailto:mahichanie126@gmail.com" target="_blank" rel="noopener noreferrer"> mahichanie126@gmail.com </a>
        </div>
        <div className="contact-item">
          <span>Github: </span>
          < a href="https://github.com/mahlet-1" target="_blank" rel="noopener noreferrer">mahlet-1</a>
        </div>
        <div className="contact-item">
          <span>Phone Number: </span>
          <p> +2519 9381 5135</p>
        </div>
        <div className="contact-item">
          <span>LinkedIn: </span>
          <a href="https://www.linkedin.com/in/mahlet-chanie-07075a23a" target="_blank" rel="noopener noreferrer">mahlet-chanie</a>
        </div>
      </div>
    </section>
  );
}
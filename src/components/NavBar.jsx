import '../styles/NavBar.css';
export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="Logo">
                <h4>MAHLET CHANIE</h4>
            </div>
            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}
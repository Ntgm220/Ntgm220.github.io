import { Container } from "react-bootstrap";
import MySiteLogo from "../assets/Images/MySiteLogo.png";
import "../StyleSheets/footer.css";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <Container>
                <div className="footer-shell">
                    <div className="footer-brand">
                        <a className="footer-logo-link" href="#home" aria-label="Volver al inicio">
                            <img className="footer-logo" src={MySiteLogo} alt="My Site Logo" />
                        </a>
                        <div className="footer-copy">
                            <p className="footer-name">Portfolio personal</p>
                            <span>{year} | Randy Made.</span>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

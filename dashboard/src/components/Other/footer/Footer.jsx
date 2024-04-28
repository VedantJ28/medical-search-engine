import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img src="logo.png" alt="Logo" className="footer-logo" />
                        <span className="brand-name">Medico</span>
                    </div>
                    <div className="social-links">
                        <a href="#" className="social-link"><FaFacebook /></a>
                        <a href="#" className="social-link"><FaTwitter /></a>
                        <a href="#" className="social-link"><FaInstagram /></a>
                    </div>
                </div>
                <div className="footer-info">
                    <span className="copyright">&copy; 2024 Medico. All rights reserved.</span>
                    <a href="#" className="terms">Terms and Conditions</a>
                </div>
            </footer>
        </>
    )
}

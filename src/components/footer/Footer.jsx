import "./footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__list"></span>

        <div className="footer__social">
          <a
            href="https://github.com/JW9012?tab=repositories"
            className="footer__social-link"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

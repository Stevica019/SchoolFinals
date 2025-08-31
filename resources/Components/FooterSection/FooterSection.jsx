import InputsField from "../InputField/Input";
import "./Footer.css";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TelegramIcon from "../../assets/icons/telegram.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";

export default function Footer() {
    return (
        <div className="footer-container">
            <h2>Register for our newsletter</h2>
            <div className="footer-input-div">
                <InputsField
                    type="email"
                    placeholder="Your Email"
                    name="user-email"
                />
                <button
                    id="footer-email-btn"
                    onClick={() => console.log("hello")}
                >
                    Register
                </button>
            </div>
            <div className="social-btn-array">
                <button className="social-btn">
                    <img
                        src={InstagramIcon}
                        alt="instagram"
                        className="social-icons"
                    />
                </button>
                <button className="social-btn">
                    <img
                        src={TelegramIcon}
                        alt="telegram"
                        className="social-icons"
                    />
                </button>
                <button className="social-btn">
                    <img
                        src={FacebookIcon}
                        alt="facebook"
                        className="social-icons"
                    />
                </button>
            </div>
        </div>
    );
}

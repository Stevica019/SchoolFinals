import "./Layout.css";
import Logo from "../../../assets/images/LogoSS.png";
import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div className="Auth-Container">
            <div className="Auth-Wrapper">
                <Link href={"/"} className="logo-link">
                    <img src={Logo} alt="Company logo" className="logo-image" />
                </Link>
                {children}
            </div>
        </div>
    );
}

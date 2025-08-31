import { Link } from "@inertiajs/react";
import "./Navigation.css";

export default function NavigationBar() {
    return (
        <div className="Navigation-bar">
            <div
                style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "gray",
                    marginRight: "10px",
                }}
            ></div>
            <div className="nav-links">
                <div className="nav-buttons">
                    <Link href="/">Home</Link>
                    <Link href="/cars">Cars</Link>
                    <Link href="/about">About</Link>
                </div>
                <div className="right-nav-buttons">
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </div>
            </div>
        </div>
    );
}

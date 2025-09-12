import { usePage, Link } from "@inertiajs/react";
import "./Navigation.css";

export default function NavigationBar({ BurgerClick }) {
    const { auth } = usePage().props;
    const isLoggedIn = auth?.user;
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
                    {isLoggedIn ? (
                        <>
                            <Link href="/cars/create" id="link-like">
                                New Car
                            </Link>
                            <Link href="/logout" method="post" id="link-like">
                                Logout
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/login">Login</Link>
                            <Link href="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
            <div className="burger-menu" onClick={BurgerClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

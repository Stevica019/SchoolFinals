import { usePage, Link, router } from "@inertiajs/react";
import "./Navigation.css";
import UserCard from "../UserCard/UserCard";
import SSLogo from "../../assets/images/SSlogo.png";

export default function NavigationBar({ BurgerClick }) {
    const { auth } = usePage().props;
    const isLoggedIn = auth?.user;
    const user = auth?.user;
    return (
        <div className="Navigation-bar">
            <img src={SSLogo} alt="Company log" />
            <div className="nav-links">
                <div className="nav-buttons">
                    <Link href="/">Home</Link>
                    <Link href="/cars">Cars</Link>
                    <Link href="/about">About</Link>
                </div>
                <div className="right-nav-buttons">
                    {isLoggedIn ? (
                        <UserCard
                            userData={user}
                            userClick={() => {
                                router.visit("/profile");
                            }}
                        />
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

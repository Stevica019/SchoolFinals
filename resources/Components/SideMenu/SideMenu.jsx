import { Link, usePage } from "@inertiajs/react";
import "./SideMenu.css";
import UserCard from "../UserCard/UserCard";

export default function SideMenu({ open, onClose, links = [] }) {
    const { user } = usePage().props.auth;
    return (
        <div className={`side-menu-container ${open ? "open" : ""}`}>
            {user && <UserCard userData={user} alternative />}
            {links
                .filter((link) => link?.pathname)
                .map((link, index) => (
                    <Link
                        key={`${link.pathname}-${index}`}
                        href={
                            link.pathname !== "Home"
                                ? `/${link.pathname.toLowerCase()}`
                                : "/"
                        }
                        onClick={onClose}
                        {...(link.method ? { method: link.method } : {})}
                    >
                        {link.pathname}
                    </Link>
                ))}
        </div>
    );
}

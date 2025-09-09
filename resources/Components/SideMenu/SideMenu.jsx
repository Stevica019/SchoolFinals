import { Link } from "@inertiajs/react";
import "./SideMenu.css";

export default function SideMenu({ open, onClose, links = [] }) {
    return (
        <div className={`side-menu-container ${open ? "open" : ""}`}>
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

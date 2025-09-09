import "./Layout.css";
import NavigationBar from "@/Components/NavigationBar/Navigation";
import SideMenu from "@/Components/SideMenu/SideMenu";
import Footer from "@/Components/FooterSection/FooterSection";
import { useState } from "react";
export default function Layout({ children }) {
    const [openSide, setOpenSide] = useState(false);

    const handleClickButton = () => {
        setOpenSide(!openSide);
    };

    const handleCloseMenu = () => {
        setOpenSide(false);
    };

    const links = [
        { pathname: "Home" },
        { pathname: "Cars" },
        { pathname: "About" },
        { pathname: "Newcars" },
        { pathname: "Logout", method: "post" },
    ];
    return (
        <div className="layout-div">
            <NavigationBar BurgerClick={handleClickButton} />
            <SideMenu open={openSide} onClose={handleCloseMenu} links={links} />
            <div className="project-body">{children}</div>
            <Footer />
        </div>
    );
}

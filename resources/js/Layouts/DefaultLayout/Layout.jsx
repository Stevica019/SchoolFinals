import "./Layout.css";
import NavigationBar from "../../../Components/NavigationBar/Navigation";
import Footer from "../../../Components/FooterSection/FooterSection";

export default function Layout({ children }) {
    return (
        <div className="layout-div">
            <NavigationBar />
            <div className="project-body">{children}</div>
            <Footer />
        </div>
    );
}

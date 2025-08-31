import Button from "../Button/Button";
import HeroImage from "../../assets/images/cars.jpg";
import { router } from "@inertiajs/react";
import "./HomeHero.css";

export default function HomeHero() {
    return (
        <div className="hero">
            <img className="hero-image" src={HeroImage} alt="Hero background" />
            <div className="hero-items">
                <h1>We keep you moving!</h1>
                <Button
                    text={"Join us!"}
                    onclick={() => router.visit("/register")}
                />
            </div>
        </div>
    );
}

import "./Home.css";
import HomeHero from "@/Components/HomeHero/HomeHero";
import Card from "@/Components/Card/Card";

export default function HomePage() {
    return (
        <>
            <HomeHero />
            <div className="item-container">
                <Card
                    image="https://picsum.photos/1600/900?random=1"
                    title={"Crazy hamburger"}
                    text={
                        "THis is some crazy text about the crazy hamburger... It is very big and juciy hamburger. It is horrible biiig"
                    }
                />
            </div>
            <h2 style={{ color: "white", textAlign: "center" }}>
                Our top picks
            </h2>
            <div className="item-container"></div>
        </>
    );
}

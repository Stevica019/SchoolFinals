import Card from "../../../../Components/Card/Card";
import HomeHero from "../../../../Components/HomeHero/HomeHero";
import "./Home.css";

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
                Most viewed cars
            </h2>
            <div className="item-container">
                {/* {mockCars.map((car) => (
                    <ItemCard key={car.id} data={car} />
                ))} */}
            </div>
        </>
    );
}

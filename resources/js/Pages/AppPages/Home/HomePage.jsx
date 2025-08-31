import Button from "../../../../Components/Button/Button";
import Card from "../../../../Components/Card/Card";
import HomeHero from "../../../../Components/HomeHero/HomeHero";
import ItemCard from "../../../../Components/ItemCard/ItemCard";
import "./Home.css";

const mockCars = [
    {
        id: 1,
        make: "Fiat",
        model: "Punto",
        yearOfMake: "2011",
        image: "https://picsum.photos/1600/900?random=1",
    },
    {
        id: 2,
        make: "Citroen",
        model: "Xara picaso",
        yearOfMake: "1996",
        image: "https://picsum.photos/1600/900?random=1",
    },
    {
        id: 3,
        make: "Citroen",
        model: "C3",
        yearOfMake: "2011",
        image: "https://picsum.photos/1600/900?random=1",
    },
    {
        id: 4,
        make: "Volkswagen",
        model: "Polo",
        yearOfMake: "2008",
        image: "https://picsum.photos/1600/900?random=1",
    },
    {
        id: 5,
        make: "Volkswagen",
        model: "Golf 8",
        yearOfMake: "2018",
        image: "https://picsum.photos/1600/900?random=1",
    },
    {
        id: 6,
        make: "Dacia",
        model: "Sandero",
        yearOfMake: "2024",
        image: "https://picsum.photos/1600/900?random=1",
    },
    {
        id: 7,
        make: "Dacia",
        model: "Duster",
        yearOfMake: "2024",
        image: "https://picsum.photos/1600/900?random=1",
    },
    {
        id: 8,
        make: "Aston Martin",
        model: "Db9",
        yearOfMake: "2024",
        image: "https://picsum.photos/1600/900?random=1",
    },
    {
        id: 9,
        make: "Masserati",
        model: "Ne znam",
        yearOfMake: "2024",
        image: "https://picsum.photos/1600/900?random=1",
    },
];

export default function HomePage() {
    return (
        <>
            <HomeHero />
            <form method="POST" action="/logout">
                <button type="submit">Logout</button>
            </form>
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
                {mockCars.map((car) => (
                    <ItemCard key={car.id} data={car} />
                ))}
            </div>
        </>
    );
}

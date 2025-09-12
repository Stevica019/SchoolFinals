import { usePage } from "@inertiajs/react";
import "./Cars.css";
import ImageCarousel from "@/Components/ImagesCarousel/ImageCarousel";

export default function Car() {
    const car = usePage().props.car;
    console.log(car);

    return (
        <div className="car-container">
            <ImageCarousel
                images={car.images}
                sx={{ width: "50%", height: "300px" }}
            />
            <div>
                <h1>{car.name}</h1>
                <h2>{car.model}</h2>
                <h2>{car.year}</h2>
            </div>
        </div>
    );
}

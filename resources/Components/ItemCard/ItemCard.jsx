import ImageCarousel from "../ImagesCarousel/ImageCarousel";
import "./ItemCard.css";
import { useForm } from "@inertiajs/react";

export default function ItemCard({ car }) {
    const { delete: destroy } = useForm();

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this car?")) {
            destroy(`/cars/${car.id}`, {
                onSuccess: () => {
                    console.log("Success");
                },
            });
        }
    };
    return (
        <div className="item-card">
            <ImageCarousel images={car.images} />
            <div className="item-text">
                <p className="car-name">
                    {car.name} {car.model}
                </p>
                <p>Year: {car.year}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}

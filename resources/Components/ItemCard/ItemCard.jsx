import ImageCarousel from "../ImagesCarousel/ImageCarousel";
import "./ItemCard.css";
import { Link } from "@inertiajs/react";

export default function ItemCard({ car }) {
    return (
        <div className="item-card">
            <ImageCarousel images={car.images} />
            <div className="item-text">
                <p className="car-name">
                    {car.name} {car.model}
                </p>
                <p>Year: {car.year}</p>
                <Link
                    href={`/cars/${car.id}`}
                    prefetch={false}
                    method="delete"
                    as="button"
                    onClick={(e) => {
                        if (
                            !confirm(
                                "Are you sure you want to delete this car?"
                            )
                        ) {
                            e.preventDefault();
                        }
                    }}
                >
                    Delete
                </Link>
            </div>
        </div>
    );
}

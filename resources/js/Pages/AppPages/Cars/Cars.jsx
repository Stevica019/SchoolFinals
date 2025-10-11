import ItemCard from "@/Components/ItemCard/ItemCard";
import { usePage } from "@inertiajs/react";
import "./Cars.css";

export default function Cars() {
    const { cars } = usePage().props;
    return (
        <div className="cars-container">
            {cars.map((car) => (
                <ItemCard key={car.id} car={car} />
            ))}
        </div>
    );
}

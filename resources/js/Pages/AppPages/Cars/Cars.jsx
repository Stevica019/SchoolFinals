import ItemCard from "@/Components/ItemCard/ItemCard";
import { usePage } from "@inertiajs/react";
import "./Cars.css";

export default function () {
    const { cars } = usePage().props;
    console.log(cars);

    return (
        <div className="cars-container">
            {cars.map((car) => (
                <ItemCard
                    key={car.id}
                    make={car.name}
                    model={car.model}
                    yearOfMake={car.year}
                    images={car.images}
                />
            ))}
        </div>
    );
}

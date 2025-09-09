import ImageCarousel from "../ImagesCarousel/ImageCarousel";
import "./ItemCard.css";

export default function ItemCard({ make, model, images = [], yearOfMake }) {
    return (
        <div className="item-card">
            <ImageCarousel images={images} />
            <div className="item-text">
                <p className="car-name">
                    {make} {model}
                </p>
                <p>Year: {yearOfMake}</p>
            </div>
        </div>
    );
}

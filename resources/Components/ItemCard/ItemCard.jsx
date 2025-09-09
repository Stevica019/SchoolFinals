import "./ItemCard.css";

export default function ItemCard({ make, model, images = [], yearOfMake }) {
    return (
        <div className="item-card">
            {images.length > 1 ? (
                images.map((image) => (
                    <img
                        key={image.id}
                        className="item-img"
                        src={image}
                        alt="Car image"
                    />
                ))
            ) : (
                <img className="item-img" src={images[0]} alt="Car image" />
            )}
            <div className="item-text">
                <p className="car-name">
                    {make} {model}
                </p>
                <p>Year: {yearOfMake}</p>
            </div>
        </div>
    );
}

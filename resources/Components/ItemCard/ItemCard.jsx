import "./ItemCard.css";

export default function ItemCard({ data }) {
    return (
        <div className="item-card">
            <img className="item-img" src={data.image} alt="Car image" />
            <div className="item-text">
                <p className="car-name">
                    {data.make} {data.model}
                </p>
                <p>Year: {data.yearOfMake}</p>
            </div>
        </div>
    );
}

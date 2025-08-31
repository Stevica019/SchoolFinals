import "./Card.css";

export default function Card({ title, text, image, onButtonClick = null }) {
    return (
        <div id="card-component">
            <img src={image} alt={`${title} image`} />
            <div className="card-information">
                <h3>{title}</h3>
                <p>{text}</p>
                <hr />
                <button onClick={onButtonClick}>Learn more</button>
            </div>
        </div>
    );
}

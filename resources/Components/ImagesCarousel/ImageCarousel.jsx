import { useEffect, useState } from "react";
import "./ImageCarousel.css";

export default function ImageCarousel({ images = [] }) {
    const [current, setCurrent] = useState(0);

    // Autoscroll every 5s
    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    return (
        <div className="carousel">
            <img
                className="item-img"
                src={images[current]}
                alt={`Car image ${current + 1}`}
            />

            {images.length > 1 && (
                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${
                                current === index ? "active" : ""
                            }`}
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

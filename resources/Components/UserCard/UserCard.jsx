import "./UserCard.css";

export default function UserCard({ userData, userClick }) {
    return (
        <div className="user-card" onClick={userClick}>
            <img
                src={userData.image}
                alt={userData.name}
                className="user-image"
            />
            <p>{userData.name}</p>
        </div>
    );
}

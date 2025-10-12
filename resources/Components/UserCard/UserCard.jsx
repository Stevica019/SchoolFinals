import "./UserCard.css";

export default function UserCard({ userData, userClick, alternative = false }) {
    return (
        <>
            {alternative ? (
                <div className="alt-user-card" onClick={userClick}>
                    <img
                        src={
                            userData?.image ||
                            "https://picsum.photos/id/237/200/300"
                        }
                        alt={userData?.name}
                        className="alt-image"
                    />
                    <p>{userData?.name}</p>
                </div>
            ) : (
                <div className="user-card" onClick={userClick}>
                    <img
                        src={
                            userData?.image ||
                            "https://picsum.photos/id/237/200/300"
                        }
                        alt={userData?.name}
                        className="user-image"
                    />
                    <p>{userData?.name}</p>
                </div>
            )}
        </>
    );
}

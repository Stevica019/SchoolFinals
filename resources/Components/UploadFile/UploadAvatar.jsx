import Avatar from "../../assets/icons/user-avatar.svg";
import "./UploadFile.css";
import Button from "../Button/Button";

export default function UploadAvatar({ onContainerClick, imagePreview }) {
    return (
        <div className="user-avatar-upload" onClick={onContainerClick}>
            <img src={imagePreview || Avatar} alt="User image" />
            <div>select a file</div>
        </div>
    );
}

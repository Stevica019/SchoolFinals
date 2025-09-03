import UploadFile from "../../assets/icons/upload-file.svg";
import "./UploadFile.css";

export default function UploadFiles({ onUploadClick }) {
    return (
        <div className="upload-file-container" onClick={onUploadClick}>
            <img src={UploadFile} alt="Upload files" />
            <p>upload your files</p>
            <button>select a file</button>
        </div>
    );
}

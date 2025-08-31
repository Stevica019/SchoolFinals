import "./Button.css";

export default function Button({
    text,
    type = "",
    onclick,
    customStyles = {},
    disabled = false,
}) {
    return (
        <button
            type={type}
            onClick={onclick}
            className="app-button"
            style={{ ...customStyles }}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

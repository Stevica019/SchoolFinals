import "./Input.css";

export default function InputsField({
    label,
    type,
    placeholder,
    name = null,
    onChange,
    value,
}) {
    return (
        <div className="input-container">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

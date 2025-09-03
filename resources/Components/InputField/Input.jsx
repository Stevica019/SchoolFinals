import "./Input.css";

export default function InputsField({
    label,
    ref = null,
    type,
    placeholder,
    name = null,
    onChange,
    value,
    inputStyles = {},
}) {
    return (
        <div className="input-container">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                ref={ref}
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                onChange={onChange}
                value={value}
                style={{ ...inputStyles }}
            />
        </div>
    );
}

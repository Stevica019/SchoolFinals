import { Link } from "@inertiajs/react";
import "./Auth.css";
import InputsField from "../../../Components/InputField/Input";
import Layout from "../../Layouts/AuthLayout/Layout";
import { useRef, useState } from "react";
import Button from "../../../Components/Button/Button";
import { useForm } from "@inertiajs/react";
import UploadAvatar from "@/Components/UploadFile/UploadAvatar";

const Register = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const uploadFileRef = useRef(null);
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        image: null,
    });

    const RegisterSubmit = (e) => {
        e.preventDefault();
        post("/register");
    };

    const handleUploadFile = (e) => {
        const file = e.target.files[0];
        setImagePreview(URL.createObjectURL(file));
        setData("image", file);
    };
    return (
        <form className="form-fields" onSubmit={RegisterSubmit}>
            <UploadAvatar
                imagePreview={imagePreview}
                onContainerClick={() => uploadFileRef.current.click()}
            />
            <InputsField
                label="Email"
                placeholder="Your email..."
                type="email"
                name="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
            />
            <InputsField
                label="Fullname"
                placeholder="Your name..."
                type="text"
                name="name"
                onChange={(e) => setData("name", e.target.value)}
            />
            <InputsField
                label="Password"
                placeholder="Some crazy password..."
                type="password"
                name="password"
                onChange={(e) => setData("password", e.target.value)}
            />
            <InputsField
                label="Confirm password"
                placeholder="Some crazy password..."
                type="password"
                name="password_confirmation"
                onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                }
            />

            <Button
                text={"Register"}
                type="submit"
                disabled={processing}
                customStyles={{
                    width: "25%",
                    fontSize: "16px",
                    fontWeight: "bold",
                }}
            />
            <p className="auth-text">
                Already have an account? <Link href={"/login"}>Login</Link>
            </p>
            <input
                type="file"
                style={{ display: "none" }}
                ref={uploadFileRef}
                onChange={handleUploadFile}
            />
            {errors.name && <div>{errors.name}</div>}
            {errors.email && <div>{errors.email}</div>}
            {errors.password && <div>{errors.password}</div>}
        </form>
    );
};

Register.layout = (page) => <Layout children={page} />;

export default Register;

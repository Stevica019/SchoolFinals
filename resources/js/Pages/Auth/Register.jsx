import { Link } from "@inertiajs/react";
import "./Auth.css";
import InputsField from "../../../Components/InputField/Input";
import Layout from "../../Layouts/AuthLayout/Layout";
import { useState } from "react";
import Button from "../../../Components/Button/Button";
import { useForm } from "@inertiajs/react";

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const RegisterSubmit = (e) => {
        e.preventDefault();
        post("/register");
    };

    return (
        <form className="form-fields" onSubmit={RegisterSubmit}>
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
            {errors.name && <div>{errors.name}</div>}
            {errors.email && <div>{errors.email}</div>}
            {errors.password && <div>{errors.password}</div>}
        </form>
    );
};

Register.layout = (page) => <Layout children={page} />;

export default Register;

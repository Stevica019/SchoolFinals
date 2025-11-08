import { Link } from "@inertiajs/react";
import InputsField from "../../../Components/InputField/Input";
import Layout from "../../Layouts/AuthLayout/Layout";
import "./Auth.css";
import Button from "../../../Components/Button/Button";
import { useForm } from "@inertiajs/react";

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        password: "",
    });

    const submitLogin = (e) => {
        e.preventDefault();
        post("/login");
    };

    return (
        <form className="form-fields" onSubmit={submitLogin}>
            <InputsField
                label="Username"
                type="text"
                name="name"
                onChange={(e) => setData("name", e.target.value)}
            />
            <InputsField
                label="Password"
                type="password"
                name="password"
                onChange={(e) => setData("password", e.target.value)}
            />
            <Button
                text={"Login"}
                type="submit"
                disabled={processing}
                customStyles={{
                    width: "25%",
                    fontSize: "16px",
                    fontWeight: "bold",
                }}
            />
            <div className="links">
                <p className="auth-text">
                    Forgot password?{" "}
                    <Link href={"/forgot-password"}>Recover it</Link>
                </p>
                <p className="auth-text">
                    Dont have an account?{" "}
                    <Link href={"/register"}>Register</Link>
                </p>
            </div>
            {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            {errors.password && (
                <div style={{ color: "red" }}>{errors.password}</div>
            )}
        </form>
    );
};
Login.layout = (page) => <Layout children={page} />;

export default Login;

import { useState } from "react";
import Button from "../../../Components/Button/Button";
import InputsField from "../../../Components/InputField/Input";
import Layout from "../../Layouts/AuthLayout/Layout";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleFormChange = (e) => {
        setEmail(e.target.value);
    };
    console.log(email);

    return (
        <>
            <InputsField
                label="Your email"
                placeholder="placeholder@gmail.com"
                name="email"
                type="email"
                onChange={handleFormChange}
            />
            <Button
                text="Reset password"
                type="submit"
                customStyles={{ marginTop: 10 }}
            />
        </>
    );
};

ForgotPassword.layout = (page) => <Layout children={page} />;

export default ForgotPassword;

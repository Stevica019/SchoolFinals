import { useRef } from "react";
import InputsField from "../../../../Components/InputField/Input";
import UploadFiles from "../../../../Components/UploadFile/UploadFile";
import "./NewCar.css";

export default function NewCarPage() {
    const fileSelectRef = useRef(null);

    return (
        <form className="new-car-form">
            <InputsField label={"Car name"} placeholder={"e.g. Citroen"} />
            <InputsField label={"Car model"} placeholder={"e.g. Saxo"} />
            <InputsField
                label={"Car year"}
                type="number"
                placeholder={"e.g. 2002"}
            />
            <InputsField
                ref={fileSelectRef}
                type="file"
                inputStyles={{ display: "none" }}
            />
            <UploadFiles />
        </form>
    );
}

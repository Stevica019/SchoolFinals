import { useRef, useState } from "react";
import InputsField from "@/Components/InputField/Input";
import UploadFiles from "@/Components/UploadFile/UploadFile";
import "./NewCar.css";
import { useForm } from "@inertiajs/react";
import Button from "@/Components/Button/Button";

export default function NewCarPage() {
    const fileSelectRef = useRef(null);
    const [imagePreviews, setImagePreviews] = useState([]);
    const { data, setData, post, processing, errors, transform, reset } =
        useForm({
            carName: "",
            carModel: "",
            carYear: "",
            carImages: [],
        });

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setData("carImages", files);

        const previews = files.map((file) => URL.createObjectURL(file));
        setImagePreviews(previews);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        transform((data) => ({
            name: data.carName,
            model: data.carModel,
            year: data.carYear,
            images: data.carImages,
        }));

        post("/newcar", {
            forceFormData: true,
            onSuccess: () => {
                reset();
                setImagePreviews([]);
            },
        });
    };
    console.log(data);

    return (
        <form className="new-car-form" onSubmit={handleSubmit}>
            <InputsField
                label={"Car name"}
                placeholder={"e.g. Citroen"}
                value={data.carName}
                onChange={(e) => setData("carName", e.target.value)}
            />
            <InputsField
                label={"Car model"}
                placeholder={"e.g. Saxo"}
                value={data.carModel}
                onChange={(e) => setData("carModel", e.target.value)}
            />
            <InputsField
                label={"Car year"}
                type="number"
                placeholder={"e.g. 2002"}
                value={data.carYear}
                onChange={(e) => setData("carYear", e.target.value)}
            />

            <input
                ref={fileSelectRef}
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: 5,
                }}
            >
                <UploadFiles
                    files={data.carImages}
                    onUploadClick={() => fileSelectRef.current.click()}
                />
                <div className="image-preview-container">
                    {imagePreviews.map((image, index) => (
                        <img
                            key={`image ${index}`}
                            src={image}
                            alt={`${image} preview`}
                            className="image-preview"
                        />
                    ))}
                </div>
            </div>
            <Button
                type="submit"
                disabled={processing}
                text={"Save Car"}
                customStyles={{ width: "50%" }}
            />
        </form>
    );
}

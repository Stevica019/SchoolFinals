import { Box, Typography } from "@mui/material";
import Button from "../Button/Button";

export default function DescriptionWithAction({
    text,
    buttonText,
    buttonAction,
}) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                m: "auto",
                gap: 2,
            }}
        >
            <Typography>{text}</Typography>
            <Button
                text={buttonText}
                onclick={buttonAction}
                customStyles={{ backgroundColor: "rgba(67, 180, 1, 1)" }}
            />
        </Box>
    );
}

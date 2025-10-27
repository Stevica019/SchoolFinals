import Button from "@/Components/Button/Button";
import { usePage, router } from "@inertiajs/react";
import { Avatar, Box, Card, Typography, Stack } from "@mui/material";

export default function ProfilePage() {
    const { auth } = usePage().props;
    const user = auth.user;

    const UserInfo = [
        { field: "Username", data: user?.name || "Guest" },
        { field: "Email", data: user?.email || "placeholder@email.com" },
        {
            field: "Phone Number",
            data: user?.phoneNumber || "You didnt add your phone number",
        },
        {
            field: "License",
            data: user?.license || "You didnt add your license info",
        },
    ];
    const mockBookings = [
        { car: "Citroen", date: "01.02.2026" },
        { car: "Toyota", date: "01.02.2025" },
        { car: "KIA", date: "01.02.2024" },
        { car: "BMW", date: "04.05.2025" },
    ];

    if (!auth || !user) {
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
                <Typography>You must be logged in to view this page</Typography>
                <Button
                    text={"Login"}
                    onclick={() => router.visit("/login")}
                    customStyles={{ backgroundColor: "rgba(67, 180, 1, 1)" }}
                />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "sm",
                gap: 1,
                p: 2,
            }}
        >
            <Card
                sx={{
                    ...CARD_STYLES,
                }}
            >
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                    User Info
                </Typography>
                <Avatar src={user?.image} alt={user?.name || "Guest"} />
                {UserInfo.map((info, index) => (
                    <Typography key={index}>
                        {info.field}: {info.data}
                    </Typography>
                ))}
                <Button text={"Edit profile"} />
            </Card>
            <Card sx={{ ...CARD_STYLES }}>
                <Typography variant="h5" fontWeight="bold" textAlign="center">
                    My bookings & Account Settings
                </Typography>
                {mockBookings.map((data, index) => (
                    <Stack
                        key={index}
                        direction="row"
                        justifyContent="space-between"
                    >
                        <Typography>Car: {data.car}</Typography>
                        <Typography>{data.date}</Typography>
                    </Stack>
                ))}
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Button
                        customStyles={{
                            border: "1px solid green",
                            backgroundColor: "unset",
                            color: "green",
                        }}
                        text={"Change Password"}
                    />
                    <Button
                        customStyles={{
                            border: "1px solid red",
                            backgroundColor: "unset",
                            color: "red",
                        }}
                        text={"Delete Account"}
                    />
                </Stack>
            </Card>
        </Box>
    );
}

const CARD_STYLES = {
    width: "100%",
    backgroundColor: "rgba(100, 100, 100, 0.5)",
    p: 2,
    display: "flex",
    flexDirection: "column",
    gap: 1,
    color: "white",
    borderRadius: 2,
};

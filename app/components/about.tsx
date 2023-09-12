import { Typography, Paper } from "@mui/material";
import { theme } from "./theme";

export default function About() {
    const primary_color = theme.palette.primary;
    return (
    <Paper
        sx={{ backgroundColor: primary_color.light, padding: "12px" }}
        elevation={10}>
        <Typography variant="h4" margin={2}>
        About the Project
        </Typography>
        <Typography variant="body1" sx={{ margin: "10px" }}>
        This is an application that leverages machine learning methods in
        order to predict handwritten text. It is build using Next.js,
        TypeScript, and Material UI on the frontend.
        </Typography>
    </Paper>);
}
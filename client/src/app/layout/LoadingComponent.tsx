import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface LoadingComponentProps {
    message?: string;
}

function LoadingComponent({ message = "Loading..." }: LoadingComponentProps) {
    return (
        <Backdrop open={true} invisible={true}>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress size={100} color="secondary" />
            </Box>
            <Typography variant="h4" sx={{ justifyContent: "center", position: "fixed", top: "60%" }}>{message}</Typography>
        </Backdrop>
    )
}
export default LoadingComponent
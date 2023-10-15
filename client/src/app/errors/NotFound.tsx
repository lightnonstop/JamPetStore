import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <Container component={Paper} sx={{ height: 400 }}>
            <Typography gutterBottom variant="h3">
                Page Not Found
            </Typography>
            <Divider />
            <Button fullWidth component={Link} to="/catalog">Go back to store</Button>
        </Container>
    )
}
export default NotFound
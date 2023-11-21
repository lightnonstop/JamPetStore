
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { agent } from "../../api/agent";

function Login() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = (event: any) => {
        event.preventDefault();
        agent.Account.login(values);
    }
    const handleInputChange = function (event: any) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
    }
    return (
        <Container component={Paper} maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 4 }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlined />
            </Avatar>
            <Typography>
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" fullWidth label="Username" name="username" autoFocus onChange={handleInputChange} value={values.username} />
                <TextField margin="normal" fullWidth id="password" label="Password" name="password" type="password" autoFocus onChange={handleInputChange} value={values.password} />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                        <Link to="/register">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default Login
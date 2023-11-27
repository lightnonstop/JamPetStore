import { LockOutlined } from "@mui/icons-material"
import { Avatar, Box, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { agent } from "../../api/agent";
import { FieldValues, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";

function Login() {

    const { register, handleSubmit, formState: { isSubmitting } } = useForm();

    async function submitForm(data: FieldValues) {
        await agent.Account.login(data);
    }

    return (
        <Container component={Paper} maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 4 }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlined />
            </Avatar>
            <Typography>
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" fullWidth label="Username" autoFocus {...register('username')} />
                <TextField margin="normal" fullWidth id="password" label="Password" type="password" autoFocus {...register('password')} />
                <LoadingButton loading={isSubmitting} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign In
                </LoadingButton>
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
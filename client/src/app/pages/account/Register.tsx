import { LockOutlined } from "@mui/icons-material"
import { Avatar, Box, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { agent } from "../../api/agent";

function Register() {
    const { register, handleSubmit, formState: { isSubmitting, errors, isValid } } = useForm({
        mode: 'onTouched',
    });

    return (
        <Container component={Paper} maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 4 }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlined />
            </Avatar>
            <Typography>
                Register
            </Typography>
            <Box component="form" onSubmit={handleSubmit(data => agent.Account.register(data))} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    fullWidth
                    label="Username"
                    autoFocus
                    {...register('username', { required: 'Username is required.' })}
                    error={!!errors.username}
                    helperText={errors.username?.message as string}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Email"
                    type="email"
                    {...register('email', { required: 'Email is required.' })}
                    error={!!errors.email}
                    helperText={errors.email?.message as string}
                />
                <TextField
                    margin="normal"
                    fullWidth id="password"
                    label="Password"
                    type="password"
                    {...register('password', { required: 'Password is required.' })}
                    error={!!errors.password}
                    helperText={errors.password?.message as string}
                />
                <LoadingButton disabled={!isValid} loading={isSubmitting} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Register In
                </LoadingButton>
                <Grid container>
                    <Grid item>
                        <Link to="/login">
                            {"Already have an account? Sign In"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default Register
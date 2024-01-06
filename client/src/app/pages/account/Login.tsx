import { LockOutlined } from "@mui/icons-material"
import { Avatar, Box, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../../store/configureStore";
import { signInUser } from "./accountSlice";

function Login() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState: { isSubmitting, errors, isValid } } = useForm({
        mode: 'onTouched',
    });

    async function submitForm(data: FieldValues) {
        await dispatch(signInUser(data));
        navigate('/catalog');
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
                <TextField margin="normal"
                    fullWidth
                    label="Username"
                    autoFocus
                    {...register('username', { required: 'Username is required.' })}
                    error={!!errors.username}
                    helperText={errors.username?.message as string}
                />
                <TextField
                    margin="normal"
                    fullWidth id="password"
                    label="Password"
                    type="password"
                    {...register('password', { required: 'Password is required.' })}
                    error={!!errors.password}
                    helperText={errors.password?.message as string} />
                <LoadingButton disabled={!isValid} loading={isSubmitting} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
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
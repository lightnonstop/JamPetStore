import { Button, Fade, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { signOut } from "../pages/account/accountSlice";

function SignedInMenu() {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.account);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e: any) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <>
            <Button color='inherit' sx={{ typography: 'h6' }} onClick={handleClick}>
                {user?.email}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                disableScrollLock
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={() => dispatch(signOut())}>Logout</MenuItem>
            </Menu>
        </>
    )
}
export default SignedInMenu
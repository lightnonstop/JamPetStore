import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Link, NavLink } from "react-router-dom";

const links = {
    middle: [
        { title: 'catalog', path: '/catalog' },
        { title: 'about', path: '/about' },
        { title: 'contact', path: '/contact' },
    ],
    right: [
        { title: 'login', path: '/login' },
        { title: 'register', path: '/register' },
    ]
}

const navLinkStyle = {
    color: "inherit", typography: "h6", "&:hover": {
        color: "secondary.main"
    },
    textDecoration: "none",
    '&.active': {
        color: "text.secondary"
    }
}

interface HeaderProps {
    setDarkMode: Dispatch<SetStateAction<boolean>>;
}
function Header({ setDarkMode }: HeaderProps) {
    const { basket } = useStoreContext();
    const itemCount = useMemo(() => {
        return basket?.items.reduce((totalItems, item) => totalItems + item.quantity, 0)
    }, [basket?.items])

    return (
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display="flex" alignItems="center">
                    <Typography variant="h6" component={NavLink} to="/" sx={{ color: "inherit", textDecoration: "none", mr: 1 }}>Ski Store</Typography>
                    <Switch onChange={() => setDarkMode(prev => !prev)} size="small" />
                </Box>
                <List sx={{ display: "flex" }}>
                    {links.middle.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navLinkStyle}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box display="flex" alignItems="center">
                    <IconButton component={Link} to="/basket" size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
                        <Badge badgeContent={itemCount} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: "flex" }}>
                        {links.right.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navLinkStyle}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Header
import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Home from "../pages/home/Home";
import Catalog from "../pages/catalog/Catalog";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ProductDetails from "../pages/productDetails/ProductDetails";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import Basket from "../pages/basket/Basket";
import Checkout from "../pages/checkout/Checkout";
import Login from "../pages/account/Login";
import Register from "../pages/account/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '', element: <Home /> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'catalog/:id', element: <ProductDetails /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
            { path: 'server-error', element: <ServerError /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'basket', element: <Basket /> },
            { path: 'checkout', element: <Checkout /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: '*', element: <Navigate replace to="/not-found" /> },
        ]
    }
])
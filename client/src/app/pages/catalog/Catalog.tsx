import ProductList from "../../../components/ProductList";
import { useEffect } from "react";
import LoadingComponent from "../../layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { fetchFilters, fetchProductsAsync, productSelectors } from "./catalogSlice";

function Catalog() {
    const products = useAppSelector(productSelectors.selectAll)
    const { productsLoaded, status, filtersLoaded } = useAppSelector(state => state.catalog)

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [dispatch, productsLoaded])

    useEffect(() => {
        if (!filtersLoaded) dispatch(fetchFilters());
    }, [dispatch, filtersLoaded])

    if (status.includes('pending')) return <LoadingComponent message="Loading products..." />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}
export default Catalog
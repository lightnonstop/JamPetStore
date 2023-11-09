import ProductList from "../../../components/ProductList";
import { useEffect } from "react";
import LoadingComponent from "../../layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { fetchFilters, fetchProductsAsync, productSelectors, setProductParams } from "./catalogSlice";
import { Grid, Paper } from "@mui/material";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../../../components/RadioButtonGroup";
import CheckboxButtons from "../../../components/CheckboxButtons";
import AppPagination from "../../../components/AppPagination";

const sortOptions = [
    { value: 'name', label: 'Alphabetical' },
    { value: 'priceDesc', label: 'Price - High to Low' },
    { value: 'price', label: 'Price - Low to High' },
]

function Catalog() {
    const products = useAppSelector(productSelectors.selectAll)
    const { productsLoaded, status, filtersLoaded, brands, types, productParams, metaData } = useAppSelector(state => state.catalog)

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync());
    }, [dispatch, productsLoaded])

    useEffect(() => {
        if (!filtersLoaded) dispatch(fetchFilters());
    }, [dispatch, filtersLoaded])

    if (status.includes('pending') || !metaData) return <LoadingComponent message="Loading products..." />

    return (
        <Grid container columnSpacing={4}>
            <Grid item xs={3}>
                <Paper sx={{ mb: 2 }}>
                    <ProductSearch />
                </Paper>
                <Paper sx={{ mb: 2, p: 2 }}>
                    <RadioButtonGroup
                        selectedValue={productParams.orderBy}
                        options={sortOptions}
                        onChange={event => dispatch(setProductParams({ orderBy: event.target.value }))}
                    />
                </Paper>
                <Paper sx={{ mb: 2, p: 2 }}>
                    <CheckboxButtons checked={productParams.brands} items={brands} onChange={(items: string[]) => dispatch(setProductParams({ brands: items }))} />
                </Paper>
                <Paper sx={{ mb: 2, p: 2 }}>
                    <CheckboxButtons checked={productParams.types} items={types} onChange={(items: string[]) => dispatch(setProductParams({ types: items }))} />
                </Paper>
            </Grid>
            <Grid item xs={9}>
                <ProductList products={products} />
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={9} sx={{ mb: 2 }}>
                <AppPagination metaData={metaData} onPageChange={(page: number) => dispatch(setProductParams({ pageNumber: page }))} />
            </Grid>
        </Grid>
    )
}
export default Catalog
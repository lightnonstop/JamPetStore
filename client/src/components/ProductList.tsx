import { Grid } from "@mui/material"
import ProductCard from "./ProductCard";
import { Product } from "../app/models/product";
import { useAppSelector } from "../app/store/configureStore";
import ProductCardSkeleton from "../app/pages/catalog/ProductCardSkeleton";

interface ProductListProps {
    products: Product[];
}

function ProductList({ products }: ProductListProps) {
    const { productsLoaded } = useAppSelector(state => state.catalog);
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={4} key={product.id}>
                    {!productsLoaded ? (
                        <ProductCardSkeleton />
                    ) : (
                        <ProductCard product={product} />
                    )}
                </Grid>
            ))}
        </Grid>
    )
}
export default ProductList
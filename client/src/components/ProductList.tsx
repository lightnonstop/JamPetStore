import { Grid } from "@mui/material"
import ProductCard from "./ProductCard";
import { Product } from "../app/models/product";

interface ProductListProps {
    products: Product[];
}

function ProductList({ products }: ProductListProps) {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={4} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}
export default ProductList
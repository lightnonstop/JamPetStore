import ProductList from "../../../components/ProductList";
import { useEffect, useState } from "react";
import { Product } from "../../models/product";
import { agent } from "../../api/agent";
import LoadingComponent from "../../layout/LoadingComponent";

function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        agent.Catalog.list().then(products => setProducts(products))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <LoadingComponent message="Loading products..." />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}
export default Catalog
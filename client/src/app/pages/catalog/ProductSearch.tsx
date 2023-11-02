import { TextField, debounce } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { setProductParams } from "./catalogSlice";
import { useState } from "react";

function ProductSearch() {
    const { productParams } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();
    const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);

    const debouncedSearch = debounce((event: any) => {
        dispatch(setProductParams({ searchTerm: event.target.value }))
    }, 1000)

    return (
        <TextField
            label='Search'
            variant='outlined'
            fullWidth
            value={searchTerm || ''}
            onChange={event => {
                setSearchTerm(event.target.value);
                debouncedSearch(event);
            }} />
    )
}
export default ProductSearch
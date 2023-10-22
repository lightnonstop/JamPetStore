import { useEffect, useState } from "react"
import { BasketProps } from "../../models/basket";
import { agent } from "../../api/agent";
import LoadingComponent from "../../layout/LoadingComponent";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

function Basket() {
    const [loading, setLoading] = useState(true);
    const [basket, setBasket] = useState<BasketProps | null>(null);

    useEffect(() => {
        agent.Basket.get()
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <LoadingComponent message="Loading cart..." />

    if (!basket) return <Typography variant="h3">Your cart is empty</Typography>

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">SubTotal</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {basket.items.map((item) => (
                        <TableRow
                            key={item.productId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">
                                ${(item.price / 100).toFixed(2)}
                            </TableCell>
                            <TableCell align="right">
                                {item.quantity}
                            </TableCell>
                            <TableCell align="right">
                                ${((item.price / 100) * item.quantity).toFixed(2)}
                            </TableCell>
                            <TableCell align="right">
                                <IconButton color="error">
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default Basket
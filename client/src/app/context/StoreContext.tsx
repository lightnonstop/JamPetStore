import { PropsWithChildren, createContext, useContext, useState } from "react";
import { BasketProps } from "../models/basket";

interface StoreContextValue {
    basket: BasketProps | null;
    setBasket: (basket: BasketProps) => void;
    removeItem: (productId: number, quantity: number) => void;
}

export const StoreContext = createContext<StoreContextValue | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useStoreContext() {
    const context = useContext(StoreContext);

    if (!context === undefined) {
        throw Error('Oops - we do not seem to be inside the context provider');
    }

    return context;
}

function StoreProvider({ children }: PropsWithChildren<unknown>) {
    const [basket, setBasket] = useState<BasketProps | null>(null);

    function removeItem(productId: number, quantity: number) {
        if (!basket) return;
        const items = [...basket.items];
        const itemIndex = items.findIndex(i => i.productId === productId);
        if (itemIndex >= 0) {
            items[itemIndex].quantity -= quantity;
            if (items[itemIndex].quantity === 0) items.splice(itemIndex, 1);
            setBasket(prevState => ({ ...prevState!, items }))
        }
    }
    return (
        <StoreContext.Provider value={{ basket, setBasket, removeItem }}>{children}</StoreContext.Provider>
    )
}
export default StoreProvider
import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";


export const useShoppingCart = () => {
    const [shoppingCart, setshoppingCart] = useState<{[key:string]:ProductInCart}>({});

    const onProductCountChange = ({count, product}:{count: number, product:Product}) => {
        setshoppingCart(prev => {

            if(count === 0){
                const { [product.id]:toDelete, ...rest } = prev;
                return rest ;
            }
            return{
                ...prev,
                [product.id]:{...product, count}
            }
        });
    }
    
    return{
        shoppingCart,
        onProductCountChange
    }
}
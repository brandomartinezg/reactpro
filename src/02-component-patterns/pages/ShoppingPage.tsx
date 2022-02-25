import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
// import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping store</h1>
        <hr></hr>
        <ProductCard 
            key={product.id}
            product={product}
            className="bg-dark text-white"
            initialValues={{
                count: 4,
                maxCount: 10
            }}
        >
            {
                ({reset, isMaxCountReached, count, increaseBy}) => (
                    <>
                        <ProductImage className={"custom-image"}/>
                        <ProductTitle className={"text-white"}/>
                        <ProductButtons className={"custom-buttons"}/>
                        <button onClick={reset}>Reset</button>
                        <button onClick={() => increaseBy(-2)}> -2 </button>
                        {!isMaxCountReached && <button onClick={() => increaseBy(2)}> +2 </button>}
                        <span>{count}</span>
                    </>
                )
            }
        </ProductCard>
    </div>
  )
}

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
// import { useShoppingCart } from '../hooks/useShoppingCart';
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
            initialValues={{
                count: 4,
                maxCount: 10
            }}
        >
            {
                ({reset, isMaxCountReached, count, increaseBy}) => (
                    <>
                        <ProductImage/>
                        <ProductTitle/>
                        <ProductButtons />
                    </>
                )
            }
        </ProductCard>
    </div>
  )
}

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';
import { products } from "../data/products";


export const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart();

  return (
    <div>
        <h1>Shopping store</h1>
        <hr></hr>
        <div
            style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}
        >
            {
                products.map(product => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                        className="bg-dark text-white"
                        onChange={ onProductCountChange }
                        value={ shoppingCart[product.id]?.count || 0 }
                    >
                        <ProductImage className={"custom-image"}/>
                        <ProductTitle className={"text-white"}/>
                        <ProductButtons className={"custom-buttons"}/>
                    </ProductCard>
                ))
            }
        </div>
        <div className="shopping-cart">
            {
                Object.entries(shoppingCart).map( ( [key, productInCar] ) => (
                    <ProductCard
                        className="bg-dark text-white"
                        key={key}
                        onChange={(event) =>  onProductCountChange(event) }
                        product={productInCar}
                        style={{ width:'100px' }}
                        value={productInCar.count}
                    >
                        <ProductImage className={"custom-image"}/>
                        <ProductButtons 
                            className={"custom-buttons"} 
                            style={{display:'flex', justifyContent:'center'}}
                        />
                    </ProductCard>
                ))
            }
        </div>
    </div>
  )
}

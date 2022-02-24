import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

const product = {
    id:'1',
    img:'./coffee-mug.png',
    title:'Coffee Card',
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping store</h1>
        <hr></hr>
        <div
            style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}
        >
            <ProductCard 
                product={product}
                className="bg-dark text-white"
            >
                <ProductCard.Image className={"custom-image"}/>
                <ProductCard.Title title="hola" className={"text-white"}/>
                <ProductCard.Buttons className={"custom-buttons"}/>
            </ProductCard>
            
            <ProductCard 
                product={product}
                className="bg-dark text-white"
            >
                <ProductImage className={"custom-image"}/>
                <ProductTitle className={"text-white"}/>
                <ProductButtons className={"custom-buttons"}/>
            </ProductCard>

            <ProductCard 
                product={product}
                style={{backgroundColor: '#70D1F8'}}
            >
                <ProductImage style={{boxShadow: '10px 10px 10px 10px rgb(0,0,0,0.2)'}}/>
                <ProductTitle style={{ fontWeight:'bold' }}/>
                <ProductButtons style={{ display:'flex', justifyContent:'end'}}/>
            </ProductCard>
        </div>
    </div>
  )
}

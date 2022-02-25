import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs{
    product: Product,
    onChange?: (args: OnChangeArgs) => void,
    value?: number
}

export const useProduct = ( {onChange, product, value = 0}:useProductArgs ) => {

    const [counter, setcounter] = useState(value);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        setcounter(prev => Math.max(prev + value, 0));
        onChange && onChange({product, count: newValue});
    }
    useEffect(() => {
      setcounter(value);
    }, [value])
    
    return{
        counter,
        increaseBy
    }
}
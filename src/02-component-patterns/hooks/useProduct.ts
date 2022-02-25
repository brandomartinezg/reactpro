import { useEffect, useState, useRef } from 'react';
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs{
    product: Product,
    onChange?: (args: OnChangeArgs) => void,
    value?: number,
    initialValues?: InitialValues,
}

export const useProduct = ( {onChange, product, value = 0, initialValues}:useProductArgs ) => {

    const [counter, setcounter] = useState<number>( initialValues?.count || value );

    const isMouted = useRef(false);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        if((initialValues?.maxCount || newValue + 1) < newValue) return;
        setcounter(prev => Math.max(prev + value, 0));
        onChange && onChange({product, count: newValue});
    }

    const reset = ( ) => {
        setcounter(initialValues?.count || value);
    }

    useEffect(() => {
        if( !isMouted.current ) return;
        setcounter(value);
    }, [value]);

    useEffect(() => {
      isMouted.current = true;
    }, [])
    
    
    return{
        counter,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset,
    }
}
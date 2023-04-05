import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ( {children} ) => {
        const [data, setData] = useState([]);
        const [cart, setCart] = useState([]);

    useEffect(() => {
        axios("data.json").then((res)=> setData(res.data))
    }, []);

    const buyProducts = (products) => {
      const productrepeat = cart.find((item) => item.id === products.id)
  
      if(productrepeat){
        setCart(cart.map((item)=> item.id === products.id ? {...products, quanty: productrepeat.quanty + 1 } : item))
      } else {
        setCart([...cart, products, ])
      }
  
    }
    
    return <dataContext.Provider value={{ data, cart, setCart, buyProducts }}>{children}</dataContext.Provider>;
    

};

export default DataProvider;
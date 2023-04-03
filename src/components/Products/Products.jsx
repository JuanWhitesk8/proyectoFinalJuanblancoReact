import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Card from "../Card/index."
import "./Products.css"


const Products = () => {
    const { data, buyProducts} = useContext(dataContext);


  return data.map((products)=> {
    return (
    <>
        <div>
        <Card key={products.id} products={products} />
        </div>
    </>
    )
  })
};

export default Products

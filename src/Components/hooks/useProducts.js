import { useEffect, useState } from "react"
import useAuth from "./useAuth";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("https://floating-river-34453.herokuapp.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)


      })
  }, []);


  return { products, setProducts };
}

export default useProducts;

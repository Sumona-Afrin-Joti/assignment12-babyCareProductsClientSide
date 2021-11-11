import { useEffect, useState } from "react"

const useProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://floating-river-34453.herokuapp.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);
  console.log(products)

  return products;
}

export default useProducts;

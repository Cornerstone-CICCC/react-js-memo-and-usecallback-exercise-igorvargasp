import { useState, useCallback } from "react";
import GetProductsButton from "./GetProductsButton";

interface Product {
  id: number;
  title: string;
  price: number;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  }, []);

  return (
    <div>
      <GetProductsButton onClick={fetchProducts} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "./cartSlice";

function Product() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }, []);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  return (

    <div>

      <h1>Products</h1>

      <div className="product-container">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.title}
              width="150"
              height="150"
            />

            <h3>{product.title}</h3>

            <p>
              Category: {product.category}
            </p>

            <h3>
              ${product.price}
            </h3>

            <button
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Product;
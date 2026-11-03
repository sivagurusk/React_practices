import { useDispatch } from "react-redux";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div>
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
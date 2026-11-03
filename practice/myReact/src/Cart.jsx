import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "./cartSlice";

function Cart() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (

    <div>

      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (

        <h2>Cart is empty</h2>

      ) : (

        <>

          {cartItems.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
                width="120"
              />

              <h3>{item.title}</h3>

              <p>
                Price: ${item.price}
              </p>

              <div>

                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  -
                </button>

                <span>
                  {" "}{item.quantity}{" "}
                </span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>

              </div>

              <p>
                Subtotal: $
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>

              <hr />

            </div>

          ))}

          <h2>
            Total: ${totalPrice.toFixed(2)}
          </h2>

        </>

      )}

    </div>

  );
}

export default Cart;
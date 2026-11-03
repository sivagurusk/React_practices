import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  return (
    <nav>
      <h2>My Store</h2>

      <div>
        🛒 Cart ({cart.length})
      </div>
    </nav>
  );
}

export default Navbar;
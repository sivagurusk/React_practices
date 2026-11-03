import Product from "./Product";
import Cart from "./Cart";

function App() {

  return (
    <>
      <Product />

      <hr />

      <Cart />
    </>
  );

}

export default App;







































//import './App.css';
// import { useState } from 'react';
// function App() {
  
//   const [count, setcount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setcount(count + 1)} style={{ color: 'blue' , padding: '10px' , margin: '5px' }}>Increment</button>
//       <button onClick={() => setcount(count - 1)} style={{ color: 'red' , padding: '10px' , margin: '5px' }}>Decrement</button>
//       <button onClick={() => setcount(0)} style={{ color: 'green' , padding: '10px' , margin: '5px' }}>Reset</button>
//       <h1>{count}</h1>
          
//     </div>
//   )
// }

// export default App;


// import { useState } from 'react';
// const products = [
//   { id: 1, name: 'Product 1', price: 10, image: '../sivan.jpg' },
//   { id: 2, name: 'Product 2', price: 20, image: '../linux-dark-hacking-operating-system-wallpaper-preview.jpg' },
//   { id: 3, name: 'Product 3', price: 30, image: '../images.jpeg' },
// ];
// function App() {
//   return (
//     <div>
//       <h1>Welcome to React</h1>
//       <ProductList products={products} />
//     </div>
//   );
// }
// function ProductList({ products }) {
//   return (
//     <div>
//       {products.map((product) => (
//         <Product key={product.id} product={product} />
//       ))}
//     </div>
//   );
// }

// function Product({ product }) {
//   const [quantity, setQuantity] = useState(0);

//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div style={{ border: '1px solid green', padding: '10px', margin: '10px' }}>
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} style={{height:'200px', width:'200px', borderRadius:'15px'}}/>
//       <p>Price: ${product.price}</p>
//       <p>Quantity: {quantity}</p>
//       <button onClick={handleIncrement} style={{ marginRight: '5px' }}>+</button>
//       <button onClick={handleDecrement} style={{ marginRight: '5px' }}>-</button>
//     </div>
//   );
// }


// export default App;


// import { useState, useEffect } from "react";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products", {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       });
//   }, []);

//   // Filter products based on search
//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Welcome to My E-Commerce Store</h1>

//       {/* Search box */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "300px",
//           marginBottom: "20px",
//         }}
//       />

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ProductList products={filteredProducts} />
//       )}
//     </div>
//   );
// }

// function ProductList({ products }) {
//   return (
//     <div>
//       {products.length === 0 ? (
//         <p>No products found</p>
//       ) : (
//         products.map((product) => (
//           <Product key={product.id} product={product} />
//         ))
//       )}
//     </div>
//   );
// }

// function Product({ product }) {
//   const [quantity, setQuantity] = useState(0);

//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div
//       style={{
//         border: "1px solid green",
//         padding: "10px",
//         margin: "10px",
//       }}
//     >
//       <h2>{product.title}</h2>

//       <img
//         src={product.image}
//         alt={product.title}
//         style={{
//           height: "200px",
//           width: "200px",
//           borderRadius: "15px",
//         }}
//       />

//       <p>Price: ${product.price}</p>

//       <p>Quantity: {quantity}</p>

//       <button
//         onClick={handleIncrement}
//         style={{ marginRight: "5px" }}
//       >
//         +
//       </button>

//       <button onClick={handleDecrement}>-</button>
//     </div>
//   );
// }

// export default App;



// import { useState, useEffect } from "react";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch products
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   // Search
//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase())
//   );

//   // Add to cart
//   const addToCart = (product) => {
//     const existingProduct = cart.find(
//       (item) => item.id === product.id
//     );

//     if (existingProduct) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? {
//                 ...item,
//                 quantity: item.quantity + 1,
//               }
//             : item
//         )
//       );
//     } else {
//       setCart([
//         ...cart,
//         {
//           ...product,
//           quantity: 1,
//         },
//       ]);
//     }
//   };

//   // Remove from cart
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   // Increase cart quantity
//   const increaseQuantity = (id) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: item.quantity + 1,
//             }
//           : item
//       )
//     );
//   };

//   // Decrease cart quantity
//   const decreaseQuantity = (id) => {
//     setCart(
//       cart
//         .map((item) =>
//           item.id === id
//             ? {
//                 ...item,
//                 quantity: item.quantity - 1,
//               }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   // Cart total
//   const cartTotal = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div style={{ padding: "20px" }}>

//       <h1>🛍️ Product Store</h1>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           width: "300px",
//           padding: "12px",
//           marginBottom: "30px",
//         }}
//       />

//       {/* Product Section */}
//       <h2>Products</h2>

//       {loading ? (
//         <h3>Loading...</h3>
//       ) : (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns:
//               "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "20px",
//           }}
//         >
//           {filteredProducts.map((product) => (
//             <Product
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//             />
//           ))}
//         </div>
//       )}

//       {/* Cart */}
//       <Cart
//         cart={cart}
//         removeFromCart={removeFromCart}
//         increaseQuantity={increaseQuantity}
//         decreaseQuantity={decreaseQuantity}
//         cartTotal={cartTotal}
//       />
//     </div>
//   );
// }


// // ================= PRODUCT =================

// function Product({ product, addToCart }) {
//   return (
//     <div
//       style={{
//         border: "1px solid #ddd",
//         borderRadius: "10px",
//         padding: "15px",
//         textAlign: "center",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//       }}
//     >
//       <img
//         src={product.image}
//         alt={product.title}
//         style={{
//           width: "180px",
//           height: "180px",
//           objectFit: "contain",
//         }}
//       />

//       <h3>{product.title}</h3>

//       <p>💰 ${product.price}</p>

//       <button
//         onClick={() => addToCart(product)}
//         style={{
//           padding: "10px 20px",
//           cursor: "pointer",
//           border: "none",
//           borderRadius: "5px",
//         }}
//       >
//         🛒 Add to Cart
//       </button>
//     </div>
//   );
// }


// // ================= CART =================

// function Cart({
//   cart,
//   removeFromCart,
//   increaseQuantity,
//   decreaseQuantity,
//   cartTotal,
// }) {
//   return (
//     <div
//       style={{
//         marginTop: "50px",
//         padding: "20px",
//         border: "2px solid #333",
//         borderRadius: "10px",
//       }}
//     >
//       <h2>🛒 My Cart</h2>

//       {cart.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "20px",
//                 borderBottom: "1px solid #ddd",
//                 padding: "15px",
//               }}
//             >
//               {/* Cart Image */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   objectFit: "contain",
//                 }}
//               />

//               {/* Product Details */}
//               <div style={{ flex: 1 }}>
//                 <h3>{item.title}</h3>

//                 <p>
//                   Price: ${item.price}
//                 </p>

//                 {/* Quantity */}
//                 <div>
//                   <button
//                     onClick={() =>
//                       decreaseQuantity(item.id)
//                     }
//                   >
//                     -
//                   </button>

//                   <span
//                     style={{
//                       margin: "0 15px",
//                     }}
//                   >
//                     {item.quantity}
//                   </span>

//                   <button
//                     onClick={() =>
//                       increaseQuantity(item.id)
//                     }
//                   >
//                     +
//                   </button>
//                 </div>

//                 <p>
//                   Total: $
//                   {(item.price * item.quantity).toFixed(2)}
//                 </p>

//                 <button
//                   onClick={() =>
//                     removeFromCart(item.id)
//                   }
//                 >
//                   ❌ Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Cart Total */}
//           <h2>
//             Cart Total: ${cartTotal.toFixed(2)}
//           </h2>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;















// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const dispatch = useDispatch();

//   // Get cart from Redux
//   const cart = useSelector((state) => state.cart);

//   // Fetch products
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);

//   // Add product to Redux cart
//   const addToCart = (product) => {
//     dispatch({
//       type: "ADD_TO_CART",
//       payload: product,
//     });
//   };

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <div>
//       {/* Navbar */}
//       <nav
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           padding: "20px",
//           background: "#222",
//           color: "white",
//         }}
//       >
//         <h2>My Store</h2>

//         <h3>🛒 Cart ({cart.length})</h3>
//       </nav>

//       {/* Products */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "20px",
//           padding: "30px",
//         }}
//       >
//         {products.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               border: "1px solid #ddd",
//               padding: "15px",
//               borderRadius: "10px",
//               textAlign: "center",
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{
//                 width: "150px",
//                 height: "150px",
//                 objectFit: "contain",
//               }}
//             />

//             <h3>{product.title}</h3>

//             <p>${product.price}</p>

//             <button
//               onClick={() => addToCart(product)}
//               style={{
//                 padding: "10px 15px",
//                 background: "green",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;













// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(1);

  
//   useEffect(() => {
//     document.title = `Product Count: ${count}`;
//   }, [count]);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   const decreaseCount = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h1>Product</h1>

//       <h2>Product Count: {count}</h2>

//       <button onClick={decreaseCount}>-</button>

//       <span style={{ margin: "0 20px", fontSize: "20px" }}>
//         {count}
//       </span>

//       <button onClick={increaseCount}>+</button>
//     </div>
//   );
// }

// export default App;
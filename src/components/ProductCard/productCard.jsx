import AddToCart from "../AddToCart/AddToCart";
import "./productCard.css";

function ProductCard({ product, incrementQty, decrementQty, cart }) {
  return (
    <div className="card">
      <h2>{product.title}</h2>
      <h4>{product.price.value}</h4>
      <AddToCart
        product={product}
        incrementQty={incrementQty}
        decrementQty={decrementQty}
        cart={cart}
      />
    </div>
  );
}
export default ProductCard;

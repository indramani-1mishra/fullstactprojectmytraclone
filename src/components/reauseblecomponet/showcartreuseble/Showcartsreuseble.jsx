import './addtocart.css'
export default function CartItemList({ items, onBuyNow,onRemove}) {
  return (
    <div className="cart-items">
      {items.map((item) => (
        <div className="cart-item" key={item._id}>
          <img
            src={item.product?.image}
            alt={item.product?.productname}
            className="cart-img"
          />
          <div className="cart-details">
            <h3>{item.product?.productname}</h3>
            <p>Price: ₹{item.product?.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button className="buy-now-btn" onClick={() => onBuyNow(item)}>
              Buy Now
            </button>
            <button className="buy-now-btn" onClick={() => onRemove(item)} style={{"backgroundColor":"red","marginLeft":"10px"}}>
               remove to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

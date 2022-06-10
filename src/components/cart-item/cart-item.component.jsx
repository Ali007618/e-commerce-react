import "./cart-item.styles.scss";

const CartItem = ({ CartItem }) => {
  const { name, quantity, imageUrl, price } = CartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  return (
    <>
      {cart.map((item) => (
        <>
          <div className="d-flex justify-content-between px-3" key={item.id}>
            <div>
              <span style={{ width: "40%" }}>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={item.image}
                  alt={item.title}
                />
              </span>
              <span style={{ width: "40%" }}> {item.title}</span>
              <span style={{ width: "40%" }}> {item.price}</span>
            </div>
            <button className="btn btn-danger" onClick={()=>{
                   dispatch(deleteFromCart(item.id))
            }}> delete </button>
          </div>
          <hr></hr>
        </>
      ))}
      <button className="btn btn-danger" onClick={()=>{
        dispatch(clearCart())
      }}> clear</button>
    </>
  );
}

export default Cart;

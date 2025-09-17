import orderData from "../../data/checkout.json";
import css from "./OrderSummary.module.css";

export default function OrderSummary() {
  return (
    <div>
      <p className={css.title}>Order Summary</p>
      <div className={css.summaryBox}>
        <ul className={css.list}>
          {orderData.map((item) => (
            <li key={item.id} className={css.item}>
              <div className={css.imgStub}></div>
              <div className={css.info}>
                <span className={css.name}>{item.name}</span>
                <span className={css.details}>{item.details}</span>
              </div>
              <span className={css.price}>${item.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className={css.promocode}>Apply Promocode</p>
      <div className={css.promoInput}>
        <input type="text" placeholder="Promotion or Discount code" />
        <button>Apply Code</button>
      </div>
      <div className={css.total}>
        <p className={css.priceDetail}>
          Sub Total <span>240$</span>
        </p>
        <p className={css.priceDetail}>
          Shipping fee <span className={css.price}>40$</span>
        </p>
        <p className={css.priceDetail} style={{ marginTop: 80 }}>
          Total <span className={css.totalPrice}>280$</span>
        </p>
      </div>
      <button type="submit" className={css.checkoutButton}>
        <span className={css.checkoutSpan}>Checkout</span>
      </button>
    </div>
  );
}

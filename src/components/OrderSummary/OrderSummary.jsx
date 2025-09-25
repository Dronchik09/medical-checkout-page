import { useState, useEffect } from "react";
import orderData from "../../data/checkout.json";
import css from "./OrderSummary.module.css";
import { MdDelete } from "react-icons/md";
// import { useFormikContext } from "formik";
// import axios from "axios";

export default function OrderSummary() {
  const [pills, setPills] = useState(() => {
    const saved = localStorage.getItem("pills");
    return saved ? JSON.parse(saved) : orderData;
  });

  // const { handleSubmit } = useFormikContext();

  useEffect(() => {
    localStorage.setItem("pills", JSON.stringify(pills));
  }, [pills]);

  const deletePill = (id) => {
    setPills((prev) => prev.filter((pill) => pill.id !== id));
  };

  return (
    <div>
      <p className={css.title}>Order Summary</p>
      <div className={css.summaryBox}>
        <ul className={css.list}>
          {pills.map((item) => (
            <li key={item.id} className={css.item}>
              <div className={css.imgStub}></div>
              <div className={css.info}>
                <span className={css.name}>{item.name}</span>
                <span className={css.details}>{item.details}</span>
              </div>
              <button
                type="button"
                className={css.deleteBtn}
                onClick={() => deletePill(item.id)}
              >
                <MdDelete className={css.deleteIcon} />
              </button>
              <span className={css.price}>${item.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className={css.promocode}>Apply Promocode</p>
      <div className={css.promoInputWrap}>
        <input
          type="text"
          placeholder="Promotion or Discount code"
          className={css.promoInput}
        />
        <button className={css.applyBtn}>Apply Code</button>
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

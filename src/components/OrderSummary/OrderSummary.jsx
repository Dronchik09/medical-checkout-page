import { useState, useEffect, useMemo } from "react";
import orderData from "../../data/checkout.json";
import css from "./OrderSummary.module.css";
import { MdDelete } from "react-icons/md";
import { useFormikContext } from "formik";
import { ToastContainer, toast } from "react-toastify";

export default function OrderSummary() {
  const [pills, setPills] = useState(() => {
    const saved = localStorage.getItem("pills");
    return saved ? JSON.parse(saved) : orderData;
  });

  const [orderAccepted, setOrderAccepted] = useState(false);

  useEffect(() => {
    localStorage.setItem("pills", JSON.stringify(pills));
  }, [pills]);

  const deletePill = (id) => {
    setPills((prev) => prev.filter((pill) => pill.id !== id));
  };

  const handleCheckout = () => {
    setOrderAccepted(true);
    toast.success("Order accepted", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };
  const { isValid, isSubmitting } = useFormikContext();
  const subTotal = useMemo(
    () => pills.reduce((acc, pill) => acc + pill.price, 0),
    [pills]
  );
  const shipping = pills.length > 0 ? 40 : 0; // умовно: доставка 40$, якщо є хоч один товар
  const total = subTotal + shipping;
  return (
    <div>
      <p className={css.title}>Order Summary</p>
      {orderAccepted ? (
        <div className={css.summaryBox}>Order accepted</div>
      ) : (
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
      )}
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
          Sub Total <span>${subTotal}</span>
        </p>
        <p className={css.priceDetail}>
          Shipping fee <span className={css.price}>${shipping}</span>
        </p>
        <p
          className={css.priceDetail}
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          Total <span className={css.totalPrice}>${total}</span>
        </p>
      </div>
      <button
        type="submit"
        className={css.checkoutButton}
        disabled={!isValid || isSubmitting}
        onClick={handleCheckout}
      >
        <span className={css.checkoutSpan}>Checkout</span>
      </button>
      <ToastContainer />
    </div>
  );
}

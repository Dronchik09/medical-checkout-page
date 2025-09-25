import { Formik, Form, Field, ErrorMessage } from "formik";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import css from "./CheckoutPage.module.css";
import { validationSchema } from "../utils/validationSchema";
import Feature from "../components/Feature/Feature";
import orderData from "../data/checkout.json";

export default function CheckoutPage() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    shipping: "",
    payment: "",
  };
  // const handleSubmit = (values, { resetForm }) => {
  //   const submitData = {
  //     ...values,
  //     items: orderData.items,
  //   };
  //   console.log("Form has been sent", submitData);
  //   resetForm({ values: initialValues });
  // };
  console.log(orderData);
  return (
    <div className={css.checkoutContainer}>
      <h1 className={css.title}>Checkout</h1>
      <div className={css.mainRow}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log("Form has been sent", values);
            actions.resetForm();
          }}
          validationSchema={validationSchema}
        >
          <Form className={css.form}>
            <div className={css.container}>
              <p className={css.sectionTitle}>Personal Details</p>
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
              <Field
                className={css.input}
                type="tel"
                name="phone"
                placeholder="Phone Number"
              />
              <ErrorMessage
                name="phone"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.shippingContainer}>
              <p className={css.sectionTitle}>Shipping Details</p>
              <Field
                className={css.input}
                type="text"
                name="street"
                placeholder="Street Address"
              />
              <ErrorMessage
                name="street"
                component="span"
                className={css.error}
              />
              <div className={css.gridRow}>
                <Field
                  className={css.input}
                  type="text"
                  name="city"
                  placeholder="City"
                />
                <ErrorMessage
                  name="city"
                  component="span"
                  className={css.error}
                />
                <Field
                  className={css.input}
                  type="text"
                  name="zip"
                  placeholder="Zip Code"
                />
              </div>
              <ErrorMessage name="zip" component="span" className={css.error} />
              <Field
                className={css.input}
                type="text"
                name="country"
                placeholder="Country"
              />
              <ErrorMessage
                name="country"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.shippingMethodContainer}>
              <p className={css.shippingMethodTitle}>Shipping Methode</p>
              <div className={css.shippingMethodsGrid}>
                <label className={css.radioLabel}>
                  <span className={css.oval}></span>
                  Odeon Express
                  <Field
                    className={css.inputRadio}
                    type="radio"
                    name="shipping"
                    value="odeon"
                  />
                </label>

                <label className={css.radioLabel}>
                  <span className={css.oval}></span>
                  Cipay Jet
                  <Field
                    className={css.inputRadio}
                    type="radio"
                    name="shipping"
                    value="cipay jet"
                  />
                </label>
                <label className={css.radioLabel}>
                  <span className={css.oval}></span>
                  Gorgom Express
                  <Field
                    className={css.inputRadio}
                    type="radio"
                    name="shipping"
                    value="gorgom"
                  />
                </label>

                <label className={css.radioLabel}>
                  <span className={css.oval}></span>
                  Eunioa Fast
                  <Field
                    className={css.inputRadio}
                    type="radio"
                    name="shipping"
                    value="eunioa fast"
                  />
                </label>
              </div>
            </div>

            <div className={css.paymentContainer}>
              <p className={css.sectionTitle}>Payment Methode</p>
              <div className={css.paymentMethodsGrid}>
                <label className={css.radioLabel}>
                  <span className={css.oval}></span>
                  <span>Credit Card</span>
                  <Field
                    className={css.inputRadio}
                    type="radio"
                    name="payment"
                    value="credit"
                  />
                </label>

                <label className={css.radioLabel}>
                  <span className={css.oval}></span>
                  <span>PayPal</span>
                  <Field
                    className={css.inputRadio}
                    type="radio"
                    name="payment"
                    value="paypal"
                  />
                </label>
              </div>
            </div>
          </Form>
        </Formik>
        <OrderSummary />
      </div>
      <Feature />
    </div>
  );
}

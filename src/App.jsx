import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CheckoutPage from "./pages/CheckoutPage";
import css from "./App.module.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className={css.main}>
        <Routes>
          <Route path="/" element={<CheckoutPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

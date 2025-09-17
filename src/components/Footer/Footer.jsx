import css from "./Footer.module.css";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.footerInfo}>
        <div className={css.footerList}>
          <h4>Shopdoc</h4>
          <p className={css.footerText}>
            High quality and trusted
            <br />
            medical shop service
          </p>
        </div>
        <div className={css.footerList}>
          <h4>About us</h4>
          <a className={css.about}href="#">Who We Are</a>
          <a href="#">Vission &amp; Mission</a>
          <a href="#">Core Values</a>
          <a href="#">Quality Policy</a>
        </div>
        <div className={css.footerList}>
          <h4>FAQ</h4>
          <a href="#">FAQ</a>
        </div>
        <div className={css.footerList}>
          <h4>Blog</h4>
          <a href="#">Blog</a>
        </div>
        <div className={css.footerList}>
          <h4>Contact us</h4>
          <p className={css.footerText}>Get in touch is easy</p>
          <p className={css.footerText}>Follow us</p>
          <div className={css.socials}>
            <a href="#">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="Twitter" />
            </a>
            <a href="#">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <p className={css.footerCopyright}>
        Copyrights © 2021 Shopdoc. All Rights Reserved.
      </p>
    </footer>
  );
}

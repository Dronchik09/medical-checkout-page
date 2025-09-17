import css from "./Feature.module.css";
import medalIcon from "../../assets/icons/37.svg";
import shieldIcon from "../../assets/icons/48.svg";
import phoneIcon from "../../assets/icons/86.svg";
export default function Feature() {
  return (
    <div className={css.featureContainer}>
      <div className={css.featureMedal}>
        <img className={css.borderIcon} src={medalIcon} alt="Medal Icon" />
        <h3 className={css.featureTitle}>Best for health</h3>
        <p className={css.featureDescription}>
          Good for your health and quality <br />
          guaranteed
        </p>
      </div>
      <div className={css.featureMedal}>
        <img className={css.borderIcon} src={shieldIcon} alt="Shield Icon" />
        <h3 className={css.featureTitle}>Safe and quality</h3>
        <p className={css.featureDescription}>
          The best quality with the best <br /> traditional ingredients
        </p>
      </div>
      <div className={css.featureMedal}>
        <img className={css.borderIcon} src={phoneIcon} alt="Phone Icon" />
        <h3 className={css.featureTitle}>Online Support</h3>
        <p className={css.featureDescription}>
          Online complaint service for 24 hours <br />
          without stopping
        </p>
      </div>
    </div>
  );
}

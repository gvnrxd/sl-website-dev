import styles from "./index.module.css";

// Components
import ProductCard from "@components/ourProducts/productCard/index.jsx";

// Icons
import PaperIcon from "@icons/paper.jsx";
import UpTrendIcon from "@icons/upTrend.jsx";
import ShieldIcon from "@icons/shield.jsx";
import ClockIcon from "@icons/clock.jsx";

export default function OurProducts() {
  return (
    <>
      <div className="pageHeader">
        <h2>Our Products</h2>
        <p>
          Comprehensive life insurance solutions designed for every stage of
          life
        </p>
      </div>
      <div className={styles.content}>
        <ProductCard
          icon={PaperIcon}
          title="Final Expense"
          desc="Affordable coverage to hep your loved ones with end-of-life expenses"
          color="var(--blue5)"
        />
        <ProductCard
          icon={UpTrendIcon}
          title="Indexed Universal"
          desc="Growth potential linked to market performance with downside protection"
          color="var(--green)"
        />
        <ProductCard
          icon={ShieldIcon}
          title="Simplified IUL "
          desc="Easy approval process with no medical exam required for qualified applicants"
          color="var(--blue5)"
        />
        <ProductCard
          icon={ClockIcon}
          title="Term Life"
          desc="Pure protection for a specified period at the most affordable rates"
          color="var(--green)"
        />
      </div>
    </>
  );
}

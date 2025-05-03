import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landing}>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <p>Watch anywhere. Cancel anytime.</p>
      <button>Get Started</button>
    </div>
  );
};

export default LandingPage;

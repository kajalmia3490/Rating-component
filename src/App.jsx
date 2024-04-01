import styles from "./App.module.css";
import Rating from "./components/rating/Rating";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Give your rate</h1>
      <div className={styles.ratingStar}>
        <Rating />
      </div>
    </div>
  );
}

export default App;

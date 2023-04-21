import {
  Navbar,
  Infobar,
  Banner,
  Sidebar,
  Categories,
  Checkout,
  Appetizer,
} from "./components";
import styles from "./style";

const App = () => {
  return (
    <>
      <section className={styles.boxWidth}>
        <Navbar />
      </section>
      <Infobar />
      <Banner />
      <Sidebar />
      <Categories />
      <Appetizer />
      <Checkout />
    </>
  );
};

export default App;

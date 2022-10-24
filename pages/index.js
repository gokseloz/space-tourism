import Layout from "../components/Layout/Layout";
import styles from "./Home.module.css";
import HomeBody from "../components/HomeBody/HomeBody";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Layout>
        <HomeBody />
      </Layout>
    </div>
  );
}

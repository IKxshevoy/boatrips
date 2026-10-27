import Loader from "@/components/loader/Loader";
import Waves from "@/components/loader/Waves";
import styles from "@/components/loader/pageLoader.module.scss";

// Shown by Next.js as the Suspense fallback while a route segment loads
// (i.e. on navigation between pages).
const Loading = () => (
  <div className={styles.overlay}>
    <Loader />
    <Waves />
  </div>
);

export default Loading;

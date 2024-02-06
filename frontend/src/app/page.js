import styles from "./page.module.css";
import Users from './Users'

export default function Home() {
  return (
    <main className={styles.main}>
      <Users/>
    </main>
  );
}

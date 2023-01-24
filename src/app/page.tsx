import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.header}>The Year</h2>
      <div className={styles.months}>
        {Array.from(Array(12).keys()).map((item) => {
          return (
            <div className={styles.monthItem} key={item}>
              <span className={styles.monthName}>
                {(item + 1).toString().padStart(2, "0")}
              </span>
              <div className={styles.days}>
                {Array.from(Array(30).keys()).map((item) => {
                  return <div key={item}>🔺</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

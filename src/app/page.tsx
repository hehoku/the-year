import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>The Year</h2>
      <div className={styles.months}>
        {Array.from(Array(12).keys()).map((item) => {
          return (
            <div key={item}>
              <span>{item + 1}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}

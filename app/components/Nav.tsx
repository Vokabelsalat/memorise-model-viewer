"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Instruments */
import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/scene1"
      >
        Scene 1
      </Link>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/scene2"
      >
        Scene 2
      </Link>
    </nav>
  );
};

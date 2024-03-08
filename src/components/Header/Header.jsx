import Link from "next/link";
import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href={"/"}>home</Link>
        <Link href={"/writing"}>writing</Link>
        <Link href={"/cv"}>cv</Link>
      </nav>
    </header>
  );
}

export default Header;

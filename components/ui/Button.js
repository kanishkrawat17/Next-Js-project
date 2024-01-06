import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

const Button = (props) => {
  const { link, children, onClick } = props;

  return link ? (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={styles.btn}>{children}</button>
  );
};

export default Button;

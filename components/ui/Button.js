import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

const Button = (props) => {
  const { link, children } = props;
  
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
};

export default Button;

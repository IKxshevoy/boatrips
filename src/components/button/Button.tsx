import Link from 'next/link'
import React from 'react'
import styles from "./button.module.css"

interface ButtonProps {
  url: string
}

const Button = ({url}: ButtonProps) => {
  return (
    <Link href={url} className={styles["button"]}>Read More</Link>
  )
}

export default Button
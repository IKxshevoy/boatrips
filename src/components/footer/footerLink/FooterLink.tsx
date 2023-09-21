import { LinkItem } from '@/components/footer/Footer.js';
import styles from './footerLink.module.scss'
import Link from 'next/link.js';
import React from 'react';

export const FooterLink: React.FC<LinkItem> = ({ label, href }) => (
  <li>
    <Link href={href} className={styles.listItem}>
      {label}
    </Link>
  </li>
);
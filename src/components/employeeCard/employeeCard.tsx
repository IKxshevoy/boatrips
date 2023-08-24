import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { FC } from 'react';
import styles from './employeeCard.module.scss'

export interface WorkerCardProps {
  name: string,
  img: string | StaticImport,
  description: string
}

export const EmployeeCard: FC<WorkerCardProps> = ({img, name, description}) => {
  return <div className={styles.employeeCard}>
    <div className={styles.withoutDesc}>
      <Image src={img} alt="image" width={50} height={70}/>
      <span className={styles.name}>{name}</span>
    </div>
    <span className={styles.desc}>{description}</span>
  </div>
}
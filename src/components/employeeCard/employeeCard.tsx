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
  return (
    <div className={styles.card}>
      <Image src={img} alt="image" width={50} height={70}/>
      <h2>{name}</h2>
      <span>{description}</span>
    </div>
  )
}
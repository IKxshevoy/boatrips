import styles from './title.module.scss';
import { FC } from 'react';

export interface ITitle {
  title: string,
  bgPicture?: string
}
export const Title: FC<ITitle> = ({title, bgPicture}) => {
  return (
    <h2 className={styles.title} style={{backgroundImage: `url(${bgPicture || 'bg_title.webp'})`}}>
      {title}
    </h2>
  )
}
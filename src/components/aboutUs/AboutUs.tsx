import { EmployeesList } from '@/components/employeesList/employeesList';
import styles from './aboutUs.module.scss'

export const AboutUs = () => {
  return(
    <div className={styles.aboutsUs}>
      <h2>About us</h2>
      <div className={styles.info}>Boatrips is a Portuguese company based in Lagos since 2000. We offer different types of experiences such as the traditional boat trip to the caves and rock formations of Ponta da Piedade, coastal tours with snorkeling, cave trips, and dolphin watching tours.
        At Boatrips, we take great pride in the quality and variety of tours we offer. When visitors book a tour with us, they are not only booking a Lagos boat trip, they are booking an experience. Therefore, in order to have the best experience possible, attention to detail is of the utmost importance.</div>
      <EmployeesList />
    </div>
  )
}
import { EmployeeCard } from '@/components/employeeCard/employeeCard';
import styles from './employeesList.module.scss'
const employees = [
  {
    name: "Anna",
    img: "/employee.jpg",
    description: "Hey there! I'm Anna, and I absolutely adore working as a guide on boats"
  },
  {
    name: "Maxim",
    img: "/employee.jpg",
    description: "I feel free and strong. I love teaching our clients how to navigate the boat, sharing my expertise."
  },
  {
    name: "Elena",
    img: "/employee.jpg",
    description: "My job is to teach our clients to enjoy the sea, feel its rhythm and harmony. It's just an incredible feeling!"
  },
  {
    name: "Ivan",
    img: "/employee.jpg",
    description: "Hello! I'm Ivan, the mechanic and technical specialist. Sea adventures are my calling. I ensure that our boats are always in perfect condition"
  }
];

export const EmployeesList = () => {
  return <div className={styles.employeesList}>{employees.map(employee => <EmployeeCard name={employee.name} img={employee.img} description={employee.description} />)}</div>
}
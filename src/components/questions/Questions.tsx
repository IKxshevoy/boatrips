import React from "react";
import styles from "./questions.module.scss";
import Accordion from "./accordion/AccordionContactForm";
import ContactForm from "./contactForm/ContactForm";

const questions = [
  {
    title: "What should I bring on a boat trip?",
    content:
      "You should bring essentials like sunscreen, a hat, sunglasses, a swimsuit, a towel, a reusable water bottle, and any personal medications. Don't forget your identification, such as a driver's license or passport, and cash for expenses.",
    id: 0,
  },
  {
    title: "How can I prevent seasickness?",
    content:
      "To prevent seasickness, consider taking over-the-counter motion sickness medication or using acupressure wristbands. Avoid heavy meals before the trip, stay hydrated, and focus on the horizon. If you're prone to seasickness, consult a doctor for prescription medication or patches.",
    id: 1,
  },
  {
    title: "What's the best time for a boat trip?",
    content:
      "The best time for a boat trip depends on your destination and preferences. In general, summer and early fall offer pleasant weather for boat outings. However, it's essential to check local weather conditions and seasonal variations for your specific location.",
    id: 2,
  },
  {
    title: "Are life jackets provided on the boat?",
    content:
      "Most responsible boat operators provide life jackets or personal flotation devices (PFDs) for passengers. It's a safety requirement. Ensure that you wear your life jacket properly when instructed or when you feel it's necessary for your safety.",
    id: 3,
  },
  {
    title: "What happens in case of bad weather during the trip?",
    content:
      "In case of bad weather, boat captains prioritize passenger safety. They may choose to delay the trip, alter the route, or even cancel it if conditions are unsafe. It's important to follow the captain's instructions and be prepared for possible schedule changes.",
    id: 4,
  },
];

const Questions = () => {
  return (
    <>
    <h2 className={styles.title}>Frequently asked questions</h2>
      <div className={styles.container}>
        <div className={styles.accordionContainer}>
          {questions.map(({ title, content, id }) => (
            <Accordion title={title} content={content} key={id} />
          ))}
        </div>
        <ContactForm/>
      </div>
    </>
  );
};

export default Questions;

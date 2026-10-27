import type { ReviewType } from "./tours";

export interface Review {
  id: number;
  /** visit date */
  title: string;
  imageUrl: string;
  name: string;
}

export const reviewsData: Record<ReviewType, Review[]> = {
  classic: [
    {
      title: "September 3, 2023",
      imageUrl: "/classic/5.webp",
      id: 0,
      name: "Kelly Calaça",
    },
    {
      title: "July 16, 2023",
      imageUrl: "/classic/19.webp",
      id: 1,
      name: "Neil B",
    },
    {
      title: "June 29, 2023",
      imageUrl: "/classic/11.webp",
      id: 2,
      name: "Fiona A",
    },
    {
      title: "June 29, 2023",
      imageUrl: "/classic/4.webp",
      id: 3,
      name: "Mina M",
    },
    {
      title: "June 19, 2023",
      imageUrl: "/classic/16.webp",
      id: 4,
      name: "Monika Z",
    },
  ],
  coastline: [
    {
      title: "August 16, 2021",
      imageUrl: "/coastline/1.webp",
      id: 0,
      name: "Cary",
    },
    {
      title: "July 6, 2020",
      imageUrl: "/coastline/2.webp",
      id: 1,
      name: "Diana",
    },
    {
      title: "September 2, 2019",
      imageUrl: "/coastline/10.webp",
      id: 2,
      name: "Subhodeep",
    },
    {
      title: "August 4, 2023",
      imageUrl: "/coastline/8.webp",
      id: 3,
      name: "Cathy",
    },
    {
      title: "June 19, 2023",
      imageUrl: "/coastline/6.webp",
      id: 4,
      name: "Tom",
    },
  ],
  benagil: [
    {
      title: "September 5, 2024",
      imageUrl: "/benagil/1.webp",
      id: 0,
      name: "Zara",
    },
    {
      title: "July 6, 2020",
      imageUrl: "/benagil/3.webp",
      id: 1,
      name: "Sebastian",
    },
    {
      title: "April 27, 2024",
      imageUrl: "/benagil/6.webp",
      id: 2,
      name: "Angie",
    },
    {
      title: "July 14, 2023",
      imageUrl: "/benagil/8.webp",
      id: 3,
      name: "Peter",
    },
    {
      title: "July 10, 2023",
      imageUrl: "/benagil/5.webp",
      id: 4,
      name: "Helen",
    },
  ],
  sunset: [
    {
      title: "September 4, 2024",
      imageUrl: "/sunset/11.webp",
      id: 0,
      name: "James",
    },
    {
      title: "September 21, 2024",
      imageUrl: "/sunset/2.webp",
      id: 1,
      name: "Shelbi",
    },
    {
      title: "July 30, 2024",
      imageUrl: "/sunset/8.webp",
      id: 2,
      name: "Fawn",
    },
    {
      title: "August 29, 2023",
      imageUrl: "/sunset/9.webp",
      id: 3,
      name: "Sandra",
    },
    {
      title: "July 14, 2019",
      imageUrl: "/sunset/10.webp",
      id: 4,
      name: "Trina",
    },
  ],
};

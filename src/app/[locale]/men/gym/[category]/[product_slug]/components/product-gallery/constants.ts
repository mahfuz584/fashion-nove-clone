import { RatingOptionsType } from "../types";

export const previewImg = [
  {
    id: "1",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    imgSrc:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    imgSrc:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1675186049222-0b5018db6ce9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    imgSrc:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    imgSrc:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const ratingOptions: RatingOptionsType[] = [
  { value: "all", label: "All", hasNotRating: true },
  { value: 5, label: "5" },
  { value: 4, label: "4" },
  { value: 3, label: "3" },
  { value: 2, label: "2" },
  { value: 1, label: "1" },
];

export const ratingSortOptions = [
  { value: "highest", label: "HIGHEST RATED" },
  { value: "recent", label: "RECENT RATED" },
  { value: "helpful", label: "MOST HELPFUL" },
  { value: "lowest", label: "LOWEST RATED" },
];

export const reviewsOptions = [
  {
    id: 1,
    rating: 4.6,
    name: "Troublejammie",
    date: "March 31, 2024",
    title: "Nice camo pants",
    size: "40",
    review:
      "I been looking for some camo pants for a while now finally found some @ great price and great quality to go with it.",
    helpful: 1,
  },
  {
    id: 2,
    rating: 5,
    name: "Kenneth D.",
    date: "March 8, 2026",
    title: "PANTS FIT GREAT",
    size: "40",
    review: "PANTS FIT GREAT",
    helpful: 0,
  },
  {
    id: 3,
    rating: 4,
    name: "Kaila B.",
    date: "February 25, 2026",
    title: "Nice",
    size: "34",
    review:
      "My man wears 34x32 but they were too long. He still like them though",
    helpful: 2,
  },
  {
    id: 4,
    rating: 5,
    name: "John M.",
    date: "January 20, 2026",
    title: "Great quality",
    size: "38",
    review: "Very good material and comfortable fit.",
    helpful: 3,
  },
  {
    id: 5,
    rating: 4,
    name: "Mike R.",
    date: "December 18, 2025",
    title: "Good purchase",
    size: "36",
    review: "Nice camo design and durable fabric.",
    helpful: 1,
  },
  {
    id: 6,
    rating: 5,
    name: "Alex P.",
    date: "November 2, 2025",
    title: "Perfect fit",
    size: "34",
    review: "Fits exactly how I expected. Comfortable and stylish.",
    helpful: 2,
  },
  {
    id: 7,
    rating: 4,
    name: "Sarah K.",
    date: "October 10, 2025",
    title: "Solid pants",
    size: "32",
    review: "Good fabric quality and looks great with boots.",
    helpful: 0,
  },
  {
    id: 8,
    rating: 5,
    name: "Daniel T.",
    date: "September 22, 2025",
    title: "Love these",
    size: "38",
    review: "Super comfortable and the camo design looks awesome.",
    helpful: 4,
  },
  {
    id: 9,
    rating: 4,
    name: "Chris L.",
    date: "August 14, 2025",
    title: "Nice material",
    size: "36",
    review: "Material feels durable and breathable.",
    helpful: 1,
  },
  {
    id: 10,
    rating: 5,
    name: "Anthony W.",
    date: "July 30, 2025",
    title: "Worth the price",
    size: "40",
    review: "Great value for money. Will buy another pair.",
    helpful: 3,
  },
  {
    id: 11,
    rating: 4,
    name: "David S.",
    date: "June 18, 2025",
    title: "Comfortable",
    size: "34",
    review: "Very comfortable for daily wear.",
    helpful: 1,
  },
  {
    id: 12,
    rating: 5,
    name: "Robert H.",
    date: "May 5, 2025",
    title: "Excellent pants",
    size: "38",
    review: "Quality exceeded expectations.",
    helpful: 2,
  },
  {
    id: 13,
    rating: 4,
    name: "Mark J.",
    date: "April 12, 2025",
    title: "Pretty good",
    size: "36",
    review: "Good overall but slightly long.",
    helpful: 0,
  },
  {
    id: 14,
    rating: 5,
    name: "Steven B.",
    date: "March 28, 2025",
    title: "Great purchase",
    size: "40",
    review: "Looks great and feels strong.",
    helpful: 2,
  },
  {
    id: 15,
    rating: 4,
    name: "Kevin R.",
    date: "February 11, 2025",
    title: "Nice design",
    size: "34",
    review: "Really like the camo pattern and fit.",
    helpful: 1,
  },
];

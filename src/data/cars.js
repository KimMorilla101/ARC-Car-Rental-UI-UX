export const cars = [
  {
    id: 1,
    name: "Toyota RAV4",
    type: "SUV",
    seats: 5,
    doors: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 2450,
    tag: "Most Rented",
    image:
      "https://images.unsplash.com/photo-1568844293986-8c3c3f5b5f31?auto=format&fit=crop&w=900&q=85",
    description:
      "Confident, comfortable, and ready for long weekends or city escapes.",
  },
  {
    id: 2,
    name: "Honda Civic",
    type: "Sedan",
    seats: 5,
    doors: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 2100,
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85",
    description:
      "A smooth, refined drive with thoughtful space for every passenger.",
  },
  {
    id: 3,
    name: "Ford Everest",
    type: "Premium SUV",
    seats: 7,
    doors: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    price: 3800,
    tag: "High Demand",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85",
    description: "Premium comfort and generous room for the whole crew.",
  },
  {
    id: 4,
    name: "Toyota Vios",
    type: "Economy",
    seats: 5,
    doors: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    price: 1800,
    tag: "Best value",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=85",
    description: "Efficient, easy to drive, and perfect for everyday travel.",
  },
];

export const money = (amount) => `₱${amount.toLocaleString()}`;

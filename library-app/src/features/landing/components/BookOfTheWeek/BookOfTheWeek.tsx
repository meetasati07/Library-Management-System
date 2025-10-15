import React from "react";
import "./BookOfTheWeek.css";
import { BookInfo } from "../../../book";

export const BookOfTheWeek: React.FC = () => {
  return (
    <div className="book-of-the-week">
      <h1>Book of the Week:</h1>
      <BookInfo
        book={{
          _id: "1234",
          barcode: "1234",
          cover:
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579621267i/968.jpg",
          title: "The Da Vinci Code",
          authors: ["Dan Brown"],
          description:
            "While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter.Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret. Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever.",
          subjects: ["Suspense & Thriller", "Spiritual Fiction"],
          publicationDate: new Date("2025-10-15"),
          publisher: "some publisher",
          pages: 100,
          genre: "Fiction",
          records: [],
        }}
      />
    </div>
  );
};

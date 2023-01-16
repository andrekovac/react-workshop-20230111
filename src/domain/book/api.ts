import { Book } from "./Book";

export const fetchBooks = async (): Promise<Book[] | undefined> => {
  try {
    const response = await fetch("http://localhost:4730/books");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

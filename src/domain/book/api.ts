import { Book } from "./Book";

/**
 * Generic function to fetch any data from a given URL
 * If no URL is provided, it will default to the bookMonkey API
 */
export const fetchAnyData = async (
  url: string = "http://localhost:4730/books"
): Promise<Book[] | undefined> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchBook = async (isbn: string) => {
  const response = await fetch("http://localhost:4730/books/" + isbn);
  const data = await response.json();
  return data as Book;
};

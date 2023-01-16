import { useState, useEffect, useCallback } from "react";
import { Book } from "./Book";
import { fetchAnyData } from "./api";

export const useBooks = (url: string = "http://localhost:4730/books") => {
  const [books, setBooks] = useState<Book[]>([]); // === useState hook uses strict equality to compare the previous and next state.

  console.log("useBooks() called.");

  /**
   * useCallback hook is used to memoize the fetchData function.
   */
  const fetchData = useCallback(async () => {
    try {
      const books = await fetchAnyData(url);
      if (books) {
        setBooks(books);
      }
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  // const fetchData = async () => {
  //   try {
  //     const books = await fetchAnyData(url);
  //     if (books) {
  //       setBooks(books);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    fetchData();
  }, [fetchData]); // === useEffect hook uses strict equality

  const fetchBooksNow = () => {
    fetchData();
  };

  return { books, fetchBooksNow };
};

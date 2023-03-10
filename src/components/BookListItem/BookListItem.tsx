import { useState } from "react";
import { Book } from "../../domain/book";
import { LikeCounter } from "../LikeCounter";
import { Hideable } from "../Hideable";
import { NavLink } from "react-router-dom";

export interface BookListItemProps {
  book: Book;
}
export const BookListItem = ({ book }: BookListItemProps) => {
  const isFree = book.price === "$0.00";

  const [numLikes, setNumLikes] = useState(0);

  return (
    <div>
      <NavLink to={`/books/${book.isbn}`}>
        <h2 style={{ textDecoration: isFree ? "underline" : "none" }}>
          {numLikes >= 5 && <span> &#11088; </span>}
          {book.title}
          {isFree && <span> &#x1F4B0;</span>}
        </h2>
      </NavLink>
      <h3>{book.subtitle}</h3>
      <div>by {book.author}</div>
      <div>
        <LikeCounter count={numLikes} setCount={setNumLikes} />
      </div>
      <Hideable hideInitially>{book.abstract}</Hideable>
    </div>
  );
};

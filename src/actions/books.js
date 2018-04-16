import { normalize } from "normalizr";
import { BOOKS_FETCHED, 
    BOOK_CREATED
 } from "../types";
import api from "../api";
import { bookSchema } from "../schemas";

// data.entities.books

const booksFetched = data => ({  type: BOOKS_FETCHED,  data});
const bookCreated = data => ({  type: BOOK_CREATED,  data});

export const fetchBooks = () => dispatch =>
  api.books.fetchAll().then(books =>
                              { dispatch(booksFetched(normalize(books, [bookSchema])));
                                console.log('all the books of this user', normalize(books, [bookSchema]));
                              }
                          );
  //dispatch is required because we want the result to place in out redux store
  //books passed to booksFetched---so wee need to have it from api file--and it should be normalized


export const createBook = data => dispatch =>
  api.books.create(data).then(book => dispatch(bookCreated(normalize(book, bookSchema))));
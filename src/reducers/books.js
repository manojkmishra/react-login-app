import { createSelector } from "reselect";
import {  BOOKS_FETCHED } from "../types";
import {  BOOK_CREATED } from "../types";

export default function books(state = {}, action = {}) 
{  switch (action.type) { case BOOKS_FETCHED:  return { ...state, ...action.data.entities.books };
                          case BOOK_CREATED:  return { ...state, ...action.data.entities.books };
                          default:  return state;
                        }
}
// SELECTORS
export const booksSelector = state => state.books;  //takes state and returns state.books from reducer ie state = {}
//now below one will use this selector and convert it to array
export const allBooksSelector = createSelector(booksSelector, booksHash => Object.values(booksHash) );
//so booksSelector will be converted to booksHash => Object.values(booksHash)
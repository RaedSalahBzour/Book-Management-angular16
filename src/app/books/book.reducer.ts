import { createReducer, on } from '@ngrx/store';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from './book.actions';

export const initialState: Book[] = [];
export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state, { id, title, author }) => [
    ...state,
    { id, title, author },
  ]),
  on(RemoveBook, (state, { bookId }) => state.filter((b) => b.id !== bookId))
);

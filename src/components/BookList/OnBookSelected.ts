import { Book } from '../../domain/books';

export interface OnBookSelected {
  (book: Book): void;
}

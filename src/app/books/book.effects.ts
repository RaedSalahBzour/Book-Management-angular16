import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as bookActions from './book.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
@Injectable()
export class BookEffects {
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookActions.AddBook),
      mergeMap((action) =>
        this.bookService.addBook(action).pipe(
          map((book) => bookActions.AddBookSuccess(book)),
          catchError((error) => of(bookActions.AddBookFailure({ error })))
        )
      )
    )
  );

  constructor(private bookService: BookService, private actions$: Actions) {}
}

# Booklist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3 and Ngrx.

## Assumptions
1. There is no backend service/ browser local storage to store the book list. Each new book won't be saved, and therefore the list will be gone once the user reloads the page. 
2. There is no UI widget to allow users input book ID. So I assume every time the user submits the form, an auto number will be added to Book entity as the unique identifier. Hence, it doesn't support checking whether the current book has already existed in the list below.

## Comments
I am using Angular7+Ngrx to implement this demo. Since the scenario seems simple and straightforward, I don't use Ngrx/effects, but I'd like to demonstrate it if required.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

import BookFileManager from './BookFileManager';
import MenuHandler from './MenuHandler';
import Book from './Book';
import readline from 'readline-sync';
import { UserActions } from './UserActions';

export default class BookManagement {
    private bookFileManager: BookFileManager;
    private menuHandler: MenuHandler;

    constructor(absolutePath: string) {
        this.bookFileManager = new BookFileManager(absolutePath);
        this.menuHandler = new MenuHandler();
    }

    userMenuController(): void {
        let isContinue: boolean = true;

        while (isContinue) {
            this.menuHandler.printUserMenu();
            let userSelection: number = this.menuHandler.getUserSelection();

            switch (userSelection) {
                case 1:
                    this.addBook();
                    break;
                case 2:
                    this.printFoundBook();
                    break;
                case 3:
                    this.updateBook();
                    break;
                case 4:
                    this.deleteBook();
                    break;
                case 5:
                    this.printBooksList();
                    break;
                case 0:
                    console.log('\t\nThank for using. See you again.\n');
                    isContinue = false;
                    break;
            }
        }

    }

    addBook(): void {
        const newBook: Book = this.inputBookInfo(UserActions.Add);
        const currentBooksList: Book[] = this.bookFileManager.readBooksListFromFile();

        currentBooksList.push(newBook);
        this.bookFileManager.saveBooksListToFile(currentBooksList);
        console.log('\t\nThe book is saved into DB with info: ' + newBook);
    }

    printFoundBook(): void {
        const findingBookISBN: string = readline.question('Please input ISBN: ');
        const book: Book | null = this.findBook(findingBookISBN);

        if (book === null) {
            console.log(`\t\nThe book with ISBN ${findingBookISBN} is not found\n`);
        } else {
            console.log(book);
        }
    }

    updateBook(): void {
        let currentBooksList: Book[] = this.bookFileManager.readBooksListFromFile();
        const targetBookISBN: string = readline.question('Please input target ISBN: ');

        if (this.findBook(targetBookISBN) === null) {
            console.log(`\t\nThe book with ISBN ${targetBookISBN} is not found\n`);
        } else {
            const updatingBook: Book = this.inputBookInfo(UserActions.Update);

            currentBooksList = currentBooksList.map(book => book.getISBN() === targetBookISBN ? updatingBook : book);
            this.bookFileManager.saveBooksListToFile(currentBooksList);
            console.log('\t\nThe book is now updated with new content: ' + updatingBook);
        }
    }

    deleteBook(): void {
        const currentBooksList: Book[] = this.bookFileManager.readBooksListFromFile();
        const targetBookISBN: string = readline.question('Please input ISBN: ');
        const isBookFound: boolean = currentBooksList.some(book => book.getISBN() === targetBookISBN);

        if (isBookFound) {
            const updatedBooksList: Book[] = currentBooksList.filter(book => book.getISBN() !== targetBookISBN);
            this.bookFileManager.saveBooksListToFile(updatedBooksList);
            console.log(`\t\nThe book with ISBN '${targetBookISBN}' is deleted from DB.\n`);
        } else {
            console.log(`\t\nThe book with ISBN ${targetBookISBN} is not found.\n`);
        }
    }

    printBooksList(): void {
        const bookList: Book[] = this.bookFileManager.readBooksListFromFile();
        let bookTemplate: string = '';

        bookList.forEach((book, index) => {
            bookTemplate += `Book ${index + 1}: ${book.getTitle()}
            ISBN: ${book.getISBN()}
            Author: ${book.getAuthor()}
            Year: ${book.getYear()}\n\n`;
        });

        console.log(bookTemplate);
    }

    inputBookInfo(action: UserActions): Book {
        let bookISBN: string = readline.question(action === UserActions.Add ? 'Please input ISBN: ' : 'Please input new ISBN: ');

        while (action === UserActions.Add && this.findBook(bookISBN) !== null) {
            console.log(`\t\nThe ISBN ${bookISBN} is existing. Please use the new one!\n`);
            bookISBN = readline.question('Please input ISBN: ');
        }

        const bookTitle: string = readline.question(action === UserActions.Add ? 'Please input title: ' : 'Please input new title: ');
        const bookAuthor: string = readline.question(action === UserActions.Add ? 'Please input author: ' : 'Please input new author: ');
        const bookYear: string = readline.question(action === UserActions.Add ? 'Please input year: ' : 'Please input new year: ');

        return new Book(bookISBN, bookTitle, bookAuthor, bookYear);
    }

    findBook(findingBookISBN: string): Book | null {
        const currentBooksList: Book[] = this.bookFileManager.readBooksListFromFile();
        const foundBook: Book | undefined = currentBooksList.find(book => book.getISBN() === findingBookISBN);

        return foundBook ? foundBook : null;
    }

}

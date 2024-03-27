import fs from 'fs';
import Book from './Book';

export default class BookFileManager {
    private readonly filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    readBooksListFromFile(): Book[] {
        console.log(`\t\n[INFO] Reading file from ${this.filePath}\n`);
        const bookList: Book[] = [];

        try {
            const fileData = fs.readFileSync(this.filePath, 'utf-8');
            const lines = fileData.split('\n');

            lines.forEach((line) => {
                const bookData = line.split(';');
                const book = new Book(bookData[0], bookData[1], bookData[2], bookData[3]);
                bookList.push(book);
            });
        } catch (error) {
            console.log(`\t\n[ERR] Error reading file: ${(error as Error).message}\n`);
        }

        return bookList;
    }

    saveBooksListToFile(bookList: Book[]): void {
        try {
            const dataLines = bookList.map(book => `${book.getISBN()};${book.getTitle()};${book.getAuthor()};${book.getYear()}`);
            fs.writeFileSync(this.filePath, dataLines.join('\n'));
        } catch (error) {
            console.log(`\t\n[ERR] Error writing file: ${(error as Error).message}\n`);
        }
    }

}

export default class Book {

    private ISBN: string;
    private title: string;
    private author: string;
    private year: string;

    constructor(ISBN: string, title: string, author: string, year: string) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getISBN(): string {
        return this.ISBN;
    }

    setISBN(ISBN: string): void {
        this.ISBN = ISBN;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    getAuthor(): string {
        return this.author;
    }

    setAuthor(author: string): void {
        this.author = author;
    }

    getYear(): string {
        return this.year;
    }

    setYear(year: string): void {
        this.year = year;
    }

}

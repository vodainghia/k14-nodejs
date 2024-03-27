import readline from 'readline-sync';

export default class MenuHandler {
    getUserSelection(): number {
        try {
            return readline.questionInt('Please input your selection: ');
        } catch (error) {
            console.log('\t\nInvalid selection. Please enter a valid integer!\n');
            return this.getUserSelection();
        }
    }

    printUserMenu(): void {
        const userMenu = `
            ============ Book Management Program (CRUD) ============
            1. New book
            2. Find a book(ISBN)
            3. Update a book
            4. Delete a book
            5. Print the book list
            0. Exit
        `;
        console.log(userMenu);
    }

}

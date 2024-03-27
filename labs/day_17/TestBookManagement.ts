import BookManagement from './services/BookManagement';
import path from 'path';

const relativePath = '/booksDB.txt';
const absolutePath = path.join(__dirname, relativePath);
const bookManagement = new BookManagement(absolutePath);

bookManagement.userMenuController();

// Name: Marcus Landry/100646671
// Date: February 19, 2025

export default class Book {
    constructor(id, title, author, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.hidden = false; // Track visibility
    }
}
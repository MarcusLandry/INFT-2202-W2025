// Name: Marcus Landry/100646671
// Date: February 19, 2025

import books from "../data/books.js";

export default class UI {
    static displayBooks() {
        const list = document.querySelector("#book-list");
        
        // Clear existing content
        list.innerHTML = "";

        // Loop through books array
        books.forEach(book => {
            // Only display non-hidden books
            if (!book.hidden) {
                // Create table row
                const row = document.createElement("tr");

                // Create and append table cells
                const titleCell = document.createElement("td");
                titleCell.textContent = book.title;
                row.appendChild(titleCell);

                const authorCell = document.createElement("td");
                authorCell.textContent = book.author;
                row.appendChild(authorCell);

                const genreCell = document.createElement("td");
                genreCell.textContent = book.genre;
                row.appendChild(genreCell);

                // Create toggle visibility button
                const actionCell = document.createElement("td");
                const toggleButton = document.createElement("button");
                toggleButton.className = "btn btn-warning btn-sm";
                toggleButton.textContent = "Hide";
                toggleButton.addEventListener("click", () => {
                    book.hidden = !book.hidden;
                    UI.displayBooks();
                });
                actionCell.appendChild(toggleButton);
                row.appendChild(actionCell);

                // Append row to table
                list.appendChild(row);
            }
        });
    }
}

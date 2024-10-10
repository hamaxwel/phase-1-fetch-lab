function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => renderBooks(data))
    .catch((error) => console.error("Error fetching books:", error)); // Optional: Error handling
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");
  if (!bookList) {
    console.error("Book list element not found!");
    return; // Exit if the element is not found
  }

  books.forEach((book) => {
    const listItem = document.createElement("li");
    listItem.textContent = book.name; // Ensure the property exists
    bookList.appendChild(listItem);
  });
}

// Call fetchBooks when the page loads
document.addEventListener("DOMContentLoaded", fetchBooks);


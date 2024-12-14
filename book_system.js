let books = [];

function addBook(){
    // Data collection and validation
    const bookName = document.getElementById('bookName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const authorName = document.getElementById('authorName').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if(bookName && bookDescription && authorName && !isNaN(pagesNumber)){
        // Creating a book object
        const book = {
            name : bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber:pagesNumber
        };
        alert('Book Added');
        books.push(book);
        showbooks();
        clearInputs();
        /*
        Display and clear: After adding the book, the showbooks() function is called to update the display with the newly added book details. 
        Additionally, the clearInputs() function is invoked to reset all input fields, providing a clean interface for the user to add another book without manual clearing of previous inputs.
        */
    }
    else{
        alert('Please fill in all fiedls correctly');
    }
}

//  function to show book details in the management system
function showbooks(){
    const booksDiv = books.map((book,index) => `<h1>book Number: ${index + 1}</h1>
      <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>` 
);
document.getElementById('books').innerHTML = booksDiv.join('');
}

// clearInputs function to clear the book details in the management system.
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}















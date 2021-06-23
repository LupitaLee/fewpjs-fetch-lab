function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetchedBooks = fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  
  // .then(json => console.log(json))
  .then(json => renderBooks(json))
  // .catch((err) => {
  //   console.log(err)
  // })
 return fetchedBooks;


}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); 
  
  
});







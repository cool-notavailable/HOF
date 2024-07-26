const books = [
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    year: 2010,
  },
  {
    title: "Geetanjali",
    author: "Rabindra Nath Tagore",
    year: 1997,
  },
  {
    title: "Crime and Punishment",
    author: "Dostoevsky",
    year: 1993,
  },
];

const filteredBooks = books.filter((book) => {
  return book.year >= 2010;
});

const result = filteredBooks.map((book) => {
  return {
    ...book,
    author: book.author.toUpperCase(),
  };
});

console.log(result);

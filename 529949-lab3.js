/**array of books, each block has the tittle, author, and year */

function getBookTitlesByYear (books){

    let titlesByYear = {}; /**an empty array*/

    for (const book of books) {
        
        let year = book.year;

        let title = book.title;
        
      
        if ( titlesByYear[year]) {
            titlesByYear[year] = [];
        }
        else{
            titlesByYear[year]=(title);
        }
        
      }



    return titlesByYear;
}


const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
];
const titlesByYearResult = getBookTitlesByYear(books);

for (const year in titlesByYearResult) {
    console.log(year + ": [\"" +titlesByYearResult[year]+"\"]");
   
}



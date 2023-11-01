

// const displayBook = function(data){

// const 

// }




// $.ajax({
//     method: "Fetch",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function(data) {
//       console.log(data);
//     }
//   })

  
  
  function fetch(queryType ,queryValue) {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`;
    
    console.log(apiUrl)

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(bookData) {
          // console.log(bookData)
          for(let i=0; i<bookData.items.length;i++){
          console.log('Book Title:', bookData.items[i].volumeInfo.title);
          console.log('Author(s):', bookData.items[i].volumeInfo.authors);
          console.log('Publish Date:', bookData.items[i].volumeInfo.publishedDate);
          }
         
            



          // console.log('Book Title:', bookData.items[0].volumeInfo.title);
          // console.log('Author(s):', bookData.items[0].volumeInfo.authors);
          // console.log('Publish Date:', bookData.items[0].volumeInfo.publishedDate);
        },
        error: function(XHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
        }
    });
}

// const ISBNs = [
//   9782806269171 ,
//   1440633908 ,
//   9781945048470 ,
//   9780307417138 
// ];

// ISBNs.forEach(ISBN => {
//     fetch("isbn",ISBN);
// });


fetch("isbn", 9789814561778)
fetch("title", "How to Win Friends and Influence People")
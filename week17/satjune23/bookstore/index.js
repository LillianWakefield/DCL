//Step 1. Describe what the page shoud look like
/*<div>
    <h1>Bookstore</h1>
        <ul class = 'booklist'>
            <li>Books coming soon<li>
        <ul>
        <footer>Copyright 2018</footer>
</div>*/


// <h1>Bookstore</h1>
//$('<h1>', { text: 'Bookstore' })
//$('.react-root').append(element);
//Step 1
//note: h is convention
const books = [
    {title: 'A tale of Two Cities', author:'Charles Dickens'},
    {title: 'War and Peace', author:'Tolstoy'},
    {title: 'The Count', author:'That one french guy'}
]




let h = React.createElement;



let container = h('div', null, [
    h('h1', null, 'Bookstore'), 
    h('ul', {className: 'book-list'}, 
    books.map(book =>
        h('li',null, book.title +' by '+book.author)
    )
    ),
    h('footer', null, 'Copyright 2018'),
    
]);
//element.textContent = 'Bookstore'

//let element = React.createElement('h1');
//Step 2
//document.querySelector('react-root').appendChild(element);

//console.log(element)
ReactDOM.render(
    container, 
    document.querySelector('.react-root'))
    ;
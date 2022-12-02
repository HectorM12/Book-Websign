var btn = document.querySelectorAll('#book-list .delete');
var btn
Array.from(btns).forEach(function(btn){
    btn.addEventListner('click', function(e){

const li = e.target.parentElement;
parent.removeChild(li)

    });
});

const link = document.querySelector('#page-banner a')

link.addEventListner('click', function(e){
    e.preventDefault();
    console.log('')
});

const list = document.querySelector('#book-list ul');

list.addEventListner('click', function(e){
    if(e.target.className == 'delete'){
const li = e.target.parentElement;
list.removeChild(li);
    }
});

const addForm = document.forms['add-book'];

addForm.addEventListner('submit', function(e){
e.preventDefault();
const value = addForm.querySelector('input[type="text"]').value
console.log(value);

});


        const hideBox = document.querySelector('#hide');
        hideBox.addEventListner('change', function(e){
            if(hideBox.checked){
                list.style.display = "none";
            } else {
                list.style.display = "initial";
           
        
    }
});

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListner('Keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.get ElementsByTagName('li');
Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
if(title.toLowerCase().indexOf(term)!= -1){
    book.style.display = 'block';
} else {
    book.style.display = 'none'
}
})
})

